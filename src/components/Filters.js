import React from "react";

function Filters({ onChangeType, onFindPetsClick }) {
  function handleTypeChange(e) {
    const newType = e.target.value;
    onChangeType(newType);
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select onChange={handleTypeChange} name="type" id="type" data-testid="type">
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button onClick={onFindPetsClick} className="ui secondary button">Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
