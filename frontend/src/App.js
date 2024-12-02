import ToDo from "./components/ToDo";
import { useEffect, useState } from "react";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi"

function App() {


  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating]=useState(false)
  const [toDoId, setToDoId] = useState("")


  useEffect(() => {
    getAllToDo(setToDo)
  }, [])


  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  const toggleComplete = (item) => {
    updateToDo(item._id, item.text, !item.completed, setToDo, setText, setIsUpdating);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>

      <div className="top">
        <input
        type="text"
        placeholder="Add ToDos..."
        value={text}
        onChange={(e) => setText(e.target.value)}/>

      <div
      className="add"
      onClick={isUpdating ?
        () => updateToDo(toDoId, text, false, setToDo, setText, setIsUpdating)
        : () => addToDo(text, setText, setToDo)}>
      {isUpdating ? "Update" : "Add"}
      </div>
      </div>

      <div className="list">
          {toDo.map((item) => 
          <ToDo
          key = {item._id }
          text = {item.text}
          completed={item.completed}
          updateMode = {() => updateMode(item._id, item.text)}
          deleteToDo = {() => deleteToDo(item._id, setToDo)}
          toggleComplete={() => toggleComplete(item)}
            />)}
      </div>

    </div>
</div>
  );
}

export default App;
