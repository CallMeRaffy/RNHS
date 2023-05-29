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
firebase.initializeApp(firebaseConfig);

//   const  = getAnalytics(app);

const database = firebase.database();

const ref = database.ref("Student/profile");

const initialization = () => {
//   document.getElementById("btnSubmit").addEventListener("click", (e) => {
//     btnSubmit();
//   });
  document.getElementById("btnClose").addEventListener("click", (e) => {
    btnSubmit();
  });
  document.getElementById("btnAddToDatabase").addEventListener("click", (e) => {
    btnAddToDatabase();
  });
};

let firstname;
let lastname;
let school;
let age;
let gradeLevel;
let addressStreet;
let addressBarangay;
let addressCity;
let phone;
let email;
var address;
const btnSubmit = () => {
  firstname = document.getElementById("first_name").value;
  lastname = document.getElementById("last_name").value;
  school = document.getElementById("school").value;
  age = document.getElementById("age").value;
  gradeLevel = document.getElementById("gradeLevel").value;
  addressStreet = document.getElementById("street").value;
  addressBarangay = document.getElementById("brgy").value;
  addressCity = document.getElementById("city").value;
  phone = document.getElementById("phone").value;
  email = document.getElementById("your_email").value;
  address = addressStreet + ", " + addressBarangay + ", " + addressCity;
  if (
    document.getElementById("last_name").value == "" ||
    document.getElementById("first_name").value == ""
  ) {
    alert("Please Fill out all the necessary information");
  } else {
    ref.push({
      Firstname: firstname,
      Lastname: lastname,
      school: school,
      age: age,
      gradeLevel: gradeLevel,
      address: address,
      PhoneNumber: phone,
      EmailAddress: email,
    });
    var hdr = {
      FirstName: firstname,
      LastName: lastname,
      PreviousSchool: school,
      Age: age,
      GradeLevel: gradeLevel,
    };
    var dtl = {
      AddressStreet: addressStreet,
      AddressBarangay: addressBarangay,
      AddressCity: addressCity,
      PhoneNumber: phone,
      EmailAddress: email,
    };

    console.log(JSON.stringify({ header: hdr, details: dtl }));

    var formData = new FormData();
    formData.append("json", JSON.stringify({ header: hdr, details: dtl }));

    axios({
      url: "./api/sendRequest.php",
      method: "post",
      data: formData,
    }).then((response) => {
      if (response.data != null) {
        console.log("Successfully sent Data");
        location.href = "#popup1";
        // location.reload();
      } else {
        console.log("Error sending Data");
      }
    });
  }
};

const btnAddToDatabase = () => {
  firstname = document.getElementById("first_name").value;
  lastname = document.getElementById("last_name").value;
  school = document.getElementById("school").value;
  age = document.getElementById("age").value;
  gradeLevel = document.getElementById("gradeLevel").value;
  addressStreet = document.getElementById("street").value;
  addressBarangay = document.getElementById("brgy").value;
  addressCity = document.getElementById("city").value;
  phone = document.getElementById("phone").value;
  email = document.getElementById("your_email").value;
  address = addressStreet + ", " + addressBarangay + ", " + addressCity;
  if (
    document.getElementById("last_name").value == "" ||
    document.getElementById("first_name").value == "" ||
    document.getElementById("school").value == "" ||
    document.getElementById("gradeLevel").value == "Year Level" ||
    document.getElementById("age").value == "" ||
    document.getElementById("street").value == "" ||
    document.getElementById("brgy").value == "" ||
    document.getElementById("city").value == "" ||
    document.getElementById("phone").value == "" ||
    document.getElementById("your_email").value == ""
  ) {
    alert("Please Fill out all the necessary information");
  } else {
    ref.push({
      Firstname: firstname,
      Lastname: lastname,
      school: school,
      age: age,
      gradeLevel: gradeLevel,
      address: address,
      PhoneNumber: phone,
      EmailAddress: email,
    });
    location.href = "#popup1";
    // var hdr = { FirstName: firstname,  LastName: lastname, PreviousSchool: school, Age: age, GradeLevel:gradeLevel, }
    // var dtl = {AddressStreet: addressStreet, AddressBarangay: addressBarangay, AddressCity: addressCity, PhoneNumber: phone, EmailAddress: email}

    // console.log(JSON.stringify({ header: hdr , details: dtl}));

    // var formData = new FormData();
    // formData.append("json", JSON.stringify({ header: hdr, details: dtl}));

    // axios({
    //     url: "./api/sendRequest.php",
    //     method: "post",
    //     data: formData,
    // }).then(response => {
    //     if (response.data != null) {
    //         console.log("Successfully sent Data");
    //         location.href = "#popup1";
    //         // location.reload();
    //     } else {
    //         console.log("Error sending Data");
    //     }
    // });
  }
};

initialization();
