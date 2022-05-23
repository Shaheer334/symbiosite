import React from 'react';
import { useLocation } from 'react-router';

const UserDetails = () => {
    const  {state}  = useLocation()
    const {data, id} = state
    console.log("user data :", data, id)
    return (
        <>
            <div className="flex flex-col py-3 px-6">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow-md sm:rounded-lg">
                            <table className="min-w-full">



                                <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Name
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Contact
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Email
                                        </th>

                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Password
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Address
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {data.userName}
                                        </td>
                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {data.userContact}
                                        </td>

                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {data.email}
                                        </td>
                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {data.password}
                                        </td>
                                        <td className='py-2 px-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"'>
                                            Street: {data.userAddress.street}, City: {data.userAddress.city}, Zip Code: {data.userAddress.zip}, State: {data.userAddress.state}, Country: {data.userAddress.country}
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDetails;