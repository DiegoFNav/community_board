import React from "react";
import Card from "./Card";

const Board = () => {
    return (
        <>
        <div className="board">
            <div className="card_container">
                <Card title="Super Smash Bros Tournament" 
                desc="Our monthly tournament will be held next Friday!" 
                img="Smash.PNG" 
                link="https://www.smashbros.com/en_US/"/>
                <Card title="Digital Art Tutorial" 
                desc="Come learn about the basics of digital art. Supplies and a demo will be provided" 
                img="digital_art.PNG" 
                link=""/>
                <Card title="NO MEETINGS" 
                desc="Remember, there are no meetings on Weeks 3, 5, and 10" 
                img="cancel.PNG" 
                link=""/>
                <Card title="Anime Expo Club Outing"
                desc="We will be going to Anime Expo this July. Link to buy tickets below." 
                img="anime_expo.PNG" 
                link="https://www.anime-expo.org/"/>
                <Card title="Join our Discord Server!" 
                desc="Lots of our announcements are now made on our Discord server too. Join with the link below." 
                img="discord.png" 
                link="https://discord.com/"/>
                <Card title="ART CONTEST Club Icon" 
                desc="We are holding a art contest to find our next club logo! Submissions close next week, submit below!" 
                img="contest.PNG" 
                link="https://www.google.com/forms/about/"/>
                <Card title="Week 6: Game Night" 
                desc="Bring your game consoles and get ready to play!" 
                img="game_night.PNG" 
                link=""/>
                <Card title="Week 7: Video Game Jeopardy" 
                desc="Get your video game knowledge ready. Work in teams to hopefully win!" 
                img="jeopardy.png" 
                link=""/>
                <Card title="Week 8: Pitch Night" 
                desc="Pitch your video game ideas to our panel of judges. We will even have 3 guests from industry ready to help anyone interested in Video Game Development." 
                img="pitch.png" 
                link=""/>
                <Card title="Week 9: Movie Night" 
                desc="Get ready for finals week with our final meeting of the quarter. We will be watching Ready Player One, snacks provided!" 
                img="ready.jpg" 
                link=""/>
            </div>

        </div>
        </>
    )
}

export default Board;