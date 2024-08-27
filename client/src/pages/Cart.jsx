import React from "react";

import { Box } from "@mui/material";

import { useQuery, useMutation, useQueryClient } from "react-query";
import CartCard from "../components/common/CartCard";

import { toast } from "react-hot-toast";
import PriceCard from "../components/common/PriceCard";

const Cart = () => {
  const queryClient = useQueryClient();

  const { data: cartProducts, isLoading } = useQuery({
    queryKey: ["cartProducts"],
    queryFn: async () => {
      try {
        const res = await fetch(`/api/cart`);

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch cart products");
        }

        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });

  const { mutate: deleteItem } = useMutation({
    mutationFn: async (productId) => {
      try {
        const res = await fetch(`/api/cart`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId,
          }),
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Failed to delete product from cart");
        }

        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    onSuccess: () => {
      toast.success("Product deleted from cart");
      queryClient.invalidateQueries("cartProducts");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  if (isLoading) return <p>Loading Cart ...</p>;

  return (
    <>
      <Box m={2} display={"flex"}>
        <Box>
          {cartProducts.length > 0 &&
            cartProducts.map((product, index) => (
              <Box display={"flex"} m={2} key={index}>
                <CartCard product={product} deleteItem={deleteItem} />
              </Box>
            ))}
        </Box>
        <PriceCard products={cartProducts} />
      </Box>
    </>
  );
};

export default Cart;
