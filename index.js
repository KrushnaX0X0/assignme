let marks = [80, 70, 60, 90, 95 ,99]

let largest = marks[0]

for (let i=1; i <marks.length;  i++){

if(marks[i] > largest){
    largest = marks[i]
}


}
console.log(largest)