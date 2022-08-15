import React from 'react';

import Link from 'next/link' 
import { urlFor } from '../lib/client';

const HeroBanner = ({heroBanner:{smallText ,image , desc ,product ,  buttonText , midText , largeText1 ,largeText2 , discount , saleTime }}) => {
  return (
    <div className="hero-banner-container">
        <div>
            <p className="beats-solo">{smallText}</p>
            <h3>{midText}</h3>
            <img className = 'hero-banner-image' src = {urlFor(image)} alt = 'headphones' />
            <div>
                <Link href = 'product:id'>
                    <button type='button'>{buttonText}</button>
                </Link>
                <div className='desc'>
                    <h5>Description</h5>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner;