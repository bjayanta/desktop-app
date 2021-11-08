import { BrowserRouter } from "react-router-dom"
import Navigation from './pages/partials/Navigation'
import RouterArea from './pages/partials/RouterArea'

function App(props) {

  return (
    <div className="bg-gray-400 h-full">

      <BrowserRouter>
        <Navigation />
        <RouterArea />
      </BrowserRouter>

    </div>
  );

}

export default App;
