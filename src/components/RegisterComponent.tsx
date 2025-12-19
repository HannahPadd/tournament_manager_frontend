import { createPlayer } from '../services/player/player.api';
import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';


export default function RegisterCompontent() {

    const userRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLDivElement>(null);

    interface SignUpFormState {
    name: string;
    email: string;
    password: string;
    groovestatsApi: string;
    };

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [valdMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [grooveStatsApi, setGrooveStatsApi] = useState('');
    const [validGrooveStatsApi, setValidGrooveStatsApi] = useState(false);
    const [grooveStatsApiFocus, setGrooveStatsApiFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    /*
    useEffect(() => {
        userRef.current.focus();
    }, [user])
    */

    useEffect(() => {
        const result = USER_REGEX.test(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match)
    }, [pwd, matchPwd])

    /*
    const [formData, setFormData] = useState<SignUpFormState> ({
        name: '',
        email: '',
        password: '',
        groovestatsApi: '',
    });
    */


    /*
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createPlayer(formData);
    }
    */

    return (
        <section className="w-full flex justify-center px-4">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form className="w-full max-w-sm mx-auto space-y-4">
                <div>
                    <label htmlFor='playername' className="block mb-1">
                        Player Name:
                        <span className={validName ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validName || !user ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="w-full p-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        maxLength={20}
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                    />
                    <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                        4 to 24 characters.<br />
                    </p>
                </div>

                <div>
                    <label htmlFor='email' className="block mb-1">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        autoComplete="off"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        maxLength={50}
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                    />
                    <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                        4 to 24 characters.<br />
                    </p>
                </div>

                <div>
                    <label htmlFor='password' className="block mb-1">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full p-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setPwd(e.target.value)}
                        maxLength={20}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                    <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                        4 to 24 characters.<br />
                    </p>
                </div>

                <div>
                    <label htmlFor='groovestatsapi' className="block mb-1">groovestatsApi:</label>
                    <input
                        type="text"
                        id="groovestatsapi"
                        name="groovestatsapi"
                        className="w-full p-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        autoComplete="off"
                        required
                        onChange={(e) => setGrooveStatsApi(e.target.value)}
                        maxLength={50}
                        aria-invalid={validGrooveStatsApi ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setGrooveStatsApiFocus(true)}
                        onBlur={() => setGrooveStatsApiFocus(false)}
                    />
                    <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                        4 to 24 characters.<br />
                    </p>
                </div>

                <div>
                    {/*TODO
                        Redirect to player profile page*/}
                    <button className="bg-lighter text-white p-2 rounded-lg w-full mt-2"><a href="/">Sign up!</a></button>
                </div>
            </form>
        </section>
    )
}