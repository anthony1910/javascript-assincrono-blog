async function getGameByName(name) {

    try {
     
        let result = await fetch(`https://api.rawg.io/api/games?search=${name}`);

        result = await result.json();

        return result;

    } catch (error) {
        console.error(err);
    }

}

async function getRelatedGamesByName(name) {

    try {

        let result = await fetch(`https://api.rawg.io/api/games/${name}/suggested`);
        
        result = await result.json();

        return result;

    } catch (err) {
        console.error(err);
    }

}