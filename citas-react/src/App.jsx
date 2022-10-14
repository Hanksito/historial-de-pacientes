import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
    const eliminandoPaciente = pacientes.filter((element) => element.id !== id);
    setPacientes(eliminandoPaciente);
  };

  return (
    <div className="container mx-auto my-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminandoPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
