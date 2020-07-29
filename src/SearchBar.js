import React, {useState} from 'react';



const SearchBar =()=> {
    const [data, setData] =useState(null)
  
    const handleKeyUp = (e)=> {
        setData(e.target.value)
        console.log(data);
    }
  
    return (
    <div >
      <input type='search' 
      placeholder = 'search'
      onKeyUp= {handleKeyUp}/>


    </div>
  );
}

export default SearchBar;