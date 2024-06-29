import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./SearchComponent.module.css";

export const SearchComponent = ({
  color = "#fff",
  textColor = "#fff",
  placeholder = "Search...",
  placeholderColor = "#ccc",
  inputValueInitialState = "",
  handleSearch,
}) => {
  const [searchActive, setSearchActive] = useState(false);
  const [inputValue, setInputValue] = useState(inputValueInitialState);

  const handleSearchClick = () => {
    setSearchActive(true);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputBlur = async () => {
    setSearchActive(false);
    await handleSearch(inputValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleInputBlur();
    }
  };

  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
      .${styles["search-input"]}::placeholder {
        color: ${placeholderColor};
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [placeholderColor]);

  return (
    <div
      className={styles["search-container"]}
      role="search"
      aria-label="Search"
    >
      <i
        className={`fas fa-search ${styles["search-icon"]}`}
        onClick={handleSearchClick}
        style={{ color }}
        data-testid="search-icon"
      ></i>
      {searchActive && (
        <input
          className={styles["search-input"]}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          style={{ color: textColor }}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

SearchComponent.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderColor: PropTypes.string,
  inputValueInitialState: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
};
