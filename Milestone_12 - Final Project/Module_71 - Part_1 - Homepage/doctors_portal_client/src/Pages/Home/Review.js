import React from "react";

const Review = ({ review }) => {
  const { name, location, img } = review;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p className="text-justify">
          It is a long established fact that by the readable content of a lot
          layout. The point of using Lorem a more-or-less normal distribu to
          using Content here, content
        </p>
        <div class="flex items-center mt-4">
          <div class="avatar">
            <div class="w-16 rounded-full ring ring-secondary ring-offset-base-100 mr-5">
              <img src={img} alt="" />
            </div>
          </div>

          <div>
            <h4 className="text-xl"> {name} </h4>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
