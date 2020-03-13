function getGameByName(name) {

    return new Promise((resolve, reject) => {

        fetch(`https://api.rawg.io/api/games?search=${name}`)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            })

    });

}

function getRelatedGamesByName(name) {

    return new Promise((resolve, reject) => {

        fetch(`https://api.rawg.io/api/games/${name}/suggested`)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            })

    });

}