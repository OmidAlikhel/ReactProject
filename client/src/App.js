import "./App.css";
import Layout from "./Layout";
import IndexPage from "./IndexPage";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" />
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
