import Container from '../componentes/container'
import ImagemPrincipal from '../componentes/imagemPrincipal'
import ContainerDescricao  from '../componentes/ContainerDescricao'
import Titulo from '../componentes/Titulo'
import ParagrafoSessao from '../componentes/ParagrafoSessao'
import SessaoPrecos from '../componentes/SessaoPrecos'
import Botao from '../componentes/Botao'
import SubCategoria from '../componentes/SubCategoria'


function App() {

  return (
    <>
      <Container>
       <ImagemPrincipal/>
        <ContainerDescricao>
          <SubCategoria texto={'perfume'}/>
          <Titulo texto={'Gabrielle Essence Eau De parfum'}/>
          <ParagrafoSessao texto={"A floralm, solar and voluptuous intepretaion composed by Oliver Polge, Perfumer-Creator for the house of CHANEL"}/>
          <SessaoPrecos precoAtual={'149.99'} precoAnterior={'169.99'}/>
          <Botao/>
        </ContainerDescricao>
  
      </Container>
      
    </>
  )
}

export default App
