import { useRef, useState, useEffect } from 'react';

export default function SignIn() {

    const userRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLDivElement>(null);

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