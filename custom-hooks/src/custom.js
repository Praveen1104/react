import { useState, useEffect } from "react";
const useFetchdata = (url) => {
  const [dat, setdat] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setdat(data));
  });
  return dat;
};
const Cutomhook = () => {
  const dog = useFetchdata("https:");
  console.log(dog);
  return (
    <div>
      <img src={dog.message} width="400" height="400" alt="error"></img>
      <h2>{dog.status}</h2>
    </div>
  );
};
export default Cutomhook;
