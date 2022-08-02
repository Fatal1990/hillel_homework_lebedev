import React, { useState } from "react";

export default function StickerItem({ sticker, deleteBtn, editDescription }) {
  const { id, description } = sticker;
  const [edit, setEdit] = useState(false);
  const [editedDescription, setEditedDescription] = useState("");

  const editing = () => {
    return (
      <textarea
        autoFocus={true}
        onBlur={(e) => {
          setEdit(!edit);
          e.stopPropagation();
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
        onClick={() => {
          setEdit(!edit);
        }}
      >
        {description}
      </p>
    );
  };

  return (
    <li className='sticker-wrp'>
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
      <>{edit ? editing() : state()}</>
    </li>
  );
}
