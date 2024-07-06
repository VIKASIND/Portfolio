import '../css/about.css';
import Image from '../components/Image';

import aboutImg from '../imgs/about.jpg';
import Link from './WebLink'

import { CiLocationOn } from "react-icons/ci";

import { MdKeyboardDoubleArrowDown } from "react-icons/md";


function About() {

    const introHead = <h2>about me</h2>
    const introText = <p>An Embedded and Frontend Developer who is well-versed in HTML, CSS and JavaScript , and other cutting edge frameworks and libraries,which allows me to implement interactive features.<br /> I'm good in dealing with microcontrollers and there peripherals.</p>


    const educationHead = <h3>education</h3>
    const degree = <p className='degree'>Bachelor's degree (2020 - Present)</p>
    const department = <p className='department'>Computer and Systems Engineering</p>
    const university = <p className='university'><CiLocationOn className='location' /> zagazig university</p>


    return (
        <section id='about' className="about-container">
            <Image src={aboutImg} alt='About Img' />

            <div className='about-info'>

                <div className='intro'>
                    {introHead}
                    {introText}
                </div>

                <div className='education-container'>
                    {educationHead}
                    {degree}
                    {department}
                    {university}
                </div>

                <Link title='Experience' url='#experience' class='arrow' name={<MdKeyboardDoubleArrowDown />} />

            </div>
        </section>
    );
}


export default About;
