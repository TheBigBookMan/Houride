//TODO this will be a common component for the main listing page and the home listing page
//TODO the prop drilling from state parent components will come in and then the filter determined by this will then change that prop

const Filter = () => {
  return (
    <form>
      <select className="border-2 rounded-xl p-1">
        <option value="Lowest Price">Lowest Price</option>
        <option value="Highest Price">Highest Price</option>
        <option value="Event Alphabetical">Event Alphabetical</option>
        <option value="Event Reverse Alpha">Event Reverse Alpha</option>
        <option value="Number seats ascending">Number seats ascending</option>
        <option value="Number seats descending">Number seats descending</option>
      </select>
    </form>
  );
};

export default Filter;
