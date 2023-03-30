const toggleIcon = document.getElementById("toggle-btn");
      const icon = document.getElementById("icon");

      if (localStorage.getItem("theme") == null) {
        localStorage.setItem("theme", "light");
      }

      let localData = localStorage.getItem("theme");

      if (localData == "light") {
        icon.src = "assets/images/dark-mode.png";
        document.body.classList.remove("dark-mode");
      } else if (localData == "dark") {
        icon.src = "assets/images/light-mode.png";
        document.body.classList.add("dark-mode");
      }

      toggleIcon.onclick = function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
          icon.src = "assets/images/light-mode.png";
          localStorage.setItem("theme", "dark");
        } else {
          icon.src = "assets/images/dark-mode.png";
          localStorage.setItem("theme", "light");
        }
      };

      //show password function here
      function showPassword() {
        let passwordField = document.getElementById("password");
        let show = document.getElementById("show");
        let hide = document.getElementById("hide");

        if (passwordField.type === "password") {
          passwordField.type = "text";
          show.style.display = "block";
          hide.style.display = "none";
        } else {
          passwordField.type = "password";
          show.style.display = "none";
          hide.style.display = "block";
        }
      }
      //login function here
      function login() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if (username === "shakhawatnaim" && password === "snsnsn") {
            window.location.href = "product.html";
        } else {
          alert("Invalid username or password.");
        }
      }