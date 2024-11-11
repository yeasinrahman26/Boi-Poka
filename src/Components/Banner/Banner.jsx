import React from 'react';
import bannerImg from './../../assets/books.jpg'

const Banner = () => {
    return (
      <div className="hero bg-base-300 rounded-2xl  min-h-[554px]">
        <div className="flex items-center px-20 gap-5 flex-col flex-grow lg:flex-row-reverse">
          <img src={bannerImg} className="max-w-full rounded-lg shadow-2xl" />
          <div className="space-y-10">
            <h1 className="text-5xl font-bold">
              Books to freshen up your bookshelf
            </h1>
            <button className="btn bg-green-400">View The List</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;