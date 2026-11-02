import CheckOut from "../Components/Checkout";
import Payment from "../Components/Payment";
// import Modal from "../Components/Modal";

import Footer from "../Components/Footer";
import Nav from "../Components/Nav"
import Search from "../Components/Search";
import Header from "../Components/Header";

// import "./App.css";

export default function Checkout() {
  return (
    <>
    <Nav/>
    <Search />
<div className="max-w-[1317px] mx-auto">
<Header  title={"Shopping Cart."} desc={"Effortlessly manage your purchases and checkout with ease."} />
</div>
    
  <section className="w-full max-w-[1317px] mx-auto px-5 grid grid-cols-1 min-[1364px]:grid-cols-[minmax(0,873px)_minmax(0,427px)] lg:grid-cols-[minmax(0,873px)_min gap-6 items-start mb-10">
    
      
      

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