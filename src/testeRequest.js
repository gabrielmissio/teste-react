
import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'

export default class Combo extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      value:[]
    }
  }

 async getOptions(){
  var axios = require('axios');
  const res = await axios.get('https://oumbd5l1x3.execute-api.us-east-1.amazonaws.com/hml/tag')
  const data = res.data

  const options = data.tags.map(d => ({
    "value" : d.id,
    "label" : d.name

  }))

  this.setState({selectOptions: options})

}

  handleChange(e){
    this.setState({value:e})
  }

  componentDidMount(){
      this.getOptions()
  }

  render() {
    console.log(this.state.value)
    return (
      <div>
        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} isMulti />
        {
           this.state.value === null ? "" : this.state.value.map(v => <h4>{v.value}</h4>)
        }
      </div>
    )
  }
}