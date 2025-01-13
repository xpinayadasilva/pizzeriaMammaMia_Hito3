import Header from "../components/Header.jsx";  
import CardPizza from '../components/CardPizza.jsx';
import pizzas from "../data/pizzas.js";


function Home(){
    return(
        <div>
            <Header />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-center mb-8">Menú de Pizzas</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {pizzas.slice(0, 6).map((pizza) => (
                        <CardPizza key={pizza.id} pizza={pizza} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Home;
