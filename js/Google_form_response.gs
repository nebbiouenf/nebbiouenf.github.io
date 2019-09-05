
//=================================================
//send EMAIL on form submit
// After creating the function go to "Edit --> Current projects triggers" adn set trigger after form submit. 
var event_name = 'OMICAS: I Workshop de Biociências e Biotecnologia';
function onFormSubmit(e) {
  var user = {name: e.namedValues['Nome completo'], email: e.namedValues['Endereço de e-mail']};    
  var htmltext= 'This page requires HTML support. Make sure you open in a client that support HTML!!';
  var htmlText = HtmlService.createHtmlOutput('<h1 style="color:white; background-color:#636363; padding: 3px 4px;">Núcleo de estudos em Biociências e Biotecnologia</h1>');
  htmlText.append('<h2>'+event_name+'  pedido de Inscrição recebido!!</h2><hr/>');

  htmlText.append('<p>Prezado(a) '+user.name+',<br/>  Recebemos seus dados, porém sua inscrição encontra-se com <b style="color:red;">status pendente</b> até a confirmação do pagamento.<br/> '+
                  'Não deixe para depois, realize o pagamento e garanta sua participação no evento. As vagas são limitadas! <br/><br/>'+
                  'Caso o pagamento já tenha sido efetuado, por favor, desconsire esta mensagem.<br/><br/>'+
                  '</p>');
  htmlText.append('<p>'+
                  '<b>Valor da Inscrição :</b> R$15,00 <br/>'+
                  '<b> Forma de pagamento: </b><br/>'+
                  'Transferência / depósito no bancário <b>ou</b> presencial no prédio CBB, sala 204-B, LBR. <br/>'+
                  '</p> <br/>'+
                  '<div style="display:inline-block; width: 40%; ">'+
                  '<h3 style="width: 98%; margin: 1px auto;text-align:center;">CAIXA Econômica Federal</h3>'+
                  '<b>Agência : </b>0192<br/>'+
                  '<b>Operação : </b>013<br/>'+
                  '<b>Conta Corrente : </b>360643-8<br/>'+
                  '<b>Beneficiário : </b>LUIZA GONCALVES AYRES<br/>'+
                  '<b>CPF : </b>144.279.807-67<br/>'+
                  '</div>'+
                  '<div style="display:inline-block; width: 30%; top:0; both:clear; ">'+
                  '<h3 style="width: 50%; margin: 1px auto;text-align:center;">Bradesco</h3>'+
                  '<p><b>Agência : </b>65<br/>'+
                  '<b>Conta Corrente : </b>220080-5<br/>'+
                  '<b>Beneficiário : </b>REBEKA DA CONCEIÇÃO SOUZA<br/>'+
                  '<b>CPF : </b>136.465.887-99<br/>'+
                  '</div><br/>'+
                  '<br/><p>Pagamentos por transferência ou depósito, enviar o comprovante(PDF/foto) para <a href="mailto:nebbiouenf@gmail.com">nebbiouenf@gmail.com</a> </p><br/> '
                  );
  
  htmlText.append('<p> <br/>~~~~~<br/>Att., <br/>Equipe NEBBIO - UENF.</p><hr/>'+
                  '<p style="display:block; width:50%; margin:0 auto; font-size: 10px;" >UNIVERSIDADE ESTADUAL DO NORTE FLUMINENSE DARCY RIBEIRO <br/>'+
                  'Av. Alberto Lamego, 2000, <br/>'+
                  'Campos dos Goytacazes - RJ. <br/>'+
                  '<a href="https://nebbiouenf.github.io" >nebbiouenf.github.io </a> | '+
                  '<a href="https://www.facebook.com/nebbio.uenf">www.facebook.com/nebbio.uenf</a></p>');
  //Logger.log(htmlText.getContent());
 // Logger.log(htmlText.getCode());
 if(user.email !== undefined ){
   MailApp.sendEmail(user.email, 'NEBBIO: Pedido de inscrição.',htmltext, 
     {htmlBody: htmlText.getContent()}); 
  }
}
