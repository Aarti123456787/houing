function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: "Housing.com Mini Project",
            text: "Check out this real estate website project!",
            url: window.location.href
        })
        .then(() => console.log("Page shared successfully"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
        alert("Sharing is not supported in this browser. Copy this link: " + window.location.href);
    }
}

function viewDetails(propertyName, price) {
    alert("Property: " + propertyName + "\nPrice: " + price + "\nContact Aarti Jadhav for more details.\nEmail: aartijadhav8055@gmail.com\nPhone: 8690030101");
}