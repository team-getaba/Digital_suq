import React from "react";
import { LoginApi } from "../api/index";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
// import { userDeatil } from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [phone, setPhone] = React.useState();
  const [psw, setPsw] = React.useState();
  const navigate = useNavigate();

  const MakeLogin = async () => {
    const res = await LoginApi(phone, psw);
    console.log(res.fname, res.lname);
    localStorage.setItem("username", res.fname + " " + res.lname);
    localStorage.setItem("userId", res.user_id);
    localStorage.setItem("role", res.role);
    res.access_token
      ? // ? res.role == "Buyer"
        //   ? navigate("/dembegnapost")
        //   : navigate("/balesuk")
        // navigate("/balesuk", '')
        (window.location.href = "/balesuk")
      : // : navigate("/balesuk")
        // alert(res.msg);
        toast(res.msg);
  };

  const img_link = [
    "https://media.istockphoto.com/id/1426596365/photo/happy-black-woman-texting-on-cell-phone-while-shopping-in-the-city.webp?b=1&s=170667a&w=0&k=20&c=yV2mubkhp5gB6PYp4bynZYHaXJn-trVW_IwfWemk3Y4=",
    "https://media.istockphoto.com/id/1281338582/photo/happy-pretty-lady-about-to-enter-the-mall-for-shopping.jpg?s=612x612&w=0&k=20&c=SkwkDvF_XkOMAAX0GFIzGu2-jQWL1MkgShDCY5tokk8=",
  ];

  return (
    <div className="flex justify-center items-center h-screen flex-row">
      <div className="w-full h-full bg-blue-300 hidden md:block">
        <img
          src={img_link[1]}
          alt="login img"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="flex justify-center items-center h-screen flex-col w-full">
        <h1 className="text-4xl mb-8">DigitalSuq</h1>
        <h2 className="text-xl mb-2">Login</h2>
        <form className="w-full max-w-lg p-8 ">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-phone"
              >
                Phone Number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-phone"
                type="tel"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="09-102-030-40"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                onChange={(e) => setPsw(e.target.value)}
                placeholder="******************"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={MakeLogin}
            >
              Login
            </button>
          </div>
          <p className="text-sm mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-green-500 hover:text-green-700">
              Signup
            </a>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
