import { Button, FormControl, Input, InputLabel } from '@mui/material'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner';
import { ICategory, ILCategory } from '../../others/interfaces';
import { createCategory, updateCategory } from '../../services/admin.service';
import React from 'react';
import { useQueryClient } from 'react-query';
interface Props {
  setOpen:(value:boolean)=>void
  category?:ILCategory
}
export default function CategoryForm({setOpen,category}:Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<ICategory>()
  const [loading, setLoading] = React.useState(false)
  const queryClient = useQueryClient();
  const onSubmit = async (values: ICategory) => {
    try {
      setLoading(true)
      if(category){
        await updateCategory(category._id,values)
      }else{
        await createCategory(values)
      }
      toast.success("Successful operation")
      setOpen(false)
    } catch (error: any) {
      if(error && error.response.status==400){
      toast.error(error.response.data.error)
      }else{
        toast.error("An error occurred")
      }
    } finally {
      setLoading(false)
      queryClient.invalidateQueries({ queryKey: "categories" });
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center items-center px-5 py-10 rounded-xl'>
      <div className='flex flex-col'>
        <h3 className='text-xl dark:text-white pb-4'>Create category</h3>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
          defaultValue={category?category.name:""}
            type='text'
            {...register('name', { required: true })}
          />
        </FormControl>
        {errors.name && <p className='text-sm text-destructive'>Name is required</p>}
        <hr className='my-5 border-none' />
        <div className='gap-2 flex justify-center flex-col text-center m-auto'>
          <label htmlFor='color'>Color</label>
          <input
            id='color'
            className='w-10 h-10'
            defaultValue={category?category.color:"#49f6ba"}
            type='color'
            {...register('color', { required: true })}
          />
        </div>
        {errors.color && <p className='text-sm text-destructive'>Color is required</p>}
        <hr className='my-5 border-none' />
        <div className='flex justify-between'>
          <Button onClick={()=>setOpen(false)} type='button' variant='outlined'>Cancel</Button>
          <Button disabled={loading} type='submit' variant='contained'>{category?"Update":"Create"}</Button>
        </div>
      </div>

    </form>

  )
}
