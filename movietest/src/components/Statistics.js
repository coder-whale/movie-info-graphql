import React, {useState, useEffect} from 'react';
import * as Realm from "realm-web";
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries,VerticalGridLines,HorizontalGridLines,XAxis,YAxis} from 'react-vis';
import AppID from './appid';

const Statistics = () => {
  const [movie,setMovie] = useState('');
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

    const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ];
    const fetchData = async (querytext) => {
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
      return data;
  };
    function myChangeHandler(event){
      setMovie(event.target.value);
      let temp = event.target.value;
      let querytext = `query partial_language($input:String=\"${temp}\") { partial_language(input:$input){ original_title }}`;
      const qldata = fetchData(querytext);
      console.log(qldata);
  }
    return (
      <div className="Statistics">
        <label for="fname">Collection:</label>
<input type="text" id="fname" name="fname" onChange={myChangeHandler}/>
      <div id="options">

      </div>
        <XYPlot height={300} width={300}>
        <VerticalGridLines />
  <HorizontalGridLines />
  <XAxis />
  <YAxis />
          <LineSeries data={data} />
        </XYPlot>
      </div>
    );
  
}

export default Statistics;