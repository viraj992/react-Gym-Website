import Banner from './components/Banner/Banner'
import Equipments from './components/Equipments/Equipments'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

import { BannerData } from './bannerdata'

function App() {
  

  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Equipments/>
      { 
        BannerData.map ((banner, index) => {
          return(
            <Banner key={index} image={banner.image} title={banner.title} subtitle={banner.subtitle} link={banner.link}/>
          )
        })
      }
      
    </div>
  )
}

export default App
