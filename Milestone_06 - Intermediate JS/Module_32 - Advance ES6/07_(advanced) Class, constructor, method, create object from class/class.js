class Work {
    name;
    role = 'Support Developer';
    address = 'BD';
    // Next part
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    // this is a function
    supportSession() {
        console.log(this.name,'Start support seassion');
    }
}

const shama = new Work('Shama', 'Bangladesh');

shama.supportSession();
console.log(shama);