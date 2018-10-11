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
  render() {
    // const { selectedCompanyStocks } = this.props
    const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    ]
    return (
      <ResponsiveContainer>
        <AreaChart data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Area type='monotone' dataKey='uv' stroke='#37DB79' fill='#37DB79'/>
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
    selectedCompanyStocks: state.tools.selectedCompanyStocks || {}
  })
)(StocksChartContainer))