import React from 'react'
import "./Customization.css"
import Custom from '../../components/custom/Custom'
import {BsFillPersonCheckFill} from "react-icons/bs";
import {FaPaintBrush} from "react-icons/fa";
import {SiAzurefunctions,SiAltiumdesigner} from "react-icons/si"

const data = [
    {
    img :<BsFillPersonCheckFill/>,  
    title:"Personalized Adaptations",
    text:"Tailoring furniture to fit specific spaces and dimensions.Customizing upholstery materials, colors, and patterns.",
   },
   {
    img:<FaPaintBrush/>,
    title:"Creative Refinishing",
    text:"Transforming the appearance of furniture through refinishing techniques.Updating finishes with modern stains, paints, or distressed looks.",
   },
   {
    img:<SiAzurefunctions/>,
    title:"Functional Enhancements",
    text:"Incorporating additional storage solutions, such as hidden compartments or shelves.Installing built-in lighting features for ambiance and convenience.",
   },
   {
    img:<SiAltiumdesigner/>,
    title:"Design Customization",
    text:"Collaborating with customers to design unique furniture pieces.Incorporating personalized engravings, carvings, or decorative accents.",
   }
]

const Customization = () => {
  return (
    <div className='customization section__padding ' id='customization'>
        <div className="customization__heading">
        <p className="p__heading">
        At our antique furniture store, we believe that every piece should reflect your individuality and style. 
        </p>
        <p>bringing your vision to life</p>

        </div>
        <div className="customization__content">
             {data.map((ele,id)=>(
                <div className="customization__container" key={id}>
                    <Custom title={ele.title} text={ele.text} img={ele.img}/>
                </div>
             ))}
        </div>
      
    </div>
  )
}

export default Customization
