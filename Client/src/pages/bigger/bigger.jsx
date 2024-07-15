
import Speaker from "../../assets/category/Speaker.svg";
import Button from "../../components/Button";
const Bigger = () => {
  return (
    <div className=" mt-16 ml-36 mr-36 flex items-center bg-gradient-to-r from-black to-gray-900 p-8">
      <div className="text-white flex-1">
        <p className="text-green-600 text-2xl ">Categories</p>
        <h1 className="text-4xl mt-5 font">Enhance Your</h1>
        <h1 className="text-4xl ">Music Experience</h1>
        <button className="  mt-10 px-7 py-4  font-montserrat text-lg leading-none bg-green-700 ">
        Buy Now
      </button>
      </div>  
      <div className="flex-1 flex justify-end">
        <img  src={Speaker}  alt="Speaker" className=" h-auto" />
      </div>
     
    </div>
  );
}

export default Bigger;
