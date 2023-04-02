import React from 'react';
import{} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const services= [
  {
    name: 'Frontend Development',
    Description:'I develop/program the frontend of websites and webpages using HTML, CSS, JAVASCRIPT, REACTJS, TAILWIND and many more',

  },
  {
    name: 'UI/UX DESIGN',
    Description:'I am a UI/UX designer and work on user-friendly designs using softwares like Figma and Adobe XD. I also design Logos, Invites, Banner and Presentation Slides.',

  },
  {
    name: 'Data Structure Algorithm',
    Description:'I am efficient in data structure and algorithm in python and java, which can be used in industry for careful allocation of resources.',

  },
];
const Services = () => {
  return (
  <section className='section' id='services'>
   <div className='container mx-auto'>
   <div
   className='flex flex-col lg:flex-row'>
    {/*sf?*/}
    <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
      <motion.h2
      variants={fadeIn('up',0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount:0.3}}
       className='h2 text-accent mb-6'>
        Tools in my shed
        </motion.h2>
        <motion.h3 
        variants={fadeIn('up',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount:0.5}}
        className='h3 max-w-[455px] mb-16'>
          I have a wide range of tools in my shed. I use the right tool for the right job.
        </motion.h3>
      
    </div>
    {/*Skills*/}
    <motion.div 
    variants={fadeIn('right',0.7)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount:0.7}}
    className='flex-1'>
      {/*Skill List*/}
      <div>
        {services.map((services,index)=>
        {
          const{name, Description}=services
          return(
          <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
            <div className='max-w-[476px]'>
              <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                {name}
              </h4>
              <p>{Description}</p>
              <div>
             
              </div>
            </div>
          </div>
          );
            
        })}
      </div>
    </motion.div>
   </div>
   </div>
  </section>
  );
};

export default Services;
