import Banner from './components/Banner/Banner'
import Equipments from './components/Equipments/Equipments'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

import { BannerData } from './bannerdata'
import { Banner2Data } from './bannerdata'

import TabComp from './components/Tab/TabComp'
import Reviews from './components/Reviews/Reviews'

function App() {
  

  return (
    <div className='scroll-smooth w-full'>
      <Navbar/>
      <Hero/>
      <Equipments/>
      { 
        BannerData.map ((banner, index) => {
          return(
            <Banner key={index} {...banner}/> /* spread operator used */
          )
        })
      }
      <TabComp/>
      { 
        Banner2Data.map ((banner, index) => {
          return(
            <Banner key={index} image={banner.image} title={banner.title} subtitle={banner.subtitle} link={banner.link}/>
          )
        })
      }
      <Reviews/>
    </div>
  )
}

export default App
