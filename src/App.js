import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import { useEffect, useState } from "react";
import Login from "./pages/Login";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLogged");
    if(loggedIn === "true"){
      setIsLogged(true);
    }
  }, [])

  const updateIsLogged = (loggedIn) => {
    setIsLogged(loggedIn);
    localStorage.setItem("isLogged", loggedIn);
  }
  
  return (
    <>
      {!isLogged ? (
        <Login isLogged={isLogged} setIsLogged={updateIsLogged} />
      ) : (
        <BrowserRouter>
          <Header isLogged={isLogged} setIsLogged={updateIsLogged} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
