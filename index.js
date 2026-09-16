const privateServices = [
    "plex",
    "transmission",
    "radarr",
    "sonarr",
    "jackett",
    "bazarr",
    "minio",
    "finance",
    "copyparty",
];

const publicServices = [
    { name: "tierlists", source: "https://github.com/RaresGeo/LaravelTierlist" },
    { name: "digitalhub", },
    { name: "digitalhub-cms", },
];

const hostname = window.location.hostname;

function appendServices(servicesArr, appendToId) {
    const links = document.getElementById(appendToId);

    servicesArr.forEach(({ name, source }) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `https://${name}.${hostname}`;
        a.textContent = name.charAt(0).toUpperCase() + name.slice(1);
        li.appendChild(a);

        if (source) {
            const sep = document.createElement('span');
            sep.setAttribute('aria-hidden', 'true');
            sep.textContent = '·';

            const src = document.createElement('a');
            src.href = source;
            src.textContent = 'source';

            li.appendChild(sep);
            li.appendChild(src);
        }

        links.appendChild(li);
    });
}

appendServices(privateServices.map(name => ({ name, source: undefined })), 'private-services');
appendServices(publicServices, 'public-services');
