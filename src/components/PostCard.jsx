import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  return (
    <>
      <Link to={`/post/${$id}`}>
        <div className={`w-full rounded-xl p-4`}>
          <div className='w-full justify-center mb-4'>
            <img
              src={appwriteService.getFilePreview(featuredImage)}
              alt={title}
              className='rounded-xl h-64 w-72'
            />
          </div>
          <h2 className='text-xl font-bold min-h-14 text-center'>{title}</h2>
          <div className='btn-learnMore mt-8'>
            <button className='border-2 border-blue-800  text-white rounded-sm p-2 bg-blue-800 hover:bg-white hover:text-black'>Learn More</button>
          </div>
        </div>
      </Link>
      
    </>

  );
}

export default PostCard;
