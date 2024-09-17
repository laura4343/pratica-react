import style from "./Searchbar.module.css";
import lupa from "../../src/assets/img/lupa.svg";

export default function Searchbar() {
  return (
    <>
      <div className={style.container}>
        <img id={style.meat} src={lupa} alt="" />
        <p className={style.label}>Meat</p>
      </div>
    </>
  );
}
