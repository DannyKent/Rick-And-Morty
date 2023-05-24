import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  return (
    <div className={style.SearchContainer}>
     <input type="search" placeholder="Ingresa tu Busqueda" />
      <div className={style.buttonSearch}>
         <button onClick={props.onSearch}>Agregar</button>
      </div>
    </div>
  );
}
