import { useState } from "react";
import formatCurrency from "../assets/utils/formatCurrency.js"; 

const NavBar=()=> {
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar el menú desplegable
  const total=25000;
  const token=true;
  return (    
    <nav className="bg-blach text-white px-4 py-2 flex justify-between items-center relative">
      {/* Logo e ícono de menú */}
      <div className="flex items-center justify-between w-full sm:w-auto">
          <h1 className="text-lg font-bold">Pizzería Mamma Mia!</h1>
            <button className="sm:hidden text-gray-600 hover:text-gray-800"
              onClick={() => setIsOpen(!isOpen)}
            > 🍕 Home </button>
      </div>             
      
      {/* Opciones del menu */}
      <div className={`${isOpen ? "block" : "hidden"
           } absolute top-14 left-0 w-full bg-white sm:relative sm:top-auto sm:left-auto sm:w-auto sm:flex sm:space-x-4 sm:bg-transparent p-4 sm:p-0 z-10`}
            >
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              {/* Botón Home */}
                <button className="flex items-center space-x-1 px-3 py-2 bg-black-200 rounded hover:bg-gray-600">
                 🍕 <span>Home</span>
                </button>
                {/* Condicional: Login/Register o Profile/Logout */}
                  {token ? (
                    <>
                      <button className="flex items-center space-x-1 px-3 py-2 bg-black-200 rounded hover:bg-gray-600">
                      
                        <span>🔐Profile</span>
                      </button>
                      <button className="flex items-center space-x-1 px-3 py-2 bg-black-200 rounded hover:bg-gray-600">
                        <span>🚶Logout</span>
                      </button>
                        </>
                    ) : (
                        <>
                          <button className="flex items-center space-x-1 px-3 py-2 bg-black-200 rounded hover:bg-gray-600">
                            <span>😀Login</span>
                          </button>
                          <button className="flex items-center space-x-1 px-3 py-2 bg-black-200 rounded hover:bg-gray-600">
                            <span>✏️ Register</span>
                          </button>
                        </>
                    )}
                </div>
                {/* Total y Carrito */}
                <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                    🛒
                    <span>
                      <button className="text-teal-400 font-bold px-3 py-2 bg-black-200 rounded hover:bg-gray-600">                        
                        Total: $ {formatCurrency(total)}
                      </button> 
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;