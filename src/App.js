
import LogoFired from './components/LogoFired';
import HeaderFired from './components/HeaderFired';
import ButtonFired from "./components/ButtonFired";
import FooterFired from "./components/FooterFired";
import LinkFired from "./components/LinkFired";
import HighlightFired from "./components/HighlightFired";

function App() {
  return (
    <>
      <HeaderFired>
        <LogoFired />

        <ButtonFired> Novo vídeo </ButtonFired>
      </HeaderFired>

      <FooterFired>
        <LogoFired />

        <p>
          Site feito na <HighlightFired>#ImersaoReact.</HighlightFired> da{" "}
          <LinkFired href="https://alura.com.br"> Alura</LinkFired>
        </p>
      </FooterFired>
    </>
  );
}

export default App;
