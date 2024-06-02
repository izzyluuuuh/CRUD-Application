var selectedRow = null;

// Show Alerts
function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// Clear All Fields
function clearFields() {
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#age").value = "";
    document.querySelector("#bday").value = "";
    document.querySelector("#contact").value = "";
    document.querySelector("#address").value = "";
}

// Add Data
document.querySelector("#student-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    // Get Form Values
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const age = document.querySelector("#age").value;
    const bday = document.querySelector("#bday").value;
    const contact = document.querySelector("#contact").value;
    const address = document.querySelector("#address").value;

    // validate
    if (firstName === "" || lastName === "" || age === "" || bday === "" || contact === "" || address === ""){
        showAlert("Please fill in all fields", "danger");
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${age}</td>
            <td>${bday}</td>
            <td>${contact}</td>
            <td>${address}</td>
            <td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `;
            list.appendChild(row);
            selectedRow == null;
            showAlert("Student Added", "success");
        }
        else{
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = lastName;
            selectedRow.children[2].textContent = age;
            selectedRow.children[3].textContent = bday;
            selectedRow.children[4].textContent = contact;
            selectedRow.children[5].textContent = address;
            selectedRow = null;
            showAlert("Student Info Edited", "info");
        }

        clearFields();
    }
})

// Edit Data
document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#firstName").value = selectedRow.children[0].textContent;
        document.querySelector("#lastName").value = selectedRow.children[1].textContent;
        document.querySelector("#age").value = selectedRow.children[2].textContent;
        document.querySelector("#bday").value = selectedRow.children[3].textContent;
        document.querySelector("#contact").value = selectedRow.children[4].textContent;
        document.querySelector("#address").value = selectedRow.children[5].textContent;
        }
});

// Delete Data

document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted", "danger");
    }
})