import React from 'react'
import { news } from '../../assets/images'

const News = () => {
  return (
    <div className='flex flex-col items-center justify-center text-4xl mt-10'>
      <h1 className='text-3xl md:text-5xl'>News</h1>
        <div className='flex flex-col w-[300px] md:w-1/2 bg-white mt-10 justify-start p-[30px] md:p-[60px] rounded-[10px] font-poppins gap-10 text-base'>
        {news.slice().reverse().map((item, index) => (
          <div className='text-[10px] md:text-base flex flex-row gap-3' key={index}>
            <p className='font-bold'>{item.date}</p>
            <p className='font-light'>{item.title}</p>
          </div>
          ))}
        </div>
    </div>
  )
}

export default News
