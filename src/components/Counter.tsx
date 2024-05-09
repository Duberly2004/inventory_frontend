import { Button } from '@mui/material'
import { Minus, Plus } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';

interface Props {
    counter:number
    setCounter:(value:number) => void
}
export default function Counter({ counter, setCounter }: Props) {
    React.useEffect(()=>{
        if(counter<=0){
            toast.error("Invalid amount")
        }
    },[counter])
    return (
      <div >
        <Button onClick={() => setCounter(counter + 1)} size='small' variant='outlined' color='primary'><Plus /></Button>
        <input
          value={counter}
          onChange={(e) => setCounter(Number(e.target.value))}
          className='pl-2 text-xl w-16 text-center'
          min={1}
          type="number"
        />
        <Button onClick={() => setCounter(counter - 1)} size='small' variant='outlined' color='primary'><Minus /></Button>
      </div>
    );
  }
  