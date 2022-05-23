import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { deleteCategory } from '../redux/CategorySlice'

const CategoryTable = () => {
    const categoryData = useSelector(state => state.reducer.category.category)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    console.log("Category Table state Data :", categoryData)
    return (
        <>
            <div className='flex flex-col justify-center items-center py-5'>
                <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='py-2 align-middle inline-block min-w-fit sm:px-6 lg:px-8'>
                        <div className='shadow overflow-hidden border-2 border-red-500 sm:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className='bg-red-300'>
                                    <tr>
                                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>Category Name</th>
                                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>Category Date</th>
                                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>Category Time</th>
                                        <th scope='col' className='relative py-3 px-6'>
                                            <span className='sr-only bg-gray-100'>Edit</span>
                                        </th>
                                        <th scope='col' className='relative py-3 px-6'>
                                            <span className='sr-only bg-gray-100'>Delete</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-gray-100 divide-y divide-gray-200'>
                                    {categoryData.map((catData, index) => (
                                        <tr key={index}>
                                            <td className='whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-600'>
                                                {catData.categoryName}
                                            </td>
                                            <td className='whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-600'>
                                                {catData.categoryDate}
                                            </td>
                                            <td className='whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-600'>
                                                {catData.categoryTime}
                                            </td>
                                            <td className='whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-600 cursor-pointer transition ease-in-out delay-100 hover:-translate-x 
                                                hover:scale-110 duration-100'
                                                onClick={() => navigate('/editcategory', { state:{ data: catData, id: index } })}>
                                                Edit
                                            </td>
                                            <td className='whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-600 cursor-pointer transition ease-in-out delay-100 hover:-translate-x 
                                                hover:scale-110 duration-100'
                                                onClick={() => dispatch(deleteCategory(index)) }>
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
    )
}

export default CategoryTable
