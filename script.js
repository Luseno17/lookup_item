let database = {}; // Temporary storage (resets on reload)

function uploadItem() {
    let number = document.getElementById("itemNumber").value;
    let data = document.getElementById("itemData").value;

    if (number && data) {
        database[number] = data;
        alert("Item uploaded successfully!");
    } else {
        alert("Please enter both item number and description.");
    }
}

function searchItem() {
    let number = document.getElementById("searchNumber").value;
    let result = database[number] ? "Item Found: " + database[number] : "Item not found";
    document.getElementById("result").innerText = result;
}
