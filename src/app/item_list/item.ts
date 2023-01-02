const date = new Date()
const [day, month, year] = [
    date.getDay(),
    date.getMonth(),
    date.getFullYear()
]

class Item {
    id!: number
    name!: string
    image!: string
    price!: number
    date: string = `${day}/${month}/${year}`
    rating!: number
}

export default Item