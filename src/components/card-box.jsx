function CardBox({cards, noteClick}) {
  return (
    <div className="card-box">
      {cards.map(card => <CardElement cardData={card} noteClick={noteClick} key={card.id}/>)}
    </div>
  )
}

function CardElement({ cardData, noteClick }) {
  return (
    <figure className="card" onClick={_ => noteClick(cardData.id)}>
      <img src={cardData.url}
        alt={cardData.descr}/>
      <figcaption>{cardData.descr}</figcaption>
    </figure>
  )
}

export default CardBox;
