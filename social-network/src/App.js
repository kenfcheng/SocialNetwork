import "./App.css";
import { UserContext } from "./contexts/user";
import Home from "./pages/home";

function App() {
  return (
    <UserContext.Provider>
      <div className="App">
        <Home />
      </div>
    </UserContext.Provider>
  );
}

export default App;
