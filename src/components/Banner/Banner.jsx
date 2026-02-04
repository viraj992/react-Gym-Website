import React from 'react'

function Banner({image,title, subtitle, link}) {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14'>
           {/* Banner Image Section */}
           <div>
            <img src={image}/>
           </div>
           {/* Banner Text Section */}

        </div>
    </div>
  )
}

export default Banner