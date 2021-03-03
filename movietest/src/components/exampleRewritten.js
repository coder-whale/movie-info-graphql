import React, {useState, useEffect} from 'react';
import * as Realm from "realm-web";
import AppID from './appid';

const Example = () => {
    const [choice,setChoice] = useState('');
    const [user,setUser] = useState();
    const apiurl = "https://ap-southeast-1.aws.realm.mongodb.com/api/client/v2.0/app/"+AppID+"/graphql";

    useEffect(() =>{
        getCreds();
     },[]);

    async function getCreds(){
        const app = new Realm.App({ id: AppID }); 
        const credentials = Realm.Credentials.anonymous();
        const temp = await app.logIn(credentials);
        setUser(temp);
    }

    function mySubmitHandler(event){
        event.preventDefault();
        var querytext=`query { ${choice}_code {code name }}`;
        const fetchData = async () => {
            const response = await fetch(apiurl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer "+user._accessToken,
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

    function myChangeHandler(event){
        setChoice(event.target.value);
    }

    return (
      <form onSubmit={mySubmitHandler}>
        <h1>Hello</h1>
        <input type="radio" id="country" name="todisplay" value="country" onChange={myChangeHandler}/>
        <label htmlFor="country">Country codes</label><br></br>
        <input type="radio" id="language" name="todisplay" value="language" onChange={myChangeHandler}/>
        <label htmlFor="language">Language codes</label><br></br>
        <input type='submit'/>
      </form>
    );
}

export default Example;
