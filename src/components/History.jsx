import React from "react";

import { Avatar, Container, Grid, IconButton, Typography } from "@mui/material";
import { DeleteForeverRounded, EditRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import user from "../store/user";

export default function History() {
  const historial = useSelector((state) => state.user.data.data.history);

  let historyArray = [];

  historial.forEach((arr) => {
    arr.forEach((obj) => {
      historyArray.push(obj);
    });
  });

  return (
    <>
      <h1>Mi historial de compras.</h1>
      <Container>
        <Grid
          container
          sx={{
            p: 3,
            backgroundColor: "rgb(231, 231, 231)",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <Grid item xs={12} sx={{ textAlign: "left", backgroundColor: "" }}>
            <Typography variant="h6" component="div" gutterBottom>
              Lista de Productos
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{ marginBottom:'20px' }}>
            <Grid
              container
              sx={{ border: "solid 2px black", borderRadius: "5px" }}
            >
              <Grid item xs={2}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Img
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Titulo
                </Typography>
              </Grid>

              
              <Grid item xs={4}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Precio
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Catidad
                </Typography>
              </Grid>


            </Grid>
          </Grid>

          <Grid item xs={12}>
            {historyArray.map((product, i) => (
              <>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  sx={{ marginBottom: "10px" }}
                >
                  <Grid item xs={2} aria-label="imagen">
                    <Avatar variant="square" src={product.image}></Avatar>
                  </Grid>

                  <Grid item xs={4}>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      gutterBottom
                    >
                      {product.title}
                    </Typography>
                  </Grid>

                  

                  <Grid item xs={4}>
                    {product.price}
                  </Grid>

                  <Grid item xs={2}>
                    {product.cantidad}
                  </Grid>

                </Grid>
              </>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
