import { createContext, useContext, useState } from "react";
import shortid from "shortid";

function Home() {
  return (
    <>
      <TodoProvider>
        <TodoForm />
        <TodoList />
        <TodoInfo />
      </TodoProvider>
    </>
  );
}

function useFilter() {
  const filters = [
    {
      label: "Show All",
      code: "SHOW_ALL",
    },
    {
      label: "Hide completed",
      code: "HIDE_ISDONE",
    },
  ];
  const [filter, setFilter] = useState(filters[0].code);
  const selectFilter = (ftr) => {
    setFilter(ftr);
  };

  const filteredList = (list) => {
    if (filter === "SHOW_ALL") return list;
    if (filter === "HIDE_ISDONE") return list.filter((i) => !i.isDone);

    return [];
  };
  return {
    filteredList,
    selectFilter,
    filters,
  };
}

function TodoList() {
  const { list, checkTodo, deleteTodo } = useContext(TodoContext);
  const { filteredList, selectFilter, filters } = useFilter();

  return (
    <>
      <ul>
        {filters.map((item) => (
          <li key={item.code} onClick={() => selectFilter(item.code)}>
            {item.label}
          </li>
        ))}
      </ul>
      <ul>
        {filteredList(list).map((item) => (
          <li key={item.id}>
            <TodoItem
              item={item}
              checkTodo={checkTodo}
              deleteTodo={deleteTodo}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

function TodoItem({ item, checkTodo, deleteTodo }) {
  const handleCheck = () => {
    checkTodo(item);
  };
  const handleDelete = () => {
    deleteTodo(item);
  };
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={item.isDone}
        onChange={handleCheck}
      />
      <span>{item.text}</span>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}

function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addTodo(text);
            setText("");
          }
        }}
      />
      <button
        onClick={() => {
          addTodo(text);
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

function TodoInfo() {
  const { list, deleteAllCompleted } = useContext(TodoContext);
  const completeCount = list.filter((i) => i.isDone).length;
  const remainingCount = list.filter((i) => !i.isDone).length;
  return (
    <div>
      <span>Completed todos : {completeCount}</span>
      <button onClick={() => deleteAllCompleted()}>
        Delete completed todos
      </button>
      <br />
      <span>Remaining Todos : {remainingCount}</span>
    </div>
  );
}

const TodoContext = createContext();

const data = [
  {
    text: "todo 1",
    id: 1,
    isDone: false,
  },
  {
    text: "todo 2",
    id: 2,
    isDone: false,
  },
  {
    text: "todo 3",
    id: 3,
    isDone: true,
  },
];

function TodoProvider({ children }) {
  const [list, setList] = useState(data);

  const addTodo = (text) => {
    if (text) {
      setList([...list, { id: shortid(), text, isDone: false }]);
    }
  };

  const deleteTodo = (item) => {
    setList(list.filter((i) => i.id !== item.id));
  };

  const checkTodo = (item) => {
    setList((prev) =>
      prev.map((i) => (i.id === item.id ? { ...i, isDone: !i.isDone } : i))
    );
  };

  const deleteAllCompleted = () => {
    setList(list.filter((i) => !i.isDone));
  };

  return (
    <TodoContext.Provider
      value={{ list, addTodo, deleteTodo, checkTodo, deleteAllCompleted }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default Home;
