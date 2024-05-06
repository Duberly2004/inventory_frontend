import { Button } from "@mui/material";
import { products } from "../../data";
import { IProduct } from "../../others/interfaces";
import CardProduct from "./CardProduct";
import { Search } from "lucide-react";

export default function Inventory() {
  return (
    <section>
      <h3>Inventario</h3>
      <div className="mb-5 flex gap-4">
        <input placeholder="Search for name" type="search" className="pl-2 bg-transparent border py-1 rounded-md  border-primary"/>
        <Button variant="contained"><Search /></Button>
        <Button variant="contained">Add Product</Button>
      </div>
      <div className="flex flex-wrap gap-8 justify-center ">
        {products.map((product: IProduct, index: number) => (
          <CardProduct key={index} product={product} />
        ))}
      </div>
    </section>
  );
}
