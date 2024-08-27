import React, { useState, useEffect } from "react";
import { Box, Typography, FormControl, Input, Button } from "@mui/material";
import Cookies from "js-cookie";

import { useNavigate } from "react-router-dom";

import { useMutation } from "react-query";

import { toast } from "react-hot-toast";

const Register = ({ user: formData, setUser: setFormData, isLoading }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   register();
  // };

  useEffect(() => {
    if (Cookies.get("isRegistered") === "true") {
      navigate("/");
    }
  }, []);

  return (
    <Box
      width={"40%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      m={"2rem auto"}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", fontFamily: "fantasy" }}
      >
        Register
      </Typography>
      <form style={{ width: "100%" }}>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <Input
            id="email"
            name="email"
            type="email"
            aria-describedby="my-helper-text"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>
        <Box width={"100%"} display={"flex"} flexDirection={"row"} gap={"1rem"}>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <Input
              id="password"
              name="password"
              type="password"
              aria-describedby="my-helper-text"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <Input
              id="name"
              name="name"
              type="text"
              aria-describedby="my-helper-text"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>
        </Box>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <Input
            id="phone"
            name="phone"
            type="number"
            aria-describedby="my-helper-text"
            placeholder="Enter your Number"
            value={formData.phone}
            onChange={handleChange}
          />
        </FormControl>
        {/* <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          {isLoading ? "Loading..." : "Register"}
        </Button> */}
      </form>
    </Box>
  );
};

export default Register;
