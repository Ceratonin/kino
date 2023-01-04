import Dropdown from "../dropdown/Dropdown";
import { filterValues, sortValues } from "../../constants/dropdownValues";

const Filter = () => {
  return (
    <div className="container">
      <section className="filter">
        <p>Filter movies:</p>
        <div className="btn-group ">
          {[...filterValues.keys()].map((btn) => (
            <Dropdown key={btn} items={filterValues.get(btn)!} saveTitle>
              {btn}
            </Dropdown>
          ))}
        </div>

        <section className="filter__sort">
          <p>Sort by:</p>
          <Dropdown items={sortValues} saveTitle>
            Most Popular First
          </Dropdown>
        </section>
        
        <section className="filter__search">
          <input type="text" placeholder="Find a movie" />
        </section>
      </section>
    </div>
  );
};

export default Filter;
