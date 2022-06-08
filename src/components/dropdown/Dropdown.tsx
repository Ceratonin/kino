import React, { useState } from "react";

interface IDropdown {
  children: string | React.ReactNode;
  saveTitle?: boolean;
  items: Array<string | number>;
}

function Dropdown({ children, saveTitle, items }: IDropdown) {
  const [title, setTitle] = useState(children);

  const handleClick = (key: number) => {
    setTitle(items[key]);
  };

  return (
    <div className="dropdown">
      <div
        className="dropdown-toggle"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {saveTitle ? title : children}
      </div>

      <ul
        className="dropdown-menu dropdown-menu-dark"
        aria-labelledby="dropdownMenuButton"
      >
        {items.map((item, key) => (
          <li key={item}>
            <button
              type="button"
              className="dropdown-item"
              onClick={() => handleClick(key)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
