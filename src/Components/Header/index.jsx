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
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  color: white;
  gap: 40px;
  position: relative;
  z-index: 1000;
  width: 100%;
  


  & img {
    margin-bottom: 40px;
    display: block;

    @media (max-width: 400px) {
      scale: 0.7;
      margin-bottom: 0px;
    }
  }

  @media (max-width: 400px) {
      gap: 20px;
    }

`

export const Video = styled.div`
  background-color: gray;
  width: 800px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;

  @media (max-width: 1000px) {
    width: 80%;
    height: 300px;
  }

  @media (max-width: 700px) {
    width: 80%;
    height: 200px;
  }

  @media (max-width: 500px) {
    width: 80%;
    height: 140px;
  }
`

const Subtitulo = styled.h2`
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

const Titulo = styled.h1`
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