import React from 'react';
import BlogPost from '../../components/BlogPost';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/UI/Card';
import './style.css';

/**
* @author
* @function Post
**/

const Post = (props) => {

    console.log(props);

  return(
      <Layout>
        <BlogPost {...props}/>
      </Layout>
   )

}



export default Post;