import React, { FormEvent, useState } from "react";

// interface IToDo {
//   text: string;
// }

const List = () => {
  const [toDo, setToDo] = useState("");
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    console.log("hey", event.currentTarget.value);
    setToDo(event.currentTarget.value);
  };
  return (
    <>
      <form action="submit" onSubmit={onSubmit}>
        <input type="text" value={toDo} onChange={handleChange} />
        <button>Add to Do</button>
      </form>
    </>
  );
};

export default List;
