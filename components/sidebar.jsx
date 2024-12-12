import { BtnIcon } from '../components/buttons';
import { BtnArrow } from '../components/buttons';
import IconApple from "../components/assets/icons/Apple";
import IconWindows from "../components/assets/icons/Windows";
import IconLinux from "../components/assets/icons/Ubuntu";
import IconRasberry from "../components/assets/icons/Rasberry";


export default function Sidebar({ downloadUrls }) {

    return (
        <aside className="p-6 hidden lg:flex flex-col gap-4 w-sidebar sticky top-nav h-full lg:max-xl:pr-0">
            <div>
                <h4 className="font-bold text-xl mb-1">Latest Release</h4>
                <p className="font-mono text-neutral-400 leading-3">{downloadUrls.latestVersion}</p>
            </div>
            <hr className="border-neutral-800"></hr>
            {downloadUrls.windows && (
                <BtnIcon to={downloadUrls.windows} label="Windows" icon={<IconWindows />} />
            )}
            {downloadUrls.macArm64 && (
                <BtnIcon to={downloadUrls.macArm64} label="Mac Arm" icon={<IconApple />} />
            )}
            {downloadUrls.macX64 && (
                <BtnIcon to={downloadUrls.macX64} label="Mac x64" icon={<IconApple />} />
            )}
            {downloadUrls.linuxAppImage && (
                <BtnIcon to={downloadUrls.linuxAppImage} label="Linux" icon={<IconLinux />} />
            )}
            {downloadUrls.raspberry && (
                <BtnIcon to={downloadUrls.raspberry} label="Raspberry" icon={<IconRasberry />} />
            )}
            <hr className="border-neutral-800"></hr>
            <BtnArrow to="./releases#previousreleases" label="Previous Releases"/>
        </aside>
    )
}