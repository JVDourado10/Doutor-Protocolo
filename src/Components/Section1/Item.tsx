import React from "react";
import styled from "styled-components";
import check from "../../assets/check-mark.png";

const ConteudoItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 30px;

  & img {
    display: inline-block;
    height: 30px;
  }

  & p {
    font-size: 1.5rem;
    max-width: 73ch;

    @media (max-width: 1024px) {
      font-size: 1.25rem;
    }
    @media (max-width: 769px) {
      font-size: 0.825rem;
    }
  }
`;

const Item = ({ children }) => {
  return (
    <ConteudoItem>
      <img src={check} />
      <p>{children}</p>
    </ConteudoItem>
  );
};

export default Item;
