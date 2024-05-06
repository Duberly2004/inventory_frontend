import { ISumary } from '../../others/interfaces'
export default function SummaryCard({ sumary }: { sumary: ISumary }) {
  return (
    <div className='flex flex-row border rounded-xl border-gray-600 py-4 justify-evenly px-6 min-w-80'>
      <div className='flex flex-col'>
        <h5>{sumary.title}</h5>
        <h4 className='text-2xl'>$ {sumary.amount}</h4>
        <p className='text-sm'>{sumary.description}</p>
      </div>
        {sumary.icon}
    </div>
  )
}
