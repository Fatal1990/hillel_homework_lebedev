import React from "react";

export default function StickerList() {
  const stickerArr = [
    {
      description:
        "Aut non dolorem non sit et. Aut voluptas neque possimus voluptatibus. Quia qui in ducimus. Pariatur nisi pariatur officiis ipsam harum et molestiae.",
      id: "1",
    },
    {
      description:
        "Delectus eos assumenda possimus velit commodi sunt. Iste modi quia est nam qui voluptatibus est quo. Unde repudiandae ut et sunt nam beatae placeat. Et repudiandae explicabo voluptatem qui impedit reiciendis aliquam inventore. Doloremque cupiditate nesciunt temporibus voluptatibus. Voluptate animi occaecati ducimus dolor nulla facilis voluptatem.",
      id: "2",
    },
    {
      description:
        "Voluptatem dignissimos aliquam error. Esse quas ex distinctio aut. Provident eius et. Inventore placeat est aut et veniam sint numquam ullam.",
      id: "3",
    },
    {
      description:
        "Placeat et nisi sunt molestiae est dolore repellendus. Molestias et est qui sed inventore qui doloremque. Ducimus quo aut et perferendis alias magnam veritatis illum iste. Quisquam ut fuga. Deleniti voluptatem maiores magni mollitia aut et.",
      id: "4",
    },
    {
      description:
        "Tempora et cumque eaque et dolor laborum sunt et repudiandae. Quis culpa minima modi porro enim qui odit qui. Quae provident ipsa atque impedit ullam ea.",
      id: "5",
    },
  ];

  const [sticker, setSticker] = useState(stickerArr);

  const addBtn = (e) => {
    e.preventDefault();
    const newSticker = {
      description: "Enter your task...",
      id: Date().toString(),
    };
    stickerArr.push(newSticker);
  };

  return (
    <div className='wrp'>
      <div className='add-btn-w'>
        <button onClick={() => {addBtn(e)}} className='add-btn'>
          <img src='./icon/addButtonIcon.png' alt='' />
        </button>
      </div>
    </div>
  );
}
