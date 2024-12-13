import "./App.css";
import { Card } from "./componentes/Card/Card";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Estilo } from "./EstilosGlobais/Estilo";

function App() {
  return (
    <ProvedorTema>
      <Estilo />
      <Card>
        <h1>freelando</h1>
      </Card>
    </ProvedorTema>
  );
}

export default App;
