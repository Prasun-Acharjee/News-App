import React from 'react';
import NewsHeadLine from "./NewsHeadLine";
class NewsList extends React.Component{
    render()
    {
        return(
            <div>
            {
                this.props.news.map((newz)=><NewsHeadLine key={newz} newz={newz}/>)
            }
            </div>
        );
    }
}

export default NewsList;