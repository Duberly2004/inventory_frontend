import { ArrowRightLeft, BadgeCent, Gauge, Home, LineChart, LogOut, PackageSearch, Wrench } from 'lucide-react';
import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useDispatch } from 'react-redux';
import { logout } from '../store/auth';
import { Toaster } from 'sonner';
interface IMenuItem{
  icon:React.ReactNode
  text:string
  path:string
}
export default function AdminLayout() {
  const [open, setOpen] = React.useState(false);
  const navigateTo = useNavigate()
  const dispath = useDispatch()
  const MenuItemC = (pros: IMenuItem) => <MenuItem onClick={()=>navigateTo(pros.path)} style={{ color: "white", backgroundColor: "black" }} icon={pros.icon}>
      {pros.text}
  </MenuItem>

  return (
    <section className="flex gap-2 h-svh text-white">
      <Toaster richColors/>
      <Sidebar backgroundColor="black" toggled collapsed={open}>
        <div className='flex my-4 flex-col justify-center text-center'>
          <img className='w-16 m-auto' src={logo} alt="Inventory Image" />
          <p>INVENTORY</p>
          <button
          className={`${open?"m-auto mt-3":"ml-52"} top-40 bg-primary p-2 rounded-lg`}
        >
          <ArrowRightLeft onClick={() => setOpen(!open)} className="text-black cursor-pointer" />
        </button>
          </div>
        <Menu>
          <MenuItemC path='/admin' icon={<Gauge className='text-blue-500'/>} text='Dashboard' />
          <MenuItemC path='/admin/sales' icon={<LineChart className='text-primary'/>} text='Sales' />
          <MenuItemC path='/admin/sales/new' icon={<BadgeCent className='text-yellow-500' />} text='New Sales' />
          <MenuItemC path='/admin/inventory' icon={<PackageSearch className='text-green-500'/>} text='Inventory' />
          <MenuItemC path='/admin/settings' icon={<Wrench className='text-pink-500' />} text='Settings' />
          <MenuItemC path='/' icon={<Home className='text-violet-500'/>} text='Home' />
          <MenuItem onClick={()=>dispath(logout())} style={{ color: "white", backgroundColor: "black" }} icon={<LogOut className='text-orange-500'/>}>Logout</MenuItem>
        </Menu>
      </Sidebar>

      <main className="flex-1 p-4 overflow-y-auto z-50">
        <Outlet/>
      </main>
    </section>
  );
}
