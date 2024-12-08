import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setError(null);
    setLoading(true);
    try {
      const response = await axios.post<{ data: { access: string } }>(
        `${BASE_URL}/auth/login/`,
        data
      );
      const token = response.data.data.access;
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f3f3f3] py-10 overflow-y-auto">
      <div className="lg:w-4/5 w-full max-w-5xl flex items-center justify-around p-6 lg:p-12 bg-white shadow-2xl border rounded-2xl">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between space-y-12 lg:space-y-0 w-full">
          
          <div className="w-full h-[40%] block lg:hidden">
            <img
              src="./images/forest.jpg"
              alt="Login Illustration"
              className="w-full h-full border rounded-2xl"
            />
          </div>

         
          <div className="space-y-6 lg:space-y-8 w-full lg:w-1/2">
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl text-[#a0f333] font-semibold">Login</p>
              <p className="text-[#818080] md:text-xl">How do I get started?</p>
            </div>
            <LoginForm onSubmit={onSubmit} loading={loading} error={error} />
          </div>

        
          <div className="w-full h-[70vh] lg:w-1/2 hidden lg:block">
            <img
              src="./images/forest.jpg"
              alt="Login Illustration"
              className="w-full h-full border rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
