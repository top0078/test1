
const Band =[
    {member:1 ,name:"top", popularsong:"thaipop"},
    {member:2 ,name:"nan", popularsong:"thaipop"},
    {member:3 ,name:"eva", popularsong:"thaipop"},
    {member:4 ,name:"san", popularsong:"thaipop"},
];
const newband= Band.map((i)=>{return i.member+i.name+i.popularsong});
console.log(newband);


const member =[
        {name:"a",money:500},
        {name:"b",money:400},
        {name:"c" ,money:5200},
        {name:"d" ,money:1200},
];
const result = member.filter((money)=> money.money>450);
console.log(result);