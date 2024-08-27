import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useQuery } from "react-query";
import Card from "../components/common/Card";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expandedCard, setExpandedCard] = useState(null);

  const { data: products, isLoading: isLoadingProducts } = useQuery({
    queryKey: ["products-list", selectedCategory],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products${
            selectedCategory ? `/category/${selectedCategory}` : ""
          }?limit=100`
        );
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch products");
        }

        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });

  const { data: productCategories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ["products-category"],
    queryFn: async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/categories`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch product categories");
        }

        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const [quantity, setQuantity] = useState({});

  React.useEffect(() => {
    if (products) {
      const initialQuantities = products.products.reduce((acc, product) => {
        acc[product.id] = 1;
        return acc;
      }, {});
      setQuantity(initialQuantities);
    }
  }, [products]);
  

  const handleQuantityChange = (delta, productId) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: Math.max(1, prevQuantity[productId] + delta),
    }));
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Products</h1>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={selectedCategory}
            onChange={handleChange}
            label="Category"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {productCategories?.map((category, index) => (
              <MenuItem key={index} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <hr />

      {products?.products.length === 0 && <p>No products found</p>}
      {isLoadingProducts ? (
        <p>Loading products...</p>
      ) : (
        <Box m={2} display="flex" flexWrap="wrap" gap={3}>
          {products?.products.map((product, index) => (
            <Card
              key={index}
              product={product}
              expandedCard={expandedCard}
              setExpandedCard={setExpandedCard}
              quantity={quantity[product.id]}
              handleQuantityChange={(delta) => handleQuantityChange(delta, product.id)}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Home;
