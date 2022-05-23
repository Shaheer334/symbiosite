import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const ProductCard = () => {
    const productData = useSelector((state) => state.reducer.product.product)
    const navigate = useNavigate()

    console.log("Product cardData :", productData)
    return (
        <>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {productData.map((val, index) => (
                    <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-600 h-fit" key={index}>
                        <div className="px-0 py-0">
                            <img className="object-fill w-screen h-60 lg:m-2" src={val.productImage} alt="pic" />
                        </div>
                        <div className="px-4 py-4">
                            <div className="font-bold text-xl mb-2">{val.productName}</div>
                            <p className="text-gray-700 text-base">
                                {val.productDescription}
                            </p>
                        </div>
                        <div className="px-4 pt-4 pb-4">
                            <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price {val.productPrice}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Quantity {val.productQuantity}</span>
                        </div>
                        <div className="px-4 pt-4 pb-4">
                            <button className="bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white 
                                    text-white px-3 py-1 text-sm font-medium hover:bg-gray-600 hover:text-white p-1 rounded-full" onClick={() => navigate('/purchase', { state: { data: val } })}>Purchase</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductCard