describe('Покупка нового аватара для тренера', function () {

    it('e2e Проверка покупки нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/shop'); // Заходу на сайт https://pokemonbattle.ru/shop          
         cy.get('#k_email').type('USER_LOGIN'); // Ввожу верный логин
         cy.get('#k_password').type('USER_PASSWORD'); // Ввожу верный пароль
         cy.get('.MuiButton-root').click(); // Нажимаю Войти
         cy.get('.header_card_trainer').click(); // Нажимаю на кнопку Тренера
         cy.get('.k_mobile > :nth-child(5)').click(); // Нажимаю на кнопку смена аватара
         cy.get('.available > button').first().click(); // Нажимаю Купить у первого доступного аватара
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('2201 3820 0000 0021'); // Ввожу номер карты
         cy.get(':nth-child(1) > .style_1_base_input').type('12/26'); // Ввожу срок карты
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); // Ввожу CVV
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('ASDFJJPO'); // Ввожу имя
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Нажимаю Оплатить
         cy.get('.style_1_base_input').type('56456'); // Ввожу код из смс
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Нажимаю Оплатить
         cy.get('.payment_status_top').contains('Покупка прошла успешно').should('be.visible'); // Проеряю наличие сообщения Покупка прошла успешно и что оно видно
        });
     })
