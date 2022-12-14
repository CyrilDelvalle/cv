import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="bg-gray-500 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col w-[75rem] m-auto p-2">
        <Header />
        <Body />
      </div>
    </div>
  );
};

export default App;
