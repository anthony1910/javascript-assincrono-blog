function getGameByName(name, callback) {

    let request = new XMLHttpRequest();

    request.open('GET', `https://api.rawg.io/api/games?search=${name}`, true);

    request.onload = () => {

        let response = JSON.parse(request.response);
        
        if (typeof callback == 'function') callback(response);

    };

    request.send();

}

function getRelatedGamesByName(name, callback) {

    let request = new XMLHttpRequest();

    request.open('GET', `https://api.rawg.io/api/games/${name}/suggested`, true);

    request.onload = () => {

        let response = JSON.parse(request.response);
        
        if (typeof callback == 'function') callback(response);

    };

    request.send();

}