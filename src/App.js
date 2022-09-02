import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'


function App() {
  const [data, setData] = useState(['Latte','Mocha'])
  const[drink, setDrink] =useState('')

  function changed(x){
    setDrink(x.target.value)

   }

  function addItem(){
    let temp=[];
    data.map(x => temp.push(x));
    temp.push(drink);
    setData(temp);

    //setData([...data])

  }

  return <div className="App">
    <div className="container">
      <h3>My Items</h3>
      <input type='text' value={drink} onChange={changed}  />
      <button onClick={addItem} >Add Item!</button>
      
      <div className="items-list">
        {data.map(x => <p>{x}</p>)}
      </div>
    </div>
  </div>;
}




export default App;

