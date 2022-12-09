import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
// import Background from './components/Background'

const App = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col w-[75rem] m-auto p-2">
        {/* <Background /> */}
        <Header />
        <Body />
      </div>
    </div>
  );
};

export default App;
