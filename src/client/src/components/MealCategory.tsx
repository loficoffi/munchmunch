import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination} from 'swiper/modules';
import {Category} from '../models/helper/Category';
import MealTile from './MealTile';
import '../index.css';
import {Tooltip} from "react-tooltip";

interface MealCategoryProps {
    category: Category;
}

const MealCategory: React.FC<MealCategoryProps> = ({category}) => {
    return (
        <div className="mb-24 relative w-full overflow-hidden">
            <h2 className="meal-category-title text-3xl font-medium mb-4">{category.name}</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={24}
                slidesPerView={3}
                navigation
                pagination={{clickable: true}}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                    480: {
                        slidesPerView: 1,
                    },
                }}
            >
                {category.meals.map(meal => (
                    <div>
                        <SwiperSlide key={meal.id}>
                            <div data-tooltip-id="meal-tooltip"
                                 data-tooltip-content={meal.name}
                                 data-tooltip-place="top" >
                                <MealTile meal={meal}/>
                            </div>
                            <Tooltip id="meal-tooltip" place="top"/>
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </div>
    );
};

export default MealCategory;