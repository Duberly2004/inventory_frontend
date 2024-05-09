import React from 'react'
import {DrawerComponent} from '../../components/OpenComponents'
import CategoryForm from './CategoryForm'
import CategoryTable from './CategoryTable'
import { Button } from '@mui/material'

export default function Category() {
  const [open,setOpen] = React.useState(false)
  return (
    <div>
      <DrawerComponent 
      element={<Button size='small' variant='outlined' onClick={()=>setOpen(true)}>New Category</Button>}
      children={<CategoryForm setOpen={setOpen}/>}
      open={open}
      setOpen={setOpen}
      />
      <br />
      <CategoryTable/>
    </div>
  )
}
