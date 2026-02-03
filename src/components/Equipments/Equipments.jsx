import React from 'react'
import { motion } from "framer-motion";
import { FaDumbbell } from 'react-icons/fa';
import { GiGymBag } from 'react-icons/gi';
import { GrYoga } from 'react-icons/gr';
import { SlideLeft } from '../../utility/animation';

const EquipmentData = [
  {
    id: 1,
    title: "Yoga Equipments",
    desc: "It is a long established fact that a reader readable.",
    icon: <GrYoga />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Muscles Equipments",
    desc: "It is a long established fact that a reader readable.",
    link: "/",
    icon: <FaDumbbell />,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fitness Equipments",
    desc: "It is a long established fact that a reader readable.",
    link: "/",
    icon: <GiGymBag />,
    delay: 0.9,
  },
];

function Equipments() {
  return (
    <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-24">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair'>
                <div className="space-y-4 p-6">
                    <h1 className="text-3xl md:text-4xl font-bold">What we offer you</h1>
                    <p className='text-gray-500'>It is a long established fact that a reader readable.</p>
                </div>
                {
                  EquipmentData.map((item) => {
                    return(
                      <motion.div 
                        variants={SlideLeft(item.delay)}
                        initial="hidden"
                        whileInView="visible"
                        key={item.id}
                      className="space-y-4 p-6 bg-[#fbfbfb] hover:bg-gray-100 rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]]">
                        <div className='text-4xl'>{item.icon}</div>
                        <p className='text-2xl font-semibold'>{item.title}</p>
                        <p className='text-gray-500'>{item.desc}</p>
                      </motion.div>
                    )
                  })
                }
            </div>
        </div>
    </div>
  )
}

export default Equipments

