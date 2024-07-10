import rectangle from "../../assets/rectangle.svg"
import CountdownTimer from "../../components/Timer"

const Sale = () => {
    const saleEndTime = "2024-07-31T10:59:59";

  return (
    <>
    <div className="mt-10 ml-10">
    <div className="flex gap-5">
  <img src={rectangle} alt="" />
  <h1 className="text-orange-600">Today's</h1>
    </div>
    <div className="flex">
        <h1 className="">Flash Sales </h1>
         <CountdownTimer endTime={saleEndTime} />
    </div>
    
    </div>
    </>
  )
}

export default Sale