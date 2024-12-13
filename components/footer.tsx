import React, { FC, JSX } from 'react';
import {
    IconCoffee,
    IconDiscord,
    IconGithub,
    IconReddit,
    IconTrello,
    IconYoutube,
    IconBluesky,
    IconTwitter,
} from "../components/assets/icons";

interface VertLineProps {}

const VertLine: FC<VertLineProps> = () => {
    return (
        <div style={{ width: "1.5px", height: "44px" }} className="bg-neutral-800"></div>
    );
}

interface IconButtonProps {
    to: string;
    icon: JSX.Element;
}

const IconButton: FC<IconButtonProps> = ({ to, icon }) => {
    return (
        <a href={to}
            className="block transition ease-in-out duration-200 p-2 text-neutral-50 hover:text-green-400 hover:bg-neutral-50/10 rounded-md">
            {icon}
        </a>
    );
}

const Footer: FC = () => {
    const links: { [key: string]: string } = {
        github: "https://github.com/ItsRiprod/DeskThing",
        trello: "https://trello.com/b/6v0paxqV/deskthing",
        discord: "https://discord.gg/deskthing-1267348109067817051",
        reddit: "https://reddit.com/r/deskthing",
        youtube: "https://www.youtube.com/@deskthing",
        coffee: "https://buymeacoffee.com/riprod",
        bluesky: "https://bsky.app/profile/deskthing.app",
        twitter: "https://x.com/TheDeskThing",
    };

    return (
        <footer className="flex flex-col sm:flex-row justify-between gap-2 sm:items-center py-3 px-6 border-t border-neutral-800 bg-neutral-950">
            <p className="text-xs text-neutral-300">©2024 DeskThing Contributors</p>
            <div className="flex flex-row gap-2 flex-wrap w-full sm:w-auto">
                <IconButton to={links.github} icon={<IconGithub />} />
                <IconButton to={links.trello} icon={<IconTrello />} />
                <VertLine />
                <IconButton to={links.discord} icon={<IconDiscord />} />
                <IconButton to={links.reddit} icon={<IconReddit />} />
                <IconButton to={links.youtube} icon={<IconYoutube />} />
                <IconButton to={links.twitter} icon={<IconTwitter />} />
                <IconButton to={links.bluesky} icon={<IconBluesky />} />
                <VertLine />
                <IconButton to={links.coffee} icon={<IconCoffee />} />
            </div>
        </footer>
    );
}

export default Footer;