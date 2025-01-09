import logo from './logo.svg';
import './App.css';

function App() {
  const sayHello = () => {
   console.log("kkkk");
   //console.info("oo")
    alert('Hello!')
  };
  return (
    <div>
      <p>hi</p>
      <p>Irshad Vali</p>
      <button onClick={sayHello}>Say Hello</button>
    </div>
  );
}

export default App;
