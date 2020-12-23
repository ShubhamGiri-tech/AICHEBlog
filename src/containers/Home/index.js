import React from 'react';
import Card from '../../components/UI/Card';
//import Header from '../../components/Header';
import './style.css';
import img1 from '../../blogPostImages/memories-from.jpg';
import img2 from '../../blogPostImages/fitness-blog-post.jpg';
import Sidebar from '../../components/Sidebar';
import RecentPosts from './RecentPosts';
import blogData from '../../data/blog.json';
import Layout from '../../components/Layout';

const Home = props =>{

    const SideImage = props => {
        return(
            <div style={{height:`${props.height}px`}}>
                <img src={props.src} alt="Hello" />
            </div>
        );
    }
    
    const ImageGallary = props => (               <div className="gallaryPost" style={props.gallaryStyle}>

                    <section style={{width:props.largeWidth}}>
                        <div className="mainImageWrapper">
                            <img src={img1} alt="Hello" />
                        </div>
                    </section>
                    <section className={"sideImageWrapper"} style={{width:props.smallWidth}}>

                        <SideImage
                            height={props.sideImageHeight}
                            src={img1} />

                        <SideImage
                            height={props.sideImageHeight}
                            src={img2} />

                        <SideImage
                            height={props.sideImageHeight}
                            src={img1} />
                    </section>
                </div>
    );


    const gallaryHeight = 450;

    const gallaryStyle = {
        height: gallaryHeight+'px',
        overflow: 'hidden'
    }


    const sideImageHeight = gallaryHeight / 3;


    return(
        <div>
            <Card>

                <ImageGallary 
                    largeWidth="70%"
                    smallWidth="30%"
                    sideImageHeight={sideImageHeight}
                    gallaryStyle={gallaryStyle}

                />

            </Card>

            <Layout>
                <RecentPosts style={{width:"70%"}}/>
            </Layout>







        </div>
    );
}

export default Home;