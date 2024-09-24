describe('Menu', () => {
    beforeEach(() => {
        cy.visit('https://qalybr.nl')
        /* get all the menu options */
        cy.get('ul[class~=menu] li').as('menuOptions')
    })

    /** Validates if:
     *    - the home button
     *        - links to the homepage
     *        - is visible
     *    - Homepage loads
     */
    it('Homepage', function() {
        cy.visit('https://qalybr.nl/over-ons/')
        /* get the first element of the menu, because the home button is a image, not text (this will not work on mobile, might need another solution) */
        cy.get('ul[class~=menu] li:eq(0)').should('be.visible').click()
        cy.url().should('eq', 'https://qalybr.nl/')
    })

    /** Validates if:
     *    - "Werken bij QALYBR" button
     *        - links to the correct page
     *        - is visible
     *    - Page loads
     */
    it('Werken bij qalybr', function() {
        cy.wrap(this.menuOptions).contains('Werken bij QALYBR').should('be.visible').click()
        cy.url().should('eq', 'https://qalybr.nl/word-onze-kameraad-in-it/')
    })

    /** Validates if:
     *    - "Vind jouw IT-kameraad" button
     *        - links to the correct page
     *        - is visible
     *    - Page loads
     */
    it('jouw IT-kameraad', function() {
        cy.wrap(this.menuOptions).contains('Vind jouw IT-kameraad').should('be.visible').click()
        cy.url().should('eq', 'https://qalybr.nl/vind-jouw-it-kameraad/')
    })

    /** Validates if:
     *    - "Over ons" button
     *        - links to the correct page
     *        - is visible
     *    - Page loads
     */
    it('Over ons', function() {
        cy.wrap(this.menuOptions).contains('Over ons').should('be.visible').click()
        cy.url().should('eq', 'https://qalybr.nl/over-ons/')
    })

    /** Validates if:
     *    - "Contact" button
     *        - links to the correct page
     *        - is visible
     *    - Page loads
     */
    it('Contact', function() {
        cy.wrap(this.menuOptions).contains('Contact').should('be.visible').click()
        cy.url().should('eq', 'https://qalybr.nl/contact/')
    })

    /** Validates if:
     *    - "Scroll to the top" button
     *        - scrolls up to the top of the page
     *        - is visible
     */
    it('scroll up', function() {
        /* scroll to the bottom of the page */
        cy.scrollTo('bottom')
        /* validat that the window is not positioned at the top */
        cy.window().its('scrollY').should('not.eq', 0)
        /* click on the arrow */
        cy.get('i[class~=fa-arrow-up]').should('be.visible').click() // todo: maybe get the elemnt differently
        /* validate the position of the screen as being on the top of the page */
        cy.window().its('scrollY').should('eq', 0)
    })
})

