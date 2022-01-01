import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const KKeep = () => {
  const [state, setstate] = useState([]);

  const addNote = (data) => {
    setstate((oldData) => [...oldData, data]);
  };

  const deleteBtn = (id) => {
    setstate(state.filter((elem)=> elem.id!==id))
  };

  return (
    <>
      <Header />
      <CreateNote addNote={addNote} />
      <div className="notes">
        {state.map((curElement, index) => {
          return (
            <Note
              deleteBtn={deleteBtn}
              key={index}
              id={curElement.id}
              text={curElement.text}
              content={curElement.content}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default KKeep;
