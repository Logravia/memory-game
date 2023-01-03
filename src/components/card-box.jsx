function CardBox({cards, noteClick}) {
  return (
    <div className="card-box">
      {cards.map(card => <Card cardData={card} noteClick={noteClick}></Card>)}
    </div>
  )
}

function Card({ cardData, noteClick }) {
  return (
    <figure className="card" onClick={_ => noteClick(cardData.id)}>
      <img src={cardData.img}
        alt={cardData.descr}/>
      <figcaption>{cardData.descr}</figcaption>
    </figure>
  )
}

export default CardBox;
