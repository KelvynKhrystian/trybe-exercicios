const custoDoProduto = 100 ;
const valorDaVenda = 200 ;

if ( custoDoProduto >= 0 && valorDaVenda >= 0 ){
    const impostoSobreCusto = (custoDoProduto * 0.2) ;
    const custoTotalDoProduto = custoDoProduto + impostoSobreCusto ;
    const lucro = (valorDaVenda - custoTotalDoProduto) *1000 ;
    console.log(lucro);
}else{
    console.log("erro, valores negativos")
}
