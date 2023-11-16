import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SocialLogin = () => {

    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate();

    const { googleLogin } = useAuth();

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        googleLogin(provider)
            .then(res => {
                console.log(res);
                const user = { name: res.user.displayName, email: res.user.email };
                axiosPublic.post('/users', user)
                .then(res => {
                    console.log(res.data);
                })
                Swal.fire({
                    icon: "success",
                    title: "Login Successfully!",
                });
                navigate('/')
            })
    }

    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn btn-primary my-4"><FaGoogle></FaGoogle> Google</button>
        </div>
    );
};

export default SocialLogin;