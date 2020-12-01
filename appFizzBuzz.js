for (let i = 1; i < 101 ; i++){
    if (i % 3 === 0 && i % 5 !== 0){
        console.log( i + "=> fizz" );
    }
    else if (i % 3 !== 0 && i % 5 === 0){
        console.log( i + "=> buzz");
    }
    else if (i % 3 === 0 && i % 5 === 0){
        console.log( i + "=> fizz buzz");
    }
    else {
        console.log( i + "=>" + i );
    }
}
