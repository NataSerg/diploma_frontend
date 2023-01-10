import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";


function Review({ review, productId, setNewComment}) {
    const [commentAreaHidden, setCommentAreaHidden] = useState(true);
    const [nameForComment, setNameForComment] = useState("");
    const [commentText, setCommentText] = useState(`${review.name},`);

     const saveReview = async (name, text, parent, product) => {
         try {
             const response = await axios.post(`https://sea-lion-app-fv7pa.ondigitalocean.app/api/review/`,
                 {
                    name,
                    text,
                    parent,
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

        return <>
            <div><b>{review.name}</b></div>
            <div>{review.text}</div>
            <Button className="mb-4 p-1" size="sm" variant="secondary" onClick={() => setCommentAreaHidden('')}>Reply</Button>

            <div className="comment-area" hidden={commentAreaHidden}>
                <div>
                    <input className="mt-1 input-name" type="text" placeholder="Enter your name"
                    value={nameForComment} onChange={(event) => setNameForComment(event.target.value)}></input>
                </div>
                <div>
                    <textarea className="mt-2 input-text" type="text" as="textarea"
                        value={commentText} onChange={(event) => setCommentText(event.target.value)}></textarea>
                </div>
                <Button className="mb-3 mr-2" variant="secondary" onClick={()=>saveReview(nameForComment, commentText, review.id, productId)}>Save</Button>   
                <Button className="mb-3 p-1" size="sm" variant="danger" onClick={()=>setCommentAreaHidden(true)}>Cancel</Button>
            </div>
        </>
    }
    export default Review;