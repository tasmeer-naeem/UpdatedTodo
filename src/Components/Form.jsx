import React from "react";
import { useState } from "react";

const getLocalTimes = () => {
  let list = localStorage.getItem("lists");
  //console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Form = () => {
  const [crntval, updatedval] = useState("");
  const [crntitem, additem] = useState(getLocalTimes());     //useState([])
  const [changebtn, updatebtn] = useState(true);
  const [edititem, setedititem] = useState(null);

  const changetxt = (event) => {
    updatedval(event.target.value);
  };
  //console.log(crntval)

  const add = () => {
    if (!crntval) {
    } else if (crntval && !changebtn) {
      additem(
        crntitem.map((item) => {
          if (item.id === edititem) {
            return { ...item, name: crntval };
          }
          return item;
        })
      );
      updatebtn(true);
      updatedval("");
      setedititem(null);
    } else {
      const allcrntval = { id: new Date().getTime().toString(), name: crntval };
      additem([...crntitem, allcrntval]);
      updatedval("");
    }
    updatedval("");
    

    //     additem((olditem)=>{
    //         return [...olditem,crntval]
    //    });
    //console.log(crntval)
    //updatedval("")
  };

  const deleteitem = (index) => {
    const deleteditem = crntitem.filter((currentvall) => {
      return index !== currentvall.id;
    });
    additem(deleteditem);
   console.log(deleteditem)
  };

  const updateitem = (index) => {
    let updateditem = crntitem.find((currentval) => {
      return currentval.id === index;
    });
    console.log(updateditem);
    updatebtn(false);
    updatedval(updateditem.name);
    setedititem(index);
  };

  const removeall = () => {
    additem([]);
  };

  return (
    <div style={{backgroundColor:"Menu"}} >
      <input 
        type="text"
        value={crntval}
        onChange={changetxt}
        placeholder="add item"
      />
      {changebtn ? (
        <button onClick={add}>Add Item</button>
      ) : (
        <button onClick={add}>Updated Item</button>
      )}
      <button onClick={removeall}>Remove All</button>
      <div>
        {crntitem.map((currentval) => {
          //const val=useContext(list);
          return (
            <div key={currentval.id}>
              {currentval.name}
              <button onClick={() => deleteitem(currentval.id)}>
                Delete Item
              </button>
              <button onClick={() => updateitem(currentval.id)}>
                Update Item
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Form;
