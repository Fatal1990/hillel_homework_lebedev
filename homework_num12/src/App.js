import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import StickerList from "./components/StickerList";
import { themeContext } from "./context/theme";
import StickerEdit from "./components/StickerEdit";

function App() {
  return (
    <themeContext.Provider
      value={{ colorLight: "white", colorDark: "darkgray" }}
    >
      <BrowserRouter>
        <div className='wrp'>
          <Link to='/' className='main-btn'>
            Main
          </Link>
          <Routes>
            <Route path='/' element={<StickerList />} />
            <Route path='sticker/:id' element={<StickerEdit />} />
          </Routes>
        </div>
      </BrowserRouter>
    </themeContext.Provider>
  );
}

export default App;
