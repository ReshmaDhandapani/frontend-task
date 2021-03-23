import React from 'react'
import "./recommandedVideos.css"
import VideoCard from "./VideoCard"
function RecommandedVideos() {
    return (
        <div className="recommandedVideos">
            <h2>Recommended </h2>
            <div className="recommandedVideos__videos">
                <VideoCard 
                title="Become a Web Developer in 10 minutes  | 2019/2020"
                views="2.3M Views"
                timestamp="3 days ago"
                channelImage="https://duckduckgo.com/?q=madan+gowri+channel+image&iar=images&iax=images&ia=images&iai=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJzkHWxWVrI8Q3dUb4fFd36Ayu89rtXhQfJJ7ONyhfA%3Ds900-c-k-c0xffffffff-no-rj-mo"
                channel="Resh"
                image="https://duckduckgo.com/?q=dummy+image+for+youtube+video+cover+page&iax=images&ia=images&iai=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDIZwgguZE60%2Fmaxresdefault.jpg"    
                />
                
            </div>
        </div>
    )
}

export default RecommandedVideos
