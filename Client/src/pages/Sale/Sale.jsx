import rectangle from "../../assets/rectangle.svg";
import CountdownTimer from "../../components/Timer";
import arrowl from "../../assets/sale/arrowl.svg";
import arrowr from "../../assets/sale/arrowr.svg";
const Sale = () => {
  const saleEndTime = "2024-07-31T10:59:59";

  return (
    <>
      <div className="mt-10 ml-10">
        <div className="flex gap-5">
          <img src={rectangle} alt="" />
          <h1 className="text-orange-600">Today's</h1>
        </div>
        <div className=" mt-2 gap-20">
          <div className="ml-72 flex gap-5">
            <p>Days</p> <p>hours</p>
            <p>Minutes</p>
            <p>seconds</p>
          </div>
          <div className="flex gap-48">
            <h1 className="text-black font-bold text-2xl">Flash Sales </h1>
            <CountdownTimer endTime={saleEndTime} />
            <div className="flex ml-96">
              <img src={arrowl} alt="" />
              <img src={arrowr} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sale;
