
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("people-list")) {
        fetch("/people")
            .then(response => response.json())
            .then(data => {
                const list = document.getElementById("people-list");
                data.forEach(person => {
                    const item = document.createElement("li");
                    item.textContent = `${person.name}, Age: ${person.age}`;
                    list.appendChild(item);
                });
            });
    }
});