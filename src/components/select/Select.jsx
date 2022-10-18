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
      container: (provided, state) => ({
        ...provided,
        background: theme === "dark" ? darkBg : lightBg,
      }),
      menu: (provided, state) => ({
        ...provided,
        background: theme === "dark" ? darkBg : lightBg,
      }),
      option: (provided, state) => ({
        ...provided,
        color: theme === "dark" ? darkFont : lightFont,
        background: theme === "dark" ? darkBg : lightBg,
      }),
      placeholder: (provided, state) => ({
        ...provided,
        color: theme === "dark" ? darkFont : lightFont,
      }),
      singleValue: (provided, state) => ({
        ...provided,
        color: theme === "dark" ? darkFont : lightFont,
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
