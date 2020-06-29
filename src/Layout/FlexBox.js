import React from "react";
import styled from "styled-components";

const FlexBox = ({ direction, justify, align, children }) => {
  const FlexBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};

    @media (max-width: 1024px) {
      flex-wrap: wrap;
    }
  `;

  return <FlexBox> {children} </FlexBox>;
};

export default FlexBox;
