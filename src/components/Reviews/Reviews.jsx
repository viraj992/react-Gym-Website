import React from 'react'
import { ReviewData } from '../../mockData/data'
import Slider from 'react-slick'

export default function Reviews() {
  const setting = {
    dots : true,
    arrow : false,
    infinite : true,
    speed : 500,

    slidesToShow: 3,
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
          <Slider {... setting}>
            {
              ReviewData.map((data) => (
                <div key={data.id} className='my-6'>
                  <div className='flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-primary/10 relative'>
                    {/* upper section */}
                    <div className='flex justify-start items-center gap-5'>
                      <img src={data.img} alt='' className='rounded-full w-16 h-16'/>
                      <div>
                        <p className='text-xl font-bold text-black/80 '>{data.name}</p>
                        <p>{data.name}</p>
                      </div>
                    </div>

                    {/* bottom section */}
                    <div className='py-6 space-y-4 '>
                      <p className='text-sm text-gray-500'>{data.text}</p>
                      <p>⭐⭐⭐⭐⭐</p>
                    </div>
                    
                  </div>
                </div>
              ))
            }
          </Slider>
          
        </div>
      </div>
    </div>
  )
}
