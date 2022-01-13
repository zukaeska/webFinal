$(function () {
    
});

function fill(arrSize,fillValue) {
    var array = [];
    for (var i = 0; i < arrSize; i++) {
        array[i] = fillValue;
      }
      return array;
}

function reverse(data) {
    var array = [];
    var index = 0;
    for(var i = data.length-1; i>=0;i--) {
        array[index] = data[i];
        index++;
    }
    return array;
}

function compact(data) {
    return data.filter(n => n)
}

function repeat (func,repeat) {
    for (var i = 0; i< repeat; i++) {
        func();
    }
}
var input = document.getElementById("textarea");
input.addEventListener('input', count);

function count(e) {
    var count = $("#textarea").val().length;
    if (count > 249) {
        document.getElementById("textarea").disabled = true
    }
    document.getElementById("counter").innerHTML = "word count: " + count;
}