import { BrowserRouter } from "react-router-dom";
import { LayoutApplication } from "./layouts/appLayout";
import 'popper.js';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

function App() {
  return (
    <BrowserRouter>
      <LayoutApplication />
    </BrowserRouter>
  );
}

export default App;
