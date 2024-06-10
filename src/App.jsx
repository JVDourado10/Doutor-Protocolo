import Header from "./Components/Header";
import SectionInfos from "./Components/SectionInfos";
import SectionDetalhes from "./Components/SectionDetalhes";
import SectionCertificado from "./Components/SectionCertificado";
import Footer from "./Components/Footer";
import "./styles/main.css";

function App() {
  return (
    <>
      <Header />
      <SectionInfos />
      <SectionCertificado />
      <SectionDetalhes />
      <Footer />
    </>
  );
}

export default App;
