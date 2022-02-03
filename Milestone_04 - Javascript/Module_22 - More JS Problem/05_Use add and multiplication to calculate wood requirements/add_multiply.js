

function woodCalculation(chairQuantity, tableQuentity, bedQuantity) {
    let perChair = 3;
    let perTable = 10;
    let perBed = 50;
    // Wood calculation
    let chairTotalWood = perChair * chairQuantity;
    let bedTotalWood = perBed * bedQuantity;
    let tableTotalWood = perTable * tableQuentity;

    // Total wood calculation
    const total = chairTotalWood + bedTotalWood + tableTotalWood;
    console.log('Total wood needed', total, 'cft');
}

woodCalculation(5, 1, 2);

