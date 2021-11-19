import { BrowserRouter } from "react-router-dom"
import Routing from './subduing/Routing'

function App() {
  // versions
  console.log(window.versions);

  // cpu
  console.log(window.cpuUsage);
  console.log(window.cpuUsage.hostname());
  console.log(window.cpuUsage.homedir());
  console.log(window.cpuUsage.platform());
  console.log(window.cpuUsage.networkInterfaces());
  console.log(window.cpuUsage.totalmem());
  console.log(window.cpuUsage.type());
  console.log(window.cpuUsage.userInfo());
  console.log(window.cpuUsage.release());
  console.log(window.cpuUsage.version());

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
