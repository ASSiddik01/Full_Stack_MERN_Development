const db = {};

const addToDb = item => {
    // Step 1           
    // db[item] = 1;

    if (item in db) {
        db[item] = db[item] + 1;
    } else {
        db[item] = 1;
    }

    console.log(db);

}