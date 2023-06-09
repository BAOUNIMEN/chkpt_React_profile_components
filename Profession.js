import React, { Component } from 'react';
import { FaUserGraduate } from "react-icons/fa";
import { IconContext } from "react-icons";
//import {style} from "typestyle";
class Profession extends Component {
    render() {
        return (
            <IconContext.Provider value={{ color: "black", size: "1.5em" }}>

                <div class="card bg-dark text-white">
                    <img src="https://media.istockphoto.com/id/1057789768/fr/photo/vue-de-dessus-de-bureau-avec-smart-phone-tablette-num%C3%A9rique-et-clavier-technologie-de-concept.jpg?s=170667a&w=0&k=20&c=EBET3avNsYTjhmBVoMoK7OnOBspBFGwKjVWbnHXTdB4=" class="card-img" alt="..." />

                    <div class="card-img-overlay">
                        <FaUserGraduate />
                        <h5 class="card-title"><b>Profession</b></h5>
                        <p class="card-text">I am currently a student at GO My Code Academy, The Full-Stack Javascript looking 
                        for a new opportunity as a Software Developer. I have some development experience in C/C++,C#, 
                        JAVA and (image processing domain). Motivated, curious,
                         ambitious, versatile always looking to improve my skills.
                        </p>
                        <p class="card-text"><b>SKIILS</b> <br /> -HTML/CSS <br /> -JAVASCRIPT <br /> -REACT <br /> -Visual Studio <br /></p>

                    </div>
                </div>
            </IconContext.Provider>
        );
    }
}
export default Profession;