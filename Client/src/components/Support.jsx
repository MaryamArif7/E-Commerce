
import Delivery from "../assets/arrival/Delivery.svg"
import money from "../assets/arrival/monery.svg";
import Service from "../assets/arrival/Service.svg"

const Support = () => {
  return (
    <div  className='mt-28 mr-36 ml-36 flex justify-between'>
      <div>
     <img src={Delivery} alt="Delivery on time" />
     <h1 className='mt-2 font-bold text-lg'>Free Delivery On Time</h1>
      <h6>Free Delivery For All Orders over $140</h6>
 
      </div>
      <div>
     <img src={money} alt="Money Return" />
     <h1 className='mt-2 font-bold text-lg' >Money Back Gurantee</h1>
      <p>We Return Money Within 30 Days</p>
 
      </div>
      <div>
     <img src={Service} alt="Customer Support" />
     <h1  className='mt-2 font-bold text-lg'>24/7 Customer Support </h1>
      <p>Friendly Customer Service Available All the Time</p>
 
      </div>





    </div>
  )
}

export default Support