import React from 'react';

class Weather extends React.Component{
  render(){
    // const place = <p>Location : {this.props.city}, {this.props.country}</p>;
    // const temperature =  <p> Temperature : {this.props.temperature} </p>;
    // const humid = <p> Humidity : {this.props.humidity} </p>;
    // const desc = <p> Condition :{this.props.description} </p>;
    // const err = <p> Error :{this.props.error} </p>;
    return(   
    <div className="weather__info">
       {  
        this.props.city &&  this.props.country && <p className="weather__key"> Location: 
          <span className="weather__value"> {  this.props.city }, {  this.props.country }</span>
        </p> 
       }
       {  
         this.props.temperature && <p className="weather__key"> Temperature: 
          <span className="weather__value"> {  this.props.temperature } </span>
        </p> 
       }
       {  
         this.props.humidity && <p className="weather__key"> Humidity: 
          <span className="weather__value"> {  this.props.humidity } </span>
        </p> 
       }
       {  
         this.props.description && <p className="weather__key"> Conditions: 
          <span className="weather__value"> {  this.props.description } </span>
       </p> 
       }
       { 
         this.props.error && <p className="weather__error">{  this.props.error }</p>  
       }
    </div>

    );
  }
}
export default Weather;
