// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, todeleteTransection} = props
  const {titleInput, amount, optionId, id} = transactionDetails
  const toDelete = () => {
    todeleteTransection(id)
  }
  return (
    <li>
      <p>{titleInput.toUpperCase()}</p>
      <p>{amount}</p>
      <p>{optionId}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        alt="delete"
        onClick={toDelete}
        data-testid="delete"
      />
    </li>
  )
}

export default TransactionItem
