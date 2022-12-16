import { accountSettings } from "./listaccountsettings";

//! payments info (credit card), notifications, login and security (change password, login history, 2FA security), global preferences(language, currency, timezone), privacy and shring(account data)

const Settings = () => {
  return (
    <div className="flex flex-col p-5 gap-5">
      <h1 className="font-bold text-lg">Account settings</h1>
      <ul className="flex flex-col">
        {accountSettings.map((item) => (
          <li
            key={item.title}
            className="flex items-center justify-between border-b-2 rounded-lg py-5 group hover:cursor-pointer hover:bg-indigo-100 rounded-lg p-2 pr-4"
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

export default Settings;
