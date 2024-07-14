import heart from "../assets/sale/heart.svg";
import eye from "../assets/sale/eye.svg";

const ExploreCard = ({ name, imgURL, price }) => {
  return (
    <div>

    
    <div className="w-64 h-64 bg-gray-200 pt-5">
      <div className="flex justify-between mr-2 mb-2">
   
          <img className="w-6 h-6 ml-4" src={heart} alt="Heart icon" />
          <img className="w-6 h-6 mt-2 mr-4" src={eye} alt="Eye icon" />
        
      </div>
      <img className="w-full h-36 object-contain" src={imgURL} alt={name} />
      
    </div>
    <h1 className="font-bold flex justify-center">{name}</h1>
      <p className="text-orange-600">{price}</p>
    </div>
  );
};

export default ExploreCard;
