import React from 'react';
import Table from '../tables/Table';

export default function Omshiv() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div id="about" className="">
                    <span className="text-4xl mb-5 font-bold sm:text-5xl text-brown-900 justify-center">OM SHIV FARMS</span>
                </div>
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="py-8 md:w-5/12 lg:w-5/12">
                        <img
                            src="public/assets/Home/SI-02.png"
                            alt="Om Shiv Farms"
                        />
                    </div>
                    <div className="md:w-7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Integrated Breeding Excellence Since 2022
                        </h2>
                        <p className="mt-6 text-black">
                            Om Shiv Farms is an integrated breeding unit established in 2022. It is overseen by Kundan Kumar Singh, the younger son of Shiv Kumar Singh, founder of Shiv Shakti Hatcheries.
                        </p>
                        <p className="mt-4 text-black">
                            The farm specializes in the production of COBB 430 hatching eggs sourced from Vencobb parent birds provided by Venkys India. This integrated approach ensures high-quality poultry breeding, benefiting from the expertise and resources of Shiv Shakti Hatcheries.
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
