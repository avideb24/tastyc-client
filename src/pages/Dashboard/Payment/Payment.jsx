import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";


const Payment = () => {

    // TODO 
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

    return (
        <div>
            <SectionTitle subHeading={'---Please pay to order---'} heading={'Pay Now'}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOut></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;