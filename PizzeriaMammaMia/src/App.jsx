import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home'; 
import Footer from './components/Footer'; 
/* 
import LoginPage from './components/LoginPAge';  
import RegisterPage from './components/RegisterPage'; 
*/ 
import Cart from './components/Cart';

function App(){
     
  return (    
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className='flex-grow'>
        <Home />
        {/* <RegisterPage /> */}
        {/* <LoginPage />  */}
        <Cart />
      </main>
      <Footer />     
    </div>       
  )
}
  

export default App;