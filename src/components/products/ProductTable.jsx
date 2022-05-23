import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteProduct } from '../redux/CategorySlice';

const ProductTable = () => {
    const productData = useSelector(state => state.reducer.product.product)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    console.log("showing prod data :", productData)
    return (
        <>
            <div className='flex flex-col justify-center items-center py-5'>
                <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='py-2 align-middle inline-block min-w-fit sm:px-6 lg:px-8'>
                        <div className='shadow overflow-hidden border-2 border-red-500 sm:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className='bg-red-300'>
                                    <tr>
                                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>Image</th>
                                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>Name</th>
                                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>Price</th>
                                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>Quantity</th>
                                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>Category</th>
                                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>Description</th>
                                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>Compnay</th>
                                        <th scope='col' className='relative py-3 px-6'>
                                            <span className='sr-only bg-gray-100'>Edit</span>
                                        </th>
                                        <th scope='col' className='relative py-3 px-6'>
                                            <span className='sr-only bg-gray-100'>Delete</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-gray-100 divide-y divide-gray-200'>
                                    {productData.map((prodData, index) => (
                                        <tr key={index}>
                                            <td className='whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-600'>
                                                <img className='w-full lg:m-2' src={`http://localhost:3000/${prodData.productImage}`} alt='product pic' />
                                            </td>
                                            <td className='whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-600'>
                                                {prodData.productName}
                                            </td>
                                            <td className='whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-600'>
                                                {prodData.productPrice}
                                            </td>
                                            <td className='whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-600'>
                                                {prodData.productQuantity}
                                            </td>
                                            <td className='whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-600'>
                                                {prodData.productCategory}
                                            </td>
                                            <td className='whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-600'>
                                                {prodData.productDescription}
                                            </td>
                                            <td className='whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-600'>
                                                {prodData.productCompany}
                                            </td>
                                            <td className='whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-600 cursor-pointer transition ease-in-out delay-100 hover:-translate-x 
                                                hover:scale-110 duration-100'
                                                onClick={() => navigate('/editproduct', { state: { data: prodData, id: index } })}>
                                                Edit
                                            </td>
                                            <td className='whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-600 cursor-pointer transition ease-in-out delay-100 hover:-translate-x 
                                                hover:scale-110 duration-100'
                                                onClick={() => dispatch(deleteProduct(index))}>
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

export default ProductTable;
