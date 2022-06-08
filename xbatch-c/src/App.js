import MenuScreen from "./screens/MenuScreen"
import ScreenRender from "./screens/ScreenRender"

function App() {
  return (
    <div className="bg-pray flex h-screen">
      <div className="h-auto w-full m-5 flex">
        <MenuScreen />
        <div className="w-5"/>
        <ScreenRender />
      </div>
    </div>
  );
}

export default App;
