import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Autosuggest from 'react-autosuggest'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import { TextField, Paper, MenuItem } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import textConstants from '../constants/textConstants'
import { TOOLS } from '../constants/ActionTypes'

const styles = theme => ({
  root: {
    height: 70,
    flexGrow: 1,
    maxWidth: 600,
    margin: '0 auto'
  },
  container: {
    position: 'relative'
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: 20,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block'
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  divider: {
    height: 5,
  },
  input: {
    color: theme.palette.secondary.light
  }
})

class AutoCompleteInput extends Component {
  constructor(...opts) {
    super(...opts)
    this.state = {
      single: '',
      suggestions: [],
    }
  }
  getSuggestionValue = suggestion => {
    return suggestion.name
  }
  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length
    const { symbols } = this.props

    let count = 0
  
    return inputLength === 0 ? [] : symbols.filter(suggestion => {
      const keep = count < 5 && suggestion.name.slice(0, inputLength).toLowerCase() === inputValue

      if (keep) {
        count += 1
      }

      return keep
    })
  }
  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    })
  }
  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    })
  }
  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue,
    })
  }
  handleSelect = (name) => {
    const { dispatch } = this.props

    dispatch({
      type: TOOLS.CLEAR_SELECTED_COMPANY_STOCKS_LIST
    })

    dispatch({
      type: TOOLS.SAVE_SELECTED_COMPANY_NAME,
      payload: name
    })
  }
  renderInputComponent = inputProps => {
    const { classes, inputRef = () => {}, ref, ...other } = inputProps
    const { input } = classes
  
    return (
      <TextField
        fullWidth
        InputProps={{
          inputRef: node => {
            ref(node);
            inputRef(node);
          },
          classes: {
            input: input,
          },
        }}
        {...other}
      />
    )
  }
  renderSuggestion = (suggestion, { query, isHighlighted }) => {
    const matches = match(suggestion.name, query)
    const parts = parse(suggestion.name, matches)
    
    return (
      <MenuItem
        selected={isHighlighted}
        component="div"
        onClick={() => this.handleSelect({symbol: suggestion.symbol, companyName: suggestion.name})}
      >
        <div>
          {parts.map((part, index) => {
            return part.highlight ? (
              <span key={String(index)} style={{ fontWeight: 500 }}>
                {part.text}
              </span>
            ) : (
              <strong key={String(index)} style={{ fontWeight: 300 }}>
                {part.text}
              </strong>
            )
          })}
        </div>
      </MenuItem>
    )
  }
  render() {
    const { classes } = this.props
    const { root, container, suggestionsContainerOpen, suggestionsList, suggestion } = classes

    const autosuggestProps = {
      renderInputComponent: this.renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue: this.getSuggestionValue,
      renderSuggestion: this.renderSuggestion
    }

    return (
      <div className={root}>
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            placeholder: textConstants.SEARCH_COMPANY,
            value: this.state.single,
            onChange: this.handleChange('single'),
          }}
          theme={{
            container: container,
            suggestionsContainerOpen: suggestionsContainerOpen,
            suggestionsList: suggestionsList,
            suggestion: suggestion,
          }}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} square>
              {options.children}
            </Paper>
          )}
        />
      </div>
    )
  }
}

AutoCompleteInput.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    symbols: state.symbols.stocksSymbols || []
  })
)(AutoCompleteInput))