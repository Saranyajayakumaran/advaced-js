let nums=[1,2,3,4,5];
let results=[];
for (let num of nums){
    results.push(num*2);
}
console.log(results);

//using map

const mulByTwo=function(num){
    return num*2;
}

const mapResult=nums.map(mulByTwo);
console.log(mapResult)


const simplified=nums.map(function(num) {return num*2});
console.log(simplified);

const students=[
    {
        id:1,
        name:'Mark',
        profession:'Developer',
        skill:'Javascript'
    },
    {
        id:2,
        name:'Ariel',
        profession:'Developer',
        skill:'HTML'
    },
    {
        id:2,
        name:'Jason',
        profession:'Designer',
        skill:'CSS'
    }
]

const studentsWithId =students.map(student=>[student.name,student.id]);
console.log(studentsWithId);