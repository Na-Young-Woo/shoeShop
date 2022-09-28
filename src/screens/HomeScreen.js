import React from "react";
import CalltoActionSection from "../components/homeComponents/CalltoActionSection";
import ContactInfo from "../components/homeComponents/ContactInfo";
import ShopSection from "../components/homeComponents/ShopSection";
import Footer from "../Footer";
import Header from "../Header";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <ShopSection />
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
