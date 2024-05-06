import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material'
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form'
import { toast } from 'sonner';
import { ILogin } from '../../others/interfaces';
import { useDispatch } from 'react-redux';
import { login } from '../../store/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../others/hooks/useAuth';
export default function LoginForm() {
  const {isAuthenticated,user} = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm<ILogin>()
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const dispatch = useDispatch()
  const navigateTo = useNavigate()

  React.useEffect(()=>{
    if(isAuthenticated && user){
      navigateTo('/admin')
    }
  },[])
  const onSubmit = async (values: ILogin) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`,values)
      dispatch(login({...response.data}))
      navigateTo('/admin')
    } catch (error:any) {
      if(error.response){
        if (error.response.status===404){
          toast.error("Invalid credentials")
        }else{
          toast.error("Ocurrio un error")
        }
      }else{
        toast.error("Error de servidor")
      }
    } finally {
    }
  }
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center items-center px-5 py-10 rounded-xl'>
      <div className='flex flex-col'>
        <h3 className='text-center text-2xl dark:text-white'>Login</h3>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            type='email'
            {...register('email', { required: true })}
          />
        </FormControl>
        {errors.email && <p className='text-sm text-destructive'>Email is required</p>}
        <hr className='my-5 border-none' />
        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input
            {...register('password', { required: true })}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {errors.password && <p className='text-sm text-destructive'>Password is required</p>}
        <hr className='my-5 border-none' />
        <Button type='submit' variant='outlined'>Login</Button>
      </div>

    </form>

  )
}
