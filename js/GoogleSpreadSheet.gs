#https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Kanhu
function onOpen(){
  var spreadsheet = SpreadsheetApp.getActive();
  var menuItems = [
    {name: 'Confirm Payment', functionName: 'confirmPayment'}
  ];
  spreadsheet.addMenu('Payment', menuItems);
}

function confirmPayment(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  //ss.setActiveSheet(ss.getSheetByName("Response from members"));
  var sheet = ss.getSheetByName("Membership form");
  var member_sheet = ss.getSheetByName("Confirmed members");
  var cell = sheet.getActiveCell();    
  var row_num = cell.getRowIndex();
  if(row_num < 1 || cell.isBlank()){
    Browser.msgBox('Click on email-id of a member from --Membership form-- Sheet. ');    
    return(0);
  }
  var email_id = sheet.getRange("F"+row_num).getValue();
  var name = sheet.getRange("B"+row_num).getValue();
  var organization = sheet.getRange("C"+row_num).getValue();
  var cpf = sheet.getRange("D"+row_num).getValue();
  var date_now = new Date();
  var valid_year=date_now.getFullYear();
  //Browser.msgBox(date_now.getMonth() ); //0-index based 
  if(date_now.getMonth()>=3){valid_year = valid_year+1; }
  var ui = SpreadsheetApp.getUi();
  var amount = ui.prompt('Member '+name+' payment received?','Amount received (R$.)', ui.ButtonSet.YES_NO);
  var payment_date = ui.prompt('Member '+name+' payment received on which date?','Enter date of payment (DD-MM-YYYY)', ui.ButtonSet.OK_CANCEL);
  if (amount.getSelectedButton() == ui.Button.YES && payment_date.getSelectedButton() == ui.Button.OK) {    
    var confirm = ui.prompt('Member '+name+' paid R$.'+amount.getResponseText()+' received on '+payment_date.getResponseText()+'.\nConfrim?','Any remark/comment' ,ui.ButtonSet.YES_NO);
    if(confirm.getSelectedButton() == ui.Button.YES){
      last_row_num = member_sheet.getLastRow();
      member_id=1
      if(last_row_num >2){ member_id = member_sheet.getRange("A"+last_row_num).getValue()+1; }
      member_sheet.getRange("A"+(last_row_num+1)).setValue(member_id);  
      member_sheet.getRange("B"+(last_row_num+1)).setValue(name); 
      member_sheet.getRange("C"+(last_row_num+1)).setValue(email_id); 
      member_sheet.getRange("D"+(last_row_num+1)).setValue(cpf); 
      member_sheet.getRange("E"+(last_row_num+1)).setValue(organization); 
      member_sheet.getRange("F"+(last_row_num+1)).setValue(payment_date.getResponseText()); 
      member_sheet.getRange("G"+(last_row_num+1)).setValue(amount.getResponseText()); 
      member_sheet.getRange("H"+(last_row_num+1)).setValue(confirm.getResponseText()); 
      member_sheet.getRange("I"+(last_row_num+1)).setValue(date_now.getFullYear());
      //Send email to confirm
      var subject = 'NEBBIO: Membership confirmed!!'
      var message = '<div style="border: botted 0.2em black; padding: 10px 20px; background-color:#deebf7; "> <h1 style="color:white; background-color:#636363; padding: 3px 4px;">Núcleo de estudos em Biociências e Biotecnologia!</h1>\
                    <h2>Membership confirmed!!<h2><br/><br/> \Dear '+name+',<br/><br/>We recived your membership payment R$.'+amount.getResponseText()+
                      '.00.<br/>Your membership ID is: <b>NEBBIO/'+date_now.getFullYear()+'/'+member_id+'<b>. <br/>Your membership is valid till April 01, '+valid_year+'.<br/><br/>Thank you.<br/>\
      ~~~~~ <br/><br/><br/>Sincerely, <br/>Team NEBBIO,\nUENF. </div>';
      //MailApp.sendEmail(email_id, subject, message);      
      htmlToPDF(email_id,subject,message,'NEBBIO/'+date_now.getFullYear()+'/'+member_id);
      Browser.msgBox('Member'+name+' added to confirmed list SUCCESSFULLY!!'+'member_id: '+member_id);
    }else{
      Browser.msgBox('Member'+name+' NOT added to confirmed list (Cancelled)!!');
    }
  }else{
   Browser.msgBox('Member'+name+' NOT added to confirmed list (data not provided)!!');
  }  
}

function sendEmailsToAll(){
  // Browser.msgBox("You are sending message to all members... ");
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  //ss.setActiveSheet(ss.getSheetByName("Membership form"));
  var sheet = ss.getSheetByName("Confirmed members");
  if(sheet.getLastRow() <3){Browser.msgBox("Empty member list "); return(0); }
  var dataRange = sheet.getRange("B2:B"+sheet.getLastRow() );
  var names = dataRange.getValues();
  var dataRange = sheet.getRange("C2:C"+sheet.getLastRow());
  var emails = dataRange.getValues();
  var sheet = ss.getSheetByName("Send Email to all members");
  var dataRange = sheet.getRange("B2:B3");
  var sub_msg = dataRange.getValues();  
  var ui = SpreadsheetApp.getUi(); // Same variations.
  var response = ui.alert('Send email to all members', ui.ButtonSet.YES_NO);
  if (response == ui.Button.YES) {  
    for (var i = 0; i <= sheet.getLastRow()-2; i++) {
      var emailAddress = emails[i];
      var recipient = names[i];
      var message1 = sub_msg[1];    
      var message = 'Dear ' + recipient + ',\n\n' + message1 + ' ';
      var subject = sub_msg[0];          
      MailApp.sendEmail(emailAddress, subject, message);
    }
    Browser.msgBox(" Emails Sent!! ");
  }else {
    Browser.msgBox("Email cancelled... ");
  }  
}



// Send PDF email
function htmlToPDF(email,subject, html,member_id) { 
  var d = new Date;
  var bill = '<h1 style="color:red;">Money receipt</h1><p style="font-size: 12px;"><br\>Date: '+
    Utilities.formatDate(d, "GMT+1", "dd/MM/yyyy")+' &nbsp;'+d.toLocaleTimeString();+
    '</p>';
  var blob = Utilities.newBlob(bill+html, "text/html", "Membership_receipt.html");
  var pdf = blob.getAs("application/pdf");  
  //DriveApp.createFile(pdf).setName("Membership_receipts/member_id.pdf");  
  MailApp.sendEmail(email, subject, "PDF attachment", 
     {htmlBody: html, attachments: pdf});  
}