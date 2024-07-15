import rectangle from "../../assets/rectangle.svg";
import arrowl from "../../assets/sale/arrowl.svg";
import arrowr from "../../assets/sale/arrowr.svg";
import { Explores } from "../../constants";
import ExploreCard from "../../components/ExploreCard";
import Button from "../../components/Button";

const Explore = () => {


  return (
    <>
      <div className="mt-10 ml-36 mr-36">
        <div className="flex gap-5">
          <img src={rectangle} alt="" />
          <h1 className="text-red-700">Our Products</h1>
        </div>
        <div className=" mt-2 gap-20">
          <div className="ml-72 flex gap-5">
           
          </div>
          <div className="flex gap-48">
            <h1 className="text-black font-bold text-2xl">Explore Our Products </h1>
          
            <div className="flex ml-96 gap-3">
            <img src={arrowr} alt="" />
              <img src={arrowl} alt="" />
           
            </div>
          </div>
        </div>
        <div className="mt-10  grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {Explores.map((product) => (
            <ExploreCard key={product.name} {...product} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button label="View all products" />
        </div>
      </div>
    </>
  );
};

export default Explore;
