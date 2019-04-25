import React, { Component } from 'react'

const asyncComponent = (importComponent) => {

  class extends Component {
    state = {
      component: null
    }
    componentDidMount() {

      importComponent()
        .then(comp => {
          this.setState({
            component: comp.default
          })
        })

    }


    render() {
      return (
        <div>

        </div>
      )
    }
  }


}


export default asyncComponent

