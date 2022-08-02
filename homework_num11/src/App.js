import { useCallback, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import StickerItem from "./components/StickerItem";
// import useAsync from "./hooks/useAsync";

function App() {
  const stickerArr = "https://62d7ce4f9c8b5185c77c706f.mockapi.io/Stickers";
  const [description, setDescription] = useState("");
  const [stickers, setStickers] = useState([]);

  const addBtn = (e) => {
    e.preventDefault();
    const newSticker = {
      description,
    };
    axios
      .post(stickerArr, newSticker)
      .then(({ data }) => setStickers((prevSticker) => [...prevSticker, data]));
  };

  const deleteBtn = (id) => {
    axios.delete(stickerArr + "/" + id);
    const newStickerArr = stickers.filter((sticker) => sticker.id !== id);
    setStickers(newStickerArr);
  };

  const editDescription = (description, id) => {
    axios.put(stickerArr + "/" + id, { description });
    const newDescription = stickers.find((sticker) => sticker.id === id);
    newDescription.description = description;
  };

  useEffect(() => {
    axios.get(stickerArr).then(({ data }) => setStickers(data));
  }, []);

  return (
    <div className='wrp'>
      <div className='add-btn-w'>
        <button
          onClick={(e) => {
            addBtn(e);
          }}
          className='add-btn'
        >
          <img src='./icon/addButtonIcon.png' alt='' />
        </button>
      </div>
      <ul className='sticker-list'>
        {stickers.map((sticker) => (
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
