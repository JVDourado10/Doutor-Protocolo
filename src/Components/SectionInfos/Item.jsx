import styled from "styled-components";
import check from "../../assets/check-mark.png";
import { Texto } from "../Tipografia/Tipografia";


const ConteudoItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 30px;

  & img {
    display: inline-block;
    height: 30px;
  }
`

// eslint-disable-next-line react/prop-types
const Item = ({ children }) => {
  return (
    <ConteudoItem>
      <img src={check} />
      <Texto>{children}</Texto>
    </ConteudoItem>
  );
};

export default Item;
