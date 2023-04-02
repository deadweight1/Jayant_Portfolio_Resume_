import React from 'react';
import CountUp from 'react-countup'
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import {Link} from 'react-scroll'
import resume from '../assets/resume.pdf'

const About = () => {
  const[ref, inView]=useInView(
    {threshold:0.5,}
  );
  return ( 
  <section className='section' id='about'ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        { /*image*/ }
        <motion.div 
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount:0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'> 
        </motion.div>
        { /*text*/ }
        <motion.div
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount:0.3}}
        className='flex-1'>
          <h2 className='h2 text-accent'>About me</h2>
          <h3 className='h3 mb-4'>
            I am a Trader, UI/UX Designer and a Front-end developer with expertise in Figma and ReactJS.
          </h3>
          <p className='mb-6'>
            I am a self-taught Front-end developer with a passion for UI/UX design. I have been coding for 5 years and have been designing for 2 years. I have been trading for 1 year.
            </p> 
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  { inView? <CountUp start={0} end={3} duration={4} /> : null}k+     
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                Hours Of <br/>
                  Trade Analysis
              </div>
            </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  { inView? <CountUp start={0} end={8} duration={4} /> : null}k+      
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Hours Of<br/>
                  designing
              </div>
            </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  { inView? <CountUp start={0} end={11} duration={4} /> : null}k+     
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Hours Of<br/>
                  coding
              </div>
            </div>
        </div>
        <div className='flex gap-x-8 items-center'>
        <Link to='contact' activeClass='active' smooth={true} spy={true} className='cursor-pointer '>
          <button className='btn btn-lg'>Contact Me</button>
        </Link>
          <a href={resume} target='_blank' className='text-gradient btn-link'>
            View Resume
          </a>
        </div>
      </motion.div>
    </div>
    </div>
  </section>

  );
};


export default About;
