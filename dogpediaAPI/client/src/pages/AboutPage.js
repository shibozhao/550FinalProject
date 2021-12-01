import React from 'react';
import '../components/style.css'
import MenuBar from '../components/MenuBar';




class AboutPage extends React.Component {

  

  render() {

    return (
      <div>
        <MenuBar />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <img src='./dog.png' alt= 'dogicon' className="center" height ='250' weight='250'/>
        <h3 className = 'searchCenter'>About</h3>
        <div className="textCenter">
        Dogs are humans’ best friends and most popular pets across the world. 
        The latest survey showed that more than 50% of US residents like dogs. 
        Our application serves as a search engine for people who are interested 
        in dogs and also provides recommendations of dog breed according to user’s criteria.
        The application helps people to choose the proper dog breed to adopt as well as offer thorough 
        dog breed information including ranking, origin, sub-group, images and so on.
        Users can easily learn knowledge about dog breeds or simply brows images of all dog breeds.
        </div>
        <br></br>
        <br></br>
        <div className="textCenter">
        Dog images source: http://vision.stanford.edu/aditya86/ImageNetDogs/
        </div>
        <div className="textCenter">
        Dog breed information source: http://www.fci.be/en/nomenclature/
        </div>
        <div className="textCenter">
        Dog breed rating source: https://dogtime.com/dog-breeds/profiles#
        </div>

      </div>
    )
  }

}

export default AboutPage

