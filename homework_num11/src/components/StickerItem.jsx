import React, { useState } from "react";

export default function StickerItem({ sticker, deleteBtn, editDescription }) {
  const { id, description } = sticker;
  const [edit, setEdit] = useState(false);
  const [currentDescription, setCurrentDescription] = useState(description);

  const editing = () => {
    return (
      <textarea
        onBlur={(e) => {
          setEdit(!edit);
          e.stopPropagation();
          setCurrentDescription(e.target.value);
          editDescription(currentDescription);
        }}
      >
        {description}
      </textarea>
    );
  };

  const state = () => {
    return (
      <p
        onClick={() => {
          setEdit(!edit);
        }}
      >
        {description}
      </p>
    );
  };

  return (
    <li className="sticker-wrp">
      <div className="del-btn-w">
        <button
          className="del-btn"
          onClick={() => {
            deleteBtn(id);
          }}
        >
          <img src="./icon/delButtonIcon.svg" alt="" />
        </button>
      </div>
      <>{edit ? editing() : state()}</>
    </li>
  );
}
