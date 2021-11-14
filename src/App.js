import { BrowserRouter } from "react-router-dom"
import Routing from './subduing/Routing'

function App() {
  // versions
  console.log(window.versions);

  // IPC
  // send data render-process to main-process
  window.api.send("toMain", 100);

  // get data from main-process
  window.api.receive("fromMain", (data) => {
    console.log(data);
  });

  return (
    <> 
      <BrowserRouter>
          <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
