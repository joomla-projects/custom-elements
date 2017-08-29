const Joomla = window.Joomla || {};

class JoomlaFieldSendTestMail extends HTMLElement {
  connectedCallback() {
    const self = this;
    const button = document.getElementById('sendtestmail');

    if (button) {
      button.addEventListener('click', () => { self.sendTestMail(self); });
    }
  }

  sendTestMail() {
    const emailData = {
      smtpauth: this.querySelector('[name="jform[smtpauth]"]').value,
      smtpuser: this.querySelector('[name="jform[smtpuser]"]').value,
      smtppass: this.querySelector('[name="jform[smtppass]"]').value,
      smtphost: this.querySelector('[name="jform[smtphost]"]').value,
      smtpsecure: this.querySelector('[name="jform[smtpsecure]"]').value,
      smtpport: this.querySelector('[name="jform[smtpport]"]').value,
      mailfrom: this.querySelector('[name="jform[mailfrom]"]').value,
      fromname: this.querySelector('[name="jform[fromname]"]').value,
      mailer: this.querySelector('[name="jform[mailer]"]').value,
      mailonline: this.querySelector('[name="jform[mailonline]"]').value,
    };

    // Remove js messages, if they exist.
    Joomla.removeMessages();

    Joomla.request({
      url: document.getElementById('sendtestmail').getAttribute('data-ajaxuri'),
      method: 'POST',
      data: JSON.stringify(emailData),
      perform: true,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      onSuccess: (response) => {
        const resp = JSON.parse(response);
        if (typeof resp.messages === 'object' && resp.messages !== null) {
          Joomla.renderMessages(resp.messages);
        }
      },
      onError: (xhr) => {
        Joomla.renderMessages(Joomla.ajaxErrorsMessages(xhr));
      },
    });
  }
}

customElements.define('joomla-field-sendtestmail', JoomlaFieldSendTestMail);
