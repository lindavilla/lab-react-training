import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard/IdCard';
import Greetings from './Greetings/Greetings';
import Random from './Random/Random';


function App() {
  return (
    <div className="App">

       <h1>Id Card</h1>

        <IdCard 
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard 
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1993-05-11")}
          picture="https://randomuser.me/api/portraits/women/8.jpg"
        />

    <h1>Greeting</h1>

        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

  

    <h1>Random Number</h1>

        <Random min={1} max={6}/>
        <Random min={1} max={100}/> 

    <h1>Box Color</h1>


    </div>
  );
}

export default App; 
