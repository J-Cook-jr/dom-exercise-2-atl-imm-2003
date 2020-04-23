const sites = [
    {
        "address": "https://apple.com",
        "logo": "https://www.logodesignlove.com/images/classic/apple-logo-rob-janoff-01.jpg",
    },
    {
        "address": "https://google.com",
        "logo": "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg"
    },
    {
        "address": "https://microsoft.com",
        "logo": "http://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2qVsJ?ver=3f74"
    },

];

const container = document.getElementById("container");
container.style.display = "flex-box";
container.style.marginLeft = "40vw";
container.style.marginTop = "10vh";
container.style.width = "300px";
container.style.justifyContent = "center";
container.style.alignItems = "center";

function createLink(site) {
    const link = document.createElement("a");
    const img = document.createElement("img");
    link.setAttribute("href", site.address);
    img.setAttribute("src", site.logo);
    img.setAttribute("width", "200px");
    link.appendChild(img);
    container.appendChild(link);
}

sites.forEach(createLink);



