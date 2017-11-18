import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        let blankImgUrl = "/images/blank-icon.png";
        return (
            <div>
                {
                this.props.items.map((item, index) => {
                    console.log(index, item);
                    let {title, imageLinks, infoLink} = item.volumeInfo;
                    return (
                        <div id={index}>
                        
                            <img src={imageLinks !== undefined ? imageLinks.thumbnail : blankImgUrl} 
                            alt={title} />

                            {title}
                        </div>
                    )
                })
                }
            </div>
        )
    }
}

export default Gallery;