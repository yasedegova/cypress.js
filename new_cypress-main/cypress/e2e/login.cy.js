describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки вост пароль

        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авт вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
    })
    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки вост пароль

        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio9'); // ввели неверный пароль
        cy.get('#loginButton').click(); // нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что после авт вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
    })

    it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки вост пароль

        cy.get('#mail').type('germandolnikov.ru'); // ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю что после авт вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
    })
 it('Проверка, на логику восстановления пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки вост пароль

        cy.get('#forgotEmailButton').click(); // нажали на забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru') // ввели верный логин
        cy.get('#restoreEmailButton').click(); // нажал на отпр код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю что после отпр вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
    })
   it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки вост пароль

        cy.get('#mail').type('german@dolnikova.ru'); // ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что после авт вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
    })
      it(' Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки вост пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели верный логин в разном регистре
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авт вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
    })

})
