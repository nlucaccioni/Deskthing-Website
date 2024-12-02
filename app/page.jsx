import Sidebar from "./components/sidebar";

export default function () {
    return (
        <>
            <div className="min-h-svh flex flex-grow justify-between pt-nav">
                <h1>Take Back the Car Thing</h1>
                <Sidebar />
            </div>
        </>
    );
}