function buildTower(number) {
    const tower = []
    let newTower = '*'
        for (let i = 0; i<number; i++) {
            tower.push(newTower)
            newTower += '**'
            for (let x = 0; x<i; x++) {
                tower[x] = ' ' + tower[x] + ' '
            }
        }
        return tower
}

// function buildTower(floors){
//     let space, star, tower = [];
//     for(i = 1; i <= floors; i++){
//       space = " ".repeat(floors - i);
//       star  = "*".repeat((2*i) - 1);
//       tower.push(`${space}${star}${space}`);
//     }
//     return tower;
//   }

console.log(buildTower(3)) // does not format right if less than 6
// console.log(buildTower(6))