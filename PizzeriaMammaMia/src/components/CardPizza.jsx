import formatCurrency from "../assets/utils/formatCurrency.js"; 
import pizzas from "../data/pizzas.js";

const CardPizza = ({pizza}) =>{
    return (
      <>
        <div class="inline-flex items-center px-3 py-2 backdrop:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">          
          
          <div className="p-5">
            <a href="#">
            <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-800 dark:text-white">
                {pizza.name}</h2>
            </a>
            <a href="#" >
            <img className="w-100 h-20 items-center" 
                src={pizza.img} alt={pizza.name} />
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <span>Ingredientes: 
                <p className="list-unstyled items-start justify-items-center text-xs">                 
                 🍕                                
                  <li key={pizza.id}>{pizza.ingredients.join(", ")}</li>                
                 
                </p>                
              </span>
              <div className="inline-flex items-center px-3 py-2 backdrop:max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
              <button className="bg-white border-gray-500 hover:bg-blue-700 text-black font-bold py-1 px-2 rounded">
                  Ver más 👀
              </button>
              <button className="bg-black border-gray-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              🛒 Añadir 
              </button>
          </div>
            </p>
            {/* <div>$ {formatCurrency({pizza.price})}</div>  */}
            
          </div>                      
        </div>        
      </>      
    )
  }
  export default CardPizza;