function alerta()
    {
    alert("Qualquer duvida pode ser sanada atraves de nosso chatbot 🤖 ");
    }
	
	(function(s, z, c, h, a, t) {
            s.webchat = s.webchat || function() {
              (s.webchat.q = s.webchat.q || []).push(arguments);
            };
            t = z.createElement(c),
              a = z.getElementsByTagName(c)[0]; t.async = 1;
            t.src = 'https://foa.sz.chat/webchat/v2/webchat.js'; 
            a.parentNode.insertBefore(t, a);
            s.webchat('cid', '5fdbd59f1350dd1c60113e3b');
            s.webchat('host', h);
          })(window, document, 'script', 'https://foa.sz.chat');

          window.addEventListener("message", function(event) {
            if(event.origin !== 'https://foa.sz.chat') return;
          },false);
