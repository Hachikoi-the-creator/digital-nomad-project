import wifiSvg from "../../assets/wifi.svg";
import wifiWhiteSvg from "../../assets/white_wifi.svg";
import { Container, RankAndWifi } from "./littleCardStyles";
import HoverDetails from "./HoverDetails";

export default function LittleCard(props) {
  const { avgTemp, avgInternet, ranking, city, country, avgCost, popular } =
    props.data;

  return (
    <Container img={props.img}>
      {popular && <div className="isPopular">popular</div>}
      {/* upper icons */}
      <RankAndWifi>
        <div className="rank">{ranking}</div>
        <img src={wifiWhiteSvg} alt="wifi icon" />
        <div className="wifi">
          <p>{avgInternet}</p>
          <p className="wifiText">Mbps</p>
        </div>
      </RankAndWifi>
      {/* city, contry */}
      <div className="cityAndCountry">
        <h3>{city}</h3>
        <h4>{country}</h4>
      </div>
      {/* lower infos */}
      <div className="tempAndPrice">
        <p className="temp">🌧{avgTemp}</p>
        <p className="price">
          {"😎"}${avgCost}/mo
        </p>
      </div>
      {/* HOVER STUFF */}
      <HoverDetails />
    </Container>
  );
}
