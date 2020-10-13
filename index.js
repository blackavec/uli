let getUrl = () => {
    let originalUrl = window.location.href;
    return originalUrl;
}

let slashDivider = () => {
    let sd = getUrl().split('/');
    return sd;
}

let getProtocol = () => {
    let gp = location.protocol;
    return gp;
}

let domainName = () => {
    let dn = location.hostname;
    return dn;
}

let domainWithProtocol = () => {
    let dwp = location.origin;
    return dwp;
}

let sitePort = () => {
    let sp = location.port;
    return sp;
}

let searchQuery = () => {
    let sq = location.search;
    return sq;
}

let pathName = () => {
    let pn = location.pathname;
    return pn;
}

let hashAddress = () => {
    let hd = location.hash;
    return hd;
}

let StringIndexFinder = (nameOfString) => {
    let stringToArray = nameOfString.split('');
    let stringArrayLength = stringToArray.length;
    let startingIndex = getUrl().indexOf(nameOfString);
    let endIndex = parseInt(stringArrayLength) + parseInt(startingIndex) - 1;
    return "from index " + startingIndex + ", end index " + endIndex ;
} 


let isEncrypted = () => {
    if(getUrl().includes("https")){
        return true;
    } else {
        return false;
    }
}

module.exports.getUrl = getUrl;
module.exports.slashDivider = slashDivider;
module.exports.getProtocol = getProtocol;
module.exports.domainName = domainName;
module.exports.domainWithProtocol = domainWithProtocol;
module.exports.sitePort  = sitePort;
module.exports.searchQuery = searchQuery;
module.exports.pathname = pathname;
module.exports.hashAddress = hashAddress;
module.exports.stringIndexFinder = stringIndexFinder;
module.exports.isEncrypted = isEncrypted;