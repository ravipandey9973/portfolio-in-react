import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Resume.pdf';
import {themeContext} from '../../Context'
import {useContext} from "react";
import {motion} from 'framer-motion'



const Services = () => {

  const transition ={duration:1,type:'spring'}
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id='Services'>
       <div className="awesome">
        <span style={{color:darkMode? 'white': ''}}>My Awesome</span>
        <span>services</span>
        <span>
          in C++, Java, Machine Learning, RPA, and SQL.If you'd like to share more specific  
         <br/>
          details or have any other questions or requests, please feel free to let me know! 
             
        </span>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div> 
        <div className="cards">
        <motion.div 
          initial={{left:'14rem'}}
          whileInView={{left:'26rem'}}
          transition={transition}
         
        
        style={{left:'14rem'}}>
          <Card
          emoji = {HeartEmoji}
          heading = {'Machine Learning,RPA'}
          detail = {" data driven technology"}
          
          />
          </motion.div> 

          <motion.div 

         initial={{left:'5rem'}}
          whileInView={{left:'12rem'}}
          transition={transition}
          
          
          style={{top:"12rem",left:"-4rem"}}>
          <Card
          emoji = {Glasses}
          heading = {"Developer"}
          detail = {"Html,Css,JavaScript,React"}
          />
          </motion.div> 

          <motion.div 
          
          initial={{left:'12rem'}}
          whileInView={{left:'-2rem'}}
          transition={transition}
          
          style={{top:"19rem",left:"25rem"}}>
          <Card
          emoji = {Humble}
          heading = {"Java,C++"}
          detail = {" object oriented programing language"}
          />
          </motion.div>
          <div className="blur s-blur2" style={{backgrond:"var(--purple)"}} ></div>

        </div>
    </div>
  )
}

export default Services
