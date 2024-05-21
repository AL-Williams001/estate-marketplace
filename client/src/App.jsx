import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/profile" element={<div>Profile</div>} />
        <Route path="/sign-in" element={<div>SignIn</div>} />
        <Route path="/sign-up" element={<div>SignUp</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
