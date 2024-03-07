const selections = document.querySelectorAll("select")

for (const s of selections) {

    switch(s.id) {
        case "criteria": s.value = localStorage.getItem("criteria") ?? "desc"; break;

        case "sortby": s.value = localStorage.getItem("sortby") ?? "asc"; break;
    }

    s.addEventListener('change', (e) => localStorage.setItem(e.target.id, e.target.value))
}