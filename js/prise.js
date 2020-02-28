// _______________имитация JSON файла с ценами
let dataPrise = {
    "burger": {
        "size": {
            "bigSize": {
                "prise": 10,
                "name": "Большой-бургер"
            },
            "sizeMid": {
                "prise": 8,
                "name": "Средний-бургер"
            },
            "sizeSmall": {
                "prise": 6,
                "name": "Маленький-бургер"
            }
        },
        "cutlet": {
            "meatCutlet": {
                "prise": 25,
                "name": "Говяжая-котлета"
            },

            "chickenCutlet": {
                "prise": 15,
                "name": "Куриная-котлета"
            },
            "fishCutlet": {
                "prise": 20,
                "name": "Рыбная-котлета"
            }
        },
        "filling": {
            "tomato": {
                "prise": 5,
                "name": "Помидор"
            },
            "cheese": {
                "prise": 9,
                "name": "Сыр"
            },
            "bow": {
                "prise": 3,
                "name": "Лук"
            },
            "cucumber": {
                "prise": 5,
                "name": "Огурец"
            },
            "salad": {
                "prise": 2,
                "name": "Салат"
            },
            "bacon": {
                "prise": 20,
                "name": "Бекон"
            }

        },
        "sauce": {
            "tomatoSauce": {
                "prise": 5,
                "name": "Томатный"
            },
            "mayonnaiseSauce": {
                "prise": 6,
                "name": "Майонезный"
            },
            "mustardSauce": {
                "prise": 4,
                "name": "Горчичный"
            }
        }

    },
    "drink": {
        "pepsi": {
            "prise": 12,
            "name": "pepsi",
            "nameR": 'Pepsi 0.5'
        },
        "fanta": {
            "prise": 13,
            "name": "fanta",
            "nameR": 'Fanta 0.5'
        },
        "sprite": {
            "prise": 12,
            "name": "sprite",
            "nameR": 'Sprite 0.5'
        },
        "americano": {
            "prise": 12,
            "name": "americano",
            "nameR": 'Американо'
        },
        "cappuccino": {
            "prise": 27,
            "name": "cappuccino",
            "nameR": 'Капучино'
        },
        "latte": {
            "prise": 25,
            "name": "latte",
            "nameR": 'Латте'
        },
        "cacao": {
            "prise": 20,
            "name": "cacao",
            "nameR": 'Какао'
        },
        "teaGreen": {
            "prise": 10,
            "name": "teaGreen",
            "nameR": 'Чай Зеленый'
        },
        "teaBleak": {
            "prise": 11,
            "name": "teaBleak",
            "nameR": 'Чай Зеленый'
        },
        "fruitTea": {
            "prise": 11,
            "name": "teaFruit",
            "nameR": 'Чай Фруктовый'
        },
        "multifruit": {
            "prise": 18,
            "name": "multifruit",
            "nameR": 'Мультифруктовый 0.5'
        },
        "orange": {
            "prise": 19,
            "name": "orange",
            "nameR": 'Апельсиновый 0.5'
        },
        "tomato": {
            "prise": 19,
            "name": "tomato",
            "nameR": 'Томатный 0.5'
        },
        "vegetable": {
            "prise": 22,
            "name": "vegetable",
            "nameR": 'Овощной 0.5'
        },
        "grapeAndApple": {
            "prise": 25,
            "name": "grapeAndApple",
            "nameR": 'Виноградно-яблочный 0.5'
        },
        "carrotAndPumpkin": {
            "prise": 25,
            "name": "carrotAndPumpkin",
            "nameR": 'Морковно-тыквенный 0.5'
        },


    },
    "pizza": {
        "neapolitano": {
            "prise": {
                "big": 237,
                "mid": 160,
                "small": 82
            },
            "name": 'Пицца "Неаполитано"',
            "pizzaName": "pizzaNeapolitano",
            "ingredients": "основа, фирменный соус, ветчина свиная, грибы свежие, специи, сыр 'Моцарелла', помидор, маслины"



        },
        "threeCheeses": {
            "prise": {
                "big": 340,
                "mid": 220,
                "small": 110
            },
            "name": 'Пицца "Три сыра"',
            "pizzaName": "pizzaThreeCheeses",
            "ingredients": "основа, фирменный соус вершковий, специи, сыр 'Гауда', сыр 'Рокфор', сыр 'Пармезан'"
        },
        "vegetarian": {
            "prise": {
                "big": 225,
                "mid": 148,
                "small": 77
            },
            "name": 'Пицца "Вегетарианская"',
            "pizzaName": "pizzaVegetarian",
            "ingredients": "основа, фирменный соус, брокколи, капуста цветная, спаржа, грибы свежие, специи, сыр 'Моцарелла', помидор, перец, маслины"

        },
        "hunting": {
            "prise": {
                "big": 215,
                "mid": 143,
                "small": 73
            },
            "name": 'Пицца "Охотничья"',
            "pizzaName": "pizzaHunting",
            "ingredients": "основа, фирменный соус, охотничьи колбаски, чернослив, огурцы маринованные, сыр 'Моцарелла'"

        },
        "parma": {
            "prise": {
                "big": 237,
                "mid": 165,
                "small": 82
            },
            "name": 'Пицца "Парма"',
            "pizzaName": "pizzaParma",
            "ingredients": 'основа, фирменный соус, бекон, лук, специи, сыр "Моцарелла", помидор, маслины'


        },
        "paperoni": {
            "prise": {
                "big": 210,
                "mid": 143,
                "small": 77
            },
            "name": 'Пицца "Паперони"',
            "pizzaName": "pizzaPaperoni",
            "ingredients": "основа, фирменный соус, салями, специи, сыр 'Моцарелла', помидор,маслины"

        },
        "paperchili": {
            "prise": {
                "big": 215,
                "mid": 154,
                "small": 77
            },
            "name": 'Пицца "Паперчили"',
            "pizzaName": "pizzaPaperchili",
            "ingredients": "основа, фирменный соус, аджика грузинская, охотничьи колбаски, салями, специи, чили, сыр 'Моцарелла', помидор"

        },
        "getmanskaya": {
            "prise": {
                "big": 352,
                "mid": 236,
                "small": 120
            },
            "name": 'Пицца "Гетьманская"',
            "pizzaName": "pizzaGetmanskaya",
            "ingredients": 'основа, фирменный соус, аджика, куриное филе, свинина отварная, говядина отварная, лук, специи, сыр "Моцарелла", помидор, зелень'
        }


    },
    "pizzaToChoose": {
        "size": {
            "bigSizePizza": {
                "prise": 80,
                "name": "Большая пицца",
                "id": "bigSizePizza"
            },
            "sizeMidPizza": {
                "prise": 65,
                "name": "Средняя пицца",
                "id": "midSizePizza"
            },
            "sizeSmallPizza": {
                "prise": 45,
                "name": "Маленькая пицца",
                "id": "smallSizePizza"
            }
        },
        "ingredients": {
            "bacon": {
                "prise": 20,
                "name": "Бекон",
                "id": "bacon"
            },
            "shinka": {
                "prise": 22,
                "name": "Шинка",
                "id": "Шинка"
            },
            "chickenFillet": {
                "prise": 18,
                "name": "Куриное филе",
                "id": "chickenFillet"
            },
            "smokedChicken": {
                "prise": 17,
                "name": "Копченая курица",
                "id": "smokedChicken"
            },
            "huntingSausages": {
                "prise": 15,
                "name": "Колбаски охотничьи",
                "id": "huntingSausages"
            },
            "salami": {
                "prise": 16,
                "name": "Салями",
                "id": "salami"
            },
            "mussels": {
                "prise": 50,
                "name": "Мидии",
                "id": "mussels"
            },
            "shrimp": {
                "prise": 45,
                "name": "Креветки",
                "id": "shrimp"

            },
            "squids": {
                "prise": 47,
                "name": "Кальмары",
                "id": "squids"
            },
            "redFish": {
                "prise": 27,
                "name": "Красная рыба",
                "id": "redFish"
            },
            "mushrooms": {
                "prise": 7,
                "name": "Грибы",
                "id": "mushrooms"
            },
            "olives": {
                "prise": 13,
                "name": "Маслины",
                "id": "olives"
            },
            "pineapple": {
                "prise": 25,
                "name": "Ананас",
                "id": "pineapple"
            },
            "pepper": {
                "prise": 30,
                "name": "Перец",
                "id": "pepper"
            },
            "cucumber": {
                "prise": 14,
                "name": "Огурц",
                "id": "cucumber"
            },
            "corn": {
                "prise": 10,
                "name": "Кукуруза",
                "id": "corn"
            },
            "tomatoes": {
                "prise": 11,
                "name": "Помидоры",
                "id": "tomatoes"
            },
            "greenery": {
                "prise": 8,
                "name": "Зелень",
                "id": "greenery"
            },
            "bow": {
                "prise": 7,
                "name": "Лук",
                "id": "bow"
            },
            "prunes": {
                "prise": 35,
                "name": "Чернослив",
                "id": "prunes"
            },
            "cheeseGuda": {
                "prise": 40,
                "name": "Сыр Гуда",
                "id": "cheeseGuda"
            },
            "smokedCheese": {
                "prise": 35,
                "name": "Сыр копченый",
                "id": "smokedCheese"
            },
            "mozzarellaCheese": {
                "prise": 33,
                "name": "Сыр моцарелла",
                "id": "mozzarellaCheese"
            },
            "parmesanCheese": {
                "prise": 38,
                "name": "Сыр пармезан",
                "id": "parmesanCheese"
            },
            "roquefortCheese": {
                "prise": 40,
                "name": "Сыр рокфор",
                "id": "roquefortCheese"
            },
            "sauce": {
                "prise": 6,
                "name": "Соус",
                "id": "sauce"
            }
        }
    }
}






//____функция которая  передает в html верстку и  цены на бургер
function priseVisualBurgerHTML() {
    let burgerSize = dataPrise.burger.size;
    let burgerCutlet = dataPrise.burger.cutlet;
    let burgerFilling = dataPrise.burger.filling;
    let burgerSauce = dataPrise.burger.sauce;
    let burgerSizeHTML = '';
    let burgerCutletHTML = '';
    let burgerFillingHTML = '';
    let burgerSauceHTML = '';
    for (let i in burgerSize) {
        burgerSizeHTML +=
            ` 
        <div class="size" >
            <input type="radio" name="size" value="${burgerSize[i].name}"  id="${burgerSize[i].name}" data-prise="${burgerSize[i].prise}">
            <label for="${burgerSize[i].name}">${burgerSize[i].name}</label><span class="prise">${burgerSize[i].prise} грн</span>
          </div>
        `
    }
    for (let i in burgerCutlet) {
        burgerCutletHTML +=
            `<div class="cutlet" >
              <input type="radio" name="cutlet" value="${burgerCutlet[i].name}"  id="${burgerCutlet[i].name}" data-prise="${burgerCutlet[i].prise}">
              <label for="${burgerCutlet[i].name}">${burgerCutlet[i].name}</label><span class="prise">${burgerCutlet[i].prise} грн</span>
           </div>
    `
    }
    for (let i in burgerFilling) {
        burgerFillingHTML +=
            `<div class="cutlet" >
               <input type="checkbox" name="filling" value="${burgerFilling[i].name}"  id="${burgerFilling[i].name}" data-prise="${burgerFilling[i].prise}">
               <label for="${burgerFilling[i].name}">${burgerFilling[i].name}</label><span class="prise">${burgerFilling[i].prise} грн</span>
             </div>
            `
    }
    for (let i in burgerSauce) {
        burgerSauceHTML +=
            `
             <div class="sauce" >
             <input type="checkbox" name="sauce" value="${burgerSauce[i].name}"  id="${burgerSauce[i].name}" data-prise="${burgerSauce[i].prise}">
             <label for="${burgerSauce[i].name}">${burgerSauce[i].name}</label><span class="prise">${burgerSauce[i].prise} грн</span>
             </div>
        
        `
    }
    $('.modal-left-burger .block-size-burger').html(burgerSizeHTML);
    $('.modal-left-burger .block-cutlet-burger').html(burgerCutletHTML);
    $('.modal-left-burger .block-filling-burger').html(burgerFillingHTML);
    $('.modal-left-burger .block-sauce-burger').html(burgerSauceHTML);
};


//____функция которая  передает в html верстку и  цены на пиццу(сборе)
function priseVisualPizzaHTML() {
    let burgerPizzaAuto = dataPrise.pizza;
    let burgerPizzaAutoHTML = '';
    for (let i in burgerPizzaAuto) {
        burgerPizzaAutoHTML +=
            `
        <div class="pizza-block" data-img="${burgerPizzaAuto[i].pizzaName}">
        <form action method="post" class="form-Pizza">
            <h5 class="size-text-pizza">${burgerPizzaAuto[i].name}</h5>
            <p class="description-pizza">Ингредиенты:
                <span class="ingredients-pizza">${burgerPizzaAuto[i].ingredients}</span>
            </p>
            <p class="size-text">
                <span>Размер</span>
                <span>цена</span>
            </p>
            <div class="pizza-block-size">
                <input type="radio" name="${burgerPizzaAuto[i].pizzaName}" value="Большая"  data-prise="${burgerPizzaAuto[i].prise.big}" id="${burgerPizzaAuto[i].pizzaName}">
                <label for="${burgerPizzaAuto[i].pizzaName}">Большая  45 см</label> <span class="prise" id="${burgerPizzaAuto[i].prise.big}"> ${burgerPizzaAuto[i].prise.big} грн</span>
            </div>
            <div class="pizza-block-size">
                <input type="radio" name="${burgerPizzaAuto[i].pizzaName}" value="Средняя" data-prise="${burgerPizzaAuto[i].prise.mid}" id="${burgerPizzaAuto[i].pizzaName}-1">
                <label for="${burgerPizzaAuto[i].pizzaName}-1">Средняя  35 см</label> <span class="prise" id="${burgerPizzaAuto[i].prise.mid}">${burgerPizzaAuto[i].prise.mid} грн</span>
            </div>
            <div class="pizza-block-size">
                <input type="radio" name="${burgerPizzaAuto[i].pizzaName}" value="Маленькая" data-prise="${burgerPizzaAuto[i].prise.small}" id="${burgerPizzaAuto[i].pizzaName}-2">
                <label for="${burgerPizzaAuto[i].pizzaName}-2">Маленькая 25 см</label><span class="prise" id="${burgerPizzaAuto[i].prise.small}">${burgerPizzaAuto[i].prise.small} грн </span>
            </div>
            <div class="basket-block-pizza">
                <div class="btn-pizza" id="btn-pizza"> <span class="basket-icon-pizza"></span> В корзину </div>
            </div>
        </form>
    </div>
        `
    }

    $('.content-block-pizza-auto').html(burgerPizzaAutoHTML);
}



//____функция которая  передает в html цены и верстку на ингредиенты пиццы
function priseVisualMyPizzaHTML() {
    let burgerPizzaMySize = dataPrise.pizzaToChoose.size;
    let burgerPizzaIngredients = dataPrise.pizzaToChoose.ingredients;
    let burgerPizzaMySizeHTML = '';
    let burgerPizzaIngredientsHTML = '';
    for (let i in burgerPizzaMySize) {
        burgerPizzaMySizeHTML +=
            `
                <div class="pizza-block-size size-pizza ">
                     <input type="radio" name="myPizzaSize" value="${burgerPizzaMySize[i].name}" data-prise="${burgerPizzaMySize[i].prise}" id="${burgerPizzaMySize[i].id}">
                     <label for="${burgerPizzaMySize[i].id}">${burgerPizzaMySize[i].name}  45 см</label> <span class="prise" id="${burgerPizzaMySize[i].prise}"> ${burgerPizzaMySize[i].prise} грн </span>
               </div>
            `
    }
    for (let i in burgerPizzaIngredients) {
        burgerPizzaIngredientsHTML +=
            `
            <div class="pizza-block-size">
                <input type="checkbox" name="myPizza" value="${burgerPizzaIngredients[i].name}" data-prise="${burgerPizzaIngredients[i].prise}" id="${burgerPizzaIngredients[i].id}">
                <label for="${burgerPizzaIngredients[i].id}">${burgerPizzaIngredients[i].name}  </label> <span class="prise" id="${burgerPizzaIngredients[i].prise}"> ${burgerPizzaIngredients[i].prise} грн </span>
            </div>
            `
    }
    $('.block-size-pizza').html(burgerPizzaMySizeHTML);
    $('.block-filling-pizza').html(burgerPizzaIngredientsHTML);

}




//____функция которая  передает в html верстку  и ценами на напитки 
function priseVisualDrinkHTML() {
    let drink = dataPrise.drink;
    let drinkHTML = '';
    for (let i in drink) {
        drinkHTML +=
            ` 
            <div class="drinks" data-img="${drink[i].name}">
                <input type="checkbox" value="${drink[i].nameR}" name="drinks" id="${drink[i].name}" data-prise="${drink[i].prise}">
                <label for="${drink[i].name}">${drink[i].nameR}</label><span class="prise">${drink[i].prise} грн</span>
              </div>
            `
    }
    $('.modal-left-drink .drink-block').html(drinkHTML);



}