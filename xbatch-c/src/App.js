import UserConf from "./screens/UserConf"
import ScreenView from "./screens/ScreenView"

function App() {
  return (
    <div className="bg-pray flex h-screen">
      <div className="h-auto w-full m-5 flex">
        <UserConf />
        <div className="w-5"/>
        <ScreenView />
      </div>
    </div>
  );
}

export default App;
