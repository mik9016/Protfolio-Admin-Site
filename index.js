import { MessageList } from "./messageList";
import { Validate } from "./validate";
import axios from "axios";

class Login {
  constructor() {
    this.isAuthorized = false;
    this.nameField = document.getElementById("name");
    this.passwordField = document.getElementById("password");
    this.loginBtn = document.getElementById("loginBtn");
    this.logOutBtn = document.getElementById("logOutBtn");
    this.loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.loginHandler();
    });
    this.logOutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.logOutHandler();
    });
    this.logOutBtn.style.display = "none";
    this.listSection = document.getElementById("lisrSection");
    this.list = document.getElementById("Messageslist");
  }

  loginHandler() {
    //GET INPUT VALUES
    const credentials = {
      adminName: this.nameField.value,
      adminPassword: this.passwordField.value,
    };

    const validate = new Validate();
    const url = "https://sheltered-spire-00755.herokuapp.com/adminLogin";
    //VALIDATE INPUTS
    if (
      validate.validateFields(credentials.adminName, "Name") &&
      validate.validateFields(credentials.adminPassword, "Password")
    ) {
      //VALIDATE CREDENTIALS ON SERVER
      axios
        .post(url, credentials)
        .then((response) => {
          if (response.data) {
            this.isAuthorized = true;
            this.isAuthorized && new MessageList(this.isAuthorized);

            this.toggleBtnText();
          } else {
            validate.uncorrectCredentialsHandler(this.isAuthorized);
            console.log("NOOOOOOO");
          }
        })
        .catch((error) => {
          console.log(error);
        });

      this.clearInputs();
    }
  }

  clearInputs() {
    this.nameField.value = "";
    this.passwordField.value = "";
  }

  toggleBtnText() {
    if (this.loginBtn.style.display !== "none") {
      this.loginBtn.style.display = "none";
      this.logOutBtn.style.display = "block";
    } else {
      this.loginBtn.style.display = "block";
      this.logOutBtn.style.display = "none";
    }
  }

  logOutHandler() {
    this.list.remove(this.list);
    this.toggleBtnText();
    location.reload();
  }
}

new Login();

