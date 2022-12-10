import { useEffect, useState, useContext} from "react";
import Product from "./Product"
import { Navigate, Outlet } from "react-router-dom";
import { Col, Pagination } from "react-bootstrap";
import ThemeContext from "../context/ThemeContext"
import "./Products.css";


function Products({ totalCount, setTotalCount }) {
    
    const [products, setProducts] = useState([]);
    const [registartionFlag, setRegistartionFlag] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pagesArray, setPagesArray] = useState([]);
    const [total, setTotal] = useState(0);
    const [limit, setLimit] = useState(4);
    const { setAlert } = useContext(ThemeContext);


   
    useEffect(() => {
        fetch("https://sea-lion-app-fv7pa.ondigitalocean.app/api/products/").then(res => res.json()).then(data => {
            setProducts(data.results.map(product => ({ ...product, addedToCart: false, count: 1 })));
            console.log(data);
        })
           
    }, []);

    useEffect(() => {
        setTotal(products.length);
        let pages = total / limit;
            if (total % limit) { pages += 1 };
            let temp = [];
            for (let item = 1; item <= pages; item++) {
            temp.push(item);}
            setPagesArray(temp);
        
    }, [products])
    
   
    

    useEffect(() => {
        const newTotalCount = (products.filter(product => product.addedToCart)).reduce((acc, product) => acc + product.count, 0);
        setTotalCount(newTotalCount);

        localStorage.setItem("cart", JSON.stringify(products.filter(product => product.addedToCart)));
    }, [products]);

    const addToCart = id => {
        console.log(id);
        setProducts(products.map(product => product.id === id ? { ...product, addedToCart: true } : { ...product })); 
        setAlert('Product is added to cart');
    }

    
    return <>
        <Col xs={12}><div className="mt-4 mb-4 d-flex justify-content-center">
            <button type="button" className="btn btn-secondary m-1">See all</button>
            <button type="button" className="btn btn-secondary m-1">White and black</button>
            <button type="button" className="btn btn-secondary m-1">Vintage</button>
            <button type="button" className="btn btn-secondary m-1">City illustartion</button>
            <button type="button" className="btn btn-secondary m-1">Children's illustartion</button>
        </div></Col>

        {(products.filter(product => products.indexOf(product) >= ((currentPage - 1) * limit) && products.indexOf(product) < ((currentPage - 1) * limit) + limit)).map(product =>
        <Product product={product}
            key={product.id}
            addToCart={addToCart}/>)}


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