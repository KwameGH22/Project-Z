import React from 'react';
import BestGearMob from '../../assets/shared/mobile/image-best-gear.jpg';
import BestGearTab from '../../assets/shared/tablet/image-best-gear.jpg';
import BestGearDesk from '../../assets/shared/desktop/image-best-gear.jpg';

const Tagline = () => {
  return (
    <section className='bestWrapper mx-5 my-5 lg:flex lg:gap-20'>
        <div className='sm:bg-[url("../../assets/shared/mobile/image-best-gear.jpg")] h-[300px] w-full bg-cover bg-center'>
            {/* <img src={BestGearMob} alt="" className='w-[327px] h-[300px] md:hidden' />
            <img src={BestGearTab} alt='' className='md:w-[689px] md:h-[300px] sm:hidden'/> */}
        </div>
        <div className='bestContent'>
            <h2>
                BRINGING YOU THE <span className='bestSpan'>BEST</span> AUDIO GEAR
            </h2>
            <p className='bestPara'>
                Located at the heart of New York City, Audiophile is 
                the premier store for high end headphones, earphones, 
                speakers, and audio accessories. We have a large showroom 
                and luxury demonstration rooms available for you to browse 
                and experience a wide range of our products. Stop by our store 
                to meet some of the fantastic people who make Audiophile the best
                place to buy your portable audio equipment.
            </p>
        </div>
    </section>
  )
}

export default Tagline
