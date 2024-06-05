import styled from "styled-components"

export const Subtitulo = styled.h2`
  & span {
    background-color: #C31616;
    margin-right: 8px;
  }

  @media (max-width: 720px) {
    font-size: 20px;
    text-align: center;
  }
  @media (max-width: 400px) {
    font-size: 18px;
  }
`

export const Preco = styled.h1`
  background-color: #011801;
  color: #1ec21e;
  padding: 0 8px;
  font-size: 40px;

  @media (max-width: 720px) {
    font-size: 20px;
  }
  @media (max-width: 400px) {
    font-size: 18px;
  }
`

export const RobotoTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  max-width: 40ch;
  line-height: 1.5;
  color: rgb(1, 26, 1);

  @media (max-width: 1024px) {
    font-size: 32px;
    text-align: center;
    max-width: 40ch;
    line-height: 1.5;
    color: rgb(1, 26, 1);
  }

  @media (max-width: 769px) {
    font-size: 26px;
  }

  @media (max-width: 376px) {
    font-size: 20px;
    line-height: 1.3;
  }
`

export const Texto = styled.p`
  font-size: 1.5rem;
  max-width: 73ch;

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }
  @media (max-width: 769px) {
    font-size: 0.825rem;
  }
`

export const Title = styled.h1`
  font-size: 3rem;
`