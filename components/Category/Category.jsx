import style from "./Category.module.css";

export default function Category(props) {
  return (
    <>
      <h1 className={style.tipoPrincipal}>{props.tipoPrincipal}</h1>

      <div className={style.square}>
        <p>{props.type}</p>
      </div>
    </>
  );
}
