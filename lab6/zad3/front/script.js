const elem = document.getElementById("some");

fetch("http://localhost:3000/api/some")
    .then((res) => res.json())
    .then((data) => {
        const someHTML = data.map((s) => `
        <div>
            <p>${s.content}</p>
        </div>
        `).join("");
        elem.innerHTML = someHTML;
    })
    .catch((err) => {
        console.log(err);
    })