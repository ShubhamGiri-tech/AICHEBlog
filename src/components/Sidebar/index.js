import React,{useState, useEffect} from 'react';
import Card from '../UI/Card';
import './style.css';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        const posts = blogPost.data;
        setPosts(posts);
    },[posts]);

  return(
    <div className="sidebarContainer">

        <Card style={{marginBottom:"20px",padding:"20px",boxSizing:"border-box"}}>
            <div className="cardHeader">
                <span>About Us</span>
            </div>

            <div className="profileImageContainer">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMWFhUXFRUVFRUWGBUVGBcXFRcXFhUYFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGisdHR0rLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEIQAAEDAgMFBQYDBgUDBQAAAAEAAhEDIQQxQQUSUWFxBhMigZEyobHB0fAHFCNCUmJy4fFDgqKzwhVjcxYzNDWS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIxEBAQACAgICAwEBAQAAAAAAAAECEQMhEjEEIkFRcTJCE//aAAwDAQACEQMRAD8A8wKfomFDCpB0pCiUiZFTSlKQpGCUhNkJAEABK1SUaZJ81doYI+AFpLi72Rcx0HqlbpUwtU2s1T+4cb6CL5Z5fNdrs7sRiKgb+nug33nndyygZ5aLdwn4dN/xa8iZAYzjpLje/JReWRtOC15ecI67oNs/JV91ezv7B0STFR187N6WgKhiPw2af/bqDo9v/IHXmFP/ALKvx68mQCu12r2LrUh46ZgT4qfiHU6geS5WvgnMMH4SDN1pM5WWXFlFWUApXN+iRqpnTgnOFkwmyeLoI1mSUpGZolMFhIgIQRQkCUFDkEHBNGSeCo26hBllCSEIIEpGlCc1ySjYSwnFNJQCJAglBQCQfcpsPSn7+/VWNn0gXeIAjgTE9CvRux3Y1nhr12z+1SpO9zqnEcAozzkbcfFcmX2U7HVK4a9/gpyTvEeJ8/uD5lekbF2BRoD9GmGnV7rvPMuK0aNPLXTl06K9Taue212eMxiFuF5lOGHHDyVtoCcWpzFFzURQHD19UjqfOyuOaoHJWKmW1d1ILA212Xo1xO7uVNHtHxGq6Nyhc774qNr9vGdudl30XQ4SD7LgfCeZPHkuXxOCc2+nGF75tPDB7TIkHMfeRXAbY2K0G128CcuS1x5Kx5OKXt5uU5i0dtbNNJwhp3TlrPRZoK6ZduKzVDs0rklTJE5IIoKEAJQmCIhCAUEUhRjM809NfogFQnWQgkQSyghNKSkhKakabIQAVLhqDnuDQJJUC6fsjgy54FyXEAAZDmVOV1FY47rpex/ZkbwfVDS1sWv4n6Ag5RqvR6I1WdhcOKYaxuTRH1K1KLSFyZXdelhj44rVMKzTVdjk8VEQr2tb0Jd9VjWQHq9o8E+8o3pgqJd4JbEmjCFC9uinlRVrEfcqKuKtQf1XNbXZHhjOYniuncbrK2rR3hbNE9nl6cLtrZxcw8rjMEHk4ELzuo0gkHOV65WpRIMa2BMXy8/ovOu1FEirJjIRpP1jiunjri5IySkbklaUgN4WrAAIhACVAIiEIQRQmvySgpxQEEoT91CegUhIU/3pkKTNCJSgJEwGdJ5cV6Z+HeF9qscxDB1MEke4LzfDjxAASZC9i7MYfu6DGcfEfO6x5q6fjzt0LW3F+auMI4qvTE/AKVreC5ncsNdoEAlNY1P3UyDCdSphHNQ92VNTp8UyNe7qi6mFPoYTXN521QWyBR132Sk8FWxNQnIeqDML1Wxdwje5XUVe45IFYuObGUETYnPovPe2tKHNdoZgZ9V6JiRex6+XFcd2zwBdT3gLsdJ5DW+i2464+RxFModmmhOcFu5ioIQlKAahLCEAhSykKOSAN5CNxCAN5AKQlJKQKh4TUuiYXdluIcCM/gvXNlv8FP8AlHwXkOx2zUHCJK9c2f7DejVz8vt2fHdDSKt0SAs2lUgIdiIOaydmm214TyVgtxnEqwcXOSB4NJzwEv5kCyyH4k7p5KF2MAiUtjwjcdiwo+/C5nFbaYw5ycyBeBzVNvagfs7p8wE03xjs3PnVQVlxn/q4F1wInKb+a18LttjouOUc/ggpZWm9mR4/cprm/QKM1uCeKuSD0yNpMAM88+CpbQwBe0sMeNsSL9D1yWntQQJ6G/uWd/1em4hpaXSCGwDeNBzmPVaYVz8uPbyPG4fu6jmFwcQSHEAi45JgC7ftF2LxVQVMWXUy8je/Ltu8NbpvZOcBchcMx8iePwXRjlK5c8Lj7K3ggJrTdKCmzOTZSpuiAUIaklK0oB0IRKVARkXPVJClrmTwi0dJCiSh0iJQU1Mmz2ZpvfUIaPCGkuMelzz4L1Gm7da2+gn+y837EYV1Sq/cDvCzedkGjMAvcTkL5STyC7vE4gCmLi+61p0LiJAHExoFz8vt2fH6m1XG7ff7LbcONslk1u0NSTvT5K23CM3yHF7nahkNHqbrS/L0WiNzd4bzifcsnRrbGw23qnAxwz9F0GzNrbwmeXMHmqG7QJ3SW/5bH3yFXfSczeLDvAXIzcQbWaLu8kKlk6dhQrbzTzBCxMaTlOVlo7Jg0g5xDYz3iGx5G6zdqv8A3C1xP8TctTEyY9Uoq5Mo7N3rlzhxgkA9eKk/6HTi48syfS6Q4gAT7TspOfk02CzsTtSoNXOMxDIa1pOQLuKekX9tuhsanpSPUgDzvdXTgWs9l0ZWgAn3rlsL2iqWAabzZjzvCJmWu1t8F0GD2u6qN2q0wR4XEbp6OHFO9FNX1Wrh8SWu3XQbA2M8vJT43aVOi0OqOiTDGiXPe45NpsF3k8lSfhXt7tzXbn6jWFxYx3hd/OCInktLB7Ko0XGoIdVMjvDG8N7MMyDG8gAjobvpn1sJVrj9eGNBBbQaQT1r1BYmI8DbWzOS0WsFMCAAGicuVoTKr4PT5JjnyBz+GcdEfgrNZTSKs8uexx4gDkDay8YxtLcrVWfu1ag/1mF7dVp7wgZgtPvXjvalsY3Ej/vO+DVfB7qPlf4jNeglByQ1dLzypoKUJEAqIQhALHNCbvBCAkrgb5g2knpmSoynVD4imwlFW7poCEpSFMm/2M2p3FYtcCW1YG7IALhJZJOQkn1WxtzGEY3DDdzLHCXG3eOJcIFiZ1XDh5bDhmCHDqCCPgu/7Y4OaNLGsgijVa2oAZIY8irTd/LJLZ5LLKfbbfjy+umltMmh3hb7TnWJEwNYXO4jFVS0ubLRqSN6oRx5TwGS7yrRa4sqOG832hMftDMclRxDWzZp5aQuadV337RyGyK1d1qheW+Mu7xo3bWaGnO4jzUjt8y4BzYBvPQQDmuhql5sAfNV/wAjIDSbk7x1hrbk/IKrdpmNk17dX2UotbSA3ZN5JufUqHtJQaHB8CBDiANB7Uf5SVc7NP8A04sMz6qxtijIBAuL9fJJUx604nHYLOxMWkajjbOc1FQwrHNi18wZHquk7kC0Q2JAgkDiLXj4IGzmuu2D0go2JOtVm4LBUWDwtaObQJPG62cHRD5ADNNZP906nstozIA5wFdoU2ZNG/8AyCfeLDzRu0akV8dgRFNouXVWDMkQJLreSs4prRMMGuV+ikdR8Qc6AQCGtmS2c3FwsX6WyVetUdrfnqgRQL7lV9o0XbjQ0wZmdBeQOhWi+mCJCbXMNAzkxHwQm+5VXYuM3nbrrHIheV9sxGPxI/7n/Bq9cw+zu7eaz/CDuw3U87ZLx3tNW38ZiHcarvcAPktOGds/l36s8ZJG5pWFBXS84EJHJ7jZI5ANKWUiCUA2EJN9CewkOaQoJQUjIUEIQCkDXMtC9U2A4OoUciH4ZtNwIlpEAODm6jNeWkrvewONL6D6Jj9N0tOsVJMHoZhZ8s626Pj37a/bsGUqbmhvjaBAEAOECwDZILR1B6qw7AU4sKjvvWSlwRDW9FKdoDT1K5no449Kn5IgQxgbzcZPoMz5qjUotDt0GXONzrHQWHIKfaO1IaSsrs8N81Kzjk4AfH5pq8XbbHwbW6HKP7hX8ZRaRlBkdVhUNrxr/VSv2oIklVE+N3tXxNQsdDRP3xVOntKm5xbUY0OBjK/qrYx7LkkLm9qsFWpvsO6QM+YyKlf9dbQdRGVNhPGAVeGMERFlwGE2g5rg19j7j0W1Sx0jNCdR0FWo05/fRQuIPVZZxdlLTrZcNUJyTlkZZcE3EsADXETBmBny8kjn5FSNcDAORt9lDOosVjv031Klgxhd0gWXhBqF0uObiXHq4l1/Vev9unxgcQ1v7rd48QTBE8V4+AtuGdOb5V9QBOITQU8FbuMDKERZAKQIBEQhK1ME3EJEJAqRCAkopKSEIQQXX/hs/wDUrt/gYfQuXHro+wWIDcS5psX0iBn+yZgaTfPkp5P81rxXWcd67FkGJTX11VeVDjKha22ZgAnmuR625Ih2i5z/AAty1PyUFKnUptIZ1IV6huhuc3vGsdVaY5u6SB5HM8D05KpGd5f0wsHjqjfbaRpIuDzV+jtMG1/qpC3ey+4zCRjRaMxfT0lGh57N/Ll5l5MGxA01ELQp0YbYch/VV2GYP9uKne8gEHy58p+aC8qjr0Q4FrgCc4+MHQqqN6kRJLmEwCc28N7kkxGOH+aABFzPPkoTW3vCZuL6j14ygvOz226JlWmmFFRZAb0AUqR5JWPUjn+E9CFADf0UgbHv6XTjPJg9t6u7s+oLeJzG3G9mb+fNeWBej9vqjhSw7f2HVnB3UMJaCvO61LdPLRdHFj9duP5GW8tGjknJoQtGBxRKSEFADkkpXJEAsJE7eQnoGFCWEkKVFQhIgAqzs3GdzWZV0a4TzabO9x9yrEpJRZuCXVeqVTEEZZ+SuGgHs94XNdlNod7hwwmXU4aeJ/d9y6XC1YgD35rjs1Xq45+Ulc7tOnVbUAb4pBzmwBsmuxlZlu6BA1B+S38dh94yOkdFVYRrwhAmts5uOqG/dEdIIn1snfnap/wdRmRZafdUxpHQ/JOLmRMFU1l4/wBKFH8w+zWxPP6JG4F7nEOeSQbxpGYla1F7bDdzFz/ZWBuwAPQJXQvJPwoYXZzW2GerszbqoqWA3KpjI3zWs0/eaZVpAnz4fNJll32taWjzTQqlGtcgm+V9OEc1YY+fXdPLmjSLUtJgOt/cfuE6q63mP6qCk8iYi1j1mxHJWKDO8qAaDxHotMcbdRjlnrdrA/EalGDoTmcQCP8A8n5Lz+ozesu2/FLGb1WhQBsxpqu5F3hb7iuKaV3XGTpw7t7qhUpFuaatV9MEXEhUcRhiy4uOPBRYECEISBXJqUpp0QDkiVIkDwbJqVpSFGlBCalSASJUhTJq9mMf3NYA+y+G9L5/Rd490GQevlkvLmAyIz5Sus7ObUfHd1jJJlpdFgNFlyYb7jp4OXXVde2tIvY5DzsoqtMGfdx6lZ9WqQc7G/COvJaGCxLXMmbcrTFpWGtureqqVKDhkYlAqOmDlzHzWrVNrxkSNJ4AqBkG/AXjnkeaWrFSyoaNMyLm14CvUqZzhQ0KtyOkrTpTFyM7QjR9GUWWnnBUdRxDsoFr89fUKV7oyvqRrF5hZ+IxQboS37g+icxZ5Zoy6TIINzJ+nNT03yDHTzzXP4jGOkwPDJnjPALZoghgmxMeQ4dU9M97X6dQRzm8ceS1NlkMpuqOsDLp/gaPoCfNZFJm8QxuufIDMqj+I21e5wootMOrEMAGlNvtn4BdXxse/KuX5N/4cFtPaJxFariD/iOO7yYLNHp8VBTEqNgsAFYotWzFM0JwbolYEOJt5oCpX2fN225aLPqUy2xBH3xW+y6H0QRdK47Dnd5MK1q+y9W29/pwWbXw7m+0PP8Aqp0ZnmhMlCAe0pxKZKWVKylCRS0aJdlYak5DogjCrNHB6vMcBqfopKbWtyudSfkldUVSJPLg2zRA5fNV6hTiVE4qg6bZGM75hY6N5oGeo4hXtnVe7eWuFuJyK4zC4t1J7XtzBuOI1C7ajVbUaHiCHC3noei4+SeN/ru4svPHV9xtd+0zrkc+WZ5JMPVuIiDJM2vl9VmNEZcvdxSDEHLmYGgUbaasa9RwzEyCRvHPkI5p1LEzAPESeE5iFn0nOi2RgRw4lSU2OHIaDz1T6TllfTTq14O84xmBpnmsOvUNWP3DJk2IF4VtwJz4+SUsi6Vv6LHHd7Jh8IweIgTnx9FMHSS4qF9WTujL9o6BaWzsLMPcLfstOv8AEfknx8dzuj5eTHjm17ZuG3RJ9p0TyHBeVdrNqfmcY94Msp/pU+EMsSOplehdsNrnD4So4HxOG4w/xOtPvJXkuDZAXo2TGTGPMmVytyq6wKwwKJilaVKlhh+CY+C4W0Ka110hd4j0H1+aAkYBopoOhUAKnpIFOvwTXUwfv5KRColT8iP3WoVmEJaNyjkoCcxkqwIHM8VkstLDgCX56NHzT6lcnhbRQOqEpC5Mk4cml11C6ok7xPYTOfoExxUQclJSI15XUdjqZNCsQZ7uo3w8GuaJI81yrl3X4a0waeJOY36YPQsEpXHyml4Z3C7ixTcnEEFOxtHu3lumY6JneTZcWUuN1XpY5TKbjTwhEKStUjqq2GyupRczoEoV0cxpzOajc+bacfohrnVDDQY+P9FqYLAQQTn7h0HzW3Hw3P8AjDl5scP6jwOBmHPFhcN+bvotZjEBoCy+0W1xQpOdN4hoXo4YY4Tp5uedzu64j8RtpipWbQafDTuebiudoj7+Cg74ve57jdxkq7TKzt3dtJNRIxSpgKa4pA+neU8DxO8vgq5cpgbny+CAlaJKsTAUFNP3kBOCgFRtKdKcI+UiSShMOaJSSlSOKyaABBTgUEICPdlDkAwYQ4oBAnJieLoI0hd9+FRBZim/x0z/AKYXA1TC7r8MYpUcTiKkhji0TGe5NhxJJgBXjO05Vv8AaHBA0y/eDCwyHusOh5HJc7s6od4te0scMwcurTqEdot/G2qOLadu7osIAv7Lqjj7RdcTA3TaNVXwzzSY1ntMblvzvbgN8jmLtIsRINwo5OPHNpxcuXG6KlUtZWqODLo3suHHqtLD4JgALAAIkdCLXKsNowq4/j4493tPL8nLLqdI6FENEAQpnmMkhICr1Ki6J05rdlr1w0ST9headsdoGq4XsT4R/CNfVdhtaqXeAa59F5ztWsKld+77LfA3o3M+s+inO9Kwnath2q40KBoi/qrVMrJsGpXIKY5yAQqZvtHoPgqwN1epM8R6N+CCShqUBK4pAgaOYVI0qMJ6BEnkEKOUINzYQEIUKPKRCEBE/NCEIH4NHzUqRCZGV13uzP8A6Wj/AOZn+6EIV4/lGX4PxPsu/kxXxaqmN9qt1b/tFIhJTtuzH/w8N/4WLRehC3jDL2rVs1C9CEJYdf2ndHfBeZ0PmfiUiFnyNeNaGRUlLIIQoaJTmon5pUIIzVaDfaPRvwQhAqY5JrUITNKEiEJFCoQhBv/Z" alt="H.Sott Fogler" />
            </div>

            <div className="cardBody">
                <p className="personalBio" >My name is Shubham Giri and I have created this website for my club named American Institute of Chemical Engineers.</p>
            </div>

        </Card>

        <Card style={{marginBottom:"20px",padding:"20px",boxSizing:"border-box"}}>
            <div className="cardHeader">
                <span>Social Network</span>
            </div>
        </Card>

        <Card style={{marginBottom:"20px",padding:"20px",boxSizing:"border-box"}}>
            <div className="cardHeader">
                <span>Recent Post</span>
            </div>

            <div className="recentPosts">
                {
                    posts.map(post => {
                        return(
                            <NavLink key={post.id} to={`/post/${post.id}`}>
                                <div className="recentPost">
                                    <h3>{post.blogTitle}</h3>
                                    <span>{post.postedOn}</span>
                                </div>
                            </NavLink>

                        );
                    })
                }

            </div>
        </Card>
    </div>
   )

 }

export default Sidebar