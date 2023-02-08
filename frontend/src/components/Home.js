/**
 * Компонент Домашней страницы
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardPost from './CardPost';

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_POSTS_URL)
      .then((res) => res.json())
      .then((json) => setPosts(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <div className='p-1 text-end bg-light'>
          <Link to={'/posts/new'} className='btn btn-primary'>
            Создать пост
          </Link>
        </div>

        <div className='mt-3 bg-light'>
          {posts.length === 0 ? (
            <p className='text-center p-1'>Нет постов</p>
          ) : (
            posts.map((post) => (
              <Link
                to={`/posts/${post.id}`}
                className='text-decoration-none'
                key={post.id}
                id={post.id}>
                {<CardPost post={post} />}
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
}
