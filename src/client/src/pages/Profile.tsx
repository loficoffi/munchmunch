import React, { useEffect, useState } from "react";
import { fetchUserData } from "../services/accountService";
import { Account } from "../models/datamodels/Account";
import { setAuthToken } from "../utils/api";
import { Swiper, SwiperSlide } from "swiper/react";
import MealTile from "../components/MealTile";

// page for showing the informations of the user.
const Profile = () => {
  const [userData, setUserData] = useState<Account | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // loads the informations based on the users token
  // if the token isn't valid. it thorws some exeption
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      fetchUserData()
        .then((userData) => {
          setUserData(userData);
          setLoading(false);
        })
        .catch((err) => {
          setError("Failed to fetch user data");
          setLoading(false);
        });
    } else {
      setError("No token found");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!userData) {
    return <div>No user data available</div>;
  }

  return (
    <div className="mx-20">
      <div className="profile-overview p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Dein Profil</h1>
        <p className="mb-2 text-xl">
          <strong>Name:</strong>
        </p>
        <p className="w-full px-3 py-2 border rounded-lg border-gray-700 text-white placeholder-gray-500 my-5">
          {userData.profile.firstName}
        </p>
        <p className="mb-2 text-xl">
          <strong>Email:</strong>
        </p>
        <p className="w-full px-3 py-2 border rounded-lg border-gray-700 text-white placeholder-gray-500 my-5">
          {userData.email}
        </p>
        <p className="mb-2 text-xl">
          <strong>Username:</strong>
        </p>
        <p className="w-full px-3 py-2 border rounded-lg border-gray-700 text-white placeholder-gray-500 my-5">
          {userData.profile.lastName}
        </p>
      </div>
      <div className="mx-10">
        <h1 className="text-2xl font-bold mb-4">
          Deine gespeicherte und favorisierte Gerichte
        </h1>
        <Swiper
          key={"swiper"}
          spaceBetween={24}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
        >
          {userData &&
            userData.profile &&
            userData.profile.favouriteMeals &&
            userData.profile.savedMeals.map((favouriteMeal, index) => (
              <SwiperSlide
                id={`${favouriteMeal.name}-${favouriteMeal.id}-${index}`}
                key={`${favouriteMeal.name}-${favouriteMeal.id}-${index}`}
              >
                <div
                  data-tooltip-id={`meal-tooltip-${favouriteMeal.name}-${favouriteMeal.id}-${index}`}
                  data-tooltip-content={favouriteMeal.name}
                  data-tooltip-place="top"
                >
                  <MealTile meal={favouriteMeal} />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Profile;
