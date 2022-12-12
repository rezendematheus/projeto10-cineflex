import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Movies from "./pages/Movies";
import Resume from "./pages/Resume";
import Schedule from "./pages/Schedule";
import SitSelection from "./pages/SitSelection";
import GlobalStyle from "./theme/globalStyle"

function App() {
  const [resume, setResume] = useState({})

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/schedule/:movieId" element={<Schedule />} />
          <Route path="/sitselection/:scheduleId" element={<SitSelection resume={resume} setResume={setResume}/>} />
          <Route path="/resume" element={<Resume resume={resume}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
