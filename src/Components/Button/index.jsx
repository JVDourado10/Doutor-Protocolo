import styled from "styled-components"

const ButtonStyle = styled.a`
  padding: 16px 24px;
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  background: linear-gradient( #1ec21e, green);
  color: #023102;
  cursor: pointer;

  &:hover {
    background: linear-gradient(#36eb36, #1ec21e);
    scale: 1.05;
    transition: .3s;
  }
`
// eslint-disable-next-line react/prop-types
const Button = ({children, ...props}) => {
  return (
    <ButtonStyle {...props}>{children}</ButtonStyle>
  )
}

export default Button