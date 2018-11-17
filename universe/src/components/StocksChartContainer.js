import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const styles = {
  toolsContainer: {
    width: '100%',
    padding: '20px'
  }
}

class StocksChartContainer extends Component {
  prepareStocksChartData = () => {
    const { selectedCompanyStocks } = this.props
    return selectedCompanyStocks.map(stockChartItem => {
      return {
        date: stockChartItem.label,
        price: stockChartItem.close
      }
    })
  }
  render() {
    const stocksChartData = this.prepareStocksChartData()

    return (
      <ResponsiveContainer>
        <AreaChart data={stocksChartData} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type='linear' dataKey='price' stroke='#4F5452' fill='#0B5484' />
        </AreaChart>
      </ResponsiveContainer>
     ) 
  }
}

StocksChartContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    selectedCompany: state.tools.selectedCompany || {},
    selectedCompanyStocks: state.tools.selectedCompanyStocks || []
  })
)(StocksChartContainer))