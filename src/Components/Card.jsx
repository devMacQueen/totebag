import { Link } from "react-router"

function Card({img}){
  return (
    <Link to={"/shop"}>
    <div className="w-full max-w-[312px] h-[426px]">
      <img src={img} alt="monoclebag" className="w-full h-[350px] object-cover"/>

      <div className="flex justify-between mt-3 py-5">
        <p className="font-semibold text-[16px] text-gray-500">Chinos</p>
        <p className="font-semibold text-[18px] font-Montserrat text-[#000000]">₦5,000</p>
      </div>
    </div>
    </Link>
  )
}

export default Card

