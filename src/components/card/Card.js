import "./Card.css"

const Card = (props) =>{
    let cardImage = <img src={"/img/" + props.image} alt="Koffie gerelateerde foto" />
    if(props.image === undefined){
        cardImage = <img src={"/img/bonen.jpg"} alt="Koffie gerelateerde foto" />;
    }
    return(
        <article class="card">
            <figure class="card__figure">
               {cardImage}
            </figure>
            <section class="card__section">
                <p>{props.text || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit quod alias, delectus aut cupiditate illo labore obcaecati mollitia rerum eaque qui, iusto architecto perspiciatis, aliquam excepturi officia. Veniam, aliquam distinctio!"}</p>
            </section>
        </article>
        );
}

export default Card;