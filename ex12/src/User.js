import { useEffect, useState } from "react";
function Use() {
  const [da, setda] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setda(data));
  }, []);
  console.log(da);
  return (
    <div className="row">
      {da.map((item) => (
        <div className="col-4" key={item.id}>
          <div className="card m-2">
            <div className="card-title">
              <h3>{item.name}</h3>
            </div>
            <div className="card-body">
              Username:{item.username}
              <br />
              phone:{item.phone}
              <br />
              website:{item.website}
              <br />
              <p className="lead fw-bold">{item.company.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Use;
