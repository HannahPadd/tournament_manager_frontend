import { createPlayer } from '../../../services/player/player.api';
import { useState } from 'react';



export default function RegisterForm() {
        interface SignUpFormState {
        name: string;
        email: string;
        password: string;
        groovestatsApi: string;
    };

    const [formData, setFormData] = useState<SignUpFormState> ({
        name: '',
        email: '',
        password: '',
        groovestatsApi: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createPlayer(formData);
    }

    return (
        <div className="w-full flex justify-center px-4">
            <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto space-y-4">
                <div>
                    <label htmlFor='name' className="block mb-1">Player Name:</label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                        required
                        maxLength={20}
                        className="w-full p-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor='email' className="block mb-1">Email:</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        required
                        maxLength={50}
                        className="w-full p-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor='password' className="block mb-1">Password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                        required
                        maxLength={30}
                        className="w-full p-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor='groovestatsApi' className="block mb-1">groovestatsApi:</label>
                    <input
                        type="groovestatsApi"
                        name="groovestatsApi"
                        onChange={handleChange}
                        value={formData.groovestatsApi}
                        maxLength={30}
                        className="w-full p-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    {/*TODO
                        Redirect to player profile page*/}
                    <button className="bg-lighter text-white p-2 rounded-lg w-full mt-2">Sign up!</button>
                </div>
            </form>
        </div>
    )
}