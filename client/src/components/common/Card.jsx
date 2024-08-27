import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Badge,
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import Cookies from "js-cookie";

import { toast } from "react-hot-toast";

import { useMutation, useQuery } from "react-query";

const ExpandMore = styled(({ expand, ...other }) => {
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardComponent = ({
  product,
  expandedCard,
  setExpandedCard,
  quantity,
  handleQuantityChange,
}) => {
  const expanded = expandedCard === product.id;

  const handleExpandClick = () => {
    setExpandedCard(expanded ? null : product.id);
  };

  const { mutate: addToCart, isLoading: isAdding } = useMutation({
    mutationFn: async () => {
      try {
        const res = await fetch(`/api/cart`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: product.id,
            name: product.title,
            price: product.price,
            image: product.images[0],
            quantity,
          }),
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Failed to add product to cart");
        }

        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    onSuccess: () => {
      toast.success("Product added to cart");
      handleQuantityChange(-quantity + 1);
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleAddToCart = () => {
    if (Cookies.get("isRegistered") === "false") {
      toast.error("You must be logged in to add products to cart");
      console.log("unauthorized");
      return;
    }
    addToCart();
  };

  return (
    <Badge
      badgeContent={product.rating}
      color="secondary"
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Card
        sx={{
          maxWidth: 345,
          border: "1px solid lightgray",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {product.category.charAt(0)}
              </Avatar>
            }
            title={product.title}
            subheader={product.brand}
          />
          <CardMedia
            component="img"
            height="194"
            image={product.images[0]}
            alt={product.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Box
              mt={2}
              align="right"
              display={"flex"}
              gap={2}
              justifyContent={"flex-end"}
              alignItems={"center"}
            >
              <Typography
                align="right"
                sx={{ fontWeight: "bold", textDecoration: "line-through" }}
              >
                ₹{Math.floor(product.price)}
              </Typography>
              <Typography align="right" sx={{ fontWeight: "bold" }}>
                ₹
                {Math.floor(
                  product.price -
                    (product.price * product.discountPercentage) / 100
                )}
              </Typography>
            </Box>
            <Box>
              <Chip label={product.availabilityStatus} sx={{ m: ".5rem" }} />
              <Chip label={product.warrantyInformation} sx={{ m: ".5rem" }} />
              <Chip label={product.shippingInformation} sx={{ m: ".5rem" }} />
              <Chip label={product.returnPolicy} sx={{ m: ".5rem" }} />
            </Box>
          </CardContent>
        </div>
        <div>
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={2}
            gap={2}
          >
            <RemoveIcon
              sx={{
                border: "1px solid lightgray",
                borderRadius: "5px",
                padding: ".5rem",
                cursor: "pointer",
              }}
              onClick={() => handleQuantityChange(-1)}
            />
            <Typography sx={{ fontWeight: "bold" }}>{quantity}</Typography>
            <AddIcon
              sx={{
                border: "1px solid lightgray",
                borderRadius: "5px",
                padding: ".5rem",
                cursor: "pointer",
              }}
              onClick={() => handleQuantityChange(1)}
            />
          </Box>
          <CardActions disableSpacing sx={{ mt: "auto" }}>
            <Button variant="contained" onClick={handleAddToCart}>
              {isAdding ? "Adding..." : "Add to Cart"}
            </Button>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography
                sx={{ fontFamily: "fantasy", fontWeight: "bold" }}
                paragraph
              >
                Review:{" "}
              </Typography>
              {product.reviews.map((review, index) => (
                <>
                  <CardHeader
                    key={index}
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                      </Avatar>
                    }
                    title={review.reviewerName}
                    subheader={new Date(review.date).toLocaleDateString()}
                  />
                  <Typography paragraph>{review.comment}</Typography>
                  <hr />
                </>
              ))}
            </CardContent>
          </Collapse>
        </div>
      </Card>
    </Badge>
  );
};

export default CardComponent;
