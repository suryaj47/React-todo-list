import React, { useState, useEffect } from "react";
import "./App.css";
import image1 from "./assets/react.svg"  

function App() {
  const [name, setName] = useState("");
  const [searchname, setsearchname] = useState("");
  const [list, setList] = useState([]);
  const [searchlist, setsearchList] = useState([]);
  

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("todoItems")) || [];
    setList(storedList);
    setsearchList(storedList);
  }, []);

  function nameChange() {
    if (!name.trim()) return; 
    const updatedList = [...list, name];
    setList(updatedList);
    console.log(updatedList);
    localStorage.setItem("todoItems", JSON.stringify(updatedList));
  }

  function nameDelete(value) {
    const updatedList = list.filter((val) => val !== value);
    setList(updatedList);
    localStorage.setItem("todoItems", JSON.stringify(updatedList));
    setsearchList(updatedList);
  }

  function namefind(value)
  {
    if (value){
      const findList = list.filter((val) => val.startsWith(value));
 
    setsearchList(findList);
    }
    else{
      setsearchList(list);
    }

  }

  return (
    <>
    
      <div><h1>To-do List</h1></div>
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="for adding" />
     
        <button onClick={nameChange}>ADD</button>
      </div>

      <div>
        <input type="text" value={searchname} onChange={(e) => setsearchname(e.target.value)} placeholder="for searching" />
        <button onClick={() => namefind(searchname)}>Search</button>

      </div>

        
      <br/>
     
      <table>
        <tbody>
        <tr>
          <th> LIST </th> 
          <th>Operation</th>
        </tr>
        </tbody>
     
      </table>
      <br/>
      
      <div className="value box" style={{ display: "inline-block" }}>
     
        {searchlist.map((value, index) => (
          
          <div key={index} >
          
          <table>
           <tbody>
           <tr>
                <td ><h1>{value}</h1></td>
                <td ><button onClick={() => nameDelete(value)}>X</button></td>
              </tr>
           </tbody>
           
              
            </table>
          </div>
        ))}
      </div>

      <br/>

     
    </>
  );
}

export default App;
