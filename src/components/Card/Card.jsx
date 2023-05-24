import style from "./Card.module.css";

export default function Card(props) {
   return <div className={style.Card}>
       <div className={style.buttonContainer}>
         <button onClick={props.onClose}>X</button>
       </div>
       <div className={style.textos}>
         <h2>
           {props.name}
         </h2>
         <h3>
           {props.status}
         </h3>
         <h3>
           {props.species}
         </h3>
         <h3>
           {props.gender}
         </h3>
         <h3>
           {props.origin.name}
         </h3>
        
       </div> 
       <img src={props.image} alt="props.name" />
     </div>;
}
