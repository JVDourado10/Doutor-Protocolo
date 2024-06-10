import styled from "styled-components"
import { Title, Texto } from "../Tipografia/Tipografia"
import { Conteudo } from "../Containers"
import background from '../../assets/background-certificado.jpg'
import { Background } from "../Header"
import { Video } from "../Header"


const SectionStyle = styled.section`
  background-color: black;
  position: relative;
`

const SectionCertificado = () => {
  return (
    <SectionStyle>
      <Background src={background} />
      <Conteudo className="container">
        <Title style={{color: 'white'}}>Certificado de Conclusão</Title>
        <Texto style={{color: 'white', textAlign: 'center'}}>Após concluir o Curso <b>Laminados Cerâmicos 3.0</b>, você terá acesso a um certificado de conclusão que você poderá emitir direto da sua área do aluno.</Texto>
        <Video style={{color: 'white'}}>CERTIFICADO DE CONCLUSÃO</Video>
      </Conteudo>
    </SectionStyle>
  )
}

export default SectionCertificado