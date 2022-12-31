import styled from "styled-components";

// **************************************************

export const Container = styled.div`
  color: white;
  text-shadow: 2px 2px 0px #00000052;
  font-weight: 700;

  padding: 1rem;
  position: relative;
  width: 15rem;
  height: 15rem;
  border: 1px solid #3d3d3d;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  background-color: rgb(141, 141, 141);
  background-blend-mode: multiply;

  img {
    width: 1rem;
    fill: white;
  }

  .isPopular {
    top: -1rem;
    position: absolute;
  }

  /* simple middle stuff */
  .cityAndCountry {
    text-align: center;
  }

  /* bottom stuff */
  .tempAndPrice {
    display: flex;
    justify-content: space-between;
  }

  /* show hover stuff */
  .hover {
    /* animation: all 3s ease-in-out; */
  }

  &:hover .hover {
    opacity: 1;
  }
`;

// **************************************************

export const RankAndWifi = styled.div`
  gap: 0.5rem;

  &,
  .wifi {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rank {
    font-weight: 700;
    margin-right: auto;
    align-self: flex-start;

    &::after {
      display: inline-block;
      content: "";
      border-top: 2px solid white;
      width: 1.5rem;
      position: relative;
      top: 0.5rem;
      left: -1rem;
    }
  }

  .wifi {
    flex-direction: column;
    font-weight: 400;

    .wifiText {
      font-size: 0.5rem;
    }
  }
`;

// **************************************************

export const HoverMain = styled.div`
  opacity: 0;
  /* opacity: 1; */
  padding: 1rem;
  border-radius: 0.5rem;
  position: absolute;
  top: 0;
  /* ??? */
  left: -0.2px;
  width: 100%;
  height: 100%;
  background-color: #0b0b0bf0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* like and close pseudo-buttons */
  .favAndClose {
    display: flex;
    justify-content: space-between;

    img {
      padding: .2rem;
      cursor: pointer;
      width: 1.8rem;
    }
  }
`;

// **************************************************

export const StyledProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .progress {
    height: 1rem;
    border-radius: 7px;
    width: 50%;
    border: 2px solid ${(props) => props.color};
  }

  .progress::after {
    display: inline-block;
    content: "";
    border-radius: 7px;
    /* px of the border */
    height: calc(1rem - 2px);
    width: ${(props) => props.percent + "%"};
    background-color: ${(props) => props.color};

    position: relative;
    top: -3px;
    left: -1px;
  }
`;
