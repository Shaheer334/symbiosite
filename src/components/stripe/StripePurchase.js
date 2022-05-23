import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios'
import ProductCart from '../Cart/ProductCart';
import { toast } from 'react-toastify';
import '../../App.css'

toast.configure()

const StripePurchase = () => {
    const [success, setSuccess] = useState(false)
    const elements = useElements()
    const stripe = useStripe()
    const count = useSelector(state => state.reducer.counter.count)
    console.log("Purchase count Data:", count)
    const { state } = useLocation()
    const productPurchaseData = state.data
    console.log("Purchase Price or Data:", productPurchaseData)
    const productPrice = productPurchaseData.productPrice
    const navigate = useNavigate()
    const CARD_OPTIONS = {
        iconStyle: 'solid',
        style: {
            base: {
                iconColor: '#c4f0ff',
                color: '#fff',
                fontWeight: 500,
                fontFamily: 'Roboto, Open Sans, Segoe UI,sans serif',
                fontSmoothing: 'antialiased',
                ":-webkit-autofill": { color: '#fce883' },
                "::placeholder": { color: '#87bbfd' }
            },
            invalid: {
                iconColor: '#ffc7ee',
                color: '#ffc7ee'
            }
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })
        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post('http://localhost:3001/product/paymentintent', {
                    amount: productPrice * count * 100,
                    id
                })
                if (response.data.success) {
                    console.log("payment successfull")
                    setSuccess(true)
                    toast.success(`You just bought ${productPurchaseData.productName}, congrats this is the best decision of your life`, {
                        position: toast.POSITION.TOP_CENTER
                    })
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <>
            <ProductCart data={productPurchaseData} />
            {!success ?
                <form onSubmit={handleSubmit}>
                    <fieldset className='FormGroup'>
                        <div className='FormRow'>
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                    <button className='buttonClass'>Pay ${count === 1 ? productPrice : productPrice * count}</button>
                </form>
                :
                <div>
                    {navigate('/')}
                </div>
            }
        </>
    )
}

export default StripePurchase;