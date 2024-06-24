import React from 'react';

const Table = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-brown-900">
                <thead>
                    <tr className="bg-brown-900 text-white uppercase text-sm leading-normal">
                        <th className="py-3 px-4 text-left">Days</th>
                        <th className="py-3 px-4 text-left">Mortality</th>
                        <th className="py-3 px-4 text-left">Weight (gm)</th>
                        <th className="py-3 px-4 text-left">Feed (gm)</th>
                        <th className="py-3 px-4 text-left">FCR</th>
                    </tr>
                </thead>
                <tbody className="text-black text-sm font-light">
                    <tr className="border-b border-brown-900 hover:bg-gray-100">
                        <td className="py-3 px-4 text-left">7</td>
                        <td className="py-3 px-4 text-left">0.75</td>
                        <td className="py-3 px-4 text-left">195</td>
                        <td className="py-3 px-4 text-left">156</td>
                        <td className="py-3 px-4 text-left">0.80</td>
                    </tr>
                    <tr className="border-b border-brown-900 hover:bg-gray-100">
                        <td className="py-3 px-4 text-left">14</td>
                        <td className="py-3 px-4 text-left">1.25</td>
                        <td className="py-3 px-4 text-left">440</td>
                        <td className="py-3 px-4 text-left">450</td>
                        <td className="py-3 px-4 text-left">1.02</td>
                    </tr>
                    <tr className="border-b border-brown-900 hover:bg-gray-100">
                        <td className="py-3 px-4 text-left">21</td>
                        <td className="py-3 px-4 text-left">1.75</td>
                        <td className="py-3 px-4 text-left">870</td>
                        <td className="py-3 px-4 text-left">1045</td>
                        <td className="py-3 px-4 text-left">1.20</td>
                    </tr>
                    <tr className="border-b border-brown-900 hover:bg-gray-100">
                        <td className="py-3 px-4 text-left">28</td>
                        <td className="py-3 px-4 text-left">2.00</td>
                        <td className="py-3 px-4 text-left">1420</td>
                        <td className="py-3 px-4 text-left">1890</td>
                        <td className="py-3 px-4 text-left">1.33</td>
                    </tr>
                    <tr className="border-b border-brown-900 hover:bg-gray-100">
                        <td className="py-3 px-4 text-left">35</td>
                        <td className="py-3 px-4 text-left">2.75</td>
                        <td className="py-3 px-4 text-left">2020</td>
                        <td className="py-3 px-4 text-left">2930</td>
                        <td className="py-3 px-4 text-left">1.45</td>
                    </tr>
                    <tr className="border-b border-brown-900 hover:bg-gray-100">
                        <td className="py-3 px-4 text-left">42</td>
                        <td className="py-3 px-4 text-left">3.50</td>
                        <td className="py-3 px-4 text-left">2650</td>
                        <td className="py-3 px-4 text-left">4190</td>
                        <td className="py-3 px-4 text-left">1.58</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;