
import { useQuery } from "react-query"
import { listCategories } from '../../services/admin.service';
import Error500 from '../../pages/Error500';
import Loading from '../../components/Loading';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, InputLabel } from '@mui/material'
import { ILCategory } from "../../others/interfaces";
import React from "react";

interface Props {
    setValue:(value:string)=>void
    value:string
    defautlValue?:string

}

export default function SelectCategory({setValue,value,defautlValue}:Props) {
  const fetchData = async () => await listCategories()
  React.useEffect(()=>{
    if(defautlValue){
      setValue(defautlValue)
    }
  },[defautlValue])
  const { data, isLoading, error } = useQuery({ queryKey: ["categories"], queryFn: fetchData })
  if (isLoading) return <Loading />
  if (error) return <Error500 />
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value.toString()}
        label="Category"
        onChange={handleChange}
      >
        {data.map((category:ILCategory,index:number)=>(
            <MenuItem sx={{color:category.color}} key={index} value={category._id}>
                {category.name}
                <div style={{backgroundColor:category.color}} className="ml-2 rounded-full px-3 py-1">&nbsp;</div>
                </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Box>
  );
}
