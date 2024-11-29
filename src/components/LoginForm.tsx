import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ColorRing } from "react-loader-spinner";

interface FormData {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: SubmitHandler<FormData>;
  loading: boolean;
  error: string | null;
}

export default function LoginForm({ onSubmit, loading, error }: LoginFormProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      
      <div className="flex flex-col">
        <label htmlFor="email" className="text-[#a0f333] font-medium text-lg">
          Email
        </label>
        <input
          type="text"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format",
            },
          })}
          className={`border rounded-full border-black w-full md:w-2/3 p-4 ${
            errors.email ? "border-red-500" : ""
          }`}
          placeholder="Enter your email"
        />
        <span className="h-4 text-red-500 text-sm block">
          {errors.email ? errors.email.message : ""}
        </span>
      </div>

     
      <div className="flex flex-col">
        <label htmlFor="password" className="text-[#a0f333] font-medium text-lg">
          Password
        </label>
        <div className="flex items-center border rounded-full border-black w-full md:w-2/3 p-2">
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="flex-grow p-2 focus:outline-none"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {passwordVisible ? (
              <AiOutlineEyeInvisible size={24} />
            ) : (
              <AiOutlineEye size={24} />
            )}
          </button>
        </div>
        <span className="h-4 text-red-500 text-sm block">
          {errors.password ? errors.password.message : ""}
        </span>
      </div>

      
      <div className="flex flex-col md:flex-row md:items-center justify-between md:w-2/3 w-full">
        <p className="text-[#cacaca] font-semibold text-sm">Remember me</p>
        <p className="bg-gradient-to-r from-[#8ede2d] to-[#597d49] text-transparent bg-clip-text font-semibold">
          Forgot password
        </p>
      </div>

      
      <button
        type="submit"
        className="p-4 md:w-2/3 w-full text-white bg-gradient-to-r from-[#597d49] to-[#8ede2d] border rounded-full shadow-lg flex justify-center items-center"
      >
        {loading ? (
          <ColorRing
            visible={true}
            height="20"
            width="20"
            ariaLabel="blocks-loading"
            colors={["#D3D3D3", "#F0F0F0", "#E0E0E0", "#F5F5F5", "#FFFFFF"]}
          />
        ) : (
          "Login"
        )}
      </button>

      
      <p className="h-4 text-red-500 text-sm mt-2">{error || ""}</p>
    </form>
  );
}
