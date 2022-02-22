const company = {
    name: "Squeak",
    ceo: {
        name: "Siddik",
        id: 26,
        address: 'Banglasesh'
    },
    department: {
        web: {
            head: 'Shama',
            id: 32
        },
        app: {
            head: 'Atik',
            id: 22
        }
    }

}

console.log(company.department?.android?.head);