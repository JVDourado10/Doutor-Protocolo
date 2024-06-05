import { Texto, Title } from "../Tipografia/Tipografia";
import { Conteudo } from "../Containers";
import Card from "../Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const DivStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  background-color: #ddd;
  margin: 0 10px;
`
const DivStyle2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  background-color: #2e2e2e;
  color: #fff;
  margin: 0 10px;
`

const Cards = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`

const SectionDetalhes = () => {
  return (
    <section className="container">
      <Conteudo>
        <Title>Curso Laminados Cerâmicos 3.0</Title>
      </Conteudo>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        ssr={true}
        infinite={true}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="padding-40-px"
      >
        <DivStyle>Slide 1</DivStyle>
        <DivStyle2>Slide 2</DivStyle2>
        <DivStyle>Slide 3</DivStyle>
        <DivStyle2>Slide 4</DivStyle2>
        <DivStyle>Slide 5</DivStyle>
        <DivStyle2>Slide 6</DivStyle2>
        <DivStyle>Slide 7</DivStyle>
        <DivStyle2>Slide 8</DivStyle2>
      </Carousel>
      <Conteudo>
        <Texto style={{textAlign: 'center'}}>Muitos de nós aprendemos errado, mas aqui pode estar a virada de chave que você está buscando…</Texto>
        
        <Cards>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Cards>
       

      </Conteudo>
    </section>
  );
};

export default SectionDetalhes;
