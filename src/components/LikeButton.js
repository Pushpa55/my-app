import React,{ useState } from 'react';

function LikeButton() {
    const [likes, setLikes] = useState(0);

    const handleLikes = () =>{
        setLikes (likes+1);
    };
    return(
        <div style={{ textAlign : 'center', marginTop : '20px'}}>
            <h3>Blog post title</h3>
            <p>This is a simple blog </p>
            <button onClick={handleLikes}>Like</button>
            <p>Likes : {likes}</p>
        </div>
    );
    
}
export default LikeButton;
