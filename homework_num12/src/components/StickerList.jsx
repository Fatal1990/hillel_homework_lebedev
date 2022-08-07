import { React, useEffect, useState, useContext } from "react";
import axios from "axios";
import StickerItem from "./StickerItem";
import { themeContext } from "../context/theme";

export default function StickerList() {
  const stickerArr = "https://62d7ce4f9c8b5185c77c706f.mockapi.io/Stickers";
  const [description, setDescription] = useState("");
  const [stickers, setStickers] = useState([]);
  const [theme, setTheme] = useState(false);
  const colorTheme = useContext(themeContext);

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

  const changeThemeBtn = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    axios.get(stickerArr).then(({ data }) => setStickers(data));
  }, []);

  return (
    <>
      <div className='add-btn-w'>
        <button
          onClick={(e) => {
            addBtn(e);
          }}
          className='add-btn'
        >
          <img src='./icon/addButtonIcon.png' alt='' />
        </button>
        <button
          className='theme-btn'
          onClick={changeThemeBtn}
          style={
            theme
              ? { backgroundColor: colorTheme.colorLight, color: "black" }
              : { backgroundColor: colorTheme.colorDark, color: "white" }
          }
        >
          Change theme on this...
        </button>
      </div>
      <ul className='sticker-list'>
        {stickers.map((sticker) => (
          <StickerItem
            key={sticker.id}
            sticker={sticker}
            deleteBtn={deleteBtn}
            theme={theme}
          />
        ))}
      </ul>
    </>
  );
}
