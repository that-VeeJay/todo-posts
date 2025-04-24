import { Link } from "react-router";
import FormField from "../../components/FormField";
import { useState } from "react";

export default function Register() {

    const initialValues = { name: "", email: "", password: "", password_confirmation: "" };

    const [formData, setFormData] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Handles the Registration form submission
    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const response = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.errors) {
            setErrors(data.errors);
        } else {
            localStorage.setItem('token', data.token);
            setFormData(initialValues);
            setErrors("");
            setSuccessMessage(data.message);
        }

        setIsLoading(false);
    };

    // Handles the onChange on input fields
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev, [id]: value
        }));
    };

    return (
        <main className="min-h-screen flex items-center justify-center ">
            <div className="bg-white p-10 md:shadow-md w-full md:w-[450px] rounded-md md:border md:border-gray-200">
                <form onSubmit={handleRegister} className="space-y-5">
                    <div className="text-2xl font-semibold">Create an account</div>

                    {successMessage && <p className="bg-green-500 border-1 border-green-600 p-3 text-white">{successMessage}</p>}

                    <div>
                        <FormField
                            id="name"
                            label="Name"
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name[0]}</p>}
                    </div>

                    <div>
                        <FormField
                            id="email"
                            label="Email"
                            type="text"
                            placeholder="example@company.com"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>}
                    </div>

                    <div>
                        <FormField
                            id="password"
                            label="Password"
                            type="password"
                            placeholder="••••••••••••"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password[0]}</p>}
                    </div>

                    <FormField
                        id="password_confirmation"
                        label="Confirm Password"
                        type="password"
                        placeholder="••••••••••••"
                        value={formData.password_confirmation}
                        onChange={handleInputChange}
                    />

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-blue-500 text-white w-full p-2 rounded mt-2 hover:bg-blue-600 transition duration-200">
                        {isLoading ? "Creating account..." : "Create an account"}
                    </button>

                    <div>Already have an account? <Link to="/login" className="text-blue-500 font-semibold hover:underline">Login here</Link></div>
                </form>
            </div>
        </main>
    );
}
