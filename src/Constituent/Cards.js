import React from 'react';

const Cards = ({data, players}) => {   

    let counter = 0; 
    data = data.map((eachData, i) => {    

        return (
            <div id="card-container" key={i}>                
                <div id="cards-div">           
                    <img src={players[counter].image} alt="president" />                    
                    <h2 className="tc">{eachData.name}</h2>
                    <h4 className="tc">{eachData.username}</h4>
                    <p className="tc">{eachData.email}</p>
                    <p className="tc">{eachData.address.street}</p>
                    <p className="tc">{eachData.address.zipcode}</p>
                    <p className="tc">{eachData.phone} {counter ++}</p>                    
                </div>                
            </div>                
          )
    })

    return data
}

export default Cards
