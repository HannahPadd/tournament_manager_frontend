import SignIn from "../components/SignInComponent";



export default function SignInPage() {
    return (
        <div>
            <div className="w-full max-w-sm mx-auto space-y-4">
                <h1 className="text-3xl  mb-2 mt-4">Sign up!</h1>
            </div>
            <div>
                <SignIn/>
            </div>
        </div>
    )
}