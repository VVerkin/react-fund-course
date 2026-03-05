import React from 'react';

const PostItem = () => {
  return (
    <div className="post">
        <div clssName="post__content">
          <strong>1. Javascript</strong>
          <div>
            Javascript - язык програмирования
          </div>
        </div>
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
  );
};

export default PostItem;