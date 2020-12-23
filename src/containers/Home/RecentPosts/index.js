import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';
import img1 from '../../../blogPostImages/memories-from.jpg';
import img2 from '../../../blogPostImages/fitness-blog-post.jpg';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
                <div style={props.style}>
                    <Card style={{marginBottom:'20px'}}>
                        <div className="postImageWrapper">
                            <img src={img1} alt="Hello" />
                        </div>

                        <div style={{textAlign:"center"}}>
                            <span>Featured</span>
                            <h2>Fitness Mantra To Live Fit Life</h2>
                            <span>posted on July 21,2016 by Sora Blogging Tips</span>
                            <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give .......tree is.</p>
                            <button>Read More</button>
                        </div>
                    </Card>
                </div>
   )

 }

export default RecentPosts