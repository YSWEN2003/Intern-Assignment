function confirm_reset() {
    return confirm("Are you sure you want to reset all form?");
}

function show() {
     x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function saveData() {
    const name = document.getElementById("names").value;
    const password = document.getElementById("password").value;
    const date = document.getElementById("date").value;
    const address1 = document.getElementById("address1").value;
    const address2 = document.getElementById("address2").value;
    const address3 = document.getElementById("address3").value;

    if (!name || !password || !date || !address1 || !address2 || !address3) {
        alert("Please fill out all required fields.");
        return; 
    }

    const records = JSON.parse(localStorage.getItem("users")) || [];
    
    if (records.some((v) => v.name === name)) {
        alert("User with the same name already exists.")
    } else {
        records.push({ name, password, date, address1, address2, address3 });
        localStorage.setItem("users", JSON.stringify(records));
        alert("Successful")
    }
}

function Data() {
    const name = document.getElementById("names").value;
    const password = document.getElementById("password").value;

    const records = JSON.parse(localStorage.getItem("users")) || [];

    
    if (name === "admin" && password === "abc123") {
        alert("Admin login successful");
        window.location.href = "Admin.html";
    } else {
        
        const user = records.find((v) => v.name === name && v.password === password);
        if (user) {
            alert("User login successful");
        } else {
            alert("Login failed");
        }
    }
}



