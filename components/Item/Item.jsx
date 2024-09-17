import sytle from "./Item.module.css";
import sacola from "../../src/assets/img/sacola.svg";

export default function Item(props) {
  return (
    <>
      <div className={sytle.container}>
        <img src={props.imagem} alt="" />
        <div className={sytle.texts}>
          <h2 className={sytle.titulo}>{props.titulo}</h2>
          <p className={sytle.descricao}>{props.descricao}</p>
          <p className={sytle.preco}>{props.preco}</p>
        </div>
        <div className={sytle.separacao}>
          <img className={sytle.sacola} src={sacola} alt="" />
        </div>
      </div>
    </>
  );
}
