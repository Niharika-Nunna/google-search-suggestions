import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails
  const onClicked = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="suggestion-item-container">
      <p className="suggestion">{suggestion}</p>
      <button className="button" type="button" onClick={onClicked}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
