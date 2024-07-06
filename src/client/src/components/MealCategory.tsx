import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Category } from "../models/helper/Category";
import MealTile from "./MealTile";
import "../index.css";

// Interface for the meal category props for using them in another page
interface MealCategoryProps {
  category: Category;
}

// Meal category component which displays meals from a category in a slider component
// which we are using from the swiper module.
const MealCategory: React.FC<MealCategoryProps> = ({ category }) => {
  return (
    <div className="mb-24 relative w-full overflow-hidden">
      <h2 className="meal-category-title text-3xl font-medium mb-4">
        {category.name}
      </h2>
      <Swiper
        key={`${category.name}-swiper`}
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
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
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {category.meals.map((meal, index) => (
          <SwiperSlide
            id={`${category.name}-${meal.id}-${index}`}
            key={`${category.name}-${meal.id}-${index}`}
          >
            <div
              data-tooltip-id={`meal-tooltip-${category.name}-${meal.id}-${index}`}
              data-tooltip-content={meal.name}
              data-tooltip-place="top"
            >
              <MealTile meal={meal} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MealCategory;
