import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import MainPage from "./pages/Main/MainPage" ;
import DetailPage from "./pages/Detail/DetailPage"
import LoginPage from "./pages/Login/LoginPage"
import SearchResultPage from "./pages/SearchResult/SearchResultPage"
import SignupPage from "./pages/Signup/SignupPage"

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path = "/:userId" element={<MainPage/>} />
        <Route path = "/login" element={<LoginPage/>}/>
        <Route path = "/signup" element={<SignupPage/>}/>
        <Route path="/Search/:searchId" element={<SearchResultPage />} />
        <Route path="/:movieId" element={<DetailPage />} />
        <Route path = "*" element={<Navigate to = "/login" replace = {true} />} />
      </Routes>
    </UserProvider>
  </BrowserRouter>
  );
}

export default App;
