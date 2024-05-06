import { Avatar } from '@mui/material';
import { IRecentSale } from '../../others/interfaces';
import { recentSales } from '../../data';

export function RecentSaleCard({ recentSale }: { recentSale: IRecentSale }) {
  return (
    <div className='flex items-center gap-2 justify-between'>
      <div className='flex items-center gap-2'>
        <Avatar alt="Remy Sharp" src={recentSale.url_image} />
        <div className='flex flex-col'>
          <p>{recentSale.name}</p>
          <p>{recentSale.email}</p>
        </div>
      </div>
      <h3>+${recentSale.amount}</h3>
    </div>
  )
}
export default function RecentSales() {
  return (
    <div className='border border-gray-600 rounded-xl p-4 w-6/12'>
      <h5>Recent Sales</h5>
      <p className='mb-3'>You made 265 sales this month.</p>
      <div className='flex flex-col gap-3'>

        {recentSales.map((recentSale: IRecentSale, index: number) => (
          <RecentSaleCard key={index} recentSale={recentSale} />
        ))}
      </div>
    </div>
  )
}
