import Message from "./Message";

function App() {
  const name = 'Visitor';
  if (name)
    return <h1>Hello {name}</h1>;
  return <h1>Hello World!</h1>;
}

export default App;