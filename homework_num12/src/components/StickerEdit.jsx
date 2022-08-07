import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { themeContext } from "../context/theme";
import axios from "axios";


export default function StickerEdit() {
  const { id } = useParams();
  const [sticker, setSticker] = useState("");
  const colorTheme = useContext(themeContext);
  const [edit, setEdit] = useState(false);
  const [editedDescription, setEditedDescription] = useState(
    sticker.description
  );
  const stickerArr = "https://62d7ce4f9c8b5185c77c706f.mockapi.io/Stickers";
  const description = sticker.description;

  const editDescription = (description, id) => {
    axios
      .put(stickerArr + "/" + id, { description })
      .then(({ data }) => setSticker(data));
    setEditedDescription(description);
  };

  const editing = () => {
    return (
      <textarea
        autoFocus={true}
        onBlur={(e) => {
          setEdit(!edit);
          editDescription(editedDescription, id);
        }}
        onChange={(e) => setEditedDescription(e.target.value)}
      >
        {description}
      </textarea>
    );
  };

  const state = () => {
    return (
      <p
        className='editing-p'
        onClick={() => {
          setEdit(!edit);
        }}
      >
        {description}
      </p>
    );
  };

  useEffect(() => {
    axios.get(stickerArr + "/" + id).then(({ data }) => setSticker(data));
  }, [id]);

  return (
    <li
      className='sticker-wrp'
      style={{ backgroundColor: colorTheme.colorLight }}
    >
      <>{edit ? editing() : state()}</>
    </li>
  );
}
