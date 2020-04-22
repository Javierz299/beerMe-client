import React, { Component } from 'react'

class ProfilePage extends Component {
    constructor(props){
        super(props)

        this.state = {
            alcohol: []
        }
    }
 

  componentDidMount(){
      console.log(this.props)
  }
   

    render() {

        return (
            <div>
                <h1>my profile</h1>
            </div>
        )
    }
}

export default ProfilePage
