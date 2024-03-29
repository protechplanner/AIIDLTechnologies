import React, { Fragment } from "react";
import AuthorCard from "@/components/author-card";
import Comments from "@/components/comments";
import blogDetailsImage from "@/images/home_1/dm-05.png";

const SinglePostCard = () => {
  return (
    <Fragment>
      <div className="single_blog">
        <div className="blog_thumb">
          <img src={blogDetailsImage} alt="" />
        </div>
        <div className="blog_headings">
          <span className="blog_date">20 nov</span>
          <h2>Unlocking Career Potential: Aiidl Institute's Lifelong Impact</h2>
          <p className="blog_metas">
            <a href="#">By layerdrops</a>-<a href="#">30 Likes</a>-
            <a href="#">2 Comments</a>
          </p>
        </div>
        <div className="blog_details">
          <h2>Learning Beyond Graduation</h2>
          <p>Aiidl Institute's commitment to students extends far beyond the confines of the classroom. With a strong focus on lifelong learning, the institute empowers its graduates to continually enhance their skills, adapt to industry shifts, and stay ahead of the curve. The journey of growth doesn't end with graduation; it's an ongoing pursuit of excellence.</p>
       
          <h2>Nurturing Ongoing Professional Development</h2>
          <p>Recognizing that the digital landscape is in a constant state of flux, Aiidl Institute ensures that its alumni have access to continuous professional development. Through workshops, webinars, and updated course materials, graduates can stay informed about the latest trends and technologies, positioning themselves as invaluable assets in any professional setting.</p>
         
          <h2>Lifetime Placement Assistance</h2>
          <p>Aiidl Institute's commitment to its students transcends the learning phase. The institute provides lifetime placement assistance, offering guidance and support in navigating the complex job market. This commitment reflects Aiidl Institute's investment in its graduates' long-term success, ensuring they have the tools to secure and thrive in meaningful careers.</p>
        
          <h2>Forging a Network of Lifelong Learners</h2>
          <p>Upon joining Aiidl Institute, students become part of a vibrant community of lifelong learners. This network serves as a valuable resource for collaboration, knowledge-sharing, and mutual growth. As alumni continue their professional journeys, they remain connected to a community that supports their aspirations and encourages continuous development.</p>
        </div>
        <div className="blog_tagitems">
          <span>Tags:</span>
          <a href="#">Business</a>, <a href="#">Agency</a>,{" "}
          <a href="#">Digital</a>, <a href="#">Technology</a>
        </div>
        <AuthorCard />
        <Comments />
      </div>
    </Fragment>
  );
};

export default SinglePostCard;
