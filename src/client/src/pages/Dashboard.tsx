import React, {useEffect, useState} from 'react';
import spagetthiBG from '../assets/images/spagetthi-test-bg.jpg';
import chickenBG from '../assets/images/test-bg-dashboard.png'
import '../index.css';
import { Button } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUtensils} from '@fortawesome/free-solid-svg-icons'

export const Dashboard: React.FC = () => {
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        const pickRandomImage = () => {
            //array with images for testing random background (later for recipes?)
            const randomImages = [
                spagetthiBG,
                chickenBG,
            ];
            const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
            setBackgroundImage(randomImage);
        };

        pickRandomImage();
    }, []);

    const handleClick = () => {
        console.log('Button was clicked!');
    };

    return (
        /*Hier noch Navbar evtl extra einfügen?*/
        <div>
            <div className="main-recipe-div">
                <img src={backgroundImage} alt="Hintergrundbild"/>
                <div className="main-recipe-infos">
                    <h1 className="main-recipe-title">KNUSPRIGE ENTENBRUST SÜSS-SAUER</h1>
                    <Button
                        onClick={handleClick}
                        className="rounded bg-black border border-munch-orange text-white py-2 px-4 text-sm text-white">
                        <FontAwesomeIcon icon={ faUtensils } className="utensils-icon" />
                        <span className="to-recipe-title">Zum Gericht</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard