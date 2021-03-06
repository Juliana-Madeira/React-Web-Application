import React from 'react';
import './About.css';
import { GoMarkGithub } from 'react-icons/go'; 



const About = () => {
    return (
    
                       
            <div className='about-cont'>
                <div className='teste'>
                <p><span>This is the Conclusion Project of the Second Module of Bootcamp, 
            made at Ironhack in São Paulo/Brazil.</span></p>
            <p><span>We use Javascript, React JS, CSS3 and HTML5, in all the work.</span></p>
            <p><span>With requests made to the API <a href='https://www.themealdb.com/' className='link-api'>“The Meal DB”</a>, 
            we were able to use recipes, images and many other data.</span></p>
            <p><span>It was a great learning experience, as well as great fun with the recipes we got to know.</span></p>
            <p><span>Project developed by <a href='https://www.linkedin.com/in/juliana-g-madeira/'className='creators-link'>Juliana Madeira</a> and <a  href='https://www.linkedin.com/in/jessica-nonato/' className='creators-link'>Jessica Nonato</a>.</span></p>
            <p><span>See creators GitHub:</span></p>
            <p><span><GoMarkGithub/> <a href='https://github.com/Juliana-Madeira' className='creators-link'>Juliana Madeira</a></span></p>
            <p><span><GoMarkGithub/> <a href='https://github.com/JessicaNonato' className='creators-link'>Jessica Nonato</a></span></p>
                </div>
          
               
            </div>
            
       
        
    )
}
export default About;