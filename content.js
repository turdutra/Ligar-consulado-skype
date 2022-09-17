console.log("operante")
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request === "ativar"){
    const poller = setInterval(function(){
      if (document.querySelector('[aria-label="Traduzir esta chamada"]')){
        chrome.runtime.sendMessage("desmutar");
        clearInterval(poller);
      }
      if (document.querySelector('[aria-label="Chamada de Voz"]')){
        document.querySelector('[aria-label="Chamada de Voz"]').click();
      }
      if (document.querySelector('[aria-label="Fechar"]')){
        document.querySelector('[aria-label="Fechar"]').click();
      }

    }, 1000)
  }
  }
);
