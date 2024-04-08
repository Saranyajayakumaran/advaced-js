const nums=[0,1,2,3,4];
let sum=nums.reduce((acc,curr)=>acc+curr);//accumlator, current 
console.log(sum);

const teamMembers=[{
    name:'Ariel',
    profession:'Developer',
    yrsExperience:7
},
{
    name:'Micheal',
    profession:'Designer',
    yrsExperience:1
},
{
    name:'Kelly',
    profession:'Designer',
    yrsExperience:3
}]

let totalExperience=teamMembers.reduce((acc,curr)=>acc+curr.yrsExperience,0);
console.log(totalExperience);