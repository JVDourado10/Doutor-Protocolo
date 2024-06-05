import { Video } from "../Header";
import Item from "./Item";
import { Conteudo } from "../Containers";
import { RobotoTitle } from "../Tipografia/Tipografia";

const Section1 = () => {
  return (
    <section className="container">
      <Conteudo>
        <RobotoTitle>
          Esse curso é ideal para o dentista que deseja protocolo simples e
          replicável que permita:
        </RobotoTitle>
        <Video style={{ color: "white" }}>IMAGEM COM AMOSTRAS DAS AULAS</Video>
        <div>
          <ul>
            <Item>
              Planejar melhor seus casos, evitando retrabalhos e conquistando
              maior previsibilidade;
            </Item>
            <Item>Escolher o preparo adequado para cada caso;</Item>
            <Item>
              Controlar o desgaste sem exposição de dentina, nem de áreas que
              não deseja desgastar;
            </Item>
            <Item>Aprender como selecionar o material restaurador;</Item>
            <Item>
              Saber que tipo de cerâmica utilizar? Que adesivos? Qual cimento?
            </Item>
            <Item>Dominar isolamento absoluto ou relativo</Item>
            <Item>
              Conhecer técnicas de cimentação que simplifiquem ao máximo essa
              etapa do processo, considerada uma das mais desafiadoras para
              muitos colegas.
            </Item>
          </ul>
        </div>
      </Conteudo>
    </section>
  );
};

export default Section1;
