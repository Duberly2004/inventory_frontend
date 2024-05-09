
import { useQuery } from "react-query"
import { listProducts } from '../../services/admin.service';
import Error500 from '../../pages/Error500';
import Loading from '../../components/Loading';
import { ILProduct } from "../../others/interfaces";
import React, { ChangeEvent } from "react";

interface Props {
  setProduct: (value: ILProduct) => void
}

export default function SelectProduct({ setProduct }: Props) {
  const [value,setValue] = React.useState<string>()
  const fetchData = async () => await listProducts()
  const { data, isLoading, error } = useQuery({ queryKey: ["products"], queryFn: fetchData })
  if (isLoading) return <Loading />
  if (error) return <Error500 />
  const handleChange = (event:ChangeEvent<HTMLSelectElement>) =>{
    setValue(event.target.value as string)
    setProduct(JSON.parse(event.target.value as string))
    //Despues se usará
    if(false){
      console.log(value)
    }
  }
  return (
    <select
      className="border border-primary bg-transparent py-2 rounded-md"
      onChange={handleChange}
      name="select">
      {data.map((product: ILProduct, index: number) => (
        <option className="bg-gray-800 py-2" key={index} value={JSON.stringify(product)}>{product.name}</option>
      ))}
    </select>
  );
}
