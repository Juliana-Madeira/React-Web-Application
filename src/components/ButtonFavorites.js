import Heart from "react-animated-heart";
import React, { useEffect, useState } from "react";


const ButtonFavorites = ({id}) => {
    

  const [favorite, setFavorite] = useState(false);
  const [isClick, setClick] = useState(false);

  const addFavorite = () =>{
    
    let keep = JSON.parse(localStorage.getItem('favorites'));
    if (keep != null){
      if(!keep.includes(id)){
        keep.push(id);
      } 
    } else {
      keep = [id];
    }
    localStorage.setItem('favorites', JSON.stringify(keep));
    
    checkFavorite();
  }

  const checkFavorite = () => {
    let keep = JSON.parse(localStorage.getItem('favorites'));
    if(keep == null){
        keep = []
    } else{
        setFavorite(keep.includes(id));
    }
    
  }

  const deleteFavorite = () =>{
    const keep = JSON.parse(localStorage.getItem('favorites'));
  
    const index = keep.indexOf(id) ;
      if (index > -1) {
        keep.splice(index, 1)
        localStorage.setItem('favorites', JSON.stringify(keep));
      }
 
    checkFavorite();
  }

  useEffect(() => {

    checkFavorite();
  }, []);

  return(
      <div>
            {favorite ? <Heart isClick={!isClick} onClick={deleteFavorite}/>:<Heart isClick={isClick} onClick={addFavorite} />}
      </div>
  )
}
export default ButtonFavorites;