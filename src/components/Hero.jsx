import React from 'react'
import { logo } from '../assets'

function Hero() {
    return (
        <header className='w-full flex justify-center items-center flex-col'>

            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
                <button 
                type='button'
                onClick={() => { window.open('#') }}
                className='black_btn'>GitHub</button>
            </nav>

            <h1 className="head_text">
                Summerize Artcles with <br className='max-md:hidden' />
                <span className='orange_gradient'>OpenAI - GPT4</span>
            </h1>

            <h2 className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque ligula eget sapien facilisis, sagittis dignissim mauris laoreet.
            </h2>

        </header>
    )
}

export default Hero