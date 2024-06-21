import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import AddButton from "../components/AddButton.tsx";
import spagetthiBG from '../assets/images/spagetthi-test-bg.jpg';
import chickenBG from '../assets/images/test-bg-dashboard.png'
import '../index.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUtensils} from '@fortawesome/free-solid-svg-icons'
import {DashboardData} from "../models/interfaces/DashboardData.ts";
import {fetchDashboardData} from "../services/dashboardService.ts";
import config from "../config/config.ts";
import { getImageUrl} from "../utils/assetHelper.ts";

export const Dashboard: React.FC = () => {
    const [backgroundImage, setBackgroundImage] = useState('');
    const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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

        fetchDashboardData().then(data => {
            setDashboardData(data);
            setLoading(false);
            console.log(data);
        }).catch(err => {
            setError('Failed to fetch dashboard data');
            setLoading(false);
        })
    }, []);

    return (
        <div>
            {dashboardData && (
                <div className="main-recipe-div">
                    <img src={getImageUrl(dashboardData.mealOfTheDay.mainImage)} className="bg-image"
                         alt="Hintergrundbild"/>
                    <div className="main-recipe-infos w-2/4 md:w-1/2 mb-10 lg:w-2/3 xl:w-3/5">
                        <h1 className="main-recipe-title text-2xl md:text-5xl lg:text-5xl xl:text-6xl">KNUSPRIGE
                            ENTENBRUST SÜSS-SAUER</h1>
                        <Link
                            to="/recipe"
                            className="btn btn-primary rounded bg-black border border-munch-orange py-2 px-4 text-sm text-white">
                            <FontAwesomeIcon icon={faUtensils} className="utensils-icon"/>
                            <span className="to-recipe-title">Zum Gericht</span>
                        </Link>
                        <AddButton/>
                    </div>
                </div>
            )}
            {!dashboardData && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
        </div>
    )
}

export default Dashboard