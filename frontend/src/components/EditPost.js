/**
 * Компонент Редактирования поста
 */

import React, { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { content } = location.state;

  const [form, setForm] = useState({ id: +id, content: content });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };

  const hendleEditPost = (evt) => {
    evt.preventDefault();

    fetch(process.env.REACT_APP_POSTS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(form),
    });

    navigate(-1);
  };

  return (
    <div className='bg-light p-1'>
      <div className='d-flex justify-content-between p-1'>
        <span className='fw-bold'>Редактировать публикацию</span>
        <Link
          to={`/posts/${id}`}
          className='btn-close'
          aria-label='Закрыть'></Link>
      </div>

      <form onSubmit={hendleEditPost} className='text-end'>
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

        <button className='btn btn-primary'>Сохранить</button>
      </form>
    </div>
  );
}

export default EditPost;
