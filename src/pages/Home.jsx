import React from 'react'
import ProductCart from '../component/ProductCart'
import { products } from '../product'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import bgImage from '../assets/bg-img.jpg'

const Home = () => {
    const [bar, setBar] = useState(() => ({isHidden: true}));
    const toggleHidden = () => {
        setBar(prevBar => ({isHidden: !prevBar.isHidden}));
    }
    const visible = { visibility: bar.isHidden ? 'hidden' : 'visible'};

  return (
    <div className={`container overflow-hidden md:mx-auto py-4 md:gap-5
    ${bar.isHidden ? 'h-[600px]' : 'h-full'}`}>
        <div className='pr-2'>
            <h1 className='font-semibold my-1'>Blomma</h1>
            <p className='text-sm mb-2'>Plant paradise nursery for you</p>
            <button className='bg-emerald-300/70 px-1 py-1 my-2 rounded-md text-white cursor-pointer hover:bg-emerald-400 hover:scale-105 transition-all'
            onClick={toggleHidden}>
                Get Started
            </button>
        </div>
        <div className='leading-tight text-sm py-2 px-4 ml-4 sm:mt-3'>
            <p>At <span className='text-emerald-600 text-decoration-line: underline'>Blomma</span>, we believe that plants make life better — greener homes, cleaner air, calmer minds. That’s why we’ve made it our mission to bring beautiful, healthy plants right to your doorstep.</p><br/>
            <p>More than just a shop, we’re your green companion. With expert care guides, personalized recommendations, and friendly support, we make plant care easy, enjoyable, and rewarding.<br/>

          Welcome to <span className='text-emerald-600 text-decoration-line: underline'>Blomma</span> — where every plant has a story, and every home deserves a little more green.</p>
        </div>
        <div style={visible}>
            <h2 className='text-3xl my-5'>List Product</h2>
            <div className='grid grid-cols-2 gap-5'>
                {products.map((product, key) =>
                <ProductCart key={key} data={product}/>
                )}
            </div>
        </div>
    </div>
  )
}

export default Home