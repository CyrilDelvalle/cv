import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col w-[75rem] m-auto p-2">
      <Header />
      <Body />
    </div>
  );
};

export default App;
