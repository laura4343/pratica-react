import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Item from "../components/Item/Item.jsx";
import Category from "../components/Category/Category.jsx";
import Searchbar from "../components/Searchbar/Searchbar.jsx";
import carne1 from "../src/assets/img/carne1.png";
import carne2 from "../src/assets/img/carne2.png";
import carne3 from "../src/assets/img/carne3.png";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Searchbar></Searchbar>

    <Category tipoPrincipal="CLIENTE +" type="promo"></Category>
    <div className="container">
      <Item
        titulo="Item 1"
        imagem={carne1}
        descricao="1Kg/Preço"
        preco="R$ 000.000"
      ></Item>
      <Item
        titulo="Item 2"
        imagem={carne2}
        descricao="1Kg/Preço"
        preco="R$ 000.000"
      ></Item>
      <Item
        titulo="Item 3"
        imagem={carne3}
        descricao="1Kg/Preço"
        preco="R$ 000.000"
      ></Item>
    </div>

    <Category tipoPrincipal="OUTROS" type="saudável"></Category>
    <div className="container">
      <Item
        titulo="Item 1"
        imagem={carne1}
        descricao="1Kg/Preço"
        preco="R$ 000.000"
      ></Item>
      <Item
        titulo="Item 2"
        imagem={carne2}
        descricao="1Kg/Preço"
        preco="R$ 000.000"
      ></Item>
      <Item
        titulo="Item 3"
        imagem={carne3}
        descricao="1Kg/Preço"
        preco="R$ 000.000"
      ></Item>
    </div>
  </StrictMode>
);
