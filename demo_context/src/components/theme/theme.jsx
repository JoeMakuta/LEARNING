import { useContext } from "react";
import { ThemeContext } from "../../context";

const Theme = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const ToogleTheme = () => {
    setTheme((theme) => (theme == "light" ? "dark" : "light"));
  };

  return (
    <div>
      <button
        onClick={() => {
          ToogleTheme();
        }}
      >
        Light
      </button>
      <button
        onClick={() => {
          ToogleTheme();
        }}
      >
        Dark
      </button>
    </div>
  );
};

export default Theme;
