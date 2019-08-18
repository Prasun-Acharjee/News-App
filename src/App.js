import React from 'react';
import CountryList from "./CountyList";
import NewsList from "./NewsList";

class App extends React.Component{
 constructor(props){
   super(props);
   this.state={news:[],loading:false}
 }

 addtonews=(country)=>
 {
   this.setState({loading:true});
   fetch(`https://newsapi.org/v2/top-headlines?source=google-news&country=${country}&apiKey=a9b320f1f47644f99dab6b9407db90b0`
   ).then((Response)=>{return Response.json()}).then((json)=>{this.setState({news:json.articles,loading:false},()=>console.log(json.articles))});
 }
 
  render()
 {
   return(
     <div>
    <CountryList addnews={this.addtonews} load={this.state.loading} loadtrue={this.loadtrue}/>
    {this.state.loading&&<img src="https://media1.tenor.com/images/db85ba00c6073b451a8f05156a66524e/tenor.gif?itemid=9856796"/>}
    {!this.state.loading&&<NewsList news={this.state.news}/>}
    </div>
   );
 } 
}

export default App;
