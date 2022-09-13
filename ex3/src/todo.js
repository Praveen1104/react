import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function Todo() {
  const [todostate, settodostate] = useState();
  const [todolist, settodolist] = useState(["hi"]);
  function handlechange(e) {
    settodostate(e.target.value);
  }

  function handlesubmit(e) {
    e.preventDefault();
    settodolist((arr) => [...arr, todostate]);

    settodostate(" ");
  }
  return (
    <div className="bg-dark vh-100">
      <div className="container">
        <h1 className="text-center text-white">Todo App</h1>
        <form onSubmit={(e) => handlesubmit(e)}>
          <label>what you want to add today</label>
          <div className="d-flex">
            <input
              onChange={(e) => handlechange(e)}
              type="text"
              name=""
              id=""
              className="form-control"
              value={todostate}
            />
            <input type="submit" className="btn btn-light p-2 mx-2" />
          </div>
        </form>
        <div className="my-3">
          <ul className="list-group">
            {todolist.map((todo, id) => (
              <li
                className="list-group-item list-group-item-dark text-center"
                key={id}
              >
                {todo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Todo;
