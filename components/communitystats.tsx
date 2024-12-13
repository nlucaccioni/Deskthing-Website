export default function CommunityStats({ stat, label }) {
  return (
    <div className="hoverDropShadow p-6 border rounded-lg border-green-600/40 w-full bg-neutral-950  
    hover:border-green-400/40 transition ease-in-out duration-500 hover:scale-105">
      <h3 className="text-green-600 mb-1">{stat}</h3>
      <p className="font-bold">{label}</p>
    </div>
  );
}
