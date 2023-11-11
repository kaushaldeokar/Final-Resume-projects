import "./App.css";
import Login from "./Components/Accounts/Login";
import DataProvider from "./Context/DataProvider";
import Home from "./Components/Home/Home";
import Contact from "./Components/Home/Contact";
import About from "./Components/Home/About";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import React, { useState } from "react";
import CreatePost from "./Components/CreatePost/CreatePost";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <div>
      <DataProvider>
        <BrowserRouter>
          
          <div style={{ marginTop: 64 }}>
            <Routes>
              <Route
                path="/login"
                element={<Login isUserAuthenticated={isUserAuthenticated} />}
              ></Route>
              <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                <Route path="/" element={<Home />}></Route>
              </Route>
              <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                <Route path="/createpost" element={<CreatePost />}></Route>
              </Route>
              <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                <Route path="/Contact" element={<Contact />}></Route>
              </Route>
              <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                <Route path="/about" element={<About />}></Route>
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
