import Banner from '../components/Banner/Banner'
import Equipments from '../components/Equipments/Equipments'
import Hero from '../components/Hero/Hero'

import { BannerData } from '../bannerdata'
import { Banner2Data } from '../bannerdata'

import TabComp from '../components/Tab/TabComp'
import Reviews from '../components/Reviews/Reviews'
import Banner2 from '../components/Banner/Banner2'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div className='overflow-x-hidden scroll-smooth w-full'>
      <Hero/>
      <Equipments/>

      {BannerData.map((banner, index) => {
        return <Banner key={index} {...banner}/>
      })}

      <TabComp/>

      {Banner2Data.map((banner, index) => {
        return (
          <Banner
            key={index}
            image={banner.image}
            title={banner.title}
            subtitle={banner.subtitle}
            link={banner.link}
          />
        )
      })}

      <Reviews/>
      <Banner2/>
      
    </div>
  )
}