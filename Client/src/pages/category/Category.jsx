import arrowl from "../../assets/category/arrowl.svg";
import arrowr from "../../assets/category/arrowr.svg";
import rectangle from "../../assets/category/rectangle.svg";
import { category } from "../../constants";
import CategoryCard from "../../components/CategoryCard";

import Speaker from "../../assets/category/Speaker.svg";
const Categorys = () => {
  return (
    <>
      <div className="mt-10 ml-16 mr-36">
        <div className="flex gap-5">
          <img src={rectangle} alt="Rectangle" />
          <h1 className="text-red-700">Categories</h1>
        </div>
        <div className="mt-2 gap-20">
          <div className="ml-72 flex gap-5"></div>
          <div className="flex gap-48">
            <h1 className="text-black font-bold text-2xl">Browse Categories</h1>
            <div className="flex ml-auto gap-3 mr-28">
              <img src={arrowr} alt="Arrow Right" />
              <img src={arrowl} alt="Arrow Left" />
            </div>
          </div>
        </div>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {category.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      
      </div>
    </>
  );
};

export default Categorys;
