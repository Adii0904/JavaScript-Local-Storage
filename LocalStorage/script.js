window.onload = function () {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  var remember = document.getElementById("remember");
  var loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (username.value == "adityaFF") {
      if (password.value == "1234") {
        //to redirect to other page using the JS;
        window.location.href = "profile.html";
      } else {
        Swal.fire({
          icon: "error",
          title: "Password Error",
          text: "Incorrect Crendentail provided",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Message",
        text: "wrong data Provided",
      });
    }
    //agar hame js se kisi page pe reder karna ho toh
    //window.location.href = "profile.html";
  });

  remember.onchange = function () {
    var checked = this.checked;
    if (checked) {
      localStorage.setItem("username", username.value);
      localStorage.setItem("password", password.value);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("passowrd");
    }
  };

  var usernameData = localStorage.getItem("username");
  var passowrdData = localStorage.getItem("password");
  if (usernameData != null) {
    username.value = usernameData;
    password.value = passowrdData;
    remember.checked = true;
  }
};
