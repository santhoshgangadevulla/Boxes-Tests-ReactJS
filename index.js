const Box = (props) => {
  //  Write your code here.
  const { className, boxText } = props;
  return (
    <div className={`box ${className}`}>
      <p className="box-title">{boxText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="boxes-app-container">
    <h1 className="heading">Box</h1>
    <div className="boxes-container">
      <Box className="small-box" boxText="small" />
      <Box className="medium-box" boxText="medium" />
      <Box className="large-box" boxText="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
