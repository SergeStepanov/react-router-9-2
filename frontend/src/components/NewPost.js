/**
 * Компонент Создания нового поста
 */

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NewPost() {
  const [form, setForm] = useState({ id: 0, content: '' });
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };

  const hendleSubmit = (evt) => {
    evt.preventDefault();
  
    fetch(process.env.REACT_APP_POSTS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(form),
    });

    navigate('/', {replace: true})
  };
  
  return (
    <div className='bg-light p-2 text-end'>
      <Link to={'/'} className='btn-close' aria-label='Закрыть'></Link>
      <form onSubmit={hendleSubmit}>
        <input
          className='w-100 my-1'
          type='text'
          name='content'
          placeholder='Введите текст...'
          autoFocus
          required
          value={form.content}
          onChange={handleChange}
        />
        <button className='btn btn-primary'>Опубликовать</button>
      </form>
    </div>
  );
}

export default NewPost;
