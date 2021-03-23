import React from 'react';
import Avatar from "@material-ui/core/Avatar";

function VideoCard({image,title,channel,views,timestamp,channelImage}) {
    return (
        <div className="videoCard">
            <img src={image} alt=""/>
            <div className="video__info">
                <Avatar className="video__avatar" alt={channel} src={Avatar}/>
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} • {timestamp}
                    </p>
                </div>
            </div> 

        </div>
    )
}
export default VideoCard;