import { BrowserRouter } from "react-router-dom"
import Navigation from './pages/partials/Navigation'
import RouterArea from './pages/partials/RouterArea'

function App() {
  console.log(sessionStorage.getItem("authToken"));

  return (
    <div>
      <BrowserRouter>
          <Navigation />
          <RouterArea />
      </BrowserRouter>
    </div>
  );

}

export default App;
