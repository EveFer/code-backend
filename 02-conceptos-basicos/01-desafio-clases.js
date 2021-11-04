// Desafio 1

class User {
    constructor(name, lastName, books= [], pets = []){
        this.name = name
        this.lastName = lastName
        this.books = books
        this.pets = pets
    }

    getFullName(){
        return `${this.name} ${this.lastName}`
    }

    addPet(name){
        this.pets = [...this.pets, name]
    }

    countPets () {
        return this.pets.length
    }

    addBook (name, author) {
        this.books = [...this.books, {name, author}]
    }

    getBookNames() {
        return this.books.map((book) => book.name)
    }
}

const Fer = new User("Fernanda", "Palacios", [{name: "Aura", author: "Carlos Fuentes"}], ["Eskuichy"])

console.log(Fer.getFullName())
console.log(Fer.addPet("Willy"))
console.log(Fer)
console.log(Fer.countPets())
console.log(Fer.addBook("Los Juegos del Hambre", "Suzanne Collins"))
console.log(Fer)

console.log(Fer.getBookNames())