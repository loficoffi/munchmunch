import React from 'react';
import Slider from 'react-slick';
import {Category} from '../models/helper/Category';
import MealTile from './MealTile';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import '../index.css';

interface MealCategoryProps {
    category: Category;
}


const MealCategory: React.FC<MealCategoryProps> = ({category}) => {
    const settings = {
        dots: true,
        infinite: category.meals.length > 3,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };

    return (
        <div className="my-4 relative w-full overflow-hidden">
            <h2 className="text-3xl font-medium mb-4">{category.name}</h2>
            <Slider {...settings} className="relative items-start">
                {category.meals.map(meal => (
                    <div key={meal.id} className="mr-6 h-full">
                        <MealTile meal={meal}/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MealCategory;