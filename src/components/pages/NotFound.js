import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h1 className='display-4'>
        <span className='text-danger'>4😵4</span> Page Not Found
      </h1>
      <p className='lead'>Sorry, that page does not exist...</p>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <h3 className='text-info'>Go To Home 🙂</h3>
      </Link>
    </div>
  );
};
