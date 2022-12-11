import Products from "./components/Products";
import Home from "./components/Home";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Profile from "./components/Profile"
import SingleProduct from "./components/SingleProduct";
import ThemeContext from "./context/ThemeContext";
import { useState, useEffect} from "react";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import AuthorizationForm from "./components/AuthorizationForm";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./actions/user";





function App() {
 
  const [theme, setTheme] = useState('bg-white');
  const [user, setUser] = useState({});
  const [totalCount, setTotalCount] = useState(0);

  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])
  
  

  return <BrowserRouter>
    <ThemeContext.Provider value={{ theme, setTheme, user, setUser, totalCount, setTotalCount}}>
      <Header totalCount={totalCount} />
    <Container className={`p-2 fluid ${theme}`}>
        <Row>
            <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products totalCount={totalCount} setTotalCount={setTotalCount} />}></Route>
            <Route path="/products/:id" element={<SingleProduct />}></Route>
            {!isAuth && <Route path="/registartion" element={<RegistrationForm />}></Route>}
            <Route path="/authorization" element={<AuthorizationForm />}></Route>
            <Route path="/cart" element={<Cart totalCount={totalCount} setTotalCount={setTotalCount} />}></Route>  
            <Route path="*" element={<h1>Page not found</h1>}></Route>
            </Routes>
        </Row>
      </Container>
      <Footer />
    </ThemeContext.Provider>
     
  </BrowserRouter>
    
        
    
}
  

export default App;
