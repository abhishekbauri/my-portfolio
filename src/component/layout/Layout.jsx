/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "75vh" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
