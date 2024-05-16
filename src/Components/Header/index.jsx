import styled from "styled-components"
import SVG from '../../assets/marca.svg'

const Cabecalho = styled.header`
  background-color: black;
`

const Conteudo = styled.div`
  padding: 40px 0;
  display: grid;
  justify-items: center;
  align-items: center;
  color: white;
  gap: 40px;

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
  background-color: green;
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
      <Conteudo className="container">
        <img src={SVG} />
        <Subtitulo><span>Facetas Cerâmicas: </span>Protocolo Passo a Passo</Subtitulo>
        <Video> UM VIDEO AQUI</Video>
        <Textos>
          <Titulo>12x de R$ 59,99</Titulo>
          <Subtitulo>ou R$ 600,00 à vista</Subtitulo>
        </Textos>
      </Conteudo>
    </Cabecalho>
  )
}

export default Header