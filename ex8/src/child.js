
function Child({ ppl }) {
  return (
    <div>
      {ppl.map((person) => {
        const {id, name, age, image} = person;
        return (
          <div className="d-flex flex-row mb-2 m-3" key={id}>
            <div className="flex-shrink-0">
              <img
                src={image}
                alt="error"
                className="rounded-circle"
                height={70}
                width={70}
              ></img>
            </div>
            <div className="flex-grow-1 ms-3">
              <h3>{name}</h3>
              <h5>{age} years</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Child;
/* {data.map((item, key) => (
        <div className="d-flex flex-row mb-2 m-3">
          <div className="flex-shrink-0">
            <img
              src="https://img.mensxp.com/media/content/2022/Aug/Decisions-That-Turned-Dhoni-From-Hero-To-Villain1400_62fcfe65ba87b.jpeg?w=820&h=540&cc=1"
              alt="error"
              className="rounded-circle"
              height={70}
              width={70}
            ></img>
          </div>
          <div className="flex-grow-1 ms-3">
            <h3>{item.name}</h3>
            <h5>{item.age} years</h5>
          </div>
        </div>
      ))}*/
