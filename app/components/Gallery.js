import React, {Component} from 'react';

class Gallery extends Component {
    render() {
        let blankImgUrl = "/images/blank-icon.png";
        return (
            <div>
                {this
                    .props
                    .items
                    .map((item, index) => {
                        console.log(index, item);
                        let {title, imageLinks, infoLink} = item.volumeInfo;
                        return (
                            <a id={index} className="book-item" href={infoLink} target="_blank">

                                <img
                                    src={imageLinks !== undefined
                                    ? imageLinks.thumbnail
                                    : blankImgUrl}
                                    alt={title}
                                    className="book-image"/>

                                <div className="book-title">{title}</div>
                            </a>
                        )
                    })
}
            </div>
        )
    }
}

export default Gallery;