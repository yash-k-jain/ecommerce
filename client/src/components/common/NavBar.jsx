import React, { useState } from "react";
import { Box, Typography, Button, Avatar, Menu, MenuItem } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";

import Cookies from "js-cookie";

import { toast } from "react-hot-toast";

import { useMutation, useQuery } from "react-query";

import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { mutate: logOut } = useMutation({
    mutationFn: async () => {
      try {
        const res = await fetch("/api/auth/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Failed to log out");
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    onSuccess: () => {
      toast.success("Logged out successfully");
      Cookies.set("isRegistered", false);
      navigate("/auth/login");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { data: authUser } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await fetch("/api/auth/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Failed to log out");
        }

        console.log(data);
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    retry: false,
  });

  const handleLogOut = () => {
    logOut();
  };

  const userNameInitial =
    authUser?.name && authUser.name.charAt(0).toUpperCase();
  return (
    <Box
      component="section"
      p={2}
      bgcolor={"#d4f7f9"}
      alignItems={"center"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "fantasy",
          fontWeight: "bold",
        }}
      >
        E-Commerce
      </Typography>
      <Box>
        {Cookies.get("isRegistered") === "false" ? (
          <>
            <Button
              onClick={() => navigate("/auth/register")}
              variant="outlined"
              sx={{ mr: 2 }}
            >
              Register
            </Button>
            <Button onClick={() => navigate("/auth/login")} variant="contained">
              Login
            </Button>
          </>
        ) : (
          <>
            <Box display={"flex"}>
              <Button
                id="avatar-btn"
                aria-controls={open ? "avatar-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Avatar sx={{ bgcolor: deepPurple[500] }}>
                  {userNameInitial}
                </Avatar>
              </Button>
              <Menu
                id="avatar-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "avatar-btn",
                }}
              >
                <MenuItem onClick={() => navigate("/cart")}>Cart</MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    handleLogOut();
                  }}
                >
                  Log Out
                </MenuItem>
              </Menu>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default NavBar;
