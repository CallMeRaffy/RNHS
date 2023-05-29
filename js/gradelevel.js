const firebaseConfig = {
  apiKey: "AIzaSyA_Fui3t9NQCewQIFavTA6QZ0h6TnTTW_8",
  authDomain: "enrollmentsystem-7d18e.firebaseapp.com",
  databaseURL: "https://enrollmentsystem-7d18e-default-rtdb.firebaseio.com",
  projectId: "enrollmentsystem-7d18e",
  storageBucket: "enrollmentsystem-7d18e.appspot.com",
  messagingSenderId: "702200048553",
  appId: "1:702200048553:web:d1db45d5562c37fffbf2b8",
  measurementId: "G-WSHSHPCYW2",
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

//   const  = getAnalytics(app);

const database = firebase.database();

const ref = database.ref("GradeLevel/");

const gradeLevelSelect = document.getElementById("gradeLevel");
const documentSelect = document.getElementById("documentSelect");
const onLoad = () => {
  database.ref("GradeLevel").on("child_added", (snapshot, prevChildKey) => {
    const gradeLevel = snapshot.val();
    console.log("Grade Level" + gradeLevel.grade);

    var option = document.createElement("option");
    option.setAttribute("value", gradeLevel.grade);
    option.textContent = gradeLevel.grade;
    gradeLevelSelect.appendChild(option);
    //   console.log(level.grade_id);
    //   console.log("Title: " + newPost.age);
    // console.log("Previous Post ID: " + prevChildKey);
  });
  var option = document.createElement("option");
  option.setAttribute("value", "0");
  option.textContent = "Year Level";
  gradeLevelSelect.appendChild(option);

  //   const formData = new FormData();
  //   formData.append("job", "getGradeLevel");
  //   axios({
  //     url: "./api/gradelevel.php",
  //     method: "post",
  //     data: formData,
  //   }).then((response) => {
  //     console.log(response.data + "sadasd");
  //     gradeLevelSelect.id = "gradeLevel";

  //     gradeLevelSelect.onchange = () => {};
  //     var option = document.createElement("option");
  //     option.setAttribute("value", "0");
  //     option.textContent = "Year Level";
  //     gradeLevelSelect.appendChild(option);

  //     const grade = response.data;
  //     grade.forEach((level) => {
  //       var option = document.createElement("option");
  //       option.setAttribute("value", level.grade_id);
  //       option.textContent = level.grade_name;
  //       gradeLevelSelect.appendChild(option);
  //       console.log(level.grade_id);
  //     });
  //   });
};
onLoad();
