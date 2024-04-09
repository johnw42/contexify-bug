import { useState } from "react";
import { Item, Menu, useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";

function App() {
  const [count, setCount] = useState(1);

  const menuId = "menu";
  const { show } = useContextMenu({ id: menuId });

  return (
    <>
      <div onClick={(event) => {
        console.log(event);
        show({ event });
      }}>count is {count}</div>
      <Menu id={menuId}>
        <Item onClick={() => setCount(count + 1)}>Inc</Item>
        <Item onClick={() => setCount(count - 1)} disabled={count <= 0}>
          Dec
        </Item>
      </Menu>
    </>
  );
}

export default App;
