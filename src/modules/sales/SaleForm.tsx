import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TableFooter } from '@mui/material'
import React from 'react'
import SelectProduct from '../../components/selects/SelectProduct'
import {  X } from 'lucide-react';
import { ILProduct } from '../../others/interfaces';
import { toast } from 'sonner';

interface Row {
  id:number
  clientName: string
  productName: string
  quantityOfProducts: number
  productPrice: number
  categoryName:string
  subTotalPrice:number
}


export default function SaleForm() {
    const [total,setTotal] = React.useState<number>(0)
    const [quantity,setQuantity] = React.useState<string>()
    const [disabled,setDisabled] = React.useState<boolean>(true)
    const [client,setClient] = React.useState<string>()
    const [rows,setRows] = React.useState<Row[]>([])
    const [product,setProduct] = React.useState<ILProduct>()
    const onAdd=()=>{
      if(product===undefined || quantity === undefined || client === undefined ){
        toast.error('Fields are required')
      }else{
        setRows([...rows,{
          id:rows.length+1,
          clientName:client,
          productName:product.name,
          quantityOfProducts:parseInt(quantity),
          productPrice:product.price,
          categoryName:product.category.name,
          subTotalPrice:parseInt(quantity) * product.price
        }])
      }
      setDisabled(false)   
    }
    React.useEffect(()=>{
      rows.map((row:Row)=>{
        setTotal(total+row.subTotalPrice)
      })
      if(rows.length === 0) {
        setTotal(0)
        setDisabled(true)
      }
    },[rows])
  return (
    <form className='flex m-5'> 
        <div className='m-auto flex flex-col gap-5 flex- items-center'>
        <h3>New Sale</h3>
        <div className=' flex gap-2'>
          <input defaultValue={client} onChange={(e)=>setClient(e.target.value)} className='border border-primary rounded-md pl-2' type='text' placeholder='Cliente Name'/>
          <SelectProduct setProduct={setProduct}/>
          <input defaultValue={quantity} onChange={(e)=>setQuantity(e.target.value)} className='border border-primary rounded-md pl-2' type='number' min={1} placeholder='Quantity of products'/>

          <button onClick={onAdd} type='button' className='bg-primary w-20 rounded-md'>Add</button>
        </div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Cliente Name</TableCell>
            <TableCell align="right">ProductName</TableCell>
            <TableCell align="right">Quantity of products</TableCell>
            <TableCell align="right">Product price</TableCell>
            <TableCell align="right">Total price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row:Row,index:number) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.clientName}
              </TableCell>
              <TableCell align="center">{row.productName}</TableCell>
              <TableCell align="center">{row.quantityOfProducts}</TableCell>
              <TableCell align="center">{row.productPrice}</TableCell>
              <TableCell align="center">{row.subTotalPrice}</TableCell>
              <TableCell align="center" style={{ display: "flex",justifyContent:"center" }}>
                <Button onClick={()=>{setRows(rows?.filter((item:Row) => item.id !=row.id))}} size='small'><X className='w-5 text-destructive' /></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell>S./ {total}</TableCell>

          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
        <button disabled={disabled} type='submit' className={`${disabled?"bg-gray-100 cursor-not-allowed":"bg-primary animate-bounce"}  w-60 rounded-md py-3`}>Create sale</button>
        </div>
    </form>
  )
}

