//TODO this will be a common component for the main listing page and the home listing page
//TODO the prop drilling from state parent components will come in and then the filter determined by this will then change that prop

//! need to get the setfilterchoice function working on props

const filterOptions = [
  "Lowest price",
  "Highest price",
  "Event alphabetical",
  "Event reverse-alphabetical",
  "Number seats asc",
  "Number seats desc",
  "Top rated",
  "Lowest rated",
];

const Filter = (setFilterChoice: () => void) => {
  //! FIX ANY
  //TODO fix this function for the select
  const onSelectChoice = (e: any) => {
    console.log(e.target);
    // setFilterChoice(e.target.value)
  };

  return (
    <form>
      <select
        // onSelect={(e) => onSelectChoice(e)}
        className="border-2 rounded-xl p-1"
      >
        {filterOptions.map((event) => (
          <option value={event} key={event}>
            {event}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Filter;
