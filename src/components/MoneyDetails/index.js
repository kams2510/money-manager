// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {yourBalance, yourIncome, yourExpences} = props

  return (
    <div className="money-card">
      <div className="card balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="text-card">
          <p>Your Income</p>
          <p className="rupees" data-testid="balanceAmount">
            RS <span>{yourIncome}</span>
          </p>
        </div>
      </div>
      <div className="card income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="text-card">
          <p>Your Balance</p>
          <p className="rupees" data-testid="incomeAmount">
            RS <span>{yourBalance}</span>
          </p>
        </div>
      </div>
      <div className="card expence-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="text-card">
          <p>Your Expenses</p>
          <p className="rupees" data-testid="yourExpences">
            RS <span>{yourExpences}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
