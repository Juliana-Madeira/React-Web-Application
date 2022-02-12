import React from 'react';


const Favorites = () => {

    const number = [1,2,3,4]
    localStorage.setItem('favorites', JSON.stringify(number))
  
    const item = localStorage.getItem('favorites')
    console.log(JSON.parse(item))
  


    return (
        <div>

        </div>
    )
}