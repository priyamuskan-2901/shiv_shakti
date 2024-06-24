import React from 'react';
import Table from '../tables/Table';

export default function Shivanita() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div id="about" className="">
                    <span className="text-4xl mb-5 font-bold sm:text-5xl text-brown-900 justify-center">SHIVANITA FARMS & HATCHERIES</span>
                </div>
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="py-8 md:w-5/12 lg:w-5/12">
                        <img
                            src="/assets/Home/SI-03.png"
                            alt="Shivanita Farms"
                        />
                    </div>
                    <div className="md:w-7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Incubation Excellence and Vaccination Services
                        </h2>
                        <p className=" mt-6 text-1.4xl text-black">
                            Shivanita Farms & Hatcheries is an incubation center specializing in hatching COBB 430 eggs collected from our breeding units into healthy chicks.
                        </p>
                        <p className="mt-4 text-1.4xl text-black">
                            We prioritize quality by providing all necessary vaccinations using the latest technology at the hatchery level. This ensures the best results for our dealers and farmers, supporting them with robust and healthy poultry stocks.
                        </p>
                    </div>
                </div>
            </div>
            <div className='p-8'>
                <h1 className="text-center text-2xl font-bold my-4">VenCobb 430 broiler performance chart</h1>
              <Table/>
            </div>
        </div>
    );
}
