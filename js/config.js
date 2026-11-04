/**
 * SAARVICE — zentrale Konfiguration.
 *
 * Alles, was von einem externen Dienst abhängt, steht hier. Kein Suchen im Code.
 * Die Gemeinde-Anmeldung (index.html#gemeinde) läuft über Brevo (Liste "SAARVICE Gemeinde",
 * Double-Opt-in). Die Brevo-Action-URL steht im action-Attribut von #waitlist-form.
 */
window.SAARVICE_CONFIG = {
  counterEndpoint: null,
  analytics: {
    provider: null,
    options: {}
  },
  contact: {
    booking: 'booking@saarvice.de',
    press: 'presse@saarvice.de'
  }
};
