import { Col, Row, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_FROM_CART } from '../redux/actions'

const Cart = () => {
  const cartContent = useSelector((state) => state.cart.content)
  // cartContent ora è l'array di prodotti nel carrello
  const dispatch = useDispatch()

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: 'none' }}>
          {cartContent.map((book, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({
                    type: REMOVE_FROM_CART,
                    payload: i,
                  })
                }}
              >
                <FaTrash />
              </Button>
              <img
                className="book-cover-small"
                src={book.imageUrl}
                alt="book selected"
              />
              {book.title}
            </li>
          ))}
        </ul>
      </Col>
      <Row>
        <Col sm={12} className="font-weight-bold mb-3 ml-4">
          TOTAL:{' '}
          {cartContent.reduce(
            (acc, currentValue) => acc + parseFloat(currentValue.price),
            0
          )}
          $
        </Col>
      </Row>
    </Row>
  )
}

export default Cart
