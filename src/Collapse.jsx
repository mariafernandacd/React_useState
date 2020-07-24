import React, { useState } from "react";

const Collapse = ({ label }) => {
  const [collapse, setCollapse] = useState(true);

  const cambiar = () => {
    setCollapse(!collapse);
  };
  return (
    <div>
      <button onClick={cambiar}>{collapse ? "👉" : "👇"}</button>
      {collapse && <p>Qué debo hacer para utilizar estado en React?</p>}
    </div>
  );
};
//https://getbootstrap.com/docs/4.0/components/collapse/
/*,bi
```ccambiar
Qué debo hacer para utilizar estado en React? (+)
```

```
Qué debo hacer para utilizar estado en React? (-)

Para utilizar estado en React...

*/

export default Collapse;
