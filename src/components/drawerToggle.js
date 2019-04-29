import React from "react"

function DrawerToggle({ stateToggleHandler }) {
  return (
    <button onClick={stateToggleHandler}>
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
}

export default DrawerToggle