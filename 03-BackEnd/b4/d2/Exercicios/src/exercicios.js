// Exercício 1
// Qual é a função do código de status 400 e 422?

// 400 Bad Request
// Essa resposta significa que o servidor não entendeu 
// a requisição pois está com uma sintaxe inválida.

// 422 Unprocessable Entity (WebDAV (en-US))
// A requisição está bem formada mas inabilitada para 
// ser seguida devido a erros semânticos.

// fonte: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

// Exercício 2
// Qual é a função do código de status 401?

// 401 Unauthorized
// Embora o padrão HTTP especifique "unauthorized", semanticamente,
// essa resposta significa "unauthenticated". Ou seja, o cliente 
// deve se autenticar para obter a resposta solicitada.

// fonte: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

// 🚀 Exercício 3
// Crie um servidor Node.js utilizando o framework Express.