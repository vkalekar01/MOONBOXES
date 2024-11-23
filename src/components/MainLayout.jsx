import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

import "./MainLayout.css";

const MainLayout = () => {
  return (
    <>
      <main className="flex-1 p-[1rem] md:p-[2rem] md:pr-[6%]">
        <div className="mainInnerWrapper bg-slate-950 text-white">
          <Header />
          <Navigation />
          <MainContent />
          <Footer />
        </div>
      </main>

      <Sidebar className="hidden md:block" />
    </>
  );
};

export default MainLayout;
