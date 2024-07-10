// zadanie 1
const fruit = ["Jabłko", "Banan", "Pomarańcza", "Winogrona", "Arbuz"];
// zadanie 2
const numbers = [1,5,7,8,9,12,15,20];

const wyznacznik = 5;
for (let i = 0; i < numbers.length; i +=1 ){
    if (numbers[i] < wyznacznik) {
        continue;
    }
}
