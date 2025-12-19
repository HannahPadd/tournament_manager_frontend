import { useRef, useState, useEffect } from 'react';

export default function Login() {
        interface LoginFormState {
        name: string;
        password: string;
    };

    const [formData, setFormData] = useState<LoginFormState> ({
        name: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div>
            <form>
                <button id="login-modal-button">Login</button>

                <div id="login-modal" className="modal">
                    <div className="modal-content">
                        <div>
                            <label htmlFor='username' className="block mb-1">Username:</label>
                            <input type='text' required></input>
                        </div>
                        <div>
                            <label htmlFor='password' className="block mb-1">Password:</label>
                            <input type='password' required></input>
                        </div>
                        <div>
                            <button id="login-submit" className='bg-lighter text-white p-2 rounded-lg w-full mt-2'>Login</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}