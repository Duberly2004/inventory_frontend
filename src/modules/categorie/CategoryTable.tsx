import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { PencilLine, Trash } from 'lucide-react';
import { useQuery, useQueryClient } from "react-query"
import { deleteCategory, listCategories } from '../../services/admin.service';
import Error500 from '../../pages/Error500';
import Loading from '../../components/Loading';
import { ILCategory } from '../../others/interfaces';
import { DialogComponent } from '../../components/OpenComponents';
import React from 'react';
import CategoryForm from './CategoryForm';
import { toast } from 'sonner';

export default function CategoryTable() {
  const fetchData = async () => await listCategories()
  const [open, setOpen] = React.useState(false)
  const [categoryEdit, setCategoryEdit] = React.useState<ILCategory>()
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({ queryKey: ["categories"], queryFn: fetchData })
  if (isLoading) return <Loading />
  if (error) return <Error500 />
  const handleDelete = async (category: ILCategory) => {
    const isYes = confirm(`Are you sure you delete the ${category.name} category?`)
    if (isYes) {
      try {
        deleteCategory(category._id)
        toast.success("Successful operation")
      } catch (error) {
        toast.error("An error occurred")
      } finally {
        queryClient.invalidateQueries({ queryKey: "categories" });
      }
    }
  }
  return (
    <TableContainer component={Paper} style={{ height: 315, overflow: "hidden", overflowY: "auto" }}>
      {categoryEdit ?
        <DialogComponent
          element={<span></span>}
          children={<CategoryForm category={categoryEdit} setOpen={setOpen} />}
          open={open}
          setOpen={setOpen}
        />
        : null}
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: ILCategory, index: number) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right" className='flex'><span style={{ backgroundColor: row.color }} className='px-3 py-1 rounded-full'>&nbsp;</span></TableCell>
              <TableCell align="right" style={{ display: "flex",justifyContent:"center" }}>
                <Button onClick={() => handleDelete(row)} size='small'><Trash className='w-5 text-destructive' /></Button>
                <Button size='small' onClick={() => {
                  setCategoryEdit(row)
                  setOpen(true)
                }}><PencilLine className='w-5 text-primary' /></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
