import { useContext } from "react";
import Router from "./Routers/Router";
import { ThemeContext } from "./Context/ThemeContext";
import 'remixicon/fonts/remixicon.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`App w-full min-h-screen transition ease-linear duration-200 ${theme === "light" ? "bg-[#f2fcfc] text-[#1F1F1F]" : "bg-[#1F1F1F] text-[#f2fcfc]"
        }`}
    >
      <Router />
    </div>
  );
}

export default App;
