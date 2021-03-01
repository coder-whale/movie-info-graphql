import React from 'react';
import ReactDOM from 'react-dom';
import * as Realm from "realm-web";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { choice: '' };
    this.user = null;
  }
  async componentDidMount(){
    const app = new Realm.App({ id: "<app-id>" }); // create a new instance of the Realm.App
    const credentials = Realm.Credentials.anonymous();
  /*  try {
      const user = await app.logIn(credentials);
      console.log("Successfully logged in!", user.id);
    } catch (err) {
      console.error("Failed to log in", err.message);
    } */
    this.user = await app.logIn(credentials);
    
    //return data;
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    var querytext='';
    if(this.state.choice==='countries')
    {
      querytext = 'query { country_code { code name }}';
    }
    else if(this.state.choice==='languages')
    {
      querytext = 'query { language_code { code name }}';
    }
    const apiurl = "https://ap-southeast-1.aws.realm.mongodb.com/api/client/v2.0/app/<app-id>/graphql";
    const fetchData = async () => {
      const response = await fetch(apiurl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Authorization": "Bearer "+this.user._accessToken,
        },
        body: JSON.stringify({
          query: querytext,
        })
      });
      const data = await response.json();
      console.log(data);
    };
    fetchData();
    
  }
  myChangeHandler = (event) => {
    this.setState({choice: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>Hello</h1>
        <input type="radio" id="countries" name="todisplay" value="countries" onChange={this.myChangeHandler}/>
<label for="countries">Country codes</label><br></br>
<input type="radio" id="languages" name="todisplay" value="languages" onChange={this.myChangeHandler}/>
<label for="languages">Language codes</label><br></br>
<input type='submit'/>
      </form>
    );
  }
}

ReactDOM.render(<MyForm />,  document.getElementById('root'));
