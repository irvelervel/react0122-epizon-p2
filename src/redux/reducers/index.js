// qui andremo a definire la nostra funzione reducer
// il reducer prende lo stato attuale dell'app, controlla l'azione che è
// stata appena dispatchata e genere il nuovo stato dell'applicativo

import { ADD_TO_CART, REMOVE_FROM_CART, SET_USERNAME } from '../actions'

// ma da dove cominciamo? qual è lo stato iniziale?

// ora dobbiamo "nascondere" le funzionalità del carrello agli utenti non ancora loggati...

const initialState = {
  cart: {
    content: [],
  },
  // creo una nuova "slice" per l'utente
  user: {
    name: '', // qui dentro salverò lo user name in modo da sbloccare all'utente
    // le funzionalità del cart
  },
}

// il reducer è una PURE FUNCTION
// quindi non possiamo mutare i nostri parametri

const mainReducer = (state = initialState, action) => {
  // da questa funzione, in ogni possibile situazione
  // io devo restituire il NUOVO STATO dell'applicativo
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state, // crea una copia dell'oggetto stato da cui partiamo
        cart: {
          ...state.cart,
          content: [...state.cart.content, action.payload],
          //   NON FARE!!! content: state.cart.content.push(action.payload)
          // content: state.cart.content.concat(action.payload),
        },
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          content: state.cart.content.filter((book, i) => i !== action.payload),
          //   content: [
          //     ...state.cart.content.slice(0, action.payload),
          //     ...state.cart.content.slice(
          //       action.payload + 1,
          //       state.cart.content.length
          //     ),
          //   ],
        },
      }

    case SET_USERNAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload, // non c'è rischio di alterare lo stato esistente
        },
      }

    default:
      return state
    // worst case scenario: torno lo stato come l'ho appena trovato
    // --> senza rompere niente
  }
}

export default mainReducer
