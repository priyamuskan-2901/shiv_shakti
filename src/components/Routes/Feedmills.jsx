import React from 'react';

export default function Feedmills() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-black
            -600 md:px-12 xl:px-6">
                <div id="about">
                    <span className="text-4xl mb-5 font-bold sm:text-5xl text-brown-900">SHIV SHAKTI FEED MILLS</span>
                </div>
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="py-8 md:w-5/12 lg:w-5/12">
                        <img src="/assets/Home/SI-05.png" alt="Shiv Shakti Feed Mills" />
                    </div>
                    <div className="md:w-7/12 lg:w-6/12">
                        <h2 className="text-2xl text-black
                        -900 font-bold md:text-4xl mb-6">About Us</h2>
                        <p className="mt-6 text-black
                        -600">
                            Shiv Shakti Feed Mills is a leading provider of high-quality mash feed for layers, breeders, and broilers. Established with a commitment to excellence, we have been serving the poultry industry with dedication and expertise. Our mission is to ensure the health and productivity of poultry through our scientifically formulated feed products.
                        </p>
                        <p className="mt-4 text-black
                        -600">
                            Our state-of-the-art manufacturing facilities and stringent quality control measures ensure that each feed batch meets the highest standards. Whether you are raising chicks, growers, or breeders, Shiv Shakti Feed Mills offers a comprehensive range of feeds tailored to meet the nutritional needs of your poultry at every stage of their growth.
                        </p>
                    </div>
                </div>
                <div className="mt-12">
                    <h2 className="text-2xl text-black
                    -900 font-bold md:text-4xl mb-6 text-center">
                        Our Products
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse border border-black
                        -200">
                            <thead>
                                <tr className="bg-brown-900 text-white">
                                    <th className="border border-brown-900
                                    -300 px-4 py-2">Feed Type</th>
                                    <th className="border border-brown-900
                                    -300 px-4 py-2">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-brown-900
                                    -300 px-4 py-2">Breeder Mash Feeds</td>
                                    <td className="border border-brown-900
                                    -300 px-4 py-2">
                                        <ul className="list-disc list-inside">
                                            <li>Grower</li>
                                            <li>Developer</li>
                                            <li>Pre. Breeder</li>
                                            <li>Breeder 1</li>
                                            <li>Breeder 2</li>
                                            <li>Male feed (29-66 Weeks)</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-brown-900
                                    -300 px-4 py-2">Broiler Mash Feeds</td>
                                    <td className="border border-brown-900
                                    -300 px-4 py-2">
                                        <ul className="list-disc list-inside">
                                            <li>Pre. Starter</li>
                                            <li>Starter</li>
                                            <li>Developer</li>
                                            <li>Finisher</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-brown-900
                                    -300 px-4 py-2">Layer Mash Feeds</td>
                                    <td className="border border-brown-900
                                    -300 px-4 py-2">
                                        <ul className="list-disc list-inside">
                                            <li>Layer chick</li>
                                            <li>Layer grower</li>
                                            <li>Pre Layer</li>
                                            <li>Layer phase 1</li>
                                            <li>Layer phase 2</li>
                                            <li>Layer phase 3</li>
                                            <li>Layer phase 4</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-black
                    -600 text-center">
                        Note: All listed items are available in packs of 50 kgs.
                    </p>
                </div>
            </div>
        </div>
    );
}
