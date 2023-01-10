import { useEffect, useState, useContext} from "react";
import Product from "./Product"
import { Navigate, Outlet } from "react-router-dom";
import { Col, Pagination } from "react-bootstrap";
import ThemeContext from "../context/ThemeContext" 
import axios from "axios";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { cartUpdate } from "../actions/user";


function Products({ totalCount, setTotalCount }) {
    
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pagesArray, setPagesArray] = useState([]);
    const [total, setTotal] = useState(0);
    const [limit, setLimit] = useState(4);
    const [cartItemsArray, setCartItemsArray] = useState([]);
    const [newCartUpdate, setNewCartUpdate] = useState('');
    const [productUpdate, setProductUpdate] = useState('');


    const userCart = useSelector(state => state.user.userCart);
    const dispatch = useDispatch()

 

    useEffect(() => {
        dispatch(cartUpdate())
    }, [newCartUpdate])

    useEffect(() => {
        setCartItemsArray(userCart.map(item => item.product));

    }, [userCart])

    const addToCart = async (product, quantity) => {
        const accessToken = localStorage.access
         try {
             const response = await axios.post(`https://sea-lion-app-fv7pa.ondigitalocean.app/api/cart/`,
                 {
                     product,
                     quantity
                 }, {
                 headers: {
                     'Authorization': 'Bearer ' + accessToken,
                     'Content-Type': 'application/json'
                 }
             })
             setNewCartUpdate(response.data)
         } catch (error) {
             console.log(error.response.data.message)
     }
}

   
    useEffect(() => {
        fetch(`https://sea-lion-app-fv7pa.ondigitalocean.app/api/products/?page=${currentPage}`).then(res => res.json()).then(data => {
            setProducts(data.results.map(product => ({ ...product, quantity: 1 })));
            console.log(data);
            const limit = 8;
            let pages = data.count / limit;
            if (data.count % limit) { pages += 1 };
            let temp = [];
            for (let item = 1; item <= pages; item++) {
            temp.push(item);}
            setPagesArray(temp);
        })
           
    }, [currentPage, productUpdate]);

    

    return <>
        <Col xs={12}><div className="mt-4 mb-4 d-flex justify-content-center">
            <button type="button" className="btn btn-secondary m-1">See all</button>
            <button type="button" className="btn btn-secondary m-1">White and black</button>
            <button type="button" className="btn btn-secondary m-1">Vintage</button>
            <button type="button" className="btn btn-secondary m-1">City illustartion</button>
            <button type="button" className="btn btn-secondary m-1">Children's illustartion</button>
        </div></Col>

        {products.map(product =>
            <Product 
                product={product}
                key={product.id}
                currentId={product.id}
                addToCart={addToCart}
                setNewCartUpdate={setNewCartUpdate}
                cartItemsArray={cartItemsArray}
                setProductUpdate={setProductUpdate} />)}

        <Col xs={12} className={'mt-4'}>
            <Pagination>
            {pagesArray.map(item=><Pagination.Item key={item} active={item === currentPage} activeLabel={''} onClick={()=>setCurrentPage(item)}>
            {item}
            </Pagination.Item>)}
        </Pagination> 
        </Col> 
      
        
    </>
}

export default Products;