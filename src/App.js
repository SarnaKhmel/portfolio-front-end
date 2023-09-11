import { Routes, Route } from "react-router";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cv" element={<></>} />
      <Route path="/projects/:id" element={<></>} />
      <Route path="/contacts" element={<></>} />
    </Routes>
  );
};

export default App;
