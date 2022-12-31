import { Link } from "react-router-dom";
import LittleCard from "../components/littleCardDir/LittleCard";
import img from "../assets/cdmx.jpg";
import { CardsWrapper } from "../components/styles/homeRoute";
import testData from "../utils/testData";

export default function Home() {
  return (
    <div>
      <Link to="login">LOGIN IN</Link>
      <CardsWrapper>
        <LittleCard {...{ img }} data={testData[0]} />
        <LittleCard {...{ img }} data={testData[0]} />
        <LittleCard {...{ img }} data={testData[0]} />
        <LittleCard {...{ img }} data={testData[0]} />
      </CardsWrapper>
    </div>
  );
}
