const publicServices = [
    "tierlists"
];

const privateServices = [
    "plex",
    "transmission",
    "radarr",
    "jackett",
    "bazarr",
    "minio",
    "finance",
    "copyparty",
];

const hostname = window.location.hostname;

function appendServices(servicesArr, appendToId) {
    const links = document.getElementById(appendToId);

    servicesArr.forEach(name => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `https://${name}.${hostname}`;
        a.textContent = name.charAt(0).toUpperCase() + name.slice(1);
        li.appendChild(a);
        links.appendChild(li);
    });
}

appendServices(privateServices, 'private-services')
appendServices(publicServices, 'public-services')
