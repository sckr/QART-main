describe('Homepagina', () => {
    beforeEach(() => {
        cy.visit('https://qalybr.nl')
    })

    /** Validates if:
     *    - "Over ons" button
     *        - links to the correct page
     *        - is visible
     *    - Page loads
     */
    it('Over ons', () => {
        cy.get('main a').contains('Over ons').should('be.visible').click()
        cy.url().should('eq', "https://qalybr.nl/over-ons/")
    })

    /** Validates if:
     *    - "Word kameraad in IT" button
     *        - links to the correct page
     *        - is visible
     *    - Page loads
     */
    it('Word Kameraad in IT', () => {
        cy.get('main a').contains('Word kameraad in IT').should('be.visible').click()
        cy.url().should('eq', "https://qalybr.nl/word-onze-kameraad-in-it/")
    })

    /** Validates if:
     *    - "Vind jouw kameraad in IT" button
     *        - links to the correct page
     *        - is visible
     *    - Page loads
     */
    it('Vind Kameraad in IT', () => {
        cy.get('main a').contains('Vind jouw kameraad in IT').should('be.visible').click()
        cy.url().should('eq', "https://qalybr.nl/vind-jouw-it-kameraad/")
    })

    /** Validates if:
     *    - "Groei met QALYBR" button
     *        - links to the correct page
     *        - is visible
     *    - Page loads
     */
    it('Groei met Qalybr', () => {
        cy.get('main a').contains('Groei met QALYBR').should('be.visible').click()
        cy.url().should('eq', "https://qalybr.nl/word-onze-kameraad-in-it/")
    })

    /** Validates if:
     *    - "Leer ons kennen" button
     *        - links to the correct page
     *        - is visible
     *    - Page loads
     */
    it('Footer', () => {
        cy.get('footer a').contains('Leer ons kennen').should('be.visible').click()
        cy.url().should('eq', "https://qalybr.nl/over-ons/")
    })
})