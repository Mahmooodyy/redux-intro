import { useState } from "react";
import { useDispatch } from "react-redux";

function ElementForm() {
  const [newElement, setNewElement] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_ELEMENT",
      payload: newElement,
    });
    setNewElement("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Element name"
        value={newElement}
        onChange={(event) => setNewElement(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ElementForm;
