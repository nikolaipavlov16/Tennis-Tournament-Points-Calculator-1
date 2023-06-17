function solve(input) {



    let  tournamentsCount = Number(input[0])
    let startingPoints = Number(input[1])
    let totalPoints = Number(input[1])

    let winnersCounter = 0
    for(let i = 2 ;i < input.length;i++ ){
        let currentPosition = input[i]


        if (currentPosition == 'W') {
            totalPoints += 2000
            winnersCounter++
        }

        if(currentPosition == 'F'){
            totalPoints += 1200
        }


        if(currentPosition == 'SF'){
            totalPoints += 720
        }
    }

    let winsAsPercent = (winnersCounter / tournamentsCount) * 100
    let pointsFromTournaments = totalPoints - startingPoints
  let averagePoints = (pointsFromTournaments / tournamentsCount).toFixed(2)
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${winsAsPercent.toFixed(2)}%`);
}
solve((["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])


)