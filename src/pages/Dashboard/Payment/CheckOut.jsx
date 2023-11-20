import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";


const CheckOut = () => {

    const { user } = useAuth();
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, totalPrice])

    console.log(clientSecret);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${error.message}`,
                showConfirmButton: false,
                timer: 1500
            });

        }
        else {
            console.log('[PaymentMethod]', paymentMethod);

        }

        // confrim payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'anonymous',
                }
            }
        });

        if (confirmError) {
            console.log("confirm error", confirmError);
        }
        else {
            console.log('confirm payment', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id)
            }

            // send payment info to database
            const payment = {
                name: user?.name,
                email: user?.email,
                transaction_id: paymentIntent.id,
                price: totalPrice,
                date: new Date(),
                food_ids: cart.map(item => item.food_id),
                cart_ids: cart.map(item => item._id),
                status: 'pending'
            }
            const res = await axiosSecure.post('/payments', payment)
            console.log(res.data);
            refetch();
            if (res.data.paymentResult.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Payment Succesfull!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-primary" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            {transactionId && <p className="text-green-600 my-5">Your Transaction Id: {transactionId} </p>}
        </form>
    );
};

export default CheckOut;