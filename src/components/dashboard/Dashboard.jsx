import React from 'react';

const Dashboard = () => {
    return (
        <div className="flex p-8">
            <div className="w-1/5 bg-gray-800 h-screen text-white p-4">
                <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

                <ul className="space-y-2">
                    <li>
                        <a href="#" className="block hover:bg-gray-700 py-2 px-4 rounded">Products</a>
                    </li>
                    <li>
                        <a href="#" className="block hover:bg-gray-700 py-2 px-4 rounded">Users</a>
                    </li>
                </ul>
            </div>

            <div className="w-4/5 p-4">
            </div>
        </div>
    );
};

export default Dashboard;
