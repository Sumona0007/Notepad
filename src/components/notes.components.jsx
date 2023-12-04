import React, { useState, useEffect } from "react";
import "./createpage.css";

const getLocalItems = () => {
  let list = localStorage.getItem("noteData");
  if (list) {
    return JSON.parse(localStorage.getItem("noteData"));
  } else {
    return [];
  }
};

const Notes = () => {
  const [inputData, setInputData] = useState();
  const [items, setItems] = useState(getLocalItems());
  const [toggleSubmit, settoggleSubmit] = useState(true);
  const [isEditItem, setisditItem] = useState(null);
  const [showNewPage, setShowNewPage] = useState(false);

  const createNewPage = () => {
    setShowNewPage(true);
  };

  const addItem = () => {
    //kono value save korar kaj korbe
    if (!inputData) {
      alert('please fill the column')
      // console.log(!inputData);
    } else if (!toggleSubmit && inputData) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      settoggleSubmit(true);
      setInputData('');
      setisditItem(null);
    } else {
      const allInptData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInptData]);
      setInputData('');
      
    }
  };

  const editItem = (id) => {
    
    let newEdit = items.find((elem) => {
      return elem.id === id;
    }
    );
    console.log(toggleSubmit)
    settoggleSubmit(false);

    setInputData(newEdit.name)
    setisditItem(id);
  };


  const removeAll = () => {
    setItems([]);
  };

  const deletItem = (index) => {
    //kono valu delet korar kaj dibe
    const updatedItems = items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(updatedItems);
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);
  return (
    <div>
      <button onClick={createNewPage}>Create Page</button>
      <div className="showItems">
        {items.map((elem) => (
          <div className="eachItem" key={elem.id}>
            <h5>{elem.id}</h5>
            <div className="todo-btn">
              <i
                className="bi bi-pencil-square"
                title="Edit Item"
                onClick={() => editItem(elem.id)}
              />
              <i
                className="bi bi-trash3"
                title="Delete Item"
                onClick={() => deletItem(elem.id)}
              />
            </div>
          </div>
        ))}
      </div>
      {showNewPage && (
        <div class="container notepad-container">
          <textarea
            class="notepad-body"
            contenteditable="true"
            type="text"
            placeholder="write here"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            style={{
              "min-height": "400px",
              "min-width": "1050px",
              display: "flex",
              "margin-left": "2rem",
            }}
          />
         
          {
            
            toggleSubmit ? 
            (
              <button onClick={addItem}> Save</button>
            ) : (
              <button onClick={addItem} >Edit</button>
            )
            
          }
        </div>
      )}
    </div>
  );
};
export default Notes;
