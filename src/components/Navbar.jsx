import * as React from "react";
import { Link } from "react-router-dom";
import { BiCartAlt, BiSearchAlt2 } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { sendLogoutRequest, persistUser } from "../store/user";
import { searchProducts } from "../store/products";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import useInput from "../hooks/useInput";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { alertLogout } from "../utils/alerts";


const Navbar = () => {
  
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  const search = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data);
  const products = useSelector((state) => state.products.data);

  
  useEffect(() => {
    dispatch(persistUser());
  }, []);

  const logOut = () => {
    dispatch(sendLogoutRequest());
    alertLogout();
    navigate("/");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchProducts({ title: search.value }));
    navigate("/search");
  };

  return (
    <nav>
      <div className="navbarContainer">
        <div className="navbar">
          <div className="logo">
            <Link to="/" className="categorias">
              <h3>Hard-WareHouse</h3>
            </Link>
          </div>
          <div className="cartNavContainer">
          {user.data && user.data.admin ? (
              <Link className="log_reg" to="/admin/administrador">
              Panel Administrador
            </Link>
            ) : <></>}
          </div>
          <div className="cartNavContainer">
            <BiSearchAlt2 className="searchIcon" />
            <form onSubmit={handleSearch}>
              <input {...search} type="text" />
            </form>
            {user.data ? (
              <button onClick={logOut} className="log_reg">
                LogOut
              </button>
            ) : (
              <Link className="log_reg" to="login">
                LogIn
              </Link>
            )}
            {user.data ? (
              <Link className="historyLink" to='/miHistorial'>{user.data.fullName}</Link>
            ) : (
              <Link className="log_reg" to="registro">
                Sign Up
              </Link>
            )}
            {user.data ?
            (<Link to="/carrito">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={user.data ? user.data.carrito.length : 0} color="primary">
                  <ShoppingCartIcon className="cartIcon" />
                </StyledBadge>
              </IconButton>
            </Link>)
            :
            <></>
          
          }
          </div>
        </div>
        <div>
          <div className="navbarCategorias">
            <Link className="categorias" to="productos">
              <h5>PRODUCTOS</h5>
            </Link>
            <Link className="categorias" to="productos/componentes">
              <h5>Componentes</h5>
            </Link>
            <Link className="categorias" to="productos/equipos armados">
              <h5>Equipos armados</h5>
            </Link>
            <Link className="categorias" to="productos/notebooks">
              <h5>Notebooks</h5>
            </Link>
            <Link className="categorias" to="productos/monitores">
              <h5>Monitores</h5>
            </Link>
            <Link className="categorias" to="productos/perifericos">
              <h5>Periféricos</h5>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
