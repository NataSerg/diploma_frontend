import Products from "./components/Products";
import Home from "./components/Home";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Profile from "./components/Profile"
import SingleProduct from "./components/SingleProduct";
import ThemeContext from "./context/ThemeContext";
import { useState, useEffect} from "react";
// import Notifications from "./components/Notifications";
import Cart from "./components/Cart";
// import DataProductsContext from "./context/DataProductsContext";




function App() {
 
  const [theme, setTheme] = useState('bg-white');
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  console.log(user);

  useEffect(() => {
        if (localStorage.getItem('shop_user')) {
            const savedUser = JSON.parse(localStorage.getItem('shop_user'))
            setUser(savedUser);
        }
    localStorage.setItem('shop_user', JSON.stringify({...user}));
    
  }, []);

  return <BrowserRouter>
    <ThemeContext.Provider value={{ theme, setTheme, user, setUser, products, setProducts, totalCount, setTotalCount}}>
      <Header totalCount={totalCount} />
    <Container className={`p-2 ${theme}`}>
        <Row>
            <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products products={products} setProducts={setProducts} totalCount={totalCount} setTotalCount={setTotalCount} />}>
                <Route path={":productId"} element={<SingleProduct />}></Route>
            </Route>
            <Route path="/registartion" element={<Profile user={user} setUser={setUser}/>}></Route>
            <Route path="/cart" element={<Cart products={products} setProducts={setProducts}
              totalCount={totalCount} setTotalCount={setTotalCount} />}></Route>  
            <Route path="*" element={<h1>Page not found</h1>}></Route>
            </Routes>
        </Row>
      </Container>
    </ThemeContext.Provider>
      
  </BrowserRouter>
    
        
    
}
  

export default App;
