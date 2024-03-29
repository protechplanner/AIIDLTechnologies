import React, { Fragment } from "react";
import AuthorCard from "@/components/author-card";
import Comments from "@/components/comments";
import blogDetailsImage from "@/images/home_1/dm-02.png";

const SinglePostCard = () => {
  return (
    <Fragment>
      <div className="single_blog">
        <div className="blog_thumb">
          <img src={blogDetailsImage} alt="" />
        </div>
        <div className="blog_headings">
          <span className="blog_date">20 nov</span>
          <h2>Digital Transformation Unleashed</h2>
          <p className="blog_metas">
            <a href="#">By layerdrops</a>-<a href="#">30 Likes</a>-
            <a href="#">2 Comments</a>
          </p>
        </div>
        <div className="blog_details">
          <p>
          In a world where digitalization has become synonymous with progress, Aiidl Technologies stands at the forefront, driving businesses towards unparalleled growth and success. With a multifaceted approach encompassing digital marketing and IT services, the company is a beacon of innovation, enabling Indian and international enterprises to navigate the complex digital landscape with finesse.
          </p>
          <h2>A Holistic Approach to Digital Excellence:</h2>
          <p>
          At the heart of Aiidl Technologies' success lies its comprehensive suite of service offerings. Under its umbrella, the company hosts two key subsidiaries – Digital Web Planet and Protech Planner – each catering to distinct yet interconnected domains. This strategic division allows Aiidl Technologies to provide tailor-made solutions that cater to the unique needs and aspirations of diverse clientele.
          </p>
          <h2>Digital Web Planet: Elevating Indian Businesses:</h2>
          <p>Digital Web Planet, a subsidiary of Aiidl Technologies, is a powerhouse in the realm of digital marketing and IT services. With a deep understanding of the Indian market dynamics, Digital Web Planet crafts strategies that not only resonate with the local audience but also propel businesses to unprecedented heights. From search engine optimization (SEO) to social media marketing, from web development to content creation, Digital Web Planet's offerings are a testament to the transformative impact of digitalization on Indian enterprises.</p>

          <h2>Protech Planner: Enriching Global Ventures:</h2>
          <p>On the global stage, Protech Planner, another subsidiary of Aiidl Technologies, emerges as a dynamic force driving international enterprises towards digital success. Armed with an acute awareness of global market trends and nuances, Protech Planner provides digital marketing and IT services that transcend geographical boundaries. By harnessing the power of technology, Protech Planner empowers foreign businesses to establish a formidable online presence, fostering engagement and growth in new and unfamiliar markets.</p>

          <h2>The Confluence of Expertise and Innovation:</h2>
          <p>Aiidl Technologies' prowess stems from its unwavering commitment to excellence, spearheaded by a team of seasoned professionals who are both industry veterans and forward-thinking innovators. The company's working professional trainers bring a wealth of practical insights and real-world experiences to the table, ensuring that every strategy and solution is rooted in proven methodologies while embracing emerging trends.</p>

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
