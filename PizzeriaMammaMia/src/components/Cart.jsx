import { useState } from "react"
import pizzas from '../data/pizzas.js'


function Cart(){
    //simular 3 pizzas de nuestro arreglo
    const initialCart=pizzas.slice(0,6).map((pizza)=>({
        ...pizza,
        quantity:1,
    }))
    
    //declarar un estado
    const [cart, setCart]=useState(initialCart);

    const increaseQuantity= (id) => {
        setCart((prevCart)=>
            prevCart.map((item) =>
                item.id === id ? {...item, quantity: item.quantity+1} : item
            )
        )
    }

    const decreaseQuantity= (id) => {
        setCart((prevCart)=>
            prevCart.map((item) =>
                item.id === id && item.quantity>0 ? {...item, quantity: item.quantity-1} : item
            ).filter((item)=>item.quantity>0)
        )
    }
    const calculateTotal=()=>{
        return cart.reduce((total,item)=> total+item.price*item.quantity,0)
    }

    return (
        <div>
            <h1 className="text-2xl font-semibold text-center mb-8">Carrito de compras</h1>            
            
            {cart.map((item) => (
                <div id="itemCart" key={item.id}>                    
                    <img src={item.img} alt={item.name}
                        className='w-24 h-24 rounded' />                         
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>                       
                        <div className='flex space-x-2'>
                                <button onClick={() => decreaseQuantity(item.id)} className='bg-red-500 text-white px-3 py-1 rounded'>-</button>
                                <button onClick={() => increaseQuantity(item.id)} className='bg-blue-500 text-white px-3 py-1 rounded'>+</button>
                        </div>   
                </div>
            ))}   
                     
            <div>
                <h3>Total: ${calculateTotal()}</h3>
                <button>Pagar</button>
            </div>
        </div>
    )
}
export default Cart;