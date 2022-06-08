import MenuScreen from "./screens/MenuScreen"
import ScreenRender from "./screens/ScreenRender"
import { useState } from "react"

function App() {
  const [menu, setMenu] = useState('dashboard')

  return (
    <div className="bg-pray flex h-screen">
      <div className="h-auto w-full m-5 flex">
        <MenuScreen option={menu} setOption={setMenu}/>
        <div className="w-5"/>
        <ScreenRender option={menu}/>
      </div>
    </div>
  );
}

export default App;
