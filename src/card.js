import { v4 as uuidv4 } from 'uuid';

class Card {
  constructor (img){
    this.url = img.url
    this.descr = img.descr
    this.color = img.color
    this.id = uuidv4();
    this.clicked = false;
  }
}

export default Card;
