const services = [
    "plex",
    "jellyfin",
    "transmission",
    "radarr",
    "jackett",
    "bazarr",
    "minio",
    "finance",
    "copyparty",
    "tierlists"
];

const hostname = window.location.hostname; // kryllix.dedyn.io or nixos.local etc.
const links = document.getElementById('services');

services.forEach(name => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `https://${name}.${hostname}`;
    a.textContent = name.charAt(0).toUpperCase() + name.slice(1);
    li.appendChild(a);
    links.appendChild(li);
});
