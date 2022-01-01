import React, { useState } from "react";

const CreateNote = ({ addNote }) => {
  const [data, setData] = useState({ text: "", content: "" });
  const [click, setClicked] = useState(false);

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setData((oldData) => {
      return {
        ...oldData,
        [name]: value,
        id: Math.floor(Math.random() * 1000),
      };
    });
  };

  const btnHandler = (e) => {
    e.preventDefault();
    if (data.content === "" && data.text === "") {
      alert("Write the content in desired fields, press add button!");
    } else {
      addNote(data);
      setData({ text: "", content: "" });
    }
  };

  const setCheck = () => {
    setClicked(true);
  };

  return (
    <div className="form-container">
      <form>
        <input
          type="text"
          value={data.text}
          name="text"
          onClick={setCheck}
          autoComplete="off"
          placeholder="Enter title"
          onChange={inputEvent}
        />
        {click ? (
          <div>
            <textarea
              name="content"
              value={data.content}
              id=""
              autoComplete="off"
              placeholder="Enter content"
              onChange={inputEvent}
            ></textarea>
            <button className="btn" onClick={btnHandler}>
              +
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default CreateNote;
