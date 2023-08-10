import reactLogo from "../assets/react.svg";

import Button from "react-bootstrap/Button";
import FavsWidget from "./FavsWidget";

function NavBar() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBlock: "2rem",
        paddingInline: "1rem",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img alt="Brand" src={reactLogo} />
          <h3>Nerdticias!</h3>
        </span>
        <Button>React</Button>
        <Button>Angular</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </nav>
      <FavsWidget />
    </header>
  );
}

export default NavBar;
