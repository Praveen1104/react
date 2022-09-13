import { useState } from "react";
import {Moviecontext} from './Mycontext'

function MovieProvider(props) {
  const [Movie, setMovie] = useState([
    { name: "Beast", price: "130", time: "10pm" },
    { name: "Valimai", price: "130", time: "10pm" },
  ]);
  return (
    <Moviecontext.Provider value={[Movie, setMovie ]}>
      {props.children}
    </Moviecontext.Provider>
  );
}
export default MovieProvider;
