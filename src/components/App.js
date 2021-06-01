import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });


  useEffect(() => {
    fetch("http://localhost:3001/pets")
      .then(r => r.json())
      .then(setPets);
  }, [])

  function onChangeType(newType) {
    setFilters({ type: newType });
  }

  function onFindPetsClick() {
    let url = "http://localhost:3001/pets";
    
    if (filters.type !== "all") {
      url += `/?type=${filters.type}`;
    }

    fetch (url)
      .then(r => r.json())
      .then(setPets);
  }

  function onAdoptPet(petId) {
    const filteredPets = pets.map(pet => {
        if (pet.id === petId) {
          return { ...pet, isAdopted: true }
        }
        return pet;
      });
    
    setPets(filteredPets);
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters {...{ onChangeType, onFindPetsClick }} />
          </div>
          <div className="twelve wide column">
            <PetBrowser {...{ pets, onAdoptPet }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
