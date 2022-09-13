import MiContext from "./context";
import { useState } from "react";

function Provide(props) {
  const [state, setstate] = useState([
    {
      mname: "go to amazon",
      agent: "26",
      accept: "not accepted",
      secret: {
        code: "hi",
        avatar: "ca",
      },
    },
    {
      mname: "go to amazon",
      agent: "26",
      accept: "not accepted",
      secret: {
        code: "hi",
        avatar: "ca",
      },
    },
  ]);
  return (
    <MiContext.Provider
      value={{
        data: state,
        update: () => {
          setstate({ ...state, accept: "accepted" });
        },
      }}
    >
      {props.children}
    </MiContext.Provider>
  );
}

export default Provide;
