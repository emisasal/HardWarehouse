import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import React from "react";

function CardProduct({ image, title, price, rate }) {
  return (
    <div className="cardContainer">
      
        <h4 className="cardTitle">{title}</h4>
        
        <CardMedia
          sx={{
            height: '100%'
          }}
          component="img"
          image={image}
          alt={title}
        />
      <div>
        <h4 size="small">Precio: $ <span>{price}</span></h4>
        <h5 size="small">valoracion:{rate}</h5>
      </div>
      

      
    </div>
  );
}

export default CardProduct;
