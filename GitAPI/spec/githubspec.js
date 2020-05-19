function apiFunction(url, start , end ) {
    fetch("https://github.com/nuraanNinah?tab=repositories")
        .then(function (response) {
            return response, json();

        })
        .catch(function (error) {
            console.log("Error:" + error);
        });
}

function apiFunction(start){
    fetch(start)
    .then(function(response){
        
    })
}