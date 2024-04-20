import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transectionList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOption = event => {
    this.setState({optionId: event.target.value.toUpperCase()})
  }

  onSubmitTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const newTransaction = {
      id: uuidv4(),
      titleInput,
      amount: parseInt(amountInput),
      optionId,
    }

    this.setState(prevState => ({
      transectionList: [...prevState.transectionList, newTransaction],
      titleInput: '',
      amountInput: '',
    }))
  }

  getIncome = () => {
    const {transectionList} = this.state
    let income = 0
    transectionList.forEach(each => {
      if (each.optionId === transactionTypeOptions[0].optionId) {
        income += each.amount
      }
    })
    return income
  }

  getExpenses = () => {
    const {transectionList} = this.state
    let expenses = 0
    transectionList.forEach(each => {
      if (each.optionId === transactionTypeOptions[1].optionId) {
        expenses += each.amount
      }
    })
    return expenses
  }

  todeleteTransection = id => {
    const {transectionList} = this.state
    const listAfterDelete = transectionList.filter(each => id !== each.id)
    this.setState({transectionList: listAfterDelete})
  }

  getBalance = () => {
    const {transectionList} = this.state
    let balance = 0
    let expenses = 0
    let income = 0
    transectionList.forEach(each => {
      if (each.optionId === transactionTypeOptions[0].optionId) {
        income += each.amount
      } else {
        expenses += each.amount
      }
    })
    balance = income - expenses
    return balance
  }

  render() {
    const {titleInput, amountInput, optionId, transectionList} = this.state
    const yourIncome = this.getIncome()
    const yourExpenses = this.getExpenses()
    const yourBalance = this.getBalance()
    console.log(optionId)

    return (
      <div>
        <div className="header-card">
          <h1>Hi, Thaara</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          yourBalance={yourBalance}
          yourIncome={yourIncome}
          yourExpences={yourExpenses}
        />
        <div className="bottom-card">
          <form onSubmit={this.onSubmitTransaction}>
            <h1>Add Transaction</h1>
            <div className="input-cards">
              <label>
                Title
                <br />
                <input
                  value={titleInput}
                  type="text"
                  placeholder="Title"
                  onChange={this.onChangeTitleInput}
                />
              </label>
            </div>
            <div className="input-cards">
              <label>
                Amount
                <br />
                <input
                  value={amountInput}
                  type="text"
                  placeholder="Amout"
                  onChange={this.onChangeAmountInput}
                />
              </label>
            </div>
            <div className="input-cards">
              <label>
                Type
                <br />
                <select value={optionId} onChange={this.onChangeOption}>
                  {transactionTypeOptions.map(each => (
                    <option key={each.optionId} value={each.optionId}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <button
              type="submit"
              className="add-btn"
              onSubmit={this.onSubmitTransaction}
            >
              Add
            </button>
          </form>
          <ul>
            <h1>History</h1>
            <div className="history-card">
              <div className="history-title-card">
                <p>Title</p>
                <p>Amout</p>
                <p>Type</p>
              </div>
            </div>
            {transectionList.map(each => (
              <TransactionItem
                transactionDetails={each}
                key={each.id}
                todeleteTransection={this.todeleteTransection}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MoneyManager
