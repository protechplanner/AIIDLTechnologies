import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import BlogThree from "@/components/blog-three";
import MenuContextProvider from "context/menu-context";
import SearchContextProvider from "context/search-context";
import HeaderOne from "@/components/header-one";


const BlogThreePage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Blog">
          <HeaderOne />
          <PageBanner title="Blog" name="Blog" />
          <BlogThree />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default BlogThreePage;
