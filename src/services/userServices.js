import axios from "axios";

export const userLoginService = async ({ email, password }) => {
  const user = await axios({
    method: "POST",
    data: { email, password },
    withCredentials: true,
    url: "http://localhost:3001/users/login",
  });

  return user;
};

export const userRegisterService = async ({ fullName, email, password, admin }) => {
  const user = await axios({
    method: "POST",
    data: { fullName, email, password, admin },
    withCredentials: true,
    url: "http://localhost:3001/users/register",
  });

  return user;
};

export const userLogoutService = async () => {
  const log = await axios({
    method: "POST",
    withCredentials: true,
    url: "http://localhost:3001/users/logout",
  })
  
  return log
};

export const persistUserService = async () => {
  const user = await axios({
    method: "GET",
    withCredentials: true,
    url: "http://localhost:3001/users/me",
  });

  return user;
};

export const addCartUserService = async ({id, productId, cantidad, title, price, image} ) => {
  productId = String(productId)
  const user = await axios ({
    method: 'POST',
    data: { productId, cantidad, title, price, image },
    withCredentials: true,
    url: `http://localhost:3001/cart/add/${id}`
  })

  return user
}

export const removeCartService = async ({id, productId}) => {
    const cart = await axios({
    method: 'DELETE',
    withCredentials: true,
    url: `http://localhost:3001/cart/remove/${id}/${productId}`
  })

  return cart


}
export const increaseDecreaseCartService = async ({id, productId, cantidad }) => {

  const cart = await axios ({
    method: 'POST',
    data: { productId, cantidad },
    withCredentials: true,
    url: `http://localhost:3001/cart/modify/${id}`
  })

  return cart
}

export const buyCartService = async ({id}) => {

  const cart = await axios ({
    method: 'PUT',
    data: { id },
    withCredentials: true,
    url: `http://localhost:3001/cart/buy/${id}`
  })

  return cart
}




  

