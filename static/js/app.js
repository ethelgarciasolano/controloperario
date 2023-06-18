const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "static/img/cafe1.jpeg" },
  { name: "Voluptatem", image: "static/img/cafe2.jpeg" },
  { name: "Explicabo", image: "static/img/cafe3.jpeg" },
  { name: "Rchitecto", image: "static/img/cafe4.jpeg" },
  { name: "Beatae", image: "static/img/cafe5.jpeg" },
  { name: "Vitae", image: "static/img/cafe6.jpeg" },
  { name: "Inventore", image: "static/img/cafe7.jpeg" },
  { name: "Veritatis", image: "static/img/cafe8.jpeg" },
  { name: "Accusantium", image: "static/img/cafe9.jpeg" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)

