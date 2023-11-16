import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin";

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { LogInUser } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef(null);
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidate = () => {
        const user_captcha_value = captchaRef.current.value;
        // console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        LogInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    icon: "success",
                    title: "Login Successfully!",
                });
                navigate(from, {replace: true})
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Invalid Email or Password!",
                });
            })
    }

    return (
        <div className="max-w-7xl mx-auto py-10">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <div>
                                    <LoadCanvasTemplate />
                                    <input type="text" ref={captchaRef} placeholder="captcha" name="captcha" className="border-2 mt-3" /> <br />
                                    <button onClick={handleValidate} className="btn btn-outline btn-xs mt-2">Validate</button>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" name="" id="" disabled={disabled} className="btn btn-primary" value='Login' />
                            </div>
                        </form>
                        <div className="pb-5 text-center px-3">
                            Havn&apos;t Any Account? Please <Link to='/signup' className="text-blue-600 font-bold ">Sign Up</Link>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;