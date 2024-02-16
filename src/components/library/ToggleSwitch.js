import React, { useState } from 'react';


function SwitchComponent() {
  const [isChecked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!isChecked);
  };

  console.log(isChecked);

  return (
    <div className="switch">
      <form action="#" className="center z-depth-1">
        <label>
        <div className="chip z-depth-1 pink lighten-5">community</div>
 
          <input type="checkbox" checked={isChecked} onChange={handleToggle} />
          <span className="lever z-depth-1"></span>

          <div className="chip z-depth-1 purple lighten-5">individual</div>
        </label>
      </form>
    </div>
  );
}

export { SwitchComponent }; // Exporting isChecked directly

