import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Container, Grid, Typography } from "@mui/material"
import { getProducts } from "../store/products"

import CardProduct from "../commons/CardProduct"
import Carousel from 'react-elastic-carousel'


const Novedades = () => {
  const breakPoints = [
    {width: 500, itemsToShow: 1},
     {width: 868, itemsToShow: 3},
  
  ]

  const dispatch = useDispatch()
  const products = useSelector(state => state.products.data)
    
  const novedades = products.slice(-9)

  useEffect(() => {
    dispatch(getProducts())
    
  }, [])
  return (
    <>
      <div className="marginContainer">
        <Container >
          <Typography
            variant="subtitle1"
            sx={{ mx: "auto", width: 200, marginBottom: "25px", textAlign: 'center' }}
            >
            <p className="titulosModulosHome">NOVEDADES</p>
          </Typography>

          <Grid container spacing={0}>
            <Carousel breakPoints = {breakPoints} itemsToScroll={3}>
  
  
            {novedades.map(product => (
              <Grid key={product.id} item >
                <Link to={`/producto/${product._id}`} style={{ textDecoration: 'none' }}>
                  <CardProduct
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    rate={product.rating.rate}
                    />
                </Link>
              </Grid>
            ))}
            </Carousel>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default Novedades
