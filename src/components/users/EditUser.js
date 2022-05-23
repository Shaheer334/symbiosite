import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { useLocation } from 'react-router';
import YupPassword from 'yup-password'
import { editUser } from '../redux/CategorySlice'
YupPassword(Yup)

const EditUser = () => {
    const dispatch = useDispatch()
    const { state } = useLocation()
    const {data, id} = state
    console.log("User Table State Data :", data)
    console.log("User Table State Data id :", id)

    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const schema = Yup.object().shape({
        userName: Yup.string().required("name should not be empty").min(3),
        userContact: Yup.string().required("contact should not be empty").max(11).min(11),
        street: Yup.string().required("address should not be empty").min(3),
        city: Yup.string().required("city should not be empty").min(3),
        zip: Yup.string().required("zip should not be empty").min(3),
        state: Yup.string().required("state should not be empty").min(3),
        country: Yup.string().required("country should not be empty").min(3),
        email: Yup.string().email().required("email should be selected").matches(regex),
        password: Yup.string().password().required("password should not be empty").min(8),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'password must match').required("confirm password first"),
    })
    return (
        <>
            <Formik initialValues={{
                userName: data.userName, userContact: data.userContact, email: data.email, password: data.password, confirmPassword: "", street: data.userAddress.street,
                zip: data.userAddress.zip, city: data.userAddress.city, state: data.userAddress.state, country: data.userAddress.country,
            }}
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    const objData = {
                        id,
                        userName: values.userName,
                        userContact: values.userContact,
                        userAddress: {
                            street: values.street,
                            city: values.city,
                            zip: values.zip,
                            state: values.state,
                            country: values.country
                        },
                        email: values.email,
                        password: values.password,
                        confirmPassword: values.confirmPassword
                    }
                    console.log("User edit object Data :", objData)
                    actions.resetForm()
                    dispatch(editUser(objData))
                }}
            >
                {({
                    errors,
                    values,
                    touched,
                    handleChange,
                    handleSubmit,
                    handleBlur,
                }) => (
                    <form>
                        <div className='py-3 max-h-full'>
                            <div className='max-w-md mx-auto overflow-hidden md:max-w-md bg-gray-100 border-red-500 border-2'>
                                <div className='md:flex'>
                                    <div className='py-10 p-3 px-6 w-full'>
                                        <div className='text-center mb-6'>
                                            <span className='text-xl text-gray-700'>Edit User</span>
                                        </div>
                                        <div className='mb-6'>
                                            <label htmlFor='usernamee' className='block txt-sm mb-2 font-medium text-gray-700'>Name</label>
                                            <input type='text' id='usernamee' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block w-full p-2.5 outline-red-500'
                                                name='userName'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.userName}
                                            />
                                            <label className='error' style={{ color: 'red' }} >{errors.userName && touched.userName && errors.userName}</label>
                                        </div>
                                        <div className='mb-6'>
                                            <label htmlFor='contt' className='block txt-sm mb-2 font-medium text-gray-700'>Contact</label>
                                            <input type='tel' id='contt' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block w-full p-2.5 outline-red-500'
                                                name='userContact'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.userContact}
                                            />
                                            <label className='error' style={{ color: 'red' }} >{errors.userContact && touched.userContact && errors.userContact}</label>
                                        </div>
                                        <div className='mb-2'>
                                            <label htmlFor='addresss' className='block txt-sm mb-2 font-medium text-gray-700'>Address</label>
                                            <div className='grid grid-rows-3 grid-flow-col gap-4' id="addresss">
                                                <div className=''>
                                                    <label htmlFor='strtt' className='block txt-sm mb-2 font-medium text-gray-700'>Street</label>
                                                    <input type='text' id='strtt' className='flex flex-col shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 p-2.5 outline-red-500'
                                                        name='street'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.street}
                                                    />
                                                    <label className='error' style={{ color: 'red' }} >{errors.street && touched.street && errors.street}</label>
                                                </div>
                                                <div className=''>
                                                    <label htmlFor='zpp' className='block txt-sm mb-2 font-medium text-gray-700'>zip</label>
                                                    <input type='text' id='zpp' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block p-2.5 outline-red-500'
                                                        name='zip'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.zip}
                                                    />
                                                    <label className='error' style={{ color: 'red' }} >{errors.zip && touched.zip && errors.zip}</label>
                                                </div>
                                                <div className=''>
                                                    <label htmlFor='ctyy' className='block txt-sm mb-2 font-medium text-gray-700'>City</label>
                                                    <input type='text' id='ctyy' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block p-2.5 outline-red-500'
                                                        name='city'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.city}
                                                    />
                                                    <label className='error' style={{ color: 'red' }} >{errors.city && touched.city && errors.city}</label>
                                                </div>
                                                <div className=''>
                                                    <label htmlFor='sttt' className='block txt-sm mb-2 font-medium text-gray-700'>State</label>
                                                    <input type='text' id='sttt' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block p-2.5 outline-red-500'
                                                        name='state'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.state}
                                                    />
                                                    <label className='error' style={{ color: 'red' }} >{errors.state && touched.state && errors.state}</label>
                                                </div>
                                                <div className=''>
                                                    <label htmlFor='contryy' className='block txt-sm mb-2 font-medium text-gray-700'>Country</label>
                                                    <input type='text' id='contryy' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block p-2.5 outline-red-500'
                                                        name='country'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.country}
                                                    />
                                                    <label className='error' style={{ color: 'red' }} >{errors.country && touched.country && errors.country}</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mb-6'>
                                            <label htmlFor='emll' className='block txt-sm mb-2 font-medium text-gray-700'>Email</label>
                                            <input type='email' autoComplete='username' id='emll' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block w-full p-2.5 outline-red-500'
                                                name='email'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                            <label className='error' style={{ color: 'red' }} >{errors.email && touched.email && errors.email}</label>
                                        </div>
                                        <div className='mb-6'>
                                            <label htmlFor='passs' className='block txt-sm mb-2 font-medium text-gray-700'>Password</label>
                                            <input type='password' autoComplete='new-password' id='passs' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block w-full p-2.5 outline-red-500'
                                                name='password'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                            />
                                            <label className='error' style={{ color: 'red' }} >{errors.password && touched.password && errors.password}</label>
                                        </div>
                                        <div className='mb-6'>
                                            <label htmlFor='confrimpasss' className='block txt-sm mb-2 font-medium text-gray-700'>Confirm Password</label>
                                            <input type='password' autoComplete='new-password' id='confrimpasss' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block w-full p-2.5 outline-red-500'
                                                name='confirmPassword'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.confirmPassword}
                                            />
                                            <label className='error' style={{ color: 'red' }} >{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</label>
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

export default EditUser;