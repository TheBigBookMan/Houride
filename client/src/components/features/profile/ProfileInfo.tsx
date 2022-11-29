import car from "../../../styles/car.jpg";

//! show profile info- (edit photo, bio), verify self, joined date, email address, reviews, reviews by user, cars to offer

//TODO need to add in an update bio type system

//TODO need a verification badge-- that shield with tick on it
//TODO import star icon for the reviews spot

const ProfileInfo = () => {
  return (
    <div className="flex flex-col p-5 gap-5">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="font-bold">Hi, I'm Ben</h1>
          <p className="text-sm text-zinc-400">Joined in 12/2022</p>
          <p className="font-bold text-sm underline">Edit profile</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={car} className="w-16 h-16 rounded-xl" />
          <p className="font-bold text-sm underline">Update photo</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 border-b-2 pb-2">
        <h1 className="font-bold">Bio</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          itaque architecto necessitatibus cumque modi error quas, atque
          molestias assumenda magnam?
        </p>
        <h1 className="font-bold">Location</h1>
        <p className="text-sm">Adelaide, South Australia</p>
        <h1 className="font-bold">Languages I Speak</h1>
        <p className="text-sm">English, Danish, Spanish, French</p>
      </div>
      <div className="flex flex-col gap-2 border-b-2 pb-2">
        <h1 className="font-bold">Identity Verification</h1>
        <p>
          Show others you're really you with the identity verification badge.
        </p>
        <button
          type="submit"
          className="border-2 rounded-xl w-[150px] mt-1 p-1 bg-indigo-200 hover:bg-indigo-300 active:bg-indigo-400 transition-all"
        >
          Get Verified!
        </button>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="font-bold">Reviews</h1>
        <p className="underline">Star 0 reviews</p>
        <p className="underline">0 reviews by you</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
