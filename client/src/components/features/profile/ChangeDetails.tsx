//! Change language/change currency
const detailsChange = [
  {
    title: "Change language",
    subTitle: "Select the language to be used",
  },
  {
    title: "Change currency",
    subTitle: "Choose which currency to use",
  },
  {
    title: "Change location",
    subTitle: "Select where you would like to be located",
  },
];

const ChangeDetails = () => {
  return (
    <div className="flex flex-col p-5 gap-5">
      <h1 className="font-bold text-lg">Account settings</h1>
      <ul className="flex flex-col">
        {detailsChange.map((item) => (
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

export default ChangeDetails;
