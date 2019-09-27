import styled from "styled-components";

const getColor = variant => {
  switch (variant) {
    case "SUCCESS":
      return "green";
    case "ERROR":
      return "red";
    default:
      return "black";
  }
};

const H4 = styled.h4`
  color: ${props => getColor(props.variant)};
`;

export default H4;
