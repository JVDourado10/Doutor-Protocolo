import styled from "styled-components";

export const Conteudo = styled.div`
  display: grid;
  justify-items: center;
  gap: 60px;
  padding: 60px 0;
  position: relative;

  @media (max-width: 769px) {
    gap: 40px;
  }

  @media (max-width: 400px) {
    gap: 20px;
  }
`;