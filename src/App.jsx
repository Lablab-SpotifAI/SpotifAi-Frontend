import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { auth } from "./config/firebase";
import { Home } from "./pages/Home";
import { Chat } from "./pages/Chat";

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(null);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  return (
    <Router>
     
        <Routes>
          <Route path="/" element={<Home />} />



          {/* <Route path="/about" element={<About />} />

          <Route path="/sign-in" element={<SignIn />} />

          <Route path="/sign-up" element={<SignUp />} />

          <Route path="/contact" element={<Contact />} /> */}

          <Route path="/chat" element={<Chat />} /> 

        </Routes>
        {/* {user ? (
          <>
            <NavigateToChatbotButton />
          </>
        ) : (
          <></>
        )} */}
      
    </Router>
  );
}

export default App;
