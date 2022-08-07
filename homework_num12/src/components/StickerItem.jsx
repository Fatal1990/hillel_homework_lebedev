import React, { useContext, useState } from "react";
import { themeContext } from "../context/theme";
import { Link } from "react-router-dom";

export default function StickerItem({
  sticker,
  deleteBtn,
  theme,
}) {
  const { id, description } = sticker;
  const colorTheme = useContext(themeContext);

  return (
    <li
      className='sticker-wrp'
      style={
        theme
          ? { backgroundColor: colorTheme.colorDark }
          : { backgroundColor: colorTheme.colorLight }
      }
    >
      <div className='del-btn-w'>
        <button
          className='del-btn'
          onClick={() => {
            deleteBtn(id);
          }}
        >
          <img src='./icon/delButtonIcon.svg' alt='' />
        </button>
      </div>
      <Link to={`/sticker/${id}`} className='link-wrp' style={
        theme
          ? { backgroundColor: colorTheme.colorDark, color: "white" }
          : { backgroundColor: colorTheme.colorLight, color: "black" }
      }>
        <p>{description}</p>
      </Link>
    </li>
  );
}
