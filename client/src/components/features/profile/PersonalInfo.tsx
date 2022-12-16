import { listPersonalInfo } from "./listpersonalinfo";

//! update personal info- (legal name, gender, email address, phone numbers, government ID, address, emergency contact)

const PersonalInfo = () => {
  return (
    <div className="p-5 flex flex-col">
      <h1 className="font-bold text-lg">Personal info</h1>
      <ul className="flex flex-col">
        {listPersonalInfo.map((item) => (
          <li
            key={item.title}
            className="flex justify-between items-center border-b-2 py-5 group hover:cursor-pointer hover:bg-indigo-100 rounded-lg p-2 pr-4"
          >
            <div className="flex flex-col">
              <h1>{item.title}</h1>
              <p className="text-sm text-zinc-400">{item.subTitle}</p>
            </div>
            <p className="font-bold underline ">Edit</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalInfo;
