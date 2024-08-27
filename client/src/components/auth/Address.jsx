import React from "react";

import { Box, Typography, FormControl, Input, Button } from "@mui/material";

const Address = ({ user: formData, setUser: setFormData, isLoading }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        Set Your Address
      </Typography>
      <form style={{ width: "100%" }}>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <Input
            id="line1"
            name="line1"
            type="text"
            aria-describedby="my-helper-text"
            placeholder="Enter your Address line 1"
            value={formData.line1}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <Input
            id="postal"
            name="postal"
            type="number"
            aria-describedby="my-helper-text"
            placeholder="Enter your Postal Code"
            value={formData.postal}
            onChange={handleChange}
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
            />
          </FormControl>
        </Box>
        {/* <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          {isLoading ? "Loading..." : "Register"}
        </Button> */}
      </form>
    </Box>
  );
};

export default Address;
