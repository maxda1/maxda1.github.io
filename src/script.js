let names = {
    "Emily Hu":1,
    "Steve Dai":1,
    "Ningbo Dai":1,
    "Songgui Leng":1,
    "Mengbing Dai":1,
    "Joanna Ruan":1,
    "Siqi Dai":1,
    "Siyu Dai":1,
    "Yongjing Wang":1,
    "Desheng Sun":1,
    "Lingli He":1,
    "Guifang Zheng":1,
    "Qingjian Li":1,
    "Jie Cui":2,
    "Meisen Li":2,
    "Songli Niu":2,
    "Shubin Yuan":2,
    "Tiecheng Niu":2,
    "Lili":2,
    "Yijun Cheng":2,
    "Cynthia Cheng":2,
    "Anita Wong":3,
    "Will Carmona":3,
    "Lily Mei":3,
    "Alan Wu":3,
    "Weywey Su":3,
    "Tiffany Chu":3,
    "Kevin Zhou":3,
    "Kenneth Li":3,
    "Charles Yu":3,
    "Yuhan Sun":4,
    "Andrea Agas":4,
    "Steven Messina":4,
    "Jessie Zhao":4,
    "Jason Jiang":4,
    "Sally Chun":4,
    "Alex Chun":4,
    "Max Dai":4,
    "Kaiyang Sun":4,
    "Jessica Hu":5,
    "Tim Lee":5,
    "Sophia Lee":5,
    "Angela Chau":5,
    "Peter Chau":5,
    "Josiah Chau":5,
    "Dylan Mcnulty":5,
    "Elaine Sung":5,
    "Wilson Chan":5,
    "Janise Park":5,
    "Annie Kim":5,
    "Tiffany Pan":5,
    "Jordan Zhu":6,
    "Andrea Zhu":6,
    "Abigail Zhu":6,
    "Jeremy Zhu":6,
    "Christian Zhu":6, 
    "Jasmine Zhu":6,
    "Kevin Thompson":6,
    "Zachary Thompson":6,
    "Joshua Thompson":6,
    "Jennifer Chu":6,
    "YeeCheng Low":6,
    "Weizhen Zhu":7,
    "Yongjiao Li":7,
    "Bak Lok Chu":7,
    "Ai Zhu Zhang":7,
    "Debbie Lam":7,
    "Ching lam":7,
    "Jonathan Lam":7,
    "Vicki Lam":7,
    "Harrison Lam":7,
    "Elizabeth Lam":7,
    "Jeffrey Zhu":7,
    "Linda Huang":7,
};

const suggestions = document.querySelector(".suggestions");
const info = document.querySelector(".info");
const inp = document.getElementById("table-search");

inp.onkeyup = function() {
    let query = inp.value.toLowerCase();
    let row = document.getElementById("tableBody").getElementsByTagName("tr");
    
    for (var i = 0; i < row.length; i++) {
        var td = row[i].getElementsByTagName("td")[0];
        if (td) {
            n = td.textContent || td.innerText;
            if (n.toLowerCase().indexOf(query) > -1) {
                row[i].style.display = "";
            }
            else {
                row[i].style.display = "none";
            }
        }
    }
}

function populateTable() {
    const tableBody = document.getElementById("tableBody");
    const k = Object.keys(names);
    const namesSorted = {};

    k.sort();

    for (const i of k) {
        namesSorted[i] = names[i];
    }


    Object.keys(namesSorted).forEach(key => {
        let row = tableBody.insertRow(); // Create a new table row
        let name = row.insertCell(0);   // Create the first cell
        let tableNum = row.insertCell(1);   // Create the second cell

        row.className = "bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600";
        name.className = "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        tableNum.className = "px-6 py-4"

        name.innerHTML = key;     // Set content for the first cell
        tableNum.innerHTML = names[key];     // Set content for the second cell
    });
}