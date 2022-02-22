class TeamMember{
    name;
    role = 'Team care';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}

class Work extends TeamMember {
    seasionTime;
    constructor(name,address,time){
        super(name,address);
        this.seasionTime = time;
    }
    supportSession() {
        console.log(this.name,'Start support seassion', this.seasionTime);
    }
}

const shama = new Work ('Shama','Bangladesh','Night');
shama.supportSession();
// console.log(shama);


class StudentCare extends TeamMember {
    buildRoutine() {
        console.log('Start support seassion');
    }
}

const siddik = new StudentCare ('Shama','Bangladesh');
console.log(siddik);