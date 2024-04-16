Esse projeto foi desenvolvido no intuito de treinar meus conhecimentos com JavaScript mundando o css.

O intuito inicial era para mudar o css de display: none; para display: block, por exemplo.

-- No html

<img class="img" src="img/macaco-aberto.png" id="aberto" style="display: none">

-- No JavaScript

document.getElementById('aberto').style.display = 'block';

Dessa forma, o que era oculto antes no html, aparecerá.

Mas, escolhi utilizar opacidade pois não estava conseguindo aplicar a propriedade transition na imagem, procurei procurei
e não consegui aplicar uma transição no display, (talvez nem exista isso, caso eu descobrir mais para a frente, eu crio
uma branch nova para este código desempenhando seu papel inicial).

Mas fico feliz com o resultado, começando com pequenos começos, mas com transições relativamente 'bonitas'