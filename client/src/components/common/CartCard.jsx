import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Badge,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const CartCard = ({ product, deleteItem }) => {
  return (
    <Badge
      onClick={() => deleteItem(product.id)}
      badgeContent={
        <CloseIcon
          sx={{
            fontSize: "1rem",
            width: "16px",
            height: "16px",
            cursor: "pointer",
          }}
        />
      }
      color="primary"
      sx={{
        "& .MuiBadge-badge": {
          borderRadius: "50%",
          width: 20,
          height: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Card sx={{ display: "flex", maxWidth: 345 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography paragraph>{product.name}</Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Quantity: {product.quantity}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              mt={3}
            >
              Price Per Unit: {product.price}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={product.image}
          alt={product.name}
        />
      </Card>
    </Badge>
  );
};

export default CartCard;
