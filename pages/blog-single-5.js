import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import BlogDetails from "@/components/blog-details-5";
import MenuContextProvider from "context/menu-context";
import SearchContextProvider from "context/search-context";
import HeaderOne from "@/components/header-one";

const BlogSinglePage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Blog Details Page">
          <HeaderOne />
          <PageBanner title="Digital Resilience: Aiidl Technologies' Adaptive Solutions" name="Blog" />
          <BlogDetails />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default BlogSinglePage;
