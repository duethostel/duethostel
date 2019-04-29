import React from "react"

import Backdrop from "./backdrop"
import Logo from "./logo"
import Navigation from "./navigation"

const Drawer = ({ state, stateToggleHandler }) => {
  return (
    <div>
      <Backdrop
        state={state}
        toggleHandler={stateToggleHandler} />
      <div>
        <div>
          <Logo />
        </div>
        <div>
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default Drawer