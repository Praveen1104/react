function Key() {
  const arr = [1, 2, 3, 4, 5, 6];
  let it = arr.map((item, id) => {
    return <li key={id}>{item * 2}</li>;
  });

  const arr1 = [
    { name: "praveen", age: "22" },
    { name: "bosco", age: "22" },
  ];

  let da = arr1.map((ite, i) => (
    <li key={i}>
      Name: {ite.name} Age: {ite.age}
    </li>
  ));

  return (
    <div>
      <h3>{it}</h3>
      <h4>{da}</h4>
    </div>
  );
}
export default Key;
