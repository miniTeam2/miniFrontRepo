import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import MainPage from "./pages/Main/MainPage" ;
import DetailPage from "./pages/Detail/DetailPage"
import LoginPage from "./pages/Login/LoginPage"
import SearchResultPage from "./pages/SearchResult/SearchResultPage"
import SignupPage from "./pages/Signup/SignupPage"
import Header from "./components/header";
import Footer from "./components/footer"

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path = "/" element={<MainPage/>} />
        <Route path = "/login" element={<LoginPage/>}/>
        <Route path = "/signup" element={<SignupPage/>}/>
        <Route path="/Search/:searchId" element={<SearchResultPage />} />
        <Route path="/movie/:movieName" element={<DetailPage />} />
      </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
