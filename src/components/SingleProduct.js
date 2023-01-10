import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Col, Spinner, Button} from "react-bootstrap";
import "./SingleProduct.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { cartUpdate } from "../actions/user";
import { InputGroup, FormControl } from "react-bootstrap";
import Review from "./Review";

function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [colorCartButton, setColorCartButton] = useState(false);
    const [colorButton, setColorButton] = useState(false);
    const [cartItemsArray, setCartItemsArray] = useState([]);
    const [newCartUpdate, setNewCartUpdate] = useState('');
    const [allreviews, setAllreviews] = useState([]);
    const [nameForComment, setNameForComment] = useState("");
    const [commentText, setCommentText] = useState("");
    const [newComment, setNewComment] = useState({});

    const userCart = useSelector(state => state.user.userCart);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cartUpdate())
    }, [newCartUpdate])

    useEffect(() => {
        setCartItemsArray(userCart.map(item => item.product));

    }, [userCart])


    useEffect(() => {
        fetch(`https://sea-lion-app-fv7pa.ondigitalocean.app/api/products/${id}`).then(res => res.json()).then(data => {
            setProduct(data);
            setAllreviews(transformReviews(data.reviews));
        })
    }, [id, newComment]);


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
    
 

    function transformReviews(reviews) {
        let result = [];
        for (let review of reviews) {
            result.push(review);
            console.log(result);
            if (review?.children?.length) {
                result = [...result, ...transformReviews(review.children)];
            } 
        }
        console.log(result);
        return result;
    }

    const saveReview = async (name, text, product) => {
         try {
             const response = await axios.post(`https://sea-lion-app-fv7pa.ondigitalocean.app/api/review/`,
                 {
                    name,
                    text,
                    product
                 }, {
                 headers: {
                     'Content-Type': 'application/json'
                 }
             })
             setNewComment(response);
             setNameForComment("");
             setCommentText("");
         } catch (error) {
             console.log(error)
     }
}



    return <Col>
        {product ? <div><div className="single-product-block d-flex justify-content-center align-items-center">
            <img className="single-product-image" src={product.image} />
            <div className="single-product-text">
                
                <p>{product.title}</p>
                <p>${product.price}</p>
                <div>
                    {(cartItemsArray.filter(product => product.id == id)).length ?
                        <Button variant="danger" disabled="disable">Allready in cart</Button> :
                        <Button variant={colorCartButton ? "success" : "secondary"} size="lg"
                        onMouseEnter={() => setColorCartButton(true)}
                        onMouseLeave={() => setColorCartButton(false)}
                        onMouseMove={() => setNewCartUpdate('')}
                        onClick={() => addToCart(product.id, 1)}>Add to Cart</Button>}</div>
                <div><Link to="/products/">
                    <Button variant={colorButton ? "success" : "secondary"}
                        onMouseEnter={() => setColorButton(true)}
                        onMouseLeave={() => setColorButton(false)}>Continue shopping</Button></Link></div>
            </div>
        </div>
            <div className="comment-area">
                <div className="mt-5">You can write your comment here:</div>
            <div>
                <input className="mt-3 input-name" type="text" placeholder="Enter your name"
                value={nameForComment} onChange={(event) => setNameForComment(event.target.value)}></input>
            </div>
            <div>
                <textarea className="mt-2 input-text" type="text" as="textarea" placeholder="Enter your comment"
                value={commentText} onChange={(event) => setCommentText(event.target.value)}></textarea>
            </div>
            <Button className="mb-3" variant="secondary" onClick={()=>saveReview(nameForComment, commentText, id)}>Save</Button>   
        </div>
            
            {allreviews.length ?
                allreviews.map(review=>
                    <Review review={review}
                        productId={product.id}
                        key={review.id}
                        setNewComment={setNewComment}/>) :
                <div>No comments yet</div>}
        </div>
            : <Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner>}
    </Col>
}

export default SingleProduct;