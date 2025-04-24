import { Outlet, Link } from "react-router";

export default function Layout() {
    return (
        <>
            <header>
                <div className="bg-gray-800 text-white p-6">
                    <nav className="flex justify-between">
                        <Link to="/" >Home</Link>
                        <div className="">
                            <Link to="/login" className=" px-4 py-2 rounded-md hover:bg-gray-700 transition duration-200">Login</Link>
                            <Link to="/register" className=" px-4 py-2 rounded-md hover:bg-gray-700 transition duration-200">Register</Link>
                        </div>
                    </nav>
                </div>
            </header >

            <main>
                <Outlet />
            </main>
        </>
    );
}
