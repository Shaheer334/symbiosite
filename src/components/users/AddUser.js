import React from 'react'; //, { useState } 
import { Formik } from 'formik';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
// import valid from 'card-validator'
import YupPassword from 'yup-password'
import { addUser } from '../redux/CategorySlice';

YupPassword(Yup)


export const AddUser = () => {

    // const [cardOpen, setCardOpen] = useState(false)
    // const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()
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

        // Credit card validation...
        // creditCardNumber: Yup.string().test('test-number', 'Credit Card number is invalid', value => valid.number(value).isValid).required("field should not be empty"),
        // expirationDate: Yup.string().typeError('Not a valid expiration date').max(5, 'Not a valid expiration date').matches(/([0-9]{2})\/([0-9]{2})/, 'Not a valid expiration date').required('Expiration date is required').test(
        //     'test-credit-card-expiration-date',
        //     'Invalid! Expiration Date has past',
        //     expirationDate => {
        //         if (!expirationDate) {
        //             return false
        //         }
        //         const today = new Date()
        //         const monthToday = today.getMonth() + 1
        //         const yearToday = today.getFullYear.toString().substring(-2)

        //         const [expMonth, expYear] = expirationDate.split('/')
        //         if (Number(expYear) < Number(yearToday)) {
        //             return false
        //         } else if (
        //             Number(expMonth) < monthToday && Number(expYear) <= Number(yearToday)
        //         ) {
        //             return false
        //         }
        //         return true
        //     }
        // ).test(
        //     'test-credit-card-expiration-date',
        //     'Invalid Expiration Month',
        //     expirationDate => {
        //         if (!expirationDate) {
        //             return false
        //         }
        //         // const today = new Date().getFullYear.toString.substring(-2)

        //         const [expMonth] = expirationDate.split('/')
        //         if (Number(expMonth) > 12) {
        //             return false
        //         }
        //         return true
        //     }
        // ),
        // cvv: Yup.string().required("field should not be empty").max(4).min(3)
    })
    return (
        <>
            <Formik initialValues={{
                userName: "", userContact: "", email: "", password: "", confirmPassword: "", street: "",
                zip: "", city: "", state: "", country: ""
            }} // , creditCardNumber: "", expirationDate: "", cvv: ""
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    const objData = {
                        userName: values.userName,
                        userContact: values.userContact,
                        // cardDetails: {
                        //     creditCardNumber: values.creditCardNumber,
                        //     expirationDate: values.expirationDate,
                        //     cvv: values.cvv
                        // },
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
                    console.log("user add object Data :", objData)
                    actions.resetForm()
                    dispatch(addUser(objData))
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
                                            <span className='text-xl text-gray-700'>Register</span>
                                        </div>
                                        <div className='mb-6'>
                                            <label htmlFor='username' className='block txt-sm mb-2 font-medium text-gray-700'>Name</label>
                                            <input type='text' id='username' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block w-full p-2.5 outline-red-500' placeholder='user name'
                                                name='userName'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.userName}
                                            />
                                            <label className='error' style={{ color: 'red' }} >{errors.userName && touched.userName && errors.userName}</label>
                                        </div>
                                        <div className='mb-6'>
                                            <label htmlFor='cont' className='block txt-sm mb-2 font-medium text-gray-700'>Contact</label>
                                            <input type='tel' id='cont' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block w-full p-2.5 outline-red-500' placeholder='add contact'
                                                name='userContact'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.userContact}
                                            />
                                            <label className='error' style={{ color: 'red' }} >{errors.userContact && touched.userContact && errors.userContact}</label>
                                        </div>
                                        <div className='mb-2'>
                                            <label htmlFor='address' className='block txt-sm mb-2 font-medium text-gray-700'>Address</label>
                                            <div className='grid grid-rows-3 grid-flow-col gap-4' id="address">
                                                <div className=''>
                                                    <label htmlFor='strt' className='block txt-sm mb-2 font-medium text-gray-700'>Street</label>
                                                    <input type='text' id='strt' className='flex flex-col shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 p-2.5 outline-red-500' placeholder='street address'
                                                        name='street'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.street}
                                                    />
                                                    <label className='error' style={{ color: 'red' }} >{errors.street && touched.street && errors.street}</label>
                                                </div>
                                                <div className=''>
                                                    <label htmlFor='zp' className='block txt-sm mb-2 font-medium text-gray-700'>zip</label>
                                                    <input type='text' id='zp' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block p-2.5 outline-red-500' placeholder='zip code'
                                                        name='zip'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.zip}
                                                    />
                                                    <label className='error' style={{ color: 'red' }} >{errors.zip && touched.zip && errors.zip}</label>
                                                </div>
                                                <div className=''>
                                                    <label htmlFor='cty' className='block txt-sm mb-2 font-medium text-gray-700'>City</label>
                                                    <input type='text' id='cty' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block p-2.5 outline-red-500' placeholder='city'
                                                        name='city'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.city}
                                                    />
                                                    <label className='error' style={{ color: 'red' }} >{errors.city && touched.city && errors.city}</label>
                                                </div>
                                                <div className=''>
                                                    <label htmlFor='stt' className='block txt-sm mb-2 font-medium text-gray-700'>State</label>
                                                    <input type='text' id='stt' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block p-2.5 outline-red-500' placeholder='state'
                                                        name='state'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.state}
                                                    />
                                                    <label className='error' style={{ color: 'red' }} >{errors.state && touched.state && errors.state}</label>
                                                </div>
                                                <div className=''>
                                                    <label htmlFor='contry' className='block txt-sm mb-2 font-medium text-gray-700'>Country</label>
                                                    <input type='text' id='contry' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block p-2.5 outline-red-500' placeholder='country'
                                                        name='country'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.country}
                                                    />
                                                    <label className='error' style={{ color: 'red' }} >{errors.country && touched.country && errors.country}</label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className='mb-2' onClick={() => setCardOpen(!cardOpen)}>
                                            <label htmlFor='carddetails' className='block txt-sm mb-2 font-medium text-gray-700'>Card Details</label>
                                            <div className='grid grid-rows-2 grid-flow-col gap-4' id="carddetails">
                                                <div className=''>
                                                    <label htmlFor='cardno' className='block txt-sm mb-2 font-medium text-gray-700'>Card Number</label>
                                                    <input type='text' id='cardno' className='flex flex-col shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 p-2.5 outline-red-500' placeholder='enter your credit card number'
                                                        name='creditCardNumber'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.creditCardNumber}
                                                    />
                                                    <label className='error' style={{ color: 'red' }} >{errors.creditCardNumber && touched.creditCardNumber && errors.creditCardNumber}</label>
                                                </div>
                                                <div className=''>
                                                    <label htmlFor='expdate' className='block txt-sm mb-2 font-medium text-gray-700'>Expiration Date</label>
                                                    <input type='date' id='expdate' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block p-2.5 outline-red-500' placeholder='enter expiration date'
                                                        name='expirationDate'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.expirationDate}
                                                    />
                                                    <label className='error' style={{ color: 'red' }} >{errors.expirationDate && touched.expirationDate && errors.expirationDate}</label>
                                                </div>
                                                <div className=''>
                                                    <label htmlFor='cv' className='block txt-sm mb-2 font-medium text-gray-700'>Cvv</label>
                                                    <input type='text' id='cv' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block p-2.5 outline-red-500' placeholder='inter your cvv'
                                                        name='cvv'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.cvv}
                                                    />
                                                    <label className='error' style={{ color: 'red' }} >{errors.cvv && touched.cvv && errors.cvv}</label>
                                                </div>
                                            </div>
                                        </div> */}

                                        <div className='mb-6'>
                                            <label htmlFor='eml' className='block txt-sm mb-2 font-medium text-gray-700'>Email</label>
                                            <input type='email' autoComplete='username' id='eml' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block w-full p-2.5 outline-red-500' placeholder='email'
                                                name='email'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                            <label className='error' style={{ color: 'red' }} >{errors.email && touched.email && errors.email}</label>
                                        </div>
                                        <div className='mb-6'>
                                            <label htmlFor='pass' className='block txt-sm mb-2 font-medium text-gray-700'>Password</label>
                                            <input type='password' autoComplete='new-password' id='pass' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block w-full p-2.5 outline-red-500' placeholder='password'
                                                name='password'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                            />
                                            <label className='error' style={{ color: 'red' }} >{errors.password && touched.password && errors.password}</label>
                                        </div>
                                        <div className='mb-6'>
                                            <label htmlFor='confrimpass' className='block txt-sm mb-2 font-medium text-gray-700'>Confirm Password</label>
                                            <input type='password' autoComplete='new-password' id='confrimpass' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block w-full p-2.5 outline-red-500' placeholder='confirm password'
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

export default AddUser;