const Wraper = ({ children }) => {
  return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
      <p>Wraper component rendered with children:</p>
      {children}
    </div>
  );
};

export default Wraper;
