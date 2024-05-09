import { Button } from "@mui/material";
import { ILProduct } from "../../others/interfaces";
import CardProduct from "./CardProduct";
import { Search } from "lucide-react";
import { DrawerComponent } from "../../components/OpenComponents";
import React from "react";
import ProductForm from "./ProductForm";
import { listProducts } from "../../services/admin.service";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import Error500 from "../../pages/Error500";

export default function Inventory() {
  const [open,setOpen] = React.useState(false)
  const [productEdit,setProductEdit] = React.useState<ILProduct>()
  React.useEffect(()=>{
    if(productEdit){
      setOpen(true)
    }
  },[productEdit])
  const fetchData = async () => await listProducts()
  const { data, isLoading, error } = useQuery({ queryKey: ["products"], queryFn: fetchData })
  if (isLoading) return <Loading />
  if (error) return <Error500 />
  return (
    <section>
      <h3>Inventario</h3>
      <div className="mb-5 flex gap-4">
        <input placeholder="Search for name" type="search" className="pl-2 bg-transparent border py-1 rounded-md  border-primary"/>
        <Button variant="contained" color="success"><Search /></Button>
        <DrawerComponent
        open={open}
        setOpen={setOpen}
        children={<ProductForm product={productEdit?productEdit:undefined} setOpen={setOpen}/>}
        element={<Button color="success" onClick={()=>{
          setProductEdit(undefined)
          setOpen(true)}} variant="contained">Add Product</Button>}
        />
      </div>
      <div className="flex flex-wrap gap-8 justify-center ">
        {data.map((product:ILProduct , index: number) => (
          <CardProduct setOpen={setOpen} setProductEdit={setProductEdit} key={index} product={product} />
        ))}
      </div>
    </section>
  );
}
