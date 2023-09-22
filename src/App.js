import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./component/Home";
import logo from "./logo.png";
import NavBar from "./component/Navbar";
import Footer from "./component/Footer";
import Login from "./component/Login";
import Profile from "./component/Profile";
import Login2 from "./component/Login2";
import Signup2 from "./component/Signup2";
import HowToHelp from "./component/HowToHelp";
import Community from "./component/Community/Community";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import React , {useEffect , useState} from "react";

function App() {
  const fAuth = getAuth();
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
  }, []);
  onAuthStateChanged(fAuth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      setLoggedIn(true)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  return (
    // <div className="bg-black text-white justify-center w-screen h-screen">
    //   <img src={logo} alt="logo" />
    //   <p className="text-xl p-3">
    //     Use <code>feature</code> branch to push your changes / make pull
    //     request. Let's keep <code>main</code> branch clear for now.
    //   </p>
    //   <p className="text-xl p-3">
    //     We will push to main on a feature basis, once we are done with homepage,
    //     we will push it to main and later on use main branch to deploy our app.
    //   </p>
    //   <p className="text-xl p-3">
    //     {" "}
    //     Also if majority of developers are comfortable using Vite instead of
    //     CRA, you can replace this boilerplate app with a Vite App before
    //     starting to work on the project.
    //   </p>
    // </div>
    <div>
      <Router>
        <NavBar loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/howtohelp" element={<HowToHelp />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/signup2" element={<Signup2 />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
