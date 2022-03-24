import React, { useContext } from "react";
import StyleContext from './components/StyleContext.js'

export default function RequestFormButton() {
const buttonStyling = React.useContext(StyleContext);

  return (
    <div>
      <button style={buttonStyling}>
        Click Here!
      </button>
      <input type="submit" value="Submit" />

    </div>
  );
}
