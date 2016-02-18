var student1 = {
  class: "DoC",
  city: "Arlington",
  name: "Carlos",
  gender: "male",
  age: 40,
  statesWorked: ["DC", "VA", "CT"]
}

var student2 = { class: 'DoC',
  city: 'Washington',
  name: 'Jane',
  age: 27,
  statesWorked: [ 'DC', 'OR', 'CA' ],
  gender: 'female' }

function studentInfo(student) {
  var infoString =  student.name + " is " + student.age + " and lives in " + student.city;
  return infoString
}

// build an array with both students
// then iterate / loop over the array
// for each student, call the studentInfo method for that student

all_students = [student1, student2]

for(i = 0; i < all_students.length; i++) {
  var currentStudentInfo = studentInfo(all_students[i])
  console.log(currentStudentInfo);
}
