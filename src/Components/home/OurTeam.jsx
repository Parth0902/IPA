import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';
import '../../App.css'
const OurTeam = () => {
  return (

    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div class="text-center pb-12">
   
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Check our awesome team members
        </h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center shadow-md">
            <div>
                <img class="object-center object-cover h-auto w-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo1"/>
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                <p class="text-base text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center shadow-md">
            <div>
                <img class="object-center object-cover h-auto w-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo2"/>
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                <p class="text-base text-gray-400 font-normal">Graphic Designer</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center shadow-md">
            <div>
                <img class="object-center object-cover h-auto w-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" alt="photo3"/>
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                <p class="text-base text-gray-400 font-normal">Dev Ops</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center shadow-md">
            <div>
                <img class="object-center object-cover h-auto w-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo4"/>
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                <p class="text-base text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center shadow-md">
            <div>
                <img class="object-center object-cover h-auto w-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo5"/>
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                <p class="text-base text-gray-400 font-normal">Graphic Designer</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center shadow-md">
            <div>
                <img class="object-center object-cover h-auto w-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" alt="photo6"/>
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                <p class="text-base text-gray-400 font-normal">Dev Ops</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default OurTeam