const Error = ({ children }) => {
  return (
    <div className="bg-red-600 text-white text-center rounded-md p-3 uppercase font-bold">
      <p>{children}</p>
    </div>
  );
};

export default Error;
