import "./App.css";
import { Button } from "./components/button";
import { ButtonAlt } from "./components/buttonAlternativo";
import { Layout } from "./components/layout/layout";
import { Content } from "./components/content/content"

function App() {
  const botón3 = {
    texto: "Botón numero 3",
    color: "green",
  };

  return (
    <div className="App">
     
        <p>After - Props</p>

        <Layout>
          <Button texto="Botón numero 1" color="red" />
          <Button texto="Botón numero 2" color="blue" />
          <ButtonAlt info={botón3} />
          <Content/>
        </Layout>

    </div>
  );
}

export default App;
