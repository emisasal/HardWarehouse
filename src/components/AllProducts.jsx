import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts, getProducts } from "../store/products";
import { Container, Grid, MobileStepper, Button } from "@mui/material";
import CardProduct from "../commons/CardProduct";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router";
import { useSelect } from "@mui/base";
import {
  Star,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";


function AllProducts() {
  const { category } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const searchedProducts = useSelector((state) => state.products.search);

  
  const maxSteps = allProducts.pages;
  
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  
  useEffect(() => {
    setActiveStep(0)
    if (location.pathname === `/productos`) dispatch(getProducts());
    else dispatch(getCategoryProducts(category));
  }, [location]);
  

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (location.pathname === `/productos`) dispatch(getProducts(activeStep + 2))
    else dispatch(getCategoryProducts(category))
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    dispatch(getProducts(activeStep))
  };

  return (
    <div className="marginContainer">
      <Container>
        <Grid container spacing={2}>
          {(location.pathname === "/search"
            ? searchedProducts
            : allProducts.data
          ).map((product) => (
            <Grid item xs={3}>
              <Link
                to={`/producto/${product._id}`}
                style={{ textDecoration: "none" }}
              >
                <CardProduct
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
        {allProducts.pages > 1 ? 
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
      </Container>
    </div>
  );
}

export default AllProducts;
