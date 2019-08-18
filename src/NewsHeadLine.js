import React from 'react';

class NewsHeadLine extends React.Component{
    render(){
       return( 
       <div style={{display:"flex",flexDirection:"row",marginLeft:"10px"}}><img src={this.props.newz.urlToImage} width="150" height="80"/>
            <div style={{marginLeft:"10px"}}>{this.props.newz.description}</div>
        </div>
       );
    }
}

export default NewsHeadLine;