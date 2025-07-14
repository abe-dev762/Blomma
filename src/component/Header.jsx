import React from 'react'
import { useState, useEffect } from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import { useSelector, useDispatch } from 'react-redux'
import { toggleStatusTab } from '../stores/CartSlice'


const Header = () => {
const [totalQuantity, setTotalQuantity] = useState(0);
const carts = useSelector(store => store.cart.items);
const dispatch = useDispatch();
useEffect(() => {
    let total = 0;
    carts.forEach(item => total += item.qantity);
    setTotalQuantity(total);
}, [carts])

const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
}

  return (
    <header className='flex justify-between items-center mb-5'>
        <div className='w-full flex justify-between items-center px-2'>
            <div><span className='bg-gray-300/80 ml-2 h-5 w-5 rounded-full px-2 text-emerald-600 cursor-pointer'>B</span></div>
            <div className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative' onClick={handleOpenTabCart}>
        <TiShoppingCart className='w-6'/>
        <span className='absolute top-2/3 right-1/2 bg-red-500 text-white text-sm h-5 w-5 rounded-full flex justify-center items-center'>{totalQuantity}</span>
           </div>
        </div>
    </header>
  )
}

export default Header