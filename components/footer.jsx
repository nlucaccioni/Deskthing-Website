import IconCoffee from "../components/assets/icons/Coffee";
import IconDiscord from "../components/assets/icons/Discord";
import IconGithub from "../components/assets/icons/GitHub";
import IconReddit from "../components/assets/icons/Reddit";
import IconTrello from "../components/assets/icons/Trello";
import IconYoutube from "../components/assets/icons/Youtube";


function VertLine () {
    return (
            <div style={{width: "1.5px", height: "44px"}} className="bg-neutral-800"></div>
    )
}

function IconButton ({ to, icon }) {
    return (
        <a href={to}
        className="block transition ease-in-out duration-200 p-2 text-neutral-50 hover:text-green-400 hover:bg-neutral-50/10 rounded-md">
            {icon}
        </a>
    )
}

export default function Footer(){
    const links = {
        github: "https://github.com/ItsRiprod/DeskThing",
        trello: "https://trello.com/b/6v0paxqV/deskthing",
        discord: "https://discord.gg/deskthing-1267348109067817051",
        reddit: "https://reddit.com/r/deskthing",
        youtube: "https://www.youtube.com/@deskthing",
        coffee: "https://buymeacoffee.com/riprod",
    };

    return (
        <footer className="flex flex-row justify-between items-center py-3 px-6 border-t border-neutral-800 bg-neutral-950">
            <p className="text-xs text-neutral-300">©2024 DeskThing Contributors</p>
            <div className="flex flex-row gap-2">
                <IconButton to={links.github} icon={<IconGithub/>}/>
                <IconButton to={links.trello} icon={<IconTrello/>}/>
                <VertLine />
                <IconButton to={links.discord} icon={<IconDiscord/>}/>
                <IconButton to={links.reddit} icon={<IconReddit/>}/>
                <IconButton to={links.youtube} icon={<IconYoutube/>}/>
                <VertLine />
                <IconButton to={links.coffee} icon={<IconCoffee/>}/>
            </div>
        </footer>
    )
}