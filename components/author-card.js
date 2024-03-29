import React from "react";
import authorImage from "@/images/home_1/blogc-3.png";

const AuthorCard = () => {
  return (
    <div className="post_author">
      <img src={authorImage} alt="" />
      <h3>
        <a href="#">Aditi Arora</a>
      </h3>
      <p>
      Your digital marketing services blog is a goldmine of insights! Concise, valuable, and actionable tips. Excited to elevate my online presence with your guidance. Thank you!
      </p>
      <a href="#">View all posts</a>
    </div>
  );
};

export default AuthorCard;
