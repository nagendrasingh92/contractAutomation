import { BrowserRouter, Routes, Route } from "react-router-dom"
import FrontPage from "./pages/FrontPage";
import ContractList from "./pages/ContractList"
import CustomerList from "./pages/CustomerList"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/contractList" element={<ContractList />} />
          <Route path="/customerList" element={<CustomerList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
