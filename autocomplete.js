let names = {
    "Ariel":1,
    "James":2,
    "Emily":3,
    "Steve":4
};

const suggestions = document.querySelector(".suggestions");
const info = document.querySelector(".info");
const inp = document.getElementById("inp");

inp.onkeyup = function() {
    let result = [];
    let i = inp.value;
    if (i.length) {
        result = Object.keys(names).filter((word) => {return word.toLowerCase().includes(i)});
    }

    display(result);
    if (!result.length) {
        suggestions.innerHTML = 'Name not Found'
    }
}

function display(result) {
    const content = result.map((l) => {
        return "<li onClick=fill(this)>" + l + "</li>";
    });

    suggestions.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function fill(list) {
    inp.value = list.innerHTML;
    suggestions.innerHTML = ''
}

function getTable() {
    na = inp.value;
    if (na in names) {
        info.innerHTML = names[na];
    }
    else {
        info.innerHTML = "Name not found";
    }
}
