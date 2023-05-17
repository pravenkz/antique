import React from 'react'
import "./Findus.css"
import { images } from '../../constants'
import Card from '../../components/card/Card'


const Findus = () => {
  return (
    <div className='findus section__padding' id='find'>
        <div className="findus__content">
            <h1 className="headtext__red">Find us</h1>
            <p className="p__heading">Antique Asylum</p>
            <p className="p__golden">123 Vintage Avenue Heritage City</p>
            <p className="p__golden" style={{marginTop:"-1rem"}}>Antiqueville 98765
                Timeless County, Classicland</p>
            <button className="custom__button">Visit us</button>    
        </div>
        <div className="findus__img">
           <div className="findus__img-groupa">
            <Card img={images.Product1} title={"Victorian Carved Mahogany Armchair"} desc={"Embrace the grandeur of the Victorian era with this exquisite mahogany armchair. "} />
           </div>
           <div className="findus__img-groupb">
            <Card img={images.Product2} title={"Art Deco Walnut Sideboard"} desc={"Add a touch of timeless glamour to your dining space with this Art Deco walnut sideboard."} />
            <Card img={images.Product3} title={"French Louis XVI Giltwood Mirror"} desc={"Reflect elegance and sophistication with this French Louis XVI giltwood mirror. Crafted with intricate gilded details and delicate motifs, this ornate mirror exudes regal charm. "} />
            <Card img={images.Product4} title={"Mid-Century Danish Teak Desk"} desc={"Experience the simplicity and elegance of mid-century design with this Danish teak desk"} />
            <Card img={images.Product5} title={"Edwardian Marquetry Inlaid Walnut Wardrobe"} desc={"Indulge in the romance of Edwardian craftsmanship with this marquetry inlaid walnut wardrobe."} />
           </div>
        </div>
      
    </div>
  )
}

export default Findus
