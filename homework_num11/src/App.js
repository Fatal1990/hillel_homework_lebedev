import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import StickerItem from "./components/StickerItem";

function App() {
  const stickerArr = "https://62d7ce4f9c8b5185c77c706f.mockapi.io/Stickers";

  const [description, setDescription] = useState("Enter ur task...");
  const [sticker, setSticker] = useState([]);

  const addBtn = (e) => {
    e.preventDefault();
    const newSticker = {
      description,
    };
    axios
      .post(stickerArr, newSticker)
      .then(({ data }) => setSticker((prevSticker) => [...prevSticker, data]));
  };

  const deleteBtn = (id) => {
    axios.delete(stickerArr + "/" + id);
    const newStickerArr = sticker.filter((sticker) => sticker.id !== id);
    setSticker(newStickerArr);
  };

  const editDescription = () => {
    
  };

  useEffect(() => {
    axios.get(stickerArr).then(({ data }) => setSticker(data));
  }, []);

  return (
    <div className="wrp">
      <div className="add-btn-w">
        <button
          onClick={(e) => {
            addBtn(e);
          }}
          className="add-btn"
        >
          <img src="./icon/addButtonIcon.png" alt="" />
        </button>
      </div>
      <ul className="sticker-list">
        {sticker.map((sticker) => (
          <StickerItem
            key={sticker.id}
            sticker={sticker}
            deleteBtn={deleteBtn}
            editDescription={editDescription}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
