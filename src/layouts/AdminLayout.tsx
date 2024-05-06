import { ArrowRightLeft, Gauge, Home, LogOut, PackageSearch, Wrench } from 'lucide-react';
import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useDispatch } from 'react-redux';
import { logout } from '../store/auth';
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
      <Sidebar backgroundColor="black" toggled collapsed={open}>
        <div className='flex my-4 flex-col justify-center text-center'>
          <img className='w-24 m-auto' src={logo} alt="Inventory Image" />
          <p>INVENTORY</p>
          </div>
        <Menu>
          <MenuItemC path='/admin' icon={<Gauge />} text='Dashboard' />
          <MenuItemC path='/admin/inventory' icon={<PackageSearch />} text='Inventory' />
          <MenuItemC path='/admin/settings' icon={<Wrench />} text='Settings' />
          <MenuItemC path='/' icon={<Home />} text='Home' />
          <MenuItem onClick={()=>dispath(logout())} style={{ color: "white", backgroundColor: "black" }} icon={<LogOut/>}>Logout</MenuItem>
        
        </Menu>
      </Sidebar>

      <main className="flex-1 p-4 relative">
        <button
          className=' z-50 top-52 -ml-10 absolute bg-white p-2 rounded-lg'
          onClick={() => setOpen(!open)}
        >
          <ArrowRightLeft className="text-black cursor-pointer" />
        </button>
        <Outlet/>
      </main>
    </section>
  );
}
