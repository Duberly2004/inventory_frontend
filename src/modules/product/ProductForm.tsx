import React from 'react'
import { useForm } from 'react-hook-form'
import { ILProduct, IProduct } from '../../others/interfaces'

import { Button, FormControl, Input, InputLabel } from '@mui/material'
import SelectCategory from '../../components/selects/SelectCategory'
import { toast } from 'sonner'
import { createProduct, updateProduct } from '../../services/admin.service'
import { useQueryClient } from 'react-query'
interface Props {
  setOpen: (value: boolean) => void
  product?: ILProduct
}

export default function ProductForm({ setOpen, product }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<IProduct>()
  const [loading, setLoading] = React.useState(false)
  const [categoryId, setCategoryId] = React.useState<string>("")
  const [imgUrl, setImgUrl] = React.useState<string>("")
  const queryClient = useQueryClient()
  const onSubmit = async (values: IProduct) => {
    setLoading(true)
    if (!categoryId) {
      toast.error("Select category")
      setLoading(false)
    } else {
      try {
        if(product){
          await updateProduct(product._id,{
            ...values,
            price: parseInt(values.price.toString()),
            stock: parseInt(values.stock.toString()),
            category_id: categoryId
          })
        }else{
          await createProduct({
            ...values,
            price: parseInt(values.price.toString()),
            stock: parseInt(values.stock.toString()),
            category_id: categoryId
          })
        }
        toast.success('operation successfully completedy')
        setOpen(false)
      } catch (error) {
        toast.error("An error occurred")
      } finally {
        setLoading(false)
        queryClient.invalidateQueries({ queryKey: "products" });
      }
    }
  }
  React.useEffect(()=>{
    if(product?.url_image){
      setImgUrl(product.url_image)
    }
  },[product?.url_image])
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col px-5 pb-10 pt-3 rounded-xl'>
      <div className='flex justify-center flex-col  gap-4'>
        {imgUrl?
        <img className='w-32 m-auto rounded-lg' src={imgUrl} alt="img" />
        :null}
        <FormControl>
          <InputLabel>ImageUrl</InputLabel>
          <Input
          defaultValue={product?.url_image}
            type='url'
            {...register('url_image', { required: true })}
            onChange={(e)=>setImgUrl(e.target.value)}
            />
          {errors.url_image && <p className='text-destructive'>Url is required</p>}
        </FormControl>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
          defaultValue={product?.name}
            type='text'
            {...register('name', { required: true })}
          />
          {errors.name && <p className='text-destructive'>Name is required</p>}
        </FormControl>
        <FormControl>
          <textarea
          defaultValue={product?.description}
            rows={4}
            className='border border-white p-1 rounded-md'
            placeholder='description'
            {...register('description', { required: true })}
          />
          {errors.description && <p className='text-destructive'>Description is required</p>}
        </FormControl>
        <div className='flex flex-col'>
          <label>Price</label>
          <input
          defaultValue={product?.price.toString()}
            className='mt-4 py-2 pl-1'
            min="0" step="0.01"
            type='number'
            {...register('price', { required: true })}
          />
          {errors.price && <p className='text-destructive'>Price is required</p>}
        </div>
        <SelectCategory defautlValue={product?.category._id} setValue={setCategoryId} value={categoryId} />
        <FormControl>
          <InputLabel>Stock</InputLabel>
          <Input
          defaultValue={product?.stock.toString()}
            type='number'
            {...register('stock', { required: true })}
          />
          {errors.stock && <p className='text-destructive'>Stock is required</p>}
        </FormControl>
        <div className='my-2 flex justify-between'>
          <Button onClick={() => setOpen(false)} type='button' variant='outlined'>Cancel</Button>
          <Button disabled={loading} type='submit' variant='contained'>{product ? "Update" : "Create"}</Button>
        </div>
      </div>
    </form>
  )
}