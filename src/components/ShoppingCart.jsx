import React from "react";

import { useNavigate } from "react-router";

import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import {
  DeleteForeverRounded,
  AddRounded,
  RemoveRounded,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseDecreaseCart } from "../store/user";

function ShoppingCart() {
  const cart = useSelector((state) => state.user.data.data.carrito);
  const user = useSelector((state) => state.user);
  const productos = useSelector((state) => state.products.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.cantidad;
  };
  const total = cart.reduce(addition, 0);

  const removeFormCart = (productId) => {
    dispatch(removeFromCart({ id: user.data.data._id, productId: productId }));
  };
  return (
    <>
      <Grid
        container
        sx={{ margin: "80px 0px", alignItems: "center", color: "#13ffd5" }}
      >
        <Grid item xs={4} sx={{ textAlign: "right" }}>
          <ShoppingCartOutlined sx={{ fontSize: "80px" }} />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h4" component="div" gutterBottom>
            Bienvenido a tu Carrito de compras {user.data.data.fullName}
          </Typography>
        </Grid>
      </Grid>

      <Container>
        <Grid
          container
          spacing={3}
          sx={{
            backgroundColor: "rgb(231, 231, 231)",
            textAlign: "center",
            border: "solid 2px black",
            borderRadius: "10px",
          }}
        >
          <Grid item xs={12} sx={{ textAlign: "left" }}>
            <Typography variant="h6" component="span" gutterBottom>
              Descipción de tu pedido:
              <Divider />
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={5} sx={{ textAlign: "left" }}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Producto
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Precio
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Cantidad
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Subtotal
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
            </Grid>
          </Grid>

          {!cart[0] ? (
            <Grid item xs={12}>
              <Typography variant="subtitle1" component="div" gutterBottom>
                No hay ningun producto en tu carrito de compras
              </Typography>
            </Grid>
          ) : (
            cart.map((producto) => (
              <Grid item xs={12}>
                <Grid
                  container
                  alignItems="center"
                  sx={{
                    marginBottom: "10px",
                    backgroundColor: "white",
                    width: "98%",
                  }}
                >
                  <Grid item xs={1}>
                    <Avatar variant="square" src={producto.image}></Avatar>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      gutterBottom
                    >
                      {producto.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    ${producto.price}
                  </Grid>
                  <Grid item xs={2}>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        {" "}
                        <IconButton edge="end" aria-label="delete">
                          <RemoveRounded
                            onClick={() => {
                              let cantidad = producto.cantidad - 1;
                              if (cantidad === 0) {
                                removeFormCart(producto.product);
                              } else if (cantidad >= 1) {
                                dispatch(
                                  increaseDecreaseCart({
                                    id: user.data.data._id,
                                    productId: producto.product,
                                    cantidad,
                                  })
                                );
                              }
                            }}
                          />
                        </IconButton>
                      </Grid>
                      <Grid item xs={4}>
                        {" "}
                        <Typography variant="body2" gutterBottom>
                          {producto.cantidad}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        {" "}
                        <IconButton edge="end" aria-label="add">
                          <AddRounded
                            onClick={() => {
                              let stock = productos.find(
                                (item) => item._id === producto.product
                              ).stock;
                              console.log("STOCK", stock);
                              let cantidad = producto.cantidad + 1;
                              if (cantidad > stock)
                                return alert(
                                  "Se ha alcanzado el limite de stock para este producto."
                                );
                              dispatch(
                                increaseDecreaseCart({
                                  id: user.data.data._id,
                                  productId: producto.product,
                                  cantidad,
                                })
                              );
                            }}
                          />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={2}>
                    ${producto.price * producto.cantidad}
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteForeverRounded
                        onClick={() => {
                          removeFormCart(producto.product);
                        }}
                      />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            ))
          )}

          <Grid
            container
            sx={{ margin: "30px 30px", justifyContent: "center" }}
          >
            {cart.length === 0 ? (
              <>
                <Grid item xs={6} sx={{ textAlign: "rigth" }}>
                  <Typography variant="h5" component="span" gutterBottom>
                    <Divider />
                    Total a pagar
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Divider />

                  <Typography variant="h5" component="span" gutterBottom>
                    no hay productos
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={() => {
                      navigate("/productos");
                    }}
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "#13ffd5",
                      marginBottom: "20px",
                      color: "black",
                    }}
                  >
                    ir a productos
                  </Button>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={6} sx={{ textAlign: "rigth" }}>
                  <Typography variant="h5" component="span" gutterBottom>
                    <Divider />
                    Total a pagar
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Divider />

                  <Typography variant="h5" component="span" gutterBottom>
                    $ {total}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={() => {
                      navigate("/carrito/checkout");
                    }}
                    variant="contained"
                    size="large"
                    sx={{
                      textDecoration: "none",
                      backgroundColor: "#13ffd5",
                      marginBottom: "20px",
                      color: "black",
                    }}
                  >
                    Checkout
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ShoppingCart;
