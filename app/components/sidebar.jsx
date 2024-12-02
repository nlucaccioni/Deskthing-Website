import { BtnIcon } from '../components/buttons';
import { BtnArrow } from '../components/buttons';
import IconApple from "../assets/icons/Apple";
import IconWindows from "../assets/icons/Windows";
import IconLinux from "../assets/icons/Ubuntu";

export default function Sidebar() {
    return (
        <aside className="p-6 border-l border-neutral-800 flex flex-col gap-4 w-sidebar">
            <div>
                <p className="font-mono text-neutral-500 leading-3">0.0.0</p>
                <h4 className="font-bold text-xl">Latest Release</h4>
            </div>
            <hr className="border-neutral-800"></hr>
            <BtnIcon to="/" label="Windows" icon={<IconWindows/>}/>
            <BtnIcon to="/" label="Mac Arm" icon={<IconApple/>}/>
            <BtnIcon to="/" label="Mac x64" icon={<IconApple/>}/>
            <BtnIcon to="/" label="Linux" icon={<IconLinux/>}/>
            <hr className="border-neutral-800"></hr>
            <BtnArrow to="/" label="Previous Releases"/>
        </aside>
    )
}