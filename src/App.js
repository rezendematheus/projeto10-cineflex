import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Movies from "./pages/Movies";
import Resume from "./pages/Resume";
import Schedule from "./pages/Schedule";
import SitSelection from "./pages/SitSelection";
import GlobalStyle from "./theme/globalStyle"

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/schedule/:movieId" element={<Schedule />} />
          <Route path="/sitselection/:scheduleId" element={<SitSelection />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
