import axios from "axios"

export const allProductsService = async (page) => {
  
  const allProducts = await axios({
    method: "GET",
    withCredentials: true,
    url: `http://localhost:3001/products/showProducts?page=${page}`
  })
  return allProducts.data
}

export const singleProductService = async id => {
  const singleProduct = await axios({
    method: 'GET',
    withCredentials: true,
    url: `http://localhost:3001/products/showOne/${id}`
  })
  return singleProduct.data
}

export const categoriesProductService = async category => {
  const categoryProducts = await axios({
    method: 'GET',
    withCredentials:true,
    url: `http://localhost:3001/products/showCategoryProducts?category=${category}`
  })
  return categoryProducts.data
}

export const postProductService = async (product) => {
  const postProduct = await axios({
    method: "POST",
    data: {
    title: product.title,
    author: product.author,
    category: product.category,
    stock: product.stock,
    price: product.price,
    image: product.image,
    details: product.details,
    tags: product.tags
    },
    withCredentials: true,
    url: `http://localhost:3001/products/add`
  })
  return postProduct.data
}



export const searchProductsByTitle = async ({title}) => {
  const searchedProducts =  await axios({
    method: "GET",
    withCredentials: true,
    url: `http://localhost:3001/products/searchByTitle/${title}`,
  })
  return searchedProducts.data.docs
}

export const editProductService = async (product) => {
  console.log("ID", product.id)
  const editProduct = await axios({
    method: "PUT",
    data: {
      title: product.title,
      category: product.category,
      stock: product.stock,
      price: product.price,
      image: product.image,
      details: product.details,
      tags: product.tags
      },
    withCredentials: true,
    url: `http://localhost:3001/products/update/${product.id}`
  })
  return editProduct.data
}

export const deleteProductService = async (id) => {
  const deleteProduct = await axios({
    method: "DELETE",
    withCredentials: true,
    url: `http://localhost:3001/products/delete/${id}`
  })
  return id
}

export const getProductByTagSercive = async (tag) => {
  const tagProducts = await axios({
    method: 'GET',
    withCredentials:true,
    url: `http://localhost:3001/products/searchByTags?tags=${tag}`
  })
  
  return tagProducts.data.docs
}