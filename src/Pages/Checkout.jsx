import CheckOut from "../Components/Checkout";
import Payment from "../Components/Payment";
// import Modal from "../Components/Modal";

import Footer from "../Components/Footer";
import Nav from "../Components/Nav"
import Search from "../Components/Search";

// import "./App.css";

export default function Checkout() {
  return (
    <>
    <Nav/>
    <Search />
  <section className="w-full max-w-[1317px] mx-auto px-5 grid grid-cols-1 min-[1364px]:grid-cols-[minmax(0,873px)_minmax(0,427px)] gap-6 items-start mb-10">
    
    <CheckOut />
    <Payment />
   
  </section>

   <Footer className={"max-w-[1317px] mx-auto"}/>
    

    {/* <Home /> */}

    {/* <Shop /> */}
    {/* <Modal /> */}
    
    </>
  );
}