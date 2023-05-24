import Card from "../Card/Card";
import style from "./Cards.module.css";



function Cards(props) {
  const { characters } = props;
  return (
    <div className={style.Container} >
      {characters.map(character => {
        return (
          <Card
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            origin={character.origin.name}
            status={character.status}
            onClose={() => window.alert("Emulamos que se cierra la card")}
          />
        );
      })}
    </div>
  );
}

export default Cards;
