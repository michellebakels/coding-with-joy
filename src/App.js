import React, {useState} from 'react';
import './App.css';
import PetForm from "./components/petForm";
import ImageGenerator from "./components/imageGenerator";

export const initialForm = {
  petName: '',
  petType: '',
  loveYou: '',
  favoriteThing: '',
  image: ''
}

function App() {
  const [showForm, setShowForm] = useState(true);
  const [petForm, setPetForm] = useState(initialForm)

  return (
    <div className="container">
      {showForm ?
          <PetForm setShowForm={setShowForm} setPetForm={setPetForm} petForm={petForm}/>
          :
          <ImageGenerator setShowForm={setShowForm} petForm={petForm} setPetForm={setPetForm}/>
      }
    </div>
  );
}

export default App;
