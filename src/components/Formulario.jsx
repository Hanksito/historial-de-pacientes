import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
  const generarId = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2);
    return random + fecha;
  };
  const [formulario, setFormulario] = useState({
    mascota: "",
    propietario: "",
    email: "",
    alta: "",
    sintomas: "",
  });

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setFormulario(paciente);
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      [
        formulario.mascota,
        formulario.propietario,
        formulario.email,
        formulario.alta,
        formulario.sintomas,
      ].includes("")
    ) {
      console.log("Hay al menos un campo vacio");
      setError(true);
      return;
    }
    setError(false);
    const objetoPaciente = formulario;
    if (paciente.id) {
      objetoPaciente.id = paciente.id;
      const actualizarPaciente = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(actualizarPaciente);
      setPaciente({});
    } else {
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }
    setFormulario({
      mascota: "",
      propietario: "",
      email: "",
      alta: "",
      sintomas: "",
    });
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="texty-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-20 px-5 mb-10"
      >
        {error && <Error>"Todos los campos son obligatorios"</Error>}
        <div className="mt-5">
          <label
            htmlFor="mascota"
            className="block text-grey uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            value={formulario.mascota}
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            type="text"
            placeholder="Nombre de la Mascota"
            onChange={(e) =>
              setFormulario({ ...formulario, mascota: e.target.value })
            }
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="propetario"
            className="block text-grey uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            value={formulario.propietario}
            id="propetario"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            type="text"
            placeholder="Nombre del propetario"
            onChange={(e) =>
              setFormulario({ ...formulario, propietario: e.target.value })
            }
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="Email"
            className="block text-grey uppercase font-bold"
          >
            Email
          </label>
          <input
            value={formulario.email}
            id="Email"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            type="Email"
            placeholder="Email Contacto Propietario"
            onChange={(e) =>
              setFormulario({ ...formulario, email: e.target.value })
            }
          />
        </div>
        <div className="mt-5">
          <label htmlFor="alta" className="block text-grey uppercase font-bold">
            Alta
          </label>
          <input
            value={formulario.alta}
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            type="date"
            onChange={(e) =>
              setFormulario({ ...formulario, alta: e.target.value })
            }
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="sintomas"
            className="block text-grey uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            value={formulario.sintomas}
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            placeholder="Describe los sintomas"
            onChange={(e) =>
              setFormulario({ ...formulario, sintomas: e.target.value })
            }
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 mt-5 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
