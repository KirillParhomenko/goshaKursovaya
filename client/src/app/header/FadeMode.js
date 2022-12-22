const FadeMode = ({someHandler}) => {
  return (
    <a className="fade" onClick={someHandler}>
      <span style={{ visibility: "hidden" }}>Close menu</span>
    </a>
  );
};

export default FadeMode;
