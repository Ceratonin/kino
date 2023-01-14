import { useState } from "react";

interface ICheckButtonGroup {
  labelsArr: string[];
}

const CheckButtonGroup = ({ labelsArr }: ICheckButtonGroup) => {
  const [checked, setChecked] = useState({ ...["a", "b", "c"] });

  return (
    <div className="btn-group">
      {labelsArr.map((val, key) => {
        const idIter = `option${key}`;
        return (
          <label className="btn btn_modified" htmlFor={idIter} key={val}>
            <input
              type="checkbox"
              className="btn-check btn-check_modified"
              name="options"
              id={idIter}
              autoComplete="off"
            />
            {val}
          </label>
        );
      })}
    </div>
  );
};

export default CheckButtonGroup;
