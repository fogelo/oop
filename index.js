//§ Процедурное программирование
//Изначально все программы писались с процедурным подходом.
const width = 5
const height = 10

const calcRectArea = (width, height) => {
    return width * height
}

calcRectArea(width, height)

//§ ОО программирование
/*
* У любого класса есть конструктор, это специальный метод, некоторый блок инструкций, который вызывает при создании объекта.
* Обычно это присваивание конкретных значений свойства путем передачи аргументов в конструктор.
* */

class Rectangle {
    width
    height

    constructor(w, h) {
        this.width = w
        this.height = h
    }

    calcArea() {
        return this.width * this.height
    }
}

const rect1 = new Rectangle(5, 10)
const rect2 = new Rectangle(3, 2)
console.log(rect1.calcArea(), rect2.calcArea())
