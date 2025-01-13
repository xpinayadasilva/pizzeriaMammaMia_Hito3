import React from "react";
import { useState } from "react";


const LoginPage = () => {
   //Estados del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const [error, setError] = useState("");
  const validarInput = (e) => {
    //Prevenimos el comportamiento por defecto
    e.preventDefault()

    //Validación;
    if (!email.trim() || !password.trim()  ){          
        setError(true);        
        return;
    }  
    if (password.length<6 ){          
        alert("La contraseñas debe ser mayor o igual a 6 caracteres"); 
        return;
    }   

    // Si el formulario se envía correctamente devolvemos todos nuestros estados al inicial y reseteamos el formulario
    setError(false);    
    setEmail('');    
    setPassword('');   
    e.target.reset();
    alert("Sesion iniciada correctamente")
  }

  return (
    <>    
    <form onSubmit={validarInput}>      
        {error ? <p className="text-sm  text-cyan-500">(*) Todos los campos son obligatorios</p> : null}
        <h2 className="text-lg text-red-500 font-semibold h-10">Iniciar sesion</h2>       
        
        <div className="form-group">
        <label className="block text-sm/6 font-semibold text-black">Email   </label>
          <input type="email" name="email" className="form-control" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />            
        </div>        
      <div className="form-group">
        <label className="block text-sm/6 font-semibold text-black">Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          /> 
      </div>         
      <div className="mt-2">
      <button type="submit" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 onclick=">Enviar</button>
      </div>  
      
    </form>   
    
    
    </>   
  );
};

export default LoginPage;