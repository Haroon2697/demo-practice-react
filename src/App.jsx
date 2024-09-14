import React from 'react';
import Card from './Card';
import Button from './Button';
import Students from './Students';
import UserGreeting from './UserGreeting';
import List from './List';
import Counter from './Counter';
import MyComponent from './MyComponent';
import Colorpicker from './Colorpicker';
import Updateobject from './Updateobject';
import UpdateComponent from './UpdateComponent';
import UpdateArray from './UpdateArray';
import Todolist from './Todolist';
import Footer from './Footer';
import UseEffectComponent from './UseEffectComponent';
import Clock from './Clock';

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 105 },
    { id: 3, name: "Cherry", calories: 5 },
    { id: 4, name: "Date", calories: 20 },
    { id: 5, name: "Fig", calories: 25 },
    { id: 6, name: "Elderberry", calories: 5 }
  ];

  const vegetables = [
    { id: 1, name: "Asparagus", calories: 20 },
    { id: 2, name: "Broccoli", calories: 55 },
    { id: 3, name: "Cabbage", calories: 20 },
    { id: 4, name: "Dill", calories: 5 },
    { id: 5, name: "Eggplant", calories: 20 },
    { id: 6, name: "Fennel", calories: 5 }
  ];

  return (
    <>

    <Todolist />
      <h1>React Components</h1>
      <Card />
      <Button />
      <Students name="Haroon" age={23} isStudent={true} />
      <UserGreeting isLoggedIn={true} username="Haroon" />
      <List category="Fruits" items={fruits} />
      <List category="Vegetables" items={vegetables} />
      <Counter />
      <MyComponent />
      <Colorpicker />
      <Updateobject />
      <UpdateComponent/>
      <UpdateArray />
      <UseEffectComponent />
      <Clock />
      <Footer />
    </>
  );
}

export default App;
