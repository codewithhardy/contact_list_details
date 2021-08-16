import React, { Component } from "react";
import DetailListing from "./DetailListing";

const url = "https://api.github.com/users";

class ContacttDetails extends Component {
  //class component
  constructor(props) {
    super(props);

    this.state = {
      //state
      details: "", //props
    };
  }
  componentDidMount() {
    //lifecycle hook event called after the component is rendered in the view
    // console.log(this.props.match.params.userstId); //print the selected contact id in the console of the browser
    fetch(`${url}/${this.props.match.params.userstId}`, {
      //get the contact details for a particular contactid from the RESt API, based on dynamic route
      method: "GET",
    })
      .then((response) => response.json()) //if sucess the response object is retreived as a Promise async mode
      .then((data) => {
        console.log(data);
        //the data retreived from the REST api is passed to the data argument by the system
        this.setState({
          // the specific record retreived is stored in the local props variable via the state
          details: data,
        });
        console.log(data);
      });
  }
  render() {
    //pass the specific Contact record retreived to the Listing component for displaying it
    return (
      <div>
        <DetailListing detaildata={this.state.details} />
        {/*Passed the Contact details to Listing componenet for display  */}
      </div>
    );
  }
}

export default ContacttDetails;
