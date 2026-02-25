const services = {
    plex: "32400/web",
    transmission: 9091,
    radarr: 7878,
    jackett: 9117,
    bazarr: 6767,
    minIO: 9001,
    finances: "/finance/",
    copyparty: 3923
};

const hostname = window.location.hostname;  // nixos.local or nixos.xxx.ts.net
const baseUrl = `http://${hostname}`;
const links = document.getElementById('services');

Object.entries(services).forEach(([name]) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `${baseUrl}:${services[name]}`;  // Dynamic port
    a.textContent = name.charAt(0).toUpperCase() + name.slice(1);
    li.appendChild(a);
    links.appendChild(li);
});
