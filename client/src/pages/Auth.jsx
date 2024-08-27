import React from "react";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";

import { useParams } from "react-router-dom";

import { useMutation } from 'react-query'
import Address from "../components/auth/Address";
import StepperComponent from "../components/common/Stepper";

const Auth = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    line1: "",
    postal: "",
    city: "",
    state: "",
    country: "",
  });

  const { mutate: register, isLoading } = useMutation({
    mutationFn: async () => {
      try {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Failed to register");
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    onSuccess: () => {
      toast.success("Registered successfully");
      setFormData({
        ...formData,
        email: "",
        password: "",
        name: "",
        phone: "",
      });
      navigate("/");
      Cookies.set("isRegistered", true);
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { type } = useParams();
  return <>{type === "register" ? <Register user={user} setUser={setUser} register={register} isLoading={isLoading} /> : <Login />}</>;
};

export default Auth;
