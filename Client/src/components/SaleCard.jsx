import heart from "../assets/sale/heart.svg";
import eye from "../assets/sale/eye.svg";
 

const SaleCard = ({ name, imgURL, price, off, discount, rating }) => {
  return (
    <>
      <div className="">
        <div className="w-64 h-64 bg-gray-200 pt-5 ">
          <div className="flex justify-between">
            <h1 className="bg-red-700 w-9 h-7 ml-2">{off}</h1>
            <div className="mr-2 mb-2">
              <img className="w-6 h-6" src={heart} alt="Heart icon" />
              <img className="w-6 h-6 mt-2" src={eye} alt="Eye icon" />
            </div>
          </div>
          <img className="w-full h-36 object-contain" src={imgURL} alt={name} />
        </div>

        <div>
          <h1 className="font-bold">
            {name}
          </h1>
          <div className="">
            <div className="flex gap-3">
              <p className="text-red-600">
                {discount}
              </p>
              <p className="line-through">
                {price}
              </p>
            </div>

            <p>
              {rating}
            </p>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default SaleCard;
