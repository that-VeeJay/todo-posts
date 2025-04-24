import { Link } from "react-router";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="bg-white p-10 md:shadow-md w-full md:w-[450px] rounded-md md:border md:border-gray-200">
                <form className="space-y-5">
                    <div className="text-2xl font-semibold">Login</div>
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
                    <button type="submit" className="bg-blue-500 text-white w-full p-2 rounded mt-2 hover:bg-blue-600 transition duration-200">Login</button>
                    <div>Don't have an account? <Link to="/register" className="text-blue-500 font-semibold hover:underline">Register here</Link></div>
                </form>
            </div>
        </div>
    );
}
