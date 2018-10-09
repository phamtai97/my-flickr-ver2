import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import iconview from '../resource/iconview.png';
import {withRouter} from "react-router-dom";
import '../styles/item.css';
class Container extends Component {
    constructor(props){
        super(props);
        this.onClickThumbnail = this.onClickThumbnail.bind(this);
    }

    onClickThumbnail (index) {
        var images = this.props.images;
        var image = images[index];
        this.props.history.push('/photos/' + image.id);
    }

    render() {
        var images = this.props.images.map((image) => {
            image.customOverlay = (
                <div className="footer">
                    <div className="info">
                        <div className="title">
                            {image.caption}
                        </div>

                        <div className="owner-name">
                            {image.ownername}
                        </div>
                    </div>

                    <div className="info-view">
                        <div className="icon-view">
                            <img src={iconview}></img>
                        </div>
                        <div className="number-view">
                            {image.views}
                        </div>
                    </div>
                </div>
            );
            return image;
        });

        return (
            <div className="flickr-container">
                <Gallery
                    images={images}
                    backdropClosesModal={true}
                    enableImageSelection={false}
                    rowHeight={280} 
                    onClickThumbnail={this.onClickThumbnail} 
                />
            </div>
        );
    }
}

const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    maxHeight: "240px",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    width: "98.5%",
    color: "white",
    padding: "2px",
    fontSize: "90%"
};
 
const customTagStyle = {
    wordWrap: "break-word",
    display: "inline-block",
    height: "auto",
    fontSize: "75%",
    lineHeight: "1",
    padding: ".2em .6em .3em",
    borderRadius: ".25em",
    color: "white",
    verticalAlign: "baseline",
    margin: "2px"
};

export default withRouter(Container);
