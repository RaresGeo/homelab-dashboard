const services = [
    "plex",
    "transmission",
    "radarr",
    "jackett",
    "bazarr",
    "minio",
    "finance",
    "copyparty"
];

const hostname = window.location.hostname; // kryllix.dedyn.io or nixos.local etc.
const baseDomain = hostname.split('.').slice(1).join('.'); // strips the subdomain if any
const links = document.getElementById('services');

services.forEach(name => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `https://${name}.${baseDomain}`;
    a.textContent = name.charAt(0).toUpperCase() + name.slice(1);
    li.appendChild(a);
    links.appendChild(li);
});
