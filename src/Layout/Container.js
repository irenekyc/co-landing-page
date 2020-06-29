import React from "react";
import styled from "styled-components";

const Container = ({ size, children }) => {
  const Container = styled.div`
    height: 100%;
    margin: 0 auto;
    width: ${(props) => (props.size.wide ? "90%" : "80%")};
  `;

  return <Container size={size}> {children} </Container>;
};

export default Container;
