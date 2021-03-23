import React from 'react'
import "./recommandedVideos.css"
import VideoCard from "./VideoCard"
function RecommandedVideos() {
    return (
        <div className="recommandedVideos">
            <h2>Recommended </h2>
            <div className="recommandedVideos__videos">
                <VideoCard 
                title="Become a Web developrt in 10 minutes"
                views="2.3M Views"
                timestamp="10 days ago"
                channel="Clever Programmer"
                image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg?"
                channelImage="https://i.ibb.co/mDLgH2Y/1.jpg"
                />
                <VideoCard 
                title="Love Story"
                views="10.3M Views"
                timestamp="1 year ago"
                channel="Taylor Swift"
                image="https://i.ibb.co/X2dq9yr/2.png"
                channelImage="https://i.ibb.co/NCXBWmY/2a.jpg"
                />
                 <VideoCard 
                title="What is cloud computing??"
                views="5.3M Views"
                timestamp="3 year ago"
                channel="Cloud resource"
                image="https://i.ibb.co/WBCz21b/1.png"
                channelImage="https://i.ibb.co/HhLtbLn/aws.jpg"
                />

               <VideoCard 
                title="Learn programming  | C++ |Tamil "
                views="1M Views"
                timestamp="6 Months ago"
                channel="Programix Tamil"
                image="https://i.ibb.co/JQ8N0vX/4.png"
                channelImage="https://i.ibb.co/yW8sxRg/edu.jpg"
                />

                <VideoCard 
                title="Languages  |  Learn it!!"
                views="9.3M Views"
                timestamp="2 year ago"
                channel="Code with harry"
                image="https://i.ibb.co/vmp4ds7/2.png"
                channelImage="https://i.ibb.co/S63MgfC/cd.jpg"
                />

                <VideoCard 
                title="Learn Java Script in 1 hour??"
                views="100023 Views"
                timestamp="2 Days ago"
                channel="Code with Mosh"
                image="https://i.ibb.co/sVH8tDC/3.png"
                channelImage="https://i.ibb.co/rvR9MSK/mosh.png"
                />

                <VideoCard 
                title="Talk with Sharuk khan"
                views="1B Views"
                timestamp="5 year ago"
                channel="Google"
                image="https://i.ibb.co/Dbyg5qR/1.png"
                channelImage="https://i.ibb.co/98jDZ4s/g.gif"
                
                />

                <VideoCard 
                title="Whole Country Locked Explained | Tamil | Madan Gowri | Brazil | MG"
                views="495,563 views"
                timestamp="Mar 22, 2021"
                channel="Madan Gowri"
                image="https://i.ibb.co/RbGv0Hw/5.png"
                channelImage="https://i.ibb.co/5nYpztW/madan.png"
                />

                <VideoCard 
                title="Ed Shreen-Perfect"
                views="2.7B Views"
                timestamp="3 days ago"
                channel="Ed Shreen"
                image="https://i.ibb.co/stMLR7R/6.png"
                channelImage="https://i.ibb.co/vvfKZqK/edsheeren.jpg"
                />
            </div>
        </div>
    )
}

export default RecommandedVideos

