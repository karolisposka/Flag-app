import React, { useContext } from "react";
import { themeContext } from "../../context";
import PropTypes from "prop-types";
import * as S from "./Select.styles";

const Select = ({ className, handleChange, placeholder, options }) => {
  const [theme] = useContext(themeContext);

  const setTheme = (theme) => {
    const darkBg = "hsl(209, 23%, 22%)";
    const lightBg = "hsl(0, 0%, 100%)";
    const darkFont = "hsl(0, 0%, 100%)";
    const lightFont = "hsl(200, 15%, 8%)";
    return {
      control: () => ({
        background: theme === "dark" ? darkBg : lightBg,
        borderRadius: "0.1rem",
        color: "red",
        display: "flex",
      }),
      container: (provided) => ({
        ...provided,
        background: theme === "dark" ? darkBg : lightBg,
      }),
      menu: (provided) => ({
        ...provided,
        background: theme === "dark" ? darkBg : lightBg,
      }),
      option: (provided) => ({
        ...provided,
        color: theme === "dark" ? darkFont : lightFont,
        background: theme === "dark" ? darkBg : lightBg,
      }),
      placeholder: (provided) => ({
        ...provided,
        color: theme === "dark" ? darkFont : lightFont,
      }),
      singleValue: (provided) => ({
        ...provided,
        color: theme === "dark" ? darkFont : lightFont,
      }),
      dropdownIndicator: (provided, state) => ({
        ...provided,
        color: theme === "dark" ? "#ffffff" : "#000000",
        "&:hover": {
          color: theme === "dark" ? "#ffffff" : "#000000",
        },
        transition: "all .2s ease",
        transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
      }),
    };
  };

  return (
    <S.StyledSelect
      styles={setTheme(theme)}
      className={className}
      options={options}
      placeholder={placeholder}
      onChange={(e) => {
        handleChange(e.value);
      }}
    />
  );
};

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default Select;
