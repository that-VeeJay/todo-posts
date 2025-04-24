import { Link } from "react-router";

export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="bg-white p-10 md:shadow-md w-full md:w-[450px] rounded-md md:border md:border-gray-200">
                <form className="space-y-5">
                    <div className="text-2xl font-semibold">Create an account</div>
                    <div>
                        <label htmlFor="name" className="block mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="John Doe"
                            className="w-full bg-gray-200 p-3 rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1">Email</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="example@company.com"
                            className="w-full bg-gray-200 p-3 rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••••••"
                            className="w-full bg-gray-200 p-3 rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="password_confirmation" className="block mb-1">Confirm Password</label>
                        <input
                            type="password"
                            id="password_confirmation"
                            placeholder="••••••••••••"
                            className="w-full bg-gray-200 p-3 rounded"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white w-full p-2 rounded mt-2 hover:bg-blue-600 transition duration-200">Create an account</button>
                    <div>Already have an account? <Link to="/login" className="text-blue-500 font-semibold hover:underline">Login here</Link></div>
                </form>
            </div>
        </div>
    );
}
