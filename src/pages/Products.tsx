import { Search } from "lucide-react";
import { useQuery } from "react-query";
import { allProducts } from "../services/admin.service";
import Loading from "../components/Loading";
import Error500 from "./Error500";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  IProductDetail } from "../others/interfaces";
import { Avatar, CardActions, CardHeader } from "@mui/material";
import start from '../assets/start.png'
import { toast } from "sonner";
export default function Products() {
  const fetchData = async () => await allProducts()
  const { data, isLoading, error } = useQuery({ queryKey: ["products"], queryFn: fetchData })
  if (isLoading) return <Loading />
  if (error) return <Error500 />
  return (
    <section>
      <div className="ml-32 mb-5 flex gap-4">
        <input placeholder="Search for name" type="search" className="pl-2 bg-transparent border py-1 rounded-md  border-primary" />
        <Button variant="contained" color="success"><Search /></Button>
      </div>
      <div className="flex flex-wrap gap-8 justify-center ">
        {data.map((product: IProductDetail, index: number) => (
          <Card key={index} sx={{ maxWidth: 330, background: "transparent" }}>
            <CardHeader
              avatar={
                <Avatar src={product?.category?.user?.url_avatar} aria-label="user Avatar">
                  R
                </Avatar>
              }
              title={product.category.user.name}
              subheader="Mayo 09, 2024"
            />
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
                  <p className='text-white rounded-lg px-2 text-sm' style={{ backgroundColor: product.category.color }}>{product.category.name}</p>
                </div>
              </div>
            </CardContent>
            <CardActions>
              <Button onClick={() => toast.success('Tu pedido llega en 2 minutos')} variant="outlined" color="warning">buy now</Button>
              <div className="flex">
                <img className="w-6" src={start} alt="start" />
                <img className="w-6" src={start} alt="start" />
                <img className="w-6" src={start} alt="start" />
                <img className="w-6" src={start} alt="start" />
                <img className="w-6" src={start} alt="start" />
              </div>
            </CardActions>
          </Card>
        ))}
      </div>
    </section>
  );
}
