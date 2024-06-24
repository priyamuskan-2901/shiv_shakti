import React from 'react';
import Table from '../tables/Table';

export default function ShivShaktiHatcheries() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div id="about" className="">
                    <span className="text-4xl mb-5 font-bold sm:text-5xl text-brown-900 justify-center">SHIV SHAKTI HATCHERIES</span>
                </div>
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="py-8 md:w-5/12 lg:w-5/12">
                        <img
                            src="/assets/Home/SI-01.png"
                            alt="Shiv Shakti Hatcheries"
                        />
                    </div>
                    <div className="md:w-7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Breeding Excellence Since 1998
                        </h2>
                        <p className="mt-6 text-0.5xl text-black">
                            Shiv Shakti Hatcheries, founded by Shiv Kumar Singh in 1998, started its journey with broiler chicken farming. Over the years, it has grown to establish its own breeding unit in 2018, operating under the same trusted name.
                        </p>
                        <p className="mt-4 text-0.5xl text-black">
                            Specializing in the production of COBB 430 broiler eggs, sourced from Vencobb parent birds provided by Venkys India, Shiv Shakti Hatcheries ensures high standards of quality and consistency in poultry breeding. This commitment has made it a reputable name in the industry, known for its dedication to excellence and customer satisfaction.
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
