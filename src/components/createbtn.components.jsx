// App.js
import React, { useState } from "react";
import CreatePage from "./createpage.components";

const CreateBtn = () => {
  const keyName = "noteData";

  let getData = (keyname) => {
    return localStorage.getItem(keyname);
  };

  let setData = (keyname, data) => {
    return localStorage.setItem(keyname, JSON.stringify(data));
  };

  let removeData = (keyname) => {
    return localStorage.removeItem(keyname);
  };

  // removeData(keyName)
  // setData(keyName, [{'id': 1, 'des': 'test5'}, {'id': 3, 'des': 'test7'}])
  let allNote = JSON.parse(getData(keyName));

  // allNote.push({'id': 9, 'des': "test9"})
  // console.log(allNote);
  const [showNewPage, setShowNewPage] = useState(false);

  const createNewPage = () => {
    setShowNewPage(true);
  };

    
  return (
    <div>
      <button onClick={createNewPage}>Create Page</button>
      {allNote.map((list) => (
         <div className="col-log-4">
         <ul className="list-group">
          <li className="list-group-item ">{list.id}
          {list.des}</li>
          
        </ul>
        </div>
        
      ))}
     
 
    
      {showNewPage && <CreatePage allDataa={allNote} setData={setData} keyName={keyName}/>}
    </div>
  );
};

export default CreateBtn;
