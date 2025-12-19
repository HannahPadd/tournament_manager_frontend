import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import { login } from "../services/login.api"

export default function SignIn() {

    const setAuth = useContext(AuthContext) as React.Dispatch<React.SetStateAction<{ user: string; pwd: string; roles: any; accessToken: string }>>;
    const userRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLDivElement>(null);
setAuth
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    /*
    useEffect(() => {
        userRef.current.focus();
    }, [])
    */

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            try {
            const response = login({
                name: user,
                password: pwd
            })
            const accessToken = (await response)?.data.accessToken;
            const roles = (await response)?.data?.roles;

            setAuth({ user, pwd, roles, accessToken});
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch(error) {
            setSuccess(false);
        }
    }

    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='username' className="block mb-1">Username:</label>
                <input 
                    type="text"
                    name="username"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />

                <label htmlFor='password' className="block mb-1">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />

                <button id="signin" className='bg-lighter text-white p-2 rounded-lg w-full mt-2'>Sign in</button>
            </form>
            <p>
                Need an Account?<br />
                <span className="line">
                    {/*TODO: Link to Create account */}
                    <a href="#">Sign Up</a>
                </span>
            </p>
        </section>
    )
}