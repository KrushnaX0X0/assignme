let marks = [80, 70, 60, 90, 95 ,99]

let largest = marks[0]


for (let i=1; i <marks.length;  i++){

if(marks[i] > largest){
    largest = marks[i]
}


}
console.log(`The array largest number ${largest}`)



let sum = 0;
for (let i=0; i < marks.length; i++){
    if(marks[i] %2==1){
        sum += marks[i]
    }
}
console.log(`odd addtion ${sum}`)


let student = ["krushna","pavan","sakshi","radha","guru"]

for(let i=0; i<student.length; i++){
    console.log(`hello ${student[i]}`)
}
