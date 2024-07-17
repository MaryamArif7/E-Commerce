import React from "react";
import girls from "../../assets/about/girls.svg";
import Delivery from "../../assets/about/Delivery.svg";
import money from "../../assets/about/monery.svg";
import Service from "../../assets/about/Service.svg";
import men1 from "../../assets/about/men1.svg";
import men2 from "../../assets/about/men2.svg";
import men3 from "../../assets/about/men3.svg";
import Support from "../../components/Support";
import output from "../../assets/about/output.svg"
const About = () => {
  return (
    <>
      <div className="ml-36 mr-0 flex justify-between">
        <div className="mt-36 ">
          <h1 className="text-4xl font-bold mb-5">Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping{" "}
            <br /> makterplace with an active presense in Bangladesh. Supported{" "}
            <br /> by wide range of tailored marketing, data and service
            solutions <br />, Exclusive has 10,500 sallers and 300 brands and
            serves 3 <br /> millioons customers across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at{" "}
            <br />a very fast. Exclusive offers a diverse assotment in
            categories <br /> ranging from consumer.
          </p>
        </div>
        <div className="mt-10">
          <img className="w-[600px] h-[500px]" src={girls} alt="" />
        </div>
      </div>

      <div className="mt-28 mr-36 ml-36 flex justify-between text-center ">
        <div className="border p-4 w-[300px] h-[200px] ">
          <div className="flex items-center justify-center">
            <img
              className="object-contain"
              src={Delivery}
              alt="Delivery on time"
            />
          </div>
          <h1>1k</h1>
          <h1>Deliverd to 1k users</h1>
        </div>
        <div className="border p-4 w-[300px] h-[200px] ">
          <div className="flex items-center justify-center">
            <img
              className="object-contain"
              src={money}
              alt="Return Money time"
            />
          </div>
          <h1>1k</h1>
          <h1>Deliverd to 1k users</h1>
        </div>
        <div className="border p-4 w-[300px] h-[200px] ">
          <div className="flex items-center justify-center">
            <img
              className="object-contain"
              src={Service}
              alt="Delivery on time"
            />
          </div>
          <h1>1k</h1>
          <h1>Deliverd to 1k users</h1>
        </div>
      </div>
      <div className="flex justify-between mr-36 ml-36 mt-10">
        <div>
          <div className="bg-gray-300">
            <img src={men1} alt="" />
          </div>
          <h1 className="text-center font-bold">Kim Namjoon</h1>
          <h1 className="text-center font-bold">President</h1>
        </div>
        <div>
          <div className="bg-gray-300">
            <img src={men1} alt="" />
          </div>
          <h1 className="text-center font-bold">Kim Seokjin</h1>
          <h1 className="text-center font-bold">President</h1>
        </div>
        <div>
          <div className="bg-gray-300">
            <img src={men1} alt="" />
          </div>
          <h1 className="text-center font-bold">Min Yoongi</h1>
          <h1 className="text-center font-bold">President</h1>
        </div>
      </div>
      <Support />/
    </>
  );
};

export default About;
