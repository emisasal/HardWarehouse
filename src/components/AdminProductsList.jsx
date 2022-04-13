import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useLocation } from "react-router"

import { Avatar, Container, Grid, IconButton, Typography, MobileStepper, Button } from "@mui/material"
import { DeleteForeverRounded, EditRounded, EditOffSharp } from "@mui/icons-material"

import { getProducts, getSingleProduct, deleteProduct } from "../store/products"
import {
  Star,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const AdminProductsList = () => {
  const products = useSelector(state => state.products.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const maxSteps = products.pages;
  
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getSingleProduct())
  }, [])

  const handleClickEdit = async (productId) => {
    await dispatch(getSingleProduct(productId))
    navigate("/admin/administrador/edit")
  }

    

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    dispatch(getProducts(activeStep + 2))
    
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    dispatch(getProducts(activeStep))
  };

  return (
    <>
      <Grid item xs={12}></Grid>
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

          <Grid item xs={12}>
            <Grid
              container
              sx={{ border: "solid 2px black", borderRadius: "5px" }}
            >
              <Grid item xs={1}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Img
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Titulo
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Categoria
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Precio
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Stock
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Editar
                </Typography>
              </Grid>

              <Grid item xs={1}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Eliminar
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            {products.map((product, i) => (
              <>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  sx={{ marginBottom: "10px" }}
                >
                  <Grid item xs={1} aria-label="imagen">
                    <Avatar variant="square" src={product.image}></Avatar>
                  </Grid>

                  <Grid item xs={2}>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      gutterBottom
                    >
                      {product.title}
                    </Typography>
                  </Grid>

                  <Grid item xs={2}>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      gutterBottom
                    >
                      {product.category}
                    </Typography>
                  </Grid>

                  <Grid item xs={2}>
                    {product.price}
                  </Grid>

                  <Grid item xs={2}>
                    <Grid container alignItems="center">
                      <Grid item xs={12}>
                        {" "}
                        <Typography variant="body2" gutterBottom>
                          {product.stock}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={2}>
                    <IconButton edge="end" aria-label="edit">
                    {location.pathname === "/admin/administrador" ?
                      <EditRounded onClick={() => {handleClickEdit(product._id)}} /> : <EditOffSharp />}
                    </IconButton>
                  </Grid>

                  <Grid item xs={1}>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteForeverRounded
                        onClick={() => {
                          dispatch(deleteProduct(product._id))
                        }}
                      />
                    </IconButton>
                  </Grid>
                </Grid>

              </>
            ))}
            {products.pages > 1 ? 
        (<MobileStepper
                   
                    variant="text"
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                      <Button
                        size="small"
                        onClick={() => handleNext()}
                        disabled={activeStep === maxSteps - 1}
                      >
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowLeft />
                        ) : (
                          <KeyboardArrowRight />
                        )}
                      </Button>
                    }
                    backButton={
                      <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                      >
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowRight />
                        ) : (
                          <KeyboardArrowLeft />
                        )}
                      </Button>
                    }
                    sx={{
                      marginTop: "20px",
                      
                    }}
                  />)
                  : <></>
        }
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default AdminProductsList
