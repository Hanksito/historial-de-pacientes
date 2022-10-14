const Pacientes = () => {
  return (
    <div className="mx-5 my-9 bg-white shadow-md px-5 py-20 rounded-xl mb-10">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">Juan</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:{" "}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:{" "}
        <span className="font-normal normal-case">10 de diciembre 2022</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Simtomas:{" "}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, odit
          alias iusto magnam officiis perferendis sit quia unde, eius est enim
          eaque minima beatae corporis odio? Optio praesentium dolorem nulla.
        </span>
      </p>
    </div>
  );
};

export default Pacientes;
