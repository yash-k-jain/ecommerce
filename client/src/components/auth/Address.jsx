import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { useMutation, useQuery } from "react-query";

import { toast } from "react-hot-toast";

import { Box, Typography, FormControl, Input, Button } from "@mui/material";

const Address = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    line1: "",
    postalCode: "",
    city: "",
    state: "",
    country: "",
  });

  const { data: address } = useQuery({
    queryKey: ["address"],
    queryFn: async () => {
      try {
        const res = await fetch("/api/auth/get-address");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Failed to fetch address");
        }
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });

  const { mutate: addAddress, isLoading } = useMutation({
    mutationFn: async (address) => {
      try {
        const res = await fetch(`/api/auth/set-address`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ address }),
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    onSuccess: () => {
      toast.success("Address added successfully");
      navigate("/");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAddress(formData);
  };

  useEffect(() => {
    if (Cookies.get("isRegistered") === "false") {
      navigate("/auth/login");
      toast.error("You must be logged in to add address");
    } else if (address?.isUploaded === true) {
      setFormData({
        ...formData,
        line1: address.line1,
        postalCode: address.postalCode,
        city: address.city,
        state: address.state,
        country: address.country,
      });
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
        Add Address
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <Input
            id="line1"
            name="line1"
            type="text"
            aria-describedby="my-helper-text"
            placeholder="Enter your Address Line 1"
            value={formData.line1}
            onChange={handleChange}
            required
          />
        </FormControl>

        <FormControl fullWidth sx={{ mt: 2 }}>
          <Input
            id="postalCode"
            name="postalCode"
            type="number"
            aria-describedby="my-helper-text"
            placeholder="Enter your Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </FormControl>

        <Box width={"100%"} display={"flex"} flexDirection={"row"} gap={"1rem"}>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <Input
              id="city"
              name="city"
              type="text"
              aria-describedby="my-helper-text"
              placeholder="Enter your City"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <Input
              id="state"
              name="state"
              type="text"
              aria-describedby="my-helper-text"
              placeholder="Enter your State"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <Input
              id="country"
              name="country"
              type="text"
              aria-describedby="my-helper-text"
              placeholder="Enter your Country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </FormControl>
        </Box>
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          {isLoading
            ? "Loading..."
            : address?.isUploaded
            ? "Update"
            : "Add Address"}
        </Button>
      </form>
    </Box>
  );
};

export default Address;
