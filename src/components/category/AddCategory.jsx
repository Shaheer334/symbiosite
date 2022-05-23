import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { addCategory } from '../redux/CategorySlice'
import { useDispatch } from 'react-redux'

const AddCategory = () => {
    // const [cat, setCat] = useState([])
    const dispatch = useDispatch()
    const schema = Yup.object().shape({
        categoryName: Yup.string().required("This field is required").min(3)
    })

    return (
        <>
            <Formik initialValues={{ categoryName: "", categoryDate: "", categoryId: "", categoryTime: "" }}
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    const date = new Date()
                    const id = Math.random().toString(36).slice(4)
                    const objData = {
                        categoryName: values.categoryName,
                        categoryDate: date.toLocaleDateString(),
                        categoryTime: date.toLocaleTimeString(),
                        categoryId: id
                    }
                    // setCat(objData)
                    // console.log(cat)
                    dispatch(addCategory(objData))
                    // console.log("category object Data :", objData)
                    actions.resetForm()
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
                                        {/* <div className='text-center mb-6'>
                                    <span className='text-xl text-gray-700'>Add Category</span>
                                </div> */}
                                        <div className='mb-6'>
                                            <label htmlFor='addcat' className='block txt-sm mb-2 font-medium text-gray-700'>Add Category</label>
                                            <input type='text' id='addcat' className='shadow-sm bg-white border-red-500 text-gray-900 text-sm
                                                rounded-sm focus:ring-red-500 focus:border-red-500 block w-full p-2.5 outline-red-500' placeholder='add cateogry here'
                                                name='categoryName'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.categoryName}
                                            />
                                            <label className='error' style={{ color: 'red' }} >{errors.categoryName && touched.categoryName && errors.categoryName}</label>
                                        </div>
                                        <div className='mb-6 flex flex-col justify-center items-center'>
                                            <button type='submit' className='bg-green-500 text-gray-50 transition ease-in-out delay-100 hover:-translate-x hover:scale-110 hover:bg-green-500 duration-100 
                                            focus:ring-6 focus:ring-red-500 focus:ring-border-red-500 p-1 rounded-md text-center'
                                                onClick={handleSubmit}>Add Category</button>
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
    )
}

export default AddCategory
