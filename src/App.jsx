import ConteudoPrincipal from './Componentes/ConteudoPrincipal';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';
import logoVite from './assets/vite.svg';

function App() {

  return (
    <>
      <Header />
      <img src={logoVite} />
      <ConteudoPrincipal />
      <Footer />
    </>
  )
}

export default App
