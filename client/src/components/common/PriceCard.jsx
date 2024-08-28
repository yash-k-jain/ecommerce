import React from "react";
import { Box, Typography, Button } from "@mui/material";

import { useMutation, useQuery } from "react-query";

import { loadStripe } from "@stripe/stripe-js";

const PriceCard = ({ products }) => {
  const { data: authUser } = useQuery({ queryKey: ["authUser"] });

  const placeOrder = useMutation({
    mutationFn: async () => {
      try {
        const res = await fetch(`/api/payment/create-checkout-session`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            products,
            customer: {
              name: authUser?.name,
            },
          }),
        });

        const session = await res.json();
        if (!res.ok) {
          throw new Error(session.error || "Failed to create checkout session");
        }

        return session;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });

  const handlePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51Oc8PISEwbtQwPkUVV1ZChb5f6n4QGo2fSRzBvKe5alkVQmhBf5ErhaviPJmD9oLb5XvsTeuYOKVKdNqrVIyiUfH00y743Gtp0"
    );

    const session = await placeOrder.mutateAsync();
    
    if (session?.id) {
      await stripe.redirectToCheckout({ sessionId: session.id });
    } else {
      console.error("Failed to create Stripe checkout session.");
    }
  };

  const totalPrice = products.reduce((acc, curr, index) => {
    // Check if curr is valid and has a price
    if (curr && typeof curr === "object" && "price" in curr) {
      const productQuantity = products[index]?.quantity || 0; // Default to 0 if quantity is not found
      return acc + curr.price * productQuantity;
    }
    return acc; // Return accumulated value if curr is not valid
  }, 0); // Start with 0 to ensure acc is a number

  if (products.length === 0) {
    return <>No products</>;
  }

  return (
    <Box m={2} p={2} width={"70%"}>
      <Typography variant="h4">Total Price Checkout</Typography>

      {products.map((product, index) => (
        <Box
          key={index}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={2}
        >
          <Box mt={2}>
            <Typography variant="h5">{product?.name}</Typography>
            <Typography paragraph>Price: {product?.price}</Typography>
            <Typography paragraph>Quantity: {product?.quantity}</Typography>
          </Box>
          <Box>
            <Typography paragraph>
              {product?.price * product.quantity}
            </Typography>
          </Box>
        </Box>
      ))}
      <Box width={"100%"} mt={2} display={"flex"} justifyContent={"flex-end"}>
        <Button onClick={handlePayment} variant="contained">
          Checkout ${Math.round(totalPrice)}
        </Button>
      </Box>
    </Box>
  );
};

export default PriceCard;
