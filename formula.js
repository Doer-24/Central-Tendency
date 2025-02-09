let number = document.getElementById('number');
let button = document.getElementById('addbutton');
let btn = document.getElementById('delete');
let enter = document.getElementById('enter');
let nums = [];

button.addEventListener('click', addnumber);
btn.addEventListener('click', delnum);
enter.addEventListener('click', output);

function delnum() {
    nums.pop();  
    listnumber();

    document.getElementById("Mean").innerText = "";
    document.getElementById("Median").innerText = "";
    document.getElementById("Mode").innerText = "";
}

function addnumber() {
    let numValue = number.value.trim();
    if (numValue !== "") {
        nums.push(Number(numValue));  
        number.value = "";  
        listnumber();  
    }
}

function listnumber() {
    document.getElementById("numberList").innerText = nums.join(", ");  
}

function output() {
    
    let mean = computeMean(nums);
    let median = computeMedian(nums);
    let mode = computeMode(nums);

    document.getElementById("Mean").innerText = `Mean: ${mean}`;
    document.getElementById("Median").innerText = `Median: ${median}`;
    document.getElementById("Mode").innerText = `Mode: ${mode}`;
}

function computeMean(nums) {
    let sum = nums.reduce((a, b) => a + b, 0);  
    return (sum / nums.length); 
}

function computeMedian(nums) {
    nums.sort((a, b) => a - b);  
    let mid = Math.floor(nums.length / 2);

    if (nums.length % 2 === 0) {
        return ((nums[mid - 1] + nums[mid]) / 2).toFixed(2);
    } else {
        return nums[mid];
    }
}

function computeMode(nums) {
    let frequency = {};
    let maxFreq = 0;
    let modes = [];

    nums.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
        }
    });

    for (let num in frequency) {
        if (frequency[num] === maxFreq) {
            modes.push(num);
        }
    }

    if (Object.keys(frequency).length === modes.length) {
        return "None";
    }
    
    return modes.join(", ");
}
//D☼
