// NewPage.js
import React, { useState } from "react";
import "./createpage.css";
import CreateBtn from "./createbtn.components";

const CreatePage = ({allDataa ,keyName ,setData}) => {
 
  const [inputData , setinputData] = useState(allDataa);
  

  // console.log(keyName)
  const handlesave = () => {
     allDataa={allDataa}
    // console.log(allDataa);
    
    setinputData([...inputData, {'id':inputData.length+1 , 'des' : 'ta' }  ]);
     setData(keyName , inputData)
     console.log(allDataa)
  }
  return (
    <>
      <div>
        <div class="container notepad-container">
          <div class="notepad-header"></div>
          <div class="notepad-body" contenteditable="true"></div>
          <div className="btn-group">
           {/* <input type="text" placeholder="" value={inputData}  /> */}
            <button onClick={handlesave} class="btn btn-save">Save</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreatePage;
