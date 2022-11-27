import { useEffect, useState, useContext} from "react";
import Product from "./Product"
import { Navigate, Outlet } from "react-router-dom";
import { Col, Pagination } from "react-bootstrap";
import ThemeContext from "../context/ThemeContext"
import "./Products.css";


function Products({products, setProducts, totalCount, setTotalCount}) {
    
    const [registartionFlag, setRegistartionFlag] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pagesArray, setPagesArray] = useState([]);
    
    const { setAlert } = useContext(ThemeContext);
   
const data = {
            products: [
                { "id": 1, "colored": true, "title": "ledenovaart", "price": 12, "img": "/images/1.jpg" },
                { "id": 2, "colored": true, "title": "ledenovaart", "price": 12, "img": "/images/2.jpg" },
                { "id": 3, "colored": true, "title": "ledenovaart", "price": 12, "img": "/images/3.jpg" },
                { "id": 4, "colored": true, "title": "ledenovaart", "price": 12, "img": "/images/4.jpg" },
                { "id": 5, "colored": false, "title": "ledenovaart", "price": 12, "img": "/images/5.jpg" },
                { "id": 6, "colored": false, "title": "ledenovaart", "price": 12, "img": "/images/6.jpg" },
                { "id": 7, "colored": true, "title": "ledenovaart", "price": 12, "img": "/images/7.jpg" },
                { "id": 8, "colored": false, "title": "ledenovaart", "price": 12, "img": "/images/8.jpg" },
                { "id": 9, "colored": false, "title": "ledenovaart", "price": 12, "img": "/images/9.jpg" },
                { "id": 10, "colored": false, "title": "ledenovaart", "price": 12, "img": "/images/10.jpg" },
                { "id": 11, "colored": false, "title": "ledenovaart", "price": 12, "img": "/images/11.jpg" },
                { "id": 12, "colored": true, "title": "ledenovaart", "price": 12, "img": "/images/12.jpg" },
                { "id": 13, "colored": false, "title": "ledenovaart", "price": 12, "img": "/images/13.jpg" },
                { "id": 14, "colored": false, "title": "ledenovaart", "price": 12, "img": "/images/14.jpg" },
                { "id": 15, "colored": true, "title": "ledenovaart", "price": 12, "img": "/images/15.jpg" },
                { "id": 16, "colored": true, "title": "ledenovaart", "price": 12, "img": "/images/16.jpg" },
                { "id": 17, "colored": true, "title": "ledenovaart", "price": 12, "img": "/images/17.jpg" },
                { "id": 18, "colored": true, "title": "ledenovaart", "price": 12, "img": "/images/18.jpg" },
                { "id": 19, "colored": true, "title": "ledenovaart", "price": 12, "img": "/images/19.jpg" },
                { "id": 20, "colored": true, "title": "ledenovaart", "price": 12, "img": "/images/20.jpg" },
                { "id": 21, "colored": true, "title": "ledenovaart", "price": 12, "img": "/images/21.jpg" },
                { "id": 22, "colored": true, "title": "ledenovaart", "price": 12, "img": "/images/22.jpg" },
                { "id": 23, "colored": true, "title": "ledenovaart", "price": 12, "img": "/images/23.jpg" },
                { "id": 24, "colored": false, "title": "ledenovaart", "price": 12, "img": "/images/24.jpg" },

            ], total: 24, skip: 0, limit: 8
    };


    useEffect(() => {
        setProducts(data.products.map(product => ({ ...product, addedToCart: false, count: 1 })));     
        
        const pages = data.total / data.limit;
        if (data.total % data.limit) { pages += 1 };
        let temp = [];
        for (let item = 1; item <= pages; item++) {
            temp.push(item);
        }
        setPagesArray(temp);
    }, []);
   
    useEffect(() => {
        if (!localStorage.getItem('shop_user')) {
          setRegistartionFlag(true);
        }
    }, []);

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

    
    return <> <Outlet context={products} />
        <Col xs={12}><h2 className="mb-4">Products</h2></Col>
        {(products.filter(product => product.id > ((currentPage - 1) * data.limit) && product.id <= ((currentPage - 1) * data.limit) + data.limit)).map(product =>
        <Product product={product}
            key={product.id}
            addToCart={addToCart}
        />
        )}
        
       
    
        
    {registartionFlag ? <Navigate to="/registartion" /> : ''}    

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