import logo from './logo.svg';
import infos from './Infos.json'
import './App.css';
import Header from './Header';

const  App = () => {
  console.log(infos);
  return (
    <div className="bg-slate-700">
      <div className='mx-44'>
        <Header />
      </div>
    </div>
  );
}

export default App;
