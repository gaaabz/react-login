import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Nav from "./Nav";
import Register from "./Register";

const App = () => {
    let users = localStorage.getItem("users");

    if (!users) {
        localStorage.setItem("users", []);
    }

    return (
        <>
            <div className="bg-gradient-to-br from-cyan-500 to-indigo-500 min-h-screen box-border p-6">
                <Nav />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
