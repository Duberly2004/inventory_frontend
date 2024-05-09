import SaleTable from './SaleTable'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Sale() {
  const navigateTo = useNavigate()
    return (
    <div>
        <h2>My Sales</h2>
        <div className='flex justify-end'><Button variant='contained' color='success' onClick={()=>navigateTo('/admin/sales/new')}>New Sale</Button></div>
        <hr className='my-6 border-none'/>
      <SaleTable/>
    </div>
  )
}
