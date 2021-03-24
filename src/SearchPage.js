import React from "react";
import TuneOutlinkedIcon from "@material-ui/icons/TuneOutlined"
import"./SearchPage.css"
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinkedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo"
                Channel="Clever Programmer"
                verified
                subs="914K subscribers"
                noOfVideos={549}
                description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."            
            />
            <hr/>
            <VideoRow 
            views="26,985"
            subs="914K"
            description="I paid a stranger $100 to make a React JS website"
            timestamp="Premiered Mar 14, 2021"
            channel="Clever Programmer"
            title="I paid a stranger $100 to make a React JS website"
            image="https://www.youtube.com/embed/T_f8krGGXV8"/>

            <VideoRow 
                views="1,997,421"
                subs="914K"
                description="Python Tutorial for Beginners - Full Course in 12 Hours"
                timestamp="Premiered Dec 21, 2019"
                channel="Clever Programmer"
                title="Python Tutorial for Beginners - Full Course in 12 Hours"
                image="https://www.youtube.com/embed/4F2m91eKmts"/>

            <VideoRow 
                views="270,611"
                subs="914K subscribers"
                description="A Day in the Life of a Software Engineer | Python Freelancer"
                timestamp="Jun 15, 2019"
                channel="Clever Programmer"
                title="A Day in the Life of a Software Engineer | Python Freelancer"
                image="https://www.youtube.com/embed/2QByYtPEGIs"/>

            <VideoRow 
                views="243,902"
                subs="914K"
                description="Do you want a free one hour training..."
                timestamp="Premiered Oct 7, 2020"
                channel="Clever Programmer"
                title="Let us build a Youtube clone with REACT JS for FREE!!"
                image="https://www.youtube.com/embed/-cMqr9HpZ-Y"/>

        </div>
    )
}

export default SearchPage
