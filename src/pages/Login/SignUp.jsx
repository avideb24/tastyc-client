import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = { name, email, password};
        console.log(user);

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            Swal.fire({
                icon: "success",
                title: "Sign Up Successfully!",
            });
            form.reset();
        })
        .catch(err => {
            console.log(err);
            Swal.fire({
                icon: "error",
                title: "Something Wrong!",
            });
        })

    }
    
    return (
        <div className="max-w-7xl mx-auto py-10">
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" name="" id="" className="btn btn-primary" value='Sign Up' />
                            </div>
                        </form>
                        <div className="pb-5 text-center px-3">
                            Already Have An Account? Please <Link to='/login' className="text-blue-600 font-bold ">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;