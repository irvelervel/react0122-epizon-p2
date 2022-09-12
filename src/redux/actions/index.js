// QUI DICHIARO I TYPE COME COSTANTI
// in modo da evitare possibili typos nel loro utilizzo
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

// UN ACTION CREATOR --> una funzione che torna un'azione
export const addToCartAction = (bookSelected) => ({
  type: ADD_TO_CART, // type è obbligatoria in ogni action
  payload: bookSelected, // payload non è obbligatoria, ma in ogni caso "reale"
  // è necessaria
})
