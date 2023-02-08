/**
 * Компонент Прсмотра поста
 */

import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CardPost from './CardPost';

function ViewPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(process.env.REACT_APP_POSTS_URL + `/${id}`)
      .then((res) => res.json())
      .then((json) => setPost(json))
      .catch((err) => console.log(err));
  }, [id]);

  const removePost = () => {
    fetch(process.env.REACT_APP_POSTS_URL + `/${id}`, { method: 'DELETE' });
    navigate('/', { replace: true });
  };

  const goEditPost = () => {
    navigate(`/posts/${id}/edit`, {state: post});
  };

  return (
    <>
      {post && (
        <div>
          <Link to={'/'} className='btn-close' aria-label='Закрыть'></Link>

          <CardPost post={post} />

          <div className='bg-light p-1 text-end'>
            <button onClick={goEditPost} className='btn btn-primary'>
              Редактировать
            </button>
            <button onClick={removePost} className='btn btn-danger ms-3'>
              Удалить
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ViewPost;
