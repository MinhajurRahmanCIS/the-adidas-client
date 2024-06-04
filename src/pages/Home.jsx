import { useLoaderData } from "react-router-dom";
import Accordian from "../components/home/Accordian";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import Service from "../components/home/Service";
import Subscribe from "../components/home/Subscribe";
import Timeline from "../components/home/Timeline";
import Sale from "../components/home/Sale";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const data = useLoaderData();
  if(!data){
    return <LoadingSpinner/>
  }
  
  return (
    <div>
      <Banner />
      <Service/>
      <Products data={data} />
      <Sale/>
      <Timeline/>
      <Accordian />
      <Subscribe/>
    </div>
  );
};

export default Home;
