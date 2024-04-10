function validateForm() {
    let x = document.forms["contact-form"]["name"].value;
    if (x == "") {
      alert("Please fill out this field");
      return false;
    }
  }

  function validateForm() {
    let x = document.forms["contact-form"]["email"].value;
    if (x == "") {
      alert("Please fill out this field");
      return false;
    }
  }

  function validateForm() {
    let x = document.forms["contact-form"]["message"].value;
    if (x == "") {
      alert("Please fill out this field");
      return false;
    }
  }