describe('Cookie pop-up', () => {
    beforeEach(() => {
        cy.visit('https://qalybr.nl')
        /* Do any action on the website to trigger the cookies pop up  */
        cy.get('div[class~=container_toggle__wrapper--hide-mobile]').children('input').click({force:true})

    })

    /** Validates if:
     *      - Cookie pop-up dissapears after closing
     *      - Consent is saved as no after closing
     */
    it('Kruisje', () => {
        cy.get('div[class*=cky-consent-container]').children().children('button').click()
        cy.get('div[class*=cky-consent-container]').should('not.visible')
        /* Should not have consented to cookies */
        cy.getCookies().then((cookies) => { expect(cookies[0].value).to.include("consent:no") })
    })

    /** Validates if:
     *      - Cookie pop-up dissapears after accepting
     *      - Consent is saved as yes after closing
     */
    it('Accepteren', () => {
        cy.getCookies().then((cookies) => { expect(cookies[0].value).to.include("consent:no") })
        cy.get('div[class*=cky-consent-container]').find('button').contains('Accepteren').click()
        cy.get('div[class*=cky-consent-container]').should('not.visible')
        cy.getCookies().then((cookies) => { expect(cookies[0].value).to.include("consent:yes") })
    })

    /** Validates if:
     *      - "Cookie Policy" links to https://qalybr.nl/cookies/
     *      - Consent is still no after doing nothing
     * 
     * note: Does not load page, because page is loaded in a external tab
     */
    it('Cookie Policy', () => {
        console.log('Policy check')
        cy.get('div[class*=cky-consent-container]').contains('Cookie Policy').as('policy').invoke('attr', 'href').should('eq', 'https://qalybr.nl/cookies/')
        cy.getCookies().then((cookies) => { expect(cookies[0].value).to.include("consent:no") })
    })
})