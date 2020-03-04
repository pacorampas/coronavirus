var acepted = localStorage.getItem('cookiesAccepted')
var message = document.getElementById('cookies-message')
if (!acepted) {
  message.classList.add('active')

  
  var btnCookies = document.getElementById('button-cookies')

  btnCookies.onclick = function() {
    localStorage.setItem('cookiesAccepted', true)
    message.classList.remove('active')
  }
}

