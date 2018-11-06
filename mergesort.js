const originalArr = [5, 3, 6, 7, 9, 2, 10]

function split(originalArr) {
    if (originalArr.length < 2) {
      return originalArr;
    }

    var center = Math.floor(originalArr.length / 2);
    var firstHalf = split(originalArr.slice(0, center));
    var secondHalf = split(originalArr.slice(center));

    return merge(firstHalf, secondHalf);
}

function merge (leftArr, rightArr) {
    var result = [];
    while (leftArr.length > 0 && rightArr.length > 0)
        result.push(leftArr[0] < rightArr[0]? leftArr.shift() : rightArr.shift());
    return result.concat(leftArr.length? leftArr : rightArr);
}

let test = split([5, 3, 6, 7, 9, 2]);
let odd = split([5, 3, 6, 7, 9, 2, 10]);
console.log(test);
console.log(odd);