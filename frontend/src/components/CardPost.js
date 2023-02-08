/**
 * Компонент отображения поста на главной странице
 */

import React from 'react';
import moment from 'moment/moment';
import logo from '../icons850.png';


function CardPost({ post }) {
  const { id, content, created } = post;
  moment.locale();

  return (
    <div
      className='bg-light mb-1 p-2 border border-warning text-body'
      id={id}>
      <div>
        <img src={logo} alt={post.id} className='d-inline-block' />
        <div className='ms-3 d-inline-block'>
          <h4>Autor Name</h4>
          <p>
            Основатель группы - {moment(created).startOf('minute').fromNow()}
          </p>
        </div>
      </div>
      <p className='mt-3 fs-4'>{content}</p>
    </div>
  );
}

export default CardPost;
