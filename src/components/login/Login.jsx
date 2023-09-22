
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:3010/api/v1/user/login', formData);

            if (!response.statusText === 'OK') {
                throw new Error('Network response was not ok');
            }
            if (response.status === 200) {
                console.log('Login successful!', response.data);
                const data = await response.data;
                localStorage.setItem('token', data.user.token);
                toast.success('Login successful!');
                navigate('/dashboard');
                // Add code to handle successful login (e.g., redirect user)
            } else {
                throw new Error('Network response was not ok');
            }
            // Add code to handle successful login (e.g., redirect user)
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                // Add code to handle errors (e.g., show error message)
            }
            console.error('Error:', error.message);
        };
    }

    return (
        <div className="mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Enter email'
                        required
                        className="px-4 py-2 border border-gray-300 rounded w-full"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder='Enter password'
                        required
                        className="px-4 py-2 border border-gray-300 rounded w-full"
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
