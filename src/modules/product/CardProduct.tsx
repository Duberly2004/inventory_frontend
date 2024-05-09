import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ILProduct } from '../../others/interfaces';
import { deleteProduct } from '../../services/admin.service';
import { toast } from 'sonner';
import { useQueryClient } from 'react-query';
interface Props{
    product: ILProduct
    setProductEdit:(product:ILProduct)=>void
    setOpen:(product:boolean)=>void
}
export default function CardProduct({product,setProductEdit,setOpen}:Props) {
  const queryClient = useQueryClient()
  const handleDelete = async () => {
    const isYes = confirm(`Are you sure you delete the ${product.name} product?`)
    if (isYes) {
      try {
        await deleteProduct(product._id)
        toast.success("Successful operation")
      } catch (error) {
        toast.error("An error occurred")
      } finally {
        queryClient.invalidateQueries({ queryKey: "products" });
      }
    }
  }
  return (
    <Card sx={{ maxWidth: 330,background:"transparent" }}>
      <CardMedia
        sx={{ height: 250 }}
        image={product.url_image}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <div>
            {product.description}
            <div className='flex flex-wrap w-full gap-1 mt-2'>
              <p className='text-white rounded-lg px-2 text-sm' style={{backgroundColor:product.category.color}}>{product.category.name}</p>
            </div>
        </div>
      </CardContent>
      <CardActions>
        <Button onClick={()=>handleDelete()} size="small" sx={{color:"red"}}>delete</Button>
        <Button onClick={()=>{
          setOpen(true)
          setProductEdit(product)
        }} size="small">Edit</Button>
        <Button variant='outlined' color='success' size="small">{product.status}</Button>
      </CardActions>
    </Card>
  );
}
