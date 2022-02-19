import React from 'react';
import Header from './Header';
import Footer from './Footer';


const About = () => {
    return (
        <div>
            <Header/>
            <span>This is the Conclusion Project of the Second Module of Bootcamp, 
            made at Ironhack in São Paulo/Brazil.</span>
            <p><span>We use Javascript, React JS, CSS3 and HTML5, in all the work.</span></p>
            <p><span>With requests made to the API “The Meal DB”, we were able to use recipes, 
            images and many other data.</span></p>
            <p><span>It was a great learning experience, as well as great fun with the recipes we got to know.</span></p>
            <p><span>Project developed by Juliana Madeira and Jessica Nonato.</span></p>
            <Footer/>
        </div>
    )
}
export default About;