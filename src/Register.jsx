import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
    let navigate = useNavigate();

    const [userData, setUserData] = useState({
        fullName: "",
        userName: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        let users = localStorage.getItem("users");

        if (users.length == "") {
            users = [];
        } else {
            users = JSON.parse(users);
        }

        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));

        setUserData({
            fullName: "",
            userName: "",
            password: "",
        });

        Swal.fire({
            icon: "success",
            title: "¡Yeah!",
            text: "You are registered",
            showCancelButton: false,
            confirmButtonText: "¡Ok!",
        }).then((result) => {
            if (result.isConfirmed) {
                return navigate("/login");
            }
        });
    };

    return (
        <form
            className="bg-white rounded-2xl p-10 w-1/3 md:w-2/4 shadow-2xl mx-auto"
            onSubmit={handleSubmit}
        >
            <h1 className="font-bold text-2xl mb-8">Sign Up</h1>
            <div className="my-6">
                <input
                    type="text"
                    className="form-input w-full rounded-md border-none bg-gray-50 px-6 py-4 text-gray-500 font-semibold placeholder:text-gray-300"
                    placeholder="Full name"
                    value={userData.fullName}
                    onChange={(e) =>
                        setUserData({ ...userData, fullName: e.target.value })
                    }
                />
            </div>
            <div className="my-6">
                <input
                    type="text"
                    className="form-input w-full rounded-md border-none bg-gray-50 px-6 py-4 text-gray-500 font-semibold placeholder:text-gray-300"
                    placeholder="Username"
                    value={userData.userName}
                    onChange={(e) =>
                        setUserData({ ...userData, userName: e.target.value })
                    }
                />
            </div>
            <div className="my-6">
                <input
                    type="password"
                    className="form-input w-full rounded-md border-none bg-gray-50 px-6 py-4 text-gray-500 font-semibold placeholder:text-gray-300"
                    placeholder="Password"
                    value={userData.password}
                    onChange={(e) =>
                        setUserData({ ...userData, password: e.target.value })
                    }
                />
            </div>
            <div className="my-6">
                <button
                    type="submit"
                    className="uppercase rounded-md bg-cyan-500 w-full px-6 py-4 text-white font-semibold"
                >
                    Sign Up
                </button>
            </div>
            <div className="mt-10 pt-10 border-t border-gray-100 flex justify-center w-3/4 mx-auto">
                <Link to="/login">Do you have an account? Sign in</Link>
            </div>
        </form>
    );
};

export default Register;
