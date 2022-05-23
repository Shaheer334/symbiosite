import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteUser } from '../redux/CategorySlice';

const UserTable = () => {
    const tableData = useSelector(state => state.reducer.user.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    console.log("showing user table data :", tableData)
    return (
        <>
            <div className='flex flex-col justify-center items-center py-5'>
                <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='py-2 align-middle inline-block min-w-fit sm:px-6 lg:px-8'>
                        <div className='shadow overflow-hidden border-2 border-red-500 sm:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className='bg-red-300'>
                                    <tr>
                                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>Name</th>
                                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>Contact</th>
                                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>Email</th>
                                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>Country</th>                                     
                                        <th scope='col' className='relative py-3 px-6'>
                                            <span className='sr-only bg-gray-100'>Edit</span>
                                        </th>
                                        <th scope='col' className='relative py-3 px-6'>
                                            <span className='sr-only bg-gray-100'>Delete</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-gray-100 divide-y divide-gray-200'>
                                    {tableData.map((userData, index) => (
                                        <tr key={index}>
                                            <td className='whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-600 cursor-pointer transition ease-in-out delay-100 hover:-translate-x 
                                                hover:scale-110 duration-100' onClick={() => navigate('/userdetails', {state: {data: userData, id: index}})}>
                                                {userData.userName}
                                            </td>
                                            <td className='whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-600'>
                                                {userData.userContact}
                                            </td>
                                            <td className='whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-600'>
                                                {userData.email}
                                            </td>
                                            <td className='whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-600'>
                                                {userData.userAddress.country}
                                            </td>
                                            <td className='whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-600 cursor-pointer transition ease-in-out delay-100 hover:-translate-x 
                                                hover:scale-110 duration-100'
                                                onClick={() => navigate('/edituser', { state: { data: userData, id: index } })}>
                                                Edit
                                            </td>
                                            <td className='whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-600 cursor-pointer transition ease-in-out delay-100 hover:-translate-x 
                                                hover:scale-110 duration-100'
                                                onClick={() => dispatch(deleteUser(index))}>
                                                delete
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserTable;
