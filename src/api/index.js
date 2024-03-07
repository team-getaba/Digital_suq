import axios from "axios";
axios.defaults.baseURL = "http://192.168.137.114:8000"; // Replace with your main domain

const token = localStorage.getItem("token");

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export const LoginApi = async (phone, psw) => {
  try {
    const formData = new FormData();
    formData.append("username", phone);
    formData.append("password", psw);
    // You can append more form data as needed

    const response = await axios.post("/login", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // Handle the response from the server
    response?.data?.access_token &&
      localStorage.setItem("token", response?.data?.access_token);
    return response.data;
    // You can also perform additional actions based on the response, such as redirecting the user.
  } catch (error) {
    // Handle any errors that occurred during the request
    return error;
  }
};

export const SignUpApi = async (
  first_name,
  last_name,
  phone,
  location,
  role,
  psw
) => {
  try {
    const formData = new FormData();
    formData.append("firstName", first_name);
    formData.append("lastName", last_name);
    formData.append("phone", phone);
    formData.append("role", role);
    formData.append("location", location);
    formData.append("password", psw);
    // You can append more form data as needed

    const response = await axios.post("/signup", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // Handle the response from the server
    response?.data?.access_token &&
      localStorage.setItem("token", response?.data?.access_token);
    return response.data;
    // You can also perform additional actions based on the response, such as redirecting the user.
  } catch (error) {
    // Handle any errors that occurred during the request
    return error;
  }
};

export const catagoryList = async () => {
  const res = await axios.get("/catagory");
  return res;
};

export const catagorySpecfic = async (cattype) => {
  const res = await axios.get(`/catagory/${cattype}`);
  return res;
};