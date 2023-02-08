import React from 'react';
import { Link } from 'react-router-dom';

export default function Page404 () {
  return (
    <div className='bg-light p-1 text-center'>
      <h1>404</h1>
      <p>
        Страница не найдена. Вернитесь на <Link to={'/'}>главнуюю</Link>
      </p>
    </div>
  ); 
}