import axios from "axios";

export class MessageList {
  constructor(isLogged) {
    this.isLogged = isLogged;
    this.messagesHandler(this.isLogged);
  }

  //fetchdata
  messagesHandler(islogged) {
    const url = "https://sheltered-spire-00755.herokuapp.com/adminLogin";
    axios
      .get(url)
      .then(function (response) {
        // handle success

        if (islogged) {
          const listsection = document.getElementById("Messageslist");
          const sectionTitle = document.createElement("h2");
          sectionTitle.textContent = "List of messages";
          listsection.append(sectionTitle);
          for (let i = 0; i < response.data.length; i++) {
            const listItem = document.createElement("li");
            listItem.setAttribute(
              "class",
              "card text-center w-100 mt-4 shadow p-4"
            );
            const emailAdress = document.createElement("p");
            const adresatName = document.createElement("p");
            const message = document.createElement("p");
            const date = document.createElement("p");

            date.innerText = "Date: " + response.data[i].date;
            emailAdress.innerText = "Email: " + response.data[i].email;
            adresatName.innerText = "Name: " + response.data[i].name;
            message.innerText = "Message: " + response.data[i].message;
            listItem.append(date);
            listItem.append(emailAdress);
            listItem.append(adresatName);
            listItem.append(message);
            // console.log(listItem);
            //   listItem.innerText = response.data.[i].message + emailAdress;
            listsection.append(listItem);
          }
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
}

// new MessageList();
