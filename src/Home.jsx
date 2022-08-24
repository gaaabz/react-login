import React, { useEffect, useState } from "react";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let users = localStorage.getItem("users");

        if (users == "") {
            users = [];
        } else {
            users = JSON.parse(users);
        }

        setUsers(users);
    }, []);

    return (
        <div className="bg-white rounded-2xl p-10 w-1/3 md:w-2/4 shadow-2xl mx-auto">
            <h1 className="font-bold text-2xl mb-8">Users</h1>
            <ul className="list-disc ml-5">
                {users.map((user) => {
                    return <li key={user.userName}>{user.fullName}</li>;
                })}
            </ul>
        </div>
    );
};

export default Home;
