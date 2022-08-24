import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="flex justify-end items-start mb-10">
            <Link
                to="/"
                className="text-white uppercase text-sm font-semibold py-3 px-4 mr-3"
            >
                Home
            </Link>
            <Link
                to="/login"
                className="text-white uppercase text-sm font-semibold py-3 px-4 mr-3 bg-white bg-opacity-30 rounded-lg"
            >
                Login
            </Link>
            <Link
                to="/register"
                className="text-gray-700 uppercase text-sm font-semibold py-3 px-4 bg-white rounded-lg"
            >
                Register
            </Link>
        </nav>
    );
};

export default Nav;
