import React from 'react';
import { Link } from 'react-router-dom'

/* Agradecimientos a mi tutor por este componente, su funcion es ayudar al usuario si escribe mal un path */
export const PageNotFound = () => {

  return ( 
  
  <div className='container center-block'>
      <h1 className=''>ERROR 404: Page not found</h1>
     
        <button
          className="btn bg-success text-light">
              <Link className="text-light" to='/'>
              Return Home
              </Link>
        </button>
        
  </div>
  )
};
