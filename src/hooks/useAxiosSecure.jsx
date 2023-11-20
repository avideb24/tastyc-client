import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
});

const useAxiosSecure = () => {

    const navigate = useNavigate();

    const { logOutUser } = useContext(AuthContext);

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        console.log("token from axios secure:", token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, function (error) {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            logOutUser()
                .then(res => {
                    console.log(res);
                    Swal.fire({
                        icon: "error",
                        title: "Please Login Again!",
                    });
                });
                navigate('/login')
        }
        return Promise.reject(error);
    })



    return axiosSecure;





    // const { logOutUser } = useAuth();

    // const navigate = useNavigate();

    // axiosSecure.interceptors.request.use(function (config) {
    //     const token = localStorage.getItem('access-token')
    //     // console.log('stopped by interceptor!!!', token);
    //     config.headers.authorization = `Bearer ${token}`;
    //     return config;
    // },
    //     function (error) {
    //         // Do something with request error
    //         // console.log('inter err');
    //         return Promise.reject(error);
    //     }
    // );


    // axiosSecure.interceptors.response.use(function (response) {
    //     return response;
    // }, function (error) {
    //     const status = error.response.status;
    //     console.log('status error in the interceptor ', status);
    //     if (status === 401 || status === 403) {
    //         logOutUser()
    //         .then(result => {
    //             console.log(result);
    //             Swal.fire({
    //                 icon: "error",
    //                 title: "Please Login Again!",
    //             });
    //         });
    //         navigate('/login')
    //     }
    //     return Promise.reject(error);
    // });


};

export default useAxiosSecure;