const db = {};

const addToDb = item => {
    // Step 1
    db[item] = 1;
    console.log(db);
}