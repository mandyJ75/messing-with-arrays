/*
    A car object looks like:
    {
    "id": 1,
    "make": "Dodge",
    "model": "Intrepid",
    "modelYear": 1999,
    "color": "Indigo",
    "numberOfDoors": 2,
    "price": "$3785.51",
    "vin": "WAUKF78E86A937677"
    } */
    console.log(cars)



let mainElement = document.querySelector("main")
for (let index = 0; index < cars.length; index += 1) {
    let currentCar = cars[index]
    console.log(currentCar)


    let article = document.createElement("article")
    let header = document.createElement("header")
    let ul = document.createElement("ul")
    let priceItem = document.createElement("li")
    let doorCountItem = document.createElement("li")
    let colorItem = document.createElement("li")
    let vinItem = document.createElement("li")
    let removeButton = document.createElement("button")

    article.classList.add("card")

    header.append(`${currentCar.make} ${currentCar.model} (${currentCar.modelYear})`)

    article.append(ul)
    ul.append(priceItem, doorCountItem, colorItem, vinItem)

    let priceLabel = document.createElement("strong") 
    priceLabel.append("Price:") 
    priceItem.append(priceLabel, ` ${currentCar.price}`) 
    let doorCountLabel = document.createElement("strong")
    doorCountLabel.append("Door Count:")
    doorCountItem.append(doorCountLabel, ` ${currentCar.numberOfDoors}`)
    let colorLabel = document.createElement("strong")
    colorLabel.append("Color:")
    colorItem.append(colorLabel, ` ${currentCar.color}`)
    let vinLabel = document.createElement("strong")
    vinLabel.append("VIN:")
    vinItem.append(vinLabel, ` ${currentCar.vin}`)
    removeButton.append("Remove")
    removeButton.classList.add("remove")
    article.append(removeButton)
    mainElement.append(article)
}
