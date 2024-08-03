import { Input } from '@/components/ui/input'
import React from 'react'
import { formatCardNumber } from '../../actions/formatCardNumber'

function Checkout() {
  return (
    <section className='flex flex-col w-96'>
   <label className="text-white">Card Number</label>
<input 
    type="text" 
    placeholder="0000 0000 0000 0000" 
    className="w-full card-number-input" 
    oninput={formatCardNumber(event)}
/>


        <label className='text-white'>Name on Card</label>
        <Input type="text" placeholder="John Smith" className="w-full" />

        <label className='text-white'>Expiry Date</label>
        <Input type="text" placeholder="MM/YY" className="w-full" />

        <label className='text-white'>CVC</label>
        <Input type="text" placeholder="000" className="w-full" />

        <button className='w-full bg-white text-black py-2 rounded-xl mt-10'>Confirm</button>


    </section>
  )
}

export default Checkout