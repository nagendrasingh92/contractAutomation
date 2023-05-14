import { BrowserRouter, Routes, Route } from "react-router-dom"
import FrontPage from "./pages/FrontPage";
import ContractList from "./pages/Contract"
import CustomerList from "./pages/Customer"
import Header from "./components/header/index";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/contractAutomation">
      <Header />
        <Routes>
          <Route exact path="/" element={<FrontPage />} />
          <Route path="/contractList" element={<ContractList />} />
          <Route path="/customerList" element={<CustomerList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
