import styled from "styled-components"
import SVG from '../../assets/marca.svg'
import Button from "../Button"
import background from '../../assets/background-header.jpg'

const Cabecalho = styled.header`
  background-color: black;
  position: relative;
`

const Background = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 0.1;
  z-index: 0;
  pointer-events: none;
`

const Conteudo = styled.div`
  padding: 40px 0;
  display: grid;
  justify-items: center;
  align-items: center;
  color: white;
  gap: 40px;
  position: relative;
  z-index: 1000;

  & img {
    margin-bottom: 40px;
  }
`

const Video = styled.div`
  background-color: gray;
  width: 800px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Subtitulo = styled.h2`
  & span {
    background-color: #C31616;
    margin-right: 8px;
  }
`

const Titulo = styled.h1`
  background-color: #011801;
  color: #1ec21e;
  padding: 0 8px;
  font-size: 40px;
`

const Textos = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 8px;
`

const Header = () => {
  return (
    <Cabecalho>
      <Background src={background} />
      <Conteudo className="container">
        <img src={SVG} />
        <Subtitulo><span>Facetas Cerâmicas: </span>Protocolo Passo a Passo</Subtitulo>
        <Video> UM VIDEO AQUI</Video>
        <Textos>
          <Titulo>12x de R$ 59,99</Titulo>
          <Subtitulo>ou R$ 600,00 à vista</Subtitulo>
        </Textos>
        <Button>QUERO LIBERAR MEU ACESSO AGORA</Button>
      </Conteudo>
    </Cabecalho>
  )
}

export default Header