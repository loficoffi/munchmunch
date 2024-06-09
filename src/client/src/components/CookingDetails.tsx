import React from "react";

const detailList = ["30 min", "200C Umluft"]

const CookingDetails = () => {
    return(
        <div >
            <ul class="text-white text-2xl border-2 rounded-3xl border-white p-5 mx-40">
                {detailList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default CookingDetails;