$ ( documento ) . on ( "click" , "#previsao" , function ( ) {
  $ . ajax ( {
    type : "get" ,  // Como vou enviar
    // url: "https://viacep.com.br/ws/"+$("#cep").val()+"/json/",
    url : "https://api.hgbrasil.com/weather?key=b2d1547f" ,
    sucesso : function ( dados ) {  // Executar se der certo
      var  previsao  =  ( {
             "país" : dados . encontro
         });
      $("#dados").html (previsao);
    },
    error: function ( ) {
      alerta ("Deu ruim") ;
    }
  });
});