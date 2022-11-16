function add_room() {
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
    window.location("chatbot_page.html")
}

