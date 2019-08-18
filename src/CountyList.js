import React from 'react';

class CountryList extends React.Component{
   
    
    render()
    {
        return(
                <div>
            <button onClick={()=>this.props.addnews("in")}>India</button>
            <button onClick={()=>this.props.addnews("us")}>USA</button>
            <button onClick={()=>this.props.addnews("ru")}>Russia</button>
           </div>
        );
    }
}

export default CountryList;