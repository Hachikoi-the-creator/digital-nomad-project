import { HoverMain } from "./littleCardStyles";
import ProgressBar from "./ProgressBar";
import heartSvg from "../../assets/heart.svg";
import closeSvg from "../../assets/close.svg";

// todo: 100 must be changed to 103 in order to completly fill the bar... also minimum must be 4-5
// todo: add emoji in db?
const dbResponse = [
  {
    tag: "Quality",
    percent: "90",
  },
  {
    tag: "Food",
    percent: "40",
  },
  {
    tag: "Something",
    percent: "20",
  },
  {
    tag: "aaaaaa",
    percent: "60",
  },
  {
    tag: "bbbbb",
    percent: "90",
  },
];

export default function HoverDetails() {
  const handleClose = () => {
    console.log("coconut pinapple");
  };

  return (
    <HoverMain className="hover">
      <div className="favAndClose">
        <img src={heartSvg} alt="add to favourites" />
        <img onClick={handleClose} src={closeSvg} alt="remove from list" />
      </div>
      {dbResponse &&
        dbResponse.map((e) => {
          const { tag, percent } = e;
          return <ProgressBar key={tag} {...{ tag }} {...{ percent }} />;
        })}
    </HoverMain>
  );
}
