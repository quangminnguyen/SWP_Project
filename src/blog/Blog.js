import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const Blog = () => {
    return (
        <div className="blog">
            <div className="home_navbar">
                <div className="home_navbar_plus">
                    <i className="fa-solid fa-plus"></i>
                </div>
                <Link className="home_navbar_items" to="/">
                    <div>
                        <i className="fa-solid fa-house"></i>
                        <span>Home</span>
                    </div>
                </Link>
                <Link className="home_navbar_items" to="/">
                    <div>
                        <i className="fa-solid fa-road"></i>
                        <span>Lộ trình</span>
                    </div>
                </Link>
                <Link className="home_navbar_items" to="/">
                    <div>
                        <i className="fa-solid fa-lightbulb"></i>
                        <span>Học</span>
                    </div>
                </Link>
                <Link className="home_navbar_items" to="/">
                    <div className="active">
                        <i className="fa-solid fa-calculator"></i>
                        <span>Blog</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Blog;
