import { useState } from "react";

const RegisterPage = () => {
  //Estados del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const validarInput = (e) => {
    //Prevenimos el comportamiento por defecto
    e.preventDefault()

    //Validación;
    if (!email.trim() || !password.trim() || !confPassword.trim() ){          
        setError(true);        
        return;
    }
    if (password != confPassword){        
        alert("Por favor revise los datos, las contraseñas deben ser iguales"); 
        return;
    }
    if (password.length<6 ){          
      alert("La contraseñas debe ser mayor o igual a 6 caracteres"); 
        return;
      } 
       
  
    // Si el formulario se envía correctamente devolvemos todos nuestros estados al inicial y reseteamos el formulario
    setError(false);
    //guardado de datos de usuarios
    setUsers([...users,{email,password,confPassword}])
    setEmail('');    
    setPassword('');
    setConfPassword(''); 
    e.target.reset();
    alert("Usuario registrado correctamente")
} 
  return (
    <>
      <form onSubmit={validarInput}>
        {error ? <p className="text-sm  text-cyan-500">(*) Todos los campos son obligatorios</p> : null}
        <h2 className="text-lg text-red-500 font-semibold h-10">Registrar Usuario</h2>        
        <div className="form-group">
        <label className="block text-sm/6 font-semibold text-black ">Email   </label>
          <input type="email" name="email" className="form-control" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />          
        </div>        
      <div className="form-group">
        <label className="block text-sm/6 font-semibold text-black ">Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          /> 
      </div>
      <div className="form-group">
        <label className="block text-sm/6 font-semibold text-black show-">Confirmar la contraseña</label>
          <input 
            type="password"
            name="confPassword"
            className="form-control"
            onChange={(e) => setConfPassword(e.target.value)}
            value={confPassword}
          />          
      </div>      
      <div className="mt-2">
      <button type="submit" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ">Enviar</button>
      </div>    
      
    </form>      
    
  </>
  );
};

export default RegisterPage;