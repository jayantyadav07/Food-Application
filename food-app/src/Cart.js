import React from 'react'
import ItemList from './ItemList'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from './cartSlice'

const Cart = () => {
    const dispatch=useDispatch()
    const handleClearcart=(()=>{
      dispatch(clearCart())
    })
    const itemcard=useSelector((store)=>store.cart.items)
  return (
    <div className='text-center m-4 p-4'>
      <h1 className=' font-bold text-lg '>cart</h1>
      <button onClick={handleClearcart} className='bg-black m-1 p-1 text-white rounded-lg'>Clear Cart</button>
      {itemcard.length===0 && <h1>cart is empty.Please add Items to the cart</h1>}
      <div className='w-6/12 m-auto'><ItemList items={itemcard}/></div>
    </div>
  )
}

export default Cart
