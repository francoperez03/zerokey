import React from 'react'
import { FaCheck } from "react-icons/fa";

function Payment() {
  return (
    <div>
                <FaCheck className='text-3xl'/>

        <h5>CVV protegido correctamente</h5>
        <img src="/assets/loading.gif" alt="" className='size-28' />

        <h5>procesando pago</h5>
    </div>
  )
}

export default Payment