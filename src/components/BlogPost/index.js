import React,{useState,useEffect} from 'react';
import Card from '../UI/Card';
import './style.css';
import img5 from '../../blogPostImages/memories-from.jpg';
/*import img from '../../blogPostImages/christmas.jpeg';*/
import img1 from '../../blogPostImages/fitness-blog-post.jpg';
import img2 from '../../blogPostImages/beautiful-&-simple.jpg';
import img3 from '../../blogPostImages/affection-baby-baby-girl-beautiful-377058.jpg';
import img4 from '../../blogPostImages/cestovat-chladny-dno-jednoduchost-2868847.jpg';

import blogPost from '../../data/blog.json';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {


    const [post,setPost] = useState({});
    const [postid,setPostid] = useState('');

    useEffect(()=>{
        const postid = props.match.params.postid;
        const post = blogPost.data.find(post => post.id == postid);
        setPost(post);
        setPostid(postid)
    },[post,props.match.params.postid]);





  return(
    <div className="blogPostContainer">
        <Card>
            <div className="blogHeader">
                <span className="blogCategory">{post.blogCategory}</span>
                <h1 className="postTitle">{post.blogTitle}</h1>
                <span className="postedBy">posted on {post.postedOn} by {post.author}</span>
            </div>

            <div className="postImageContainer">
                {(post.id==1)?<img src={`/${img1}`} alt="Post Image" />:(post.id==2)?<img src={`/${img2}`} alt="Post Image" />:(post.id==3)?<img src={`/${img3}`} alt="Post Image" />:(post.id==4)?<img src={`/${img4}`} alt="Post Image" />:(post.id==5)?<img src={`/${img5}`} alt="Post Image" />:'<p>Hey1</p>'}
            </div>

            <div className="postContent">
                <h3>{post.blogTitle}</h3>
                <p>{post.blogText}</p>
            </div>
        </Card>
    </div>
   )

 }

export default BlogPost