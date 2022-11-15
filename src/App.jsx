import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="bg-slate-50">
      <div className="mx-80">
        <div className="bg-slate-200 min-h-screen flex flex-col ">
          <Header />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default App;
