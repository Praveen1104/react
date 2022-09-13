// define all the states in redux
import { useSelector } from "react-redux";

const View = () => {
  // creating a state count in state directory
  const count = useSelector((state) => state.count);
  const cc = useSelector((state) => state.cc);

  return (
    <div>
      <h1>{count} </h1>
      <h1>{cc}</h1>
    </div>
  );
};

export default View;
