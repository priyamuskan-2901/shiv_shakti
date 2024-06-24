import React from 'react';

export default function Enterprises() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div id="about" className="">
                    <span className="text-4xl mb-5 font-bold sm:text-5xl text-brown-900 justify-center">SHIV SHAKTI ENTERPRISES</span>
                </div>
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="py-8 md:w-5/12 lg:w-5/12">
                        <img
                            src="/assets/Home/SI-04.png"
                            alt="Shiv Shakti Enterprises"
                        />
                    </div>
                    <div className="md:w-7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Corrugated Box Manufacturing Excellence
                        </h2>
                        <p className="mt-6 text-black">
                            Shiv Shakti Enterprises, founded in 2014 under the direction of Chandan Kumar Singh, specializes in manufacturing chicks boxes, egg boxes, and other packaging boxes tailored to client specifications.
                        </p>
                        <p className="mt-4 text-black">
                            The unit leverages its expertise to deliver high-quality corrugated boxes, ensuring durable and effective packaging solutions for various agricultural and industrial needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
