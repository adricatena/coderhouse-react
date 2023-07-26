import Button from "./Button";
import CartWidget from "./CartWidget";
import "./NavBar.css";

export function NavBar() {
  return (
    <nav className="navbar">
      <h3>TuLogo</h3>
      <Button texto="Remeras" />
      <Button texto="Buzos" />
      <Button texto="Pantalones" />
      <CartWidget items={9} />
    </nav>
  );
}
