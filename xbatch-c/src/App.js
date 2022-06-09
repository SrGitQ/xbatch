import MenuScreen from "./screens/MenuScreen"
import ScreenRender from "./screens/ScreenRender"
import { useState } from "react"

function App() {
  const [menu, setMenu] = useState('pages')
  const user = {
    name: 'Efra el Crack',
    job: 'Parser Engineer',
  }

  return (
    <div className="bg-pray flex h-screen min-h-[50rem] min-w-[80rem]">
      <div className="h-auto w-full m-5 flex">
        <MenuScreen option={menu} setOption={setMenu} userInfo={user}/>
        <div className="w-5"/>
        <ScreenRender option={menu}/>
      </div>
    </div>
  );
}

export default App;
