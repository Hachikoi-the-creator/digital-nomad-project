import { StyledProgressBar } from "./littleCardStyles";

export default function ProgressBar({ tag, percent }) {
  let color;
  // do something whit the percentage and pass it dow to the styled component
  if (percent < 30) color = "#ff4747";
  else if (percent < 50) color = "#ffff39";
  else color = "#58ff58";

  return (
    <StyledProgressBar {...{ percent }} {...{ color }}>
      <p className="tag">{tag}</p>
      <p className="progress"></p>
    </StyledProgressBar>
  );
}
