const getPuzzle = async ( wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
        if ( response.status === 200) {
            const data = await response.json();
            return data.puzzle;
        } else {
            throw new Error('Unable to fetch puzzle');
        }
}

/*
const getPuzzle = ( wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response)=> {
        if ( response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch puzzle');
        }
    }).then( (data) => {
        return data.puzzle;
    })
}
*/
/*const getPuzzle = ( wordCount) => {
    return new Promise( (resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener( 'readystatechange', (e)=> {
        if ( e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            resolve(data.puzzle);
        } else if ( e.target.readyState === 4) {
            reject('An error has taken place');
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
    })
}

*/
/*
const getPuzzle = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener( 'readystatechange', (e)=> {
        if ( e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            callback(undefined, data.puzzle);
        } else if ( e.target.readyState === 4) {
            callback('An error has taken place', undefined);
        }
    })

    request.open('GET', 'http://puzzle.mead.io/puzzle');
    request.send();
}
*/

export { getPuzzle as default}