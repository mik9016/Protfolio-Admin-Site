export class Validate {
  constructor() {
    this.header = document.querySelector("header");
  }
  validateFields(str, inputField) {
    if (str.length < 6) {
      const alertMessage = document.createElement("p");
      alertMessage.setAttribute("class", "alert-danger");
      alertMessage.setAttribute("id", "alertMessage");
      alertMessage.textContent = inputField + " to short";
      this.header.append(alertMessage);
      setTimeout(() => {
        this.header.removeChild(document.getElementById("alertMessage"));
      }, 1000);
      return false;
    } else {
      return true;
    }
  }

  uncorrectCredentialsHandler(flag) {
    if (!flag) {
      const alertMessage = document.createElement("p");
      alertMessage.setAttribute("class", "alert-danger");
      alertMessage.setAttribute("id", "alertMessage");
      alertMessage.textContent = "Credentials not correct!";
      this.header.append(alertMessage);
      setTimeout(() => {
        this.header.removeChild(document.getElementById("alertMessage"));
      }, 1000);
      return false;
    }
    return true;
  }
}
