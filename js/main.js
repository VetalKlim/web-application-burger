$(function() {

    function hoverMenu() { // выпадающее меню 
        let hoverTel = $('.block-tel');
        hoverTel.hover(function() {
            $(this).find('.header-tel').toggleClass('header-active');

        })
        let hoverMenu = $('.block-menu');
        hoverMenu.hover(function() {
            $(this).find('.header-menu').toggleClass('header-active');
        })
    }
    hoverMenu();

    function btnOrder() { // кнопка по которой выдвигается блок корзины
        let btnOrder = $('.btn-order');
        btnOrder.on('click', function() {
            $('.block-right').toggleClass('block-right-active');
        })

    }
    btnOrder();



    //_______________________________________________________конструктор модальных окон_______________________________________________
    function Modal(obj) {
        this.modal = document.querySelector(obj.modal);
        this.overlay = document.querySelector(obj.overlay);
        this.visible = obj.visible;
        let context = this;
        this.open = function(content) { // метод для открытия модального окна 
            context.modal.innerHTML = content;
            context.overlay.classList.add(context.visible);
            context.modal.classList.add(context.visible);
        }
        this.close = function() { // метод для закрытия модального окна 
            context.overlay.classList.remove(context.visible);
            context.modal.classList.remove(context.visible);
        }
        context.overlay.onclick = context.close; // закрытие по overlay
    }

    let modal = new Modal({
        modal: '#content-modal',
        overlay: '#wrapper-modal',
        visible: 'active-modal'
    });



    //______________ функция закрытия модального окна по кнопке
    function btnCloseModal() {
        let btnCloseModal = $('#btnCloseModal');
        btnCloseModal.on('click', function() {
            modal.close();
        })
    }

    //______________ функция закрытия блока заказов.
    function closeOrder() {
        $('.block-right').removeClass('block-right-active');
    }






    //_________функция которая открывает модальные окна и впиливает каждому свой контент. 
    function contentBtnModal(idBtn, idContent) {
        let btnBurger = document.getElementById(idBtn);
        btnBurger.onclick = function() {
            let cont = document.getElementById(idContent);
            modal.open(cont.innerHTML);
            clearIngredients();
            btnCloseModal();
            closeOrder();
            priseVisualBurgerHTML();
            priseVisualPizzaHTML();
            priseVisualMyPizzaHTML();
            priseVisualDrinkHTML();
            calculateInputValue();
            btnBasket();
            buttonActivityWhenOrderIsEmpty();
            toggleClickPizza();
            hoverImgPizza();
            hoverImgDrink();
            activeSendButtonInPizzaBasket();
            sendSelectedPizzaToBasket();
            btnBasketMyPizza();
            sendSelectedDrinkToBasket();

        }
    }

    contentBtnModal('burgerId', 'burgerModal');
    contentBtnModal('pizzaId', 'pizzaModal');
    // contentBtnModal('hotDogId', 'hotDogModal');
    contentBtnModal('drinkId', 'drinkModal');
    // contentBtnModal('stockId', 'stockModal');
    // contentBtnModal('backCallId', 'backCallModal');
    // contentBtnModal('deliveryId', 'deliveryModal');




    //_________________________________________________________________________ОБЩИЕ ФУНКЦИИ__________________________________________________________________

    //  $('#myOrder').on('click', '.delete-product', function()


    //__________функция калькулятор цены и ингредиентов   
    function calculateInputValue() {

        $("#form").click(function() {
            var total = 0;
            let ingredients = [];
            let ingredientsHTML;
            let checkedInput = $("#form input:checked");
            checkedInput.each(function() {
                total += +($(this).data("prise"));
                ingredients.push($(this).val());
                ingredientsHTML = ingredients.join(' , ');
            });
            $("#ingredients-visual").html(ingredientsHTML);
            $("#prise-number").html(total);
            buttonActivityWhenOrderIsEmpty();
        });
    }
    //______________функция которая очищает ингредиенты в модульном окне
    function clearIngredients() {
        let idIngredients = $('#ingredients-visual');
        idIngredients.html('пусто');
    }



    //_________________________________________________________________________КОРЗИНА__________________________________________________________________________

    //_________функция которая суммирует все заказы в корзине  
    function orderAmountInCart() {
        let sum = 0;
        $('.praise-product').each(function() {
            sum += parseFloat($(this).text());
        });
        // console.log(sum);
        $('#finalPrise').html(sum);
    }

    //________функция которая считает сколько заказов в корзине 
    function numberOfOrdersInTheBasket() {
        let orders = $('#myOrder .product-Basket').length
        $('#numberOfOrdersInTheBasket').html(orders);

    }
    numberOfOrdersInTheBasket();

    // _______________функция которая присваивает id каждому элементу заказа
    function idElementBasket() {
        let i = 0;
        $(".product-Basket").each(function() {
            i++;
            $(this).attr("id", "basketItem-" + i);
        });

    }
    // _________функция которая  добавляет и убавляет единицы товара в каждом заказе и делает подсчет.
    function counterQuantity() {
        $('#myOrder').on('click', '.counter-plus', function() {
            let count = +$(this).siblings('.counter-product-Basket').text();
            let startingPrice = +$(this).parent().parent().find('.prise-hidden').text();
            count++;
            let adjustedPrice = startingPrice * count;
            $(this).siblings('.counter-product-Basket').html(count);
            $(this).parent().parent().find('.praise-product').text(adjustedPrice);
            orderAmountInCart();
        })
        $('#myOrder').on('click', '.counter-minus', function() {
            let count = +$(this).siblings('.counter-product-Basket').text();
            let startingPrice = +$(this).parent().parent().find('.prise-hidden').text();
            let nowPrice = +$(this).parent().parent().find('.praise-product').text();
            count--;
            let adjustedPrice = nowPrice - startingPrice;
            if (count >= 1) {
                $(this).prop({ disabled: true });
                $(this).siblings('.counter-product-Basket').html(count);
                $(this).parent().parent().find('.praise-product').text(adjustedPrice);
                orderAmountInCart();
            }
            $(this).prop({ disabled: false });
        })
    }
    counterQuantity();

    // ___________функция удаления элемента с корзины
    function deleteElementInBasket() {
        $('#myOrder').on('click', '.delete-product', function() {
            $(this).parents('.product-Basket').remove(); // Удаляем родительский элемент
            console.log('Удаляем  элемент с корзины');
            orderAmountInCart();
            numberOfOrdersInTheBasket();
            hideBasketHead();
        })
    }
    deleteElementInBasket();



    //_________функция прячет шапку корзины
    function hideBasketHead() {
        let num = $('#numberOfOrdersInTheBasket').text();
        if (num >= 1) {
            $('.basket-head').css({ display: 'flex' });
            $('#theBasketIsCleared').css({ display: 'none' })
        }
        if (num <= 0) {
            $('.basket-head').css({ display: 'none' });
            $('#theBasketIsCleared').css({ display: 'block' })
        }
    }

    hideBasketHead();






    //_________________________________________________________________________БУРГЕР____________________________________________________________________________

    // ____________функция которая передает в корзину все необходимые данные по заказу Бургер.
    function btnBasket() {
        $('.error-block').css({ display: "none" }).html(''); // 
        $('.size').css({ border: "none" }); // убегаем предупреждение о размере бургера
        let btnBasket = $('#btn-send-to-cart-burger');
        btnBasket.on('click', function() {
            if (burgerSize()) {
                let content = $('#ingredients-visual').text();
                let prise = $('#prise-number').text();
                let quantity = 1;
                let div = $('<div/>', { class: 'product-Basket' });
                $('<div/>', { class: 'img-order' }).css({ backgroundImage: "url('img/burger.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }).appendTo(div);
                $('<div/>', { class: 'ingredients-order' }).appendTo(div).html(content);
                let quantityCounter = $('<div/>', { class: 'quantity-product' }).appendTo(div);
                $('<div/>', { class: 'counter-plus' }).appendTo(quantityCounter).html('+');
                $('<div/>', { class: 'counter-product-Basket' }).appendTo(quantityCounter).html(quantity);
                $('<div/>', { class: 'counter-minus' }).appendTo(quantityCounter).html('-');
                $('<div/>', { class: 'prise-hidden' }).appendTo(div).html(prise);
                $('<div/>', { class: 'praise-product' }).appendTo(div).html(prise);
                let imgDelete = $('<div/>', { class: 'delete-product', title: 'Удалить с корзины' }).appendTo(div);
                $('<div/>', { class: 'icon-delete' }).appendTo(imgDelete);
                $('#myOrder').append(div);
                numberOfOrdersInTheBasket();
                orderAmountInCart();
                idElementBasket();
                hideBasketHead();
                modal.close();
            } else {

            }
        })
    }


    //______________ активность кнопки, когда заказ пуст
    function buttonActivityWhenOrderIsEmpty() {
        let checkedPrise = +$('#prise-number').text();
        if (checkedPrise >= 1) {
            $('#btn-send-to-cart').css({ "pointer-events": "auto", "opacity": 1 });
        }
        if (checkedPrise === 0) {
            $('#btn-send-to-cart').css({ "pointer-events": "none", "opacity": 0.5 });
        }
    };


    // ___________функция которая выкидывает предупреждение если размер бургера не был выбран
    function burgerSize() {
        let flag;
        if ($('.size input[type=radio]:checked').length > 0) {
            $('.size').css({ boxShadow: "none" });
            $('.error-block').css({ display: "none" });
            flag = true;
        } else {
            $('.size').css({ border: "1px solid #FF00AE" });
            $('.error-block').css({ display: "block" }).html('Не выбран размер бургера');
            flag = false;
        }
        return flag;
    }











    //____________________________________________________________________ПИЦЦА______________________________________________________________________

    //_________________________________выбор пици_______________________
    function toggleClickPizza() {
        let pizzaAuto = $('#block-pizza-auto').addClass('active-menu-pizza');
        let pizzaOwn = $('#block-own-pizza').removeClass('active-menu-pizza');
        $('.name-pizza-text').html('Пицца').animate({ opacity: 1 }, 150);
        $('.content-block-pizza-auto').addClass('active-pizza-block').animate({ opacity: 1 }, 150);
        $('.content-block-own-pizza').removeClass('active-pizza-block').animate({ opacity: 0 }, 150);
        $('.info-food-pizza .prise-final-product').css({ display: 'none' }).animate({ opacity: 0 }, 150);
        $('.info-food__center').css({ display: 'none' });
        $('.info-food__right-pizza').css({ display: 'none' });
        $('.pizza-ingridients-info').css({ display: 'block', width: '100%' }).html('ингредиенты:');

        pizzaAuto.on('click', function() {
            $('input:checked').prop('checked', false);
            $(this).addClass('active-menu-pizza');
            $('.block-own-pizza').removeClass('active-menu-pizza');
            $('.content-block-pizza-auto').addClass('active-pizza-block').animate({ opacity: 1 }, 150);
            $('.content-block-own-pizza').removeClass('active-pizza-block').animate({ opacity: 0 }, 150);
            $('.name-pizza-text').html('Выбери свою пиццу').animate({ opacity: 1 }, 150);
            $('.info-food-pizza .prise-final-product').css({ display: 'none' }).animate({ opacity: 0 }, 150);
            $('.info-food__right-pizza').css({ display: 'none' });
            $('.pizza-ingridients-info').css({ display: 'block' }).html('ингредиенты:').animate({ opacity: 1 }, 150);
        });
        pizzaOwn.click(function() {
            $(this).addClass('active-menu-pizza');
            $('.pizza-picture').css({ display: 'block' }).animate({ opacity: 1 }, 150);
            $('.block-pizza-auto').removeClass('active-menu-pizza');
            $('.content-block-own-pizza').addClass('active-pizza-block').animate({ opacity: 1 }, 150);
            $('.content-block-pizza-auto').removeClass('active-pizza-block').animate({ opacity: 0 }, 150);
            $('.name-pizza-text').html('Выбери свою пиццу').animate({ opacity: 1 }, 1500);
            $('.img-picture').css({ display: 'none' });
            $('.info-food-pizza .prise-final-product').css({ display: 'block' }).animate({ opacity: 1 }, 150);
            $('.info-food__right-pizza').css({ display: 'block' });
            $('.pizza-ingridients-info').css({ display: 'block', width: '100%' }).html('');
            $('input:checked').prop('checked', false);
            buttonActivityMyPizza();
            $('#prise-number').html('0');

        })
    }


    // ____________функция которая показывает при наведении фото пиццы
    function hoverImgPizza() {
        let blockPizza = $('.pizza-block');
        $('.img-product').css({ display: "none" });
        $('.img-product[alt="pizza"]').css({ display: "block" }).animate({ opacity: 1 }, 400);
        let flag = false; // переменная которая хранит активность фото (чтобы при частом наведении на блок картинка менялась только 1 раз)
        blockPizza.mouseenter(function() {
            if (flag) { return; }
            flag = true;
            let atr = $(this).data('img');
            let namePizza = $(this).find('.size-text-pizza').text();
            let ingridientsPizza = $(this).find('.ingredients-pizza').text();
            console.log(namePizza);
            $(this).parents().parents().parents().find('.name-pizza-text').html(namePizza).animate({ opacity: 1 }, 400);
            $('.img-product').css({ display: "none" }).animate({ opacity: 0 }, 400);
            $(this).parents().parents().parents().find('.img-picture[alt="' + atr + '"]').css({ display: "block" }).animate({ opacity: 1 }, 400, function() { flag = false });
            $(this).parents().parents().parents().find('.pizza-ingridients-info').html(ingridientsPizza).animate({ opacity: 1 }, 400);
        })
    }

    // __________функция активности кнопки в корзину (пицца)
    function activeSendButtonInPizzaBasket() {
        $('.btn-pizza').css({ pointerEvents: 'none' }).animate({ opacity: 0.5 }, 600);
        let blockPizza = $('.pizza-block');
        blockPizza.change(function() {
            let checkedInput = $(this).parent().parent().find('.pizza-block-size input:checked');
            if (checkedInput.is(":checked")) {
                checkedInput.parent().parent().find('.btn-pizza').css({ pointerEvents: 'auto' }).animate({ opacity: 1 }, 600);
            }
        })
    }

    // ____________функция отправки выбранной пиццы в корзину
    function sendSelectedPizzaToBasket() {
        let btnPizza = $('.btn-pizza');
        var prise = 0;
        let size;
        btnPizza.on('click', function() {
            let namePizza = $(this).parent().siblings('.size-text-pizza').text();
            let checkedInput = $(this).parent().parent().find('.pizza-block-size input:checked');
            if (checkedInput.is(":checked")) {
                $(this).parent().parent().find('.btn-pizza').css({ pointerEvents: 'auto' });
                prise = +$(checkedInput).data("prise");
                size = $(checkedInput).val();
                console.log(namePizza);
                let div = $('<div/>', { class: 'product-Basket' });
                $('<div/>', { class: 'img-order' }).css({ backgroundImage: "url('img/pizza.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }).appendTo(div);
                $('<div/>', { class: 'ingredients-order' }).appendTo(div).html(namePizza + " - " + size);
                let quantityCounter = $('<div/>', { class: 'quantity-product' }).appendTo(div);
                $('<div/>', { class: 'counter-plus' }).appendTo(quantityCounter).html('+');
                $('<div/>', { class: 'counter-product-Basket' }).appendTo(quantityCounter).html(1);
                $('<div/>', { class: 'counter-minus' }).appendTo(quantityCounter).html('-');
                $('<div/>', { class: 'prise-hidden' }).appendTo(div).html(prise);
                $('<div/>', { class: 'praise-product' }).appendTo(div).html(prise);
                let imgDelete = $('<div/>', { class: 'delete-product', title: 'Удалить с корзины' }).appendTo(div);
                $('<div/>', { class: 'icon-delete' }).appendTo(imgDelete);
                $('#myOrder').append(div);
                numberOfOrdersInTheBasket();
                orderAmountInCart();
                hideBasketHead();
                idElementBasket();
            }
        })
    }


    // ____________функция которая передает в корзину все необходимые данные по заказу своей пицци
    function btnBasketMyPizza() {
        $('.error-block').css({ display: "none" }).html('');
        $('.pizza-block-size').css({ border: "none" }); // убегаем предупреждение о размере пицци
        let btnBasket = $('#btn-send-to-cart');
        btnBasket.on('click', function() {
            if (pizzaSize()) {
                let content = $('.pizza-ingridients-info').text();
                let prise = $('#prise-number').text();
                let quantity = 1;
                let div = $('<div/>', { class: 'product-Basket' });
                $('<div/>', { class: 'img-order' }).css({ backgroundImage: "url('img/pizza.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }).appendTo(div);
                $('<div/>', { class: 'ingredients-order' }).appendTo(div).html(content);
                let quantityCounter = $('<div/>', { class: 'quantity-product' }).appendTo(div);
                $('<div/>', { class: 'counter-plus' }).appendTo(quantityCounter).html('+');
                $('<div/>', { class: 'counter-product-Basket' }).appendTo(quantityCounter).html(quantity);
                $('<div/>', { class: 'counter-minus' }).appendTo(quantityCounter).html('-');
                $('<div/>', { class: 'prise-hidden' }).appendTo(div).html(prise);
                $('<div/>', { class: 'praise-product' }).appendTo(div).html(prise);
                let imgDelete = $('<div/>', { class: 'delete-product', title: 'Удалить с корзины' }).appendTo(div);
                $('<div/>', { class: 'icon-delete' }).appendTo(imgDelete);
                $('#myOrder').append(div);
                numberOfOrdersInTheBasket();
                orderAmountInCart();
                idElementBasket();
                hideBasketHead();
                idElementBasket();
                activeSendButtonInPizzaBasket();
                $('input:checked').prop('checked', false);
                $('#prise-number').html('0');
                $('#ingredients-visual').html('');
                $('.error-block').css({ display: "none" }).html(''); // 
                $('.pizza-block-size').css({ border: "none" }); // убегаем предупреждение о размере pizza
            }

        })
    }

    // ___________функция которая выкидывает предупреждение если размер pizza не был выбран
    function pizzaSize() {
        let flag;
        if ($('.size-pizza input[name=myPizzaSize]:checked').length > 0) {
            $('.size-pizza').css({ boxShadow: "none" });
            $('.error-block').css({ display: "none" });
            flag = true;
        } else {
            $('.size-pizza').css({ border: "1px solid #FF00AE" });
            $('.error-block').css({ display: "block" }).html('Не выбран размер пиццы');
            flag = false;
        }
        return flag;
    }

    //______________активность кнопки в корзину при пустых checkbox пицца
    function buttonActivityMyPizza() {
        $('.btn-pizza').css({ pointerEvents: 'none' }).animate({ opacity: 0.5 }, 600);
        let bb = $('.pizza-block-size');
        bb.change(function() {
            let checkedInput = $(this).parent().parent().find('.pizza-block-size input[name=myPizzaSize]');
            if (checkedInput.is(":checked")) {
                $('.btn-pizza').css({ pointerEvents: 'auto' }).animate({ opacity: 1 }, 600);
            }

        })
    }








    //___________________________________________________________________________НАПИТКИ_________________________________________________________________

    // __________________функция которая показывает при наведении фото напитков
    function hoverImgDrink() {
        let drink = $('.drinks');
        $('.img-product').css({ display: "none" });
        $('.drink-ingridients-info').html('');
        let flag = false; // переменная которая хранит активность фото (чтобы при частом наведении на блок картинка менялась только 1 раз)
        drink.mouseenter(function() {
            if (flag) { return; }
            flag = true;
            let name = $(this).find('label').text();
            $(this).parents().parents().parents().find('.name-drink-text').html(name).animate({ opacity: 1 }, 400);
            $('.img-product').css({ display: "none" }).animate({ opacity: 0 }, 400);
            let atr = $(this).data('img');
            $(this).parents().parents().parents().find('.img-product[alt="' + atr + '"]').css({ display: "block" }).animate({ opacity: 1 }, 400, function() { flag = false });
        })
    }

    //____________функция отпрвки в корзину выбора напитков___________________
    function sendSelectedDrinkToBasket() {
        let btnDdink = $('.btn-drink');
        btnDdink.on('click', function() {
            let nameDrink = $('.drink-ingridients-info').text();
            let prise = +$('#prise-number').text();
            let quantity = 1;
            let div = $('<div/>', { class: 'product-Basket' });
            $('<div/>', { class: 'img-order' }).css({ backgroundImage: "url('img/drinks.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }).appendTo(div);
            $('<div/>', { class: 'ingredients-order' }).appendTo(div).html(nameDrink);
            let quantityCounter = $('<div/>', { class: 'quantity-product' }).appendTo(div);
            $('<div/>', { class: 'counter-plus' }).appendTo(quantityCounter).html('+');
            $('<div/>', { class: 'counter-product-Basket' }).appendTo(quantityCounter).html(quantity);
            $('<div/>', { class: 'counter-minus' }).appendTo(quantityCounter).html('-');
            $('<div/>', { class: 'prise-hidden' }).appendTo(div).html(prise);
            $('<div/>', { class: 'praise-product' }).appendTo(div).html(prise);
            let imgDelete = $('<div/>', { class: 'delete-product', title: 'Удалить с корзины' }).appendTo(div);
            $('<div/>', { class: 'icon-delete' }).appendTo(imgDelete);
            $('#myOrder').append(div);
            numberOfOrdersInTheBasket();
            orderAmountInCart();
            hideBasketHead();
            idElementBasket();
            $('input:checked').prop('checked', false);
            activeSendButtonInDrinkBasket();
            $('.drink-ingridients-info').html('');
            $('#prise-number').html('0');

        })
    }
    // __________функция активности кнопки в корзину (напитки)
    function activeSendButtonInDrinkBasket() {
        $('.btn-drink').css({ pointerEvents: 'none' }).animate({ opacity: 0.5 }, 600);
        let blockPizza = $('.drinks');
        blockPizza.change(function() {
            let checkedInput = $(this).parent().parent().find('.pizza-block-size input:checked');
            if (checkedInput.is(":checked")) {
                checkedInput.parent().parent().find('.btn-drink').css({ pointerEvents: 'auto' }).animate({ opacity: 1 }, 600);
            }
        })
    }


});