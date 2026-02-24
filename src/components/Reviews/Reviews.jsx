import React from 'react'
import { ReviewData } from '../../mockData/data'
import Slider from 'react-slick'

export default function Reviews() {
  const setting = {
    dots : true,
    arrow : false,
    infinite : true,
    speed : 500,
    slideToScroll : 1,

    autoplaySpeed: 2000,
    cssEase : "linear",
    pauseOnHover: true,
    pauseOnFocus : true,
    responsive:[
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slideToScroll : 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slideToScroll : 1,
          initialSlide : 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slideToScroll : 1,
          
        },
      }
    ]
  }
  return (
    <div className='py-14 mb-10'>
      <div className='container'>
        {/* header section */}
        <div className='text-left mb-10 max-w-125 space-y-2 mr-auto'>
          <h1 className='text-4xl font-bold'>What Are The Costumer Saying About Us</h1>
        </div>

        {/* Review cards */}
        <div>
          <Slider {...setting}></Slider>
        </div>
      </div>
    </div>
  )
}
