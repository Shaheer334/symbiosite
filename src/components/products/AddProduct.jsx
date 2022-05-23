import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/CategorySlice';

const AddProduct = () => {
    const dispatch = useDispatch()
    const schema = Yup.object().shape({
        productName: Yup.string().required("product name should not be empty").min(3),
        productCategory: Yup.string().required("category should be selected"),
        productDescription: Yup.string().required("description should not be empty").min(3),
        productPrice: Yup.number().required("price should not be empty").min(1),
        productCompany: Yup.string().required("company should not be empty"),
        productQuantity: Yup.number().required("quantity should not be empty"),
        productImage: Yup.string().required("image is required")
    })
    return (
        <>
            <Formik initialValues={{ productName: "", productCategory: "", productDescription: "", productPrice: "", productQuantity: "", productCompany: "", productImage: "" }}
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    // const id = Math.random().toString(36).slice(4)
                    // const imageData = values.productImage.split('fakepath\\')
                    // console.log('fakepath data :', imageData[0])
                    const objData = {
                        // id,
                        productName: values.productName,
                        productCategory: values.productCategory,
                        productDescription: values.productDescription,
                        productPrice: values.productPrice,
                        productQuantity: values.productQuantity,
                        productCompany: values.productCompany,
                        productImage: values.productImage
                    }
                    console.log("product add object Data :", objData)

                    actions.resetForm()
                    dispatch(addProduct(objData))
                }}
            >
                {({
                    errors,
                    values,
                    touched,
                    handleChange,
                    handleSubmit,
                    handleBlur,
                    setFieldValue
                }) => (
                    <form>
                        <div className='py-3 max-h-full'>
                            <div className='max-w-md mx-auto overflow-hidden md:max-w-md bg-gray-100 border-red-500 border-2'>
                                <div className='md:flex'>
                                    <div className='py-10 p-3 px-6 w-full'>
                                        <div className='text-center mb-6'>
                                            <span className='text-xl text-gray-700'>Add Product</span>
                                        </div>
                                        <div className='mb-6'>
                                            <label htmlFor='prodname' className='block txt-sm mb-2 font-medium text-gray-700'>Product Name</label>
                                            <input type='text' id='prodname' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block w-full p-2.5 outline-red-500' placeholder='product name'
                                                name='productName'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.productName}
                                            />
                                            <label className='error' style={{ color: 'red' }} >{errors.productName && touched.productName && errors.productName}</label>
                                        </div>
                                        <div className='mb-6'>
                                            <label htmlFor='prodcat' className='block txt-sm mb-2 font-medium text-gray-700'>Product category</label>
                                            <input type='text' id='prodcat' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block w-full p-2.5 outline-red-500' placeholder='product category'
                                                name='productCategory'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.productCategory}
                                            />
                                            <label className='error' style={{ color: 'red' }} >{errors.productCategory && touched.productCategory && errors.productCategory}</label>
                                        </div>
                                        <div className='mb-6'>
                                            <label htmlFor='proddesc' className='block txt-sm mb-2 font-medium text-gray-700'>Product Description </label>
                                            <input type='text' id='proddesc' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block w-full p-2.5 outline-red-500' placeholder='product description'
                                                name='productDescription'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.productDescription}
                                            />
                                            <label className='error' style={{ color: 'red' }} >{errors.productDescription && touched.productDescription && errors.productDescription}</label>
                                        </div>
                                        <div className='mb-6'>
                                            <label htmlFor='prodprice' className='block txt-sm mb-2 font-medium text-gray-700'>Product Price</label>
                                            <input type='number' id='prodprice' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block w-full p-2.5 outline-red-500' placeholder='product price'
                                                name='productPrice'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.productPrice}
                                            />
                                            <label className='error' style={{ color: 'red' }} >{errors.productPrice && touched.productPrice && errors.productPrice}</label>
                                        </div>
                                        <div className='mb-6'>
                                            <label htmlFor='prodquant' className='block txt-sm mb-2 font-medium text-gray-700'>Product Quantity</label>
                                            <input type='number' id='prodquant' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block w-full p-2.5 outline-red-500' placeholder='product quantity'
                                                name='productQuantity'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.productQuantity}
                                            />
                                            <label className='error' style={{ color: 'red' }} >{errors.productQuantity && touched.productQuantity && errors.productQuantity}</label>
                                        </div>
                                        <div className='mb-6'>
                                            <label htmlFor='prodcomp' className='block txt-sm mb-2 font-medium text-gray-700'>Product Company</label>
                                            <input type='text' id='prodcomp' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block w-full p-2.5 outline-red-500' placeholder='product company'
                                                name='productCompany'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.productCompany}
                                            />
                                            <label className='error' style={{ color: 'red' }} >{errors.productCompany && touched.productCompany && errors.productCompany}</label>
                                        </div>
                                        <div className='mb-6'>
                                            <label htmlFor='pimg' className='block txt-sm mb-2 font-medium text-gray-700'>Image</label>
                                            <input type='file' multiple accept='image/*' id='pimg' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block w-full p-2.5 outline-red-500'
                                                name='productImage'
                                                onChange={(e) => setFieldValue('productImage', URL.createObjectURL(e.target.files[0]))}
                                                onBlur={handleBlur}
                                            // value={values.productImage}
                                            />
                                            <label className='error' style={{ color: 'red' }} >{errors.productImage && touched.productImage && errors.productImage}</label>
                                        </div>
                                        <div className='mb-6 flex flex-col justify-center items-center'>
                                            <button type='submit' className='bg-green-500 text-gray-50 transition ease-in-out delay-100 hover:-translate-x hover:scale-110 hover:bg-green-500 duration-100 
                                            focus:ring-6 focus:ring-red-500 focus:ring-border-red-500 p-1 rounded-md text-center'
                                                onClick={handleSubmit}>Create</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                )
                }
            </Formik>
        </>
    );
};

export default AddProduct;