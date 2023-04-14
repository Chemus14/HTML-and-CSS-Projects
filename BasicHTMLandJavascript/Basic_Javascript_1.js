// alert("Hello, World!!");

function add(num1, num2) {
  return num1 + num2;
}

var sum = add(5, 7);

var student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 28,
  gradeAverage: function (avg) {
    return avg;
  },
};

student.gradeAverage(3.4);
//We have assigned the h1 element the Id “Header_1”. To run and display (return) this element, we write:
var title = document.querySelector("#header_1");
console.log(title);

function My_First_Function() {
  var text = "Kiss me, I'm Irish!";
  var result = (title.style.color = "green");
  title.innerHTML = text;
}
