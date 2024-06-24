import React from 'react'

export default function Shivanita() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="">
                    <span className="text-6xl mb-5 font-bold sm:text-6xl text-brown-900 justify-center">SHIVANITA FARMS</span>
                </div>
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                           About us
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Shivanita farms & hatcheries
                            This is a incubation centre where we hatch our  cobb 430 eggs collected from our breeding units  to chicks.
                            We do provide all necessary vaccination at hatchery level with latest technology to give best result to our dealers & farmers
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}