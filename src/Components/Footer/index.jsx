import styled from "styled-components"
import { Conteudo } from "../Containers"
import SVG from '../../assets/marca.svg'
import { Texto } from "../Tipografia/Tipografia"

const FooterStyle = styled.footer`
  background: linear-gradient(black, #222);
`

const Logo = styled.img`
  display: block;

  @media (max-width: 400px) {
    scale: 0.7;
    margin-bottom: 0px;
  }
`
const Footer = () => {
  return (
    <FooterStyle>
      <Conteudo className="container">
        <Logo src={SVG} />
        <Texto style={{color: 'white'}}>Termos de Uso - Políticas de Privacidade</Texto>
        <Texto style={{color: '#aaa', fontSize: '1rem', textAlign: 'center'}}>Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados. Para garantir que as estratégias tragam resultados, é necessário aplicar todos os ensinamentos conforme o recomendado. Os resultados podem variar e dependem unicamente de cada pessoa em colocar em prática as estratégias aprendidas. Lembre-se que cada um tem sua individualidade, experiência e rotinas, não compare seu resultado com o de outros e siga dando o seu melhor todos os dias. A chave para ter resultados e sucesso é a consistência.
        </Texto>
        <Texto style={{color: 'white'}}> Felipe Dourado - Todos os Direitos Reservados ©</Texto>

      </Conteudo>
    </FooterStyle>
  )
}

export default Footer