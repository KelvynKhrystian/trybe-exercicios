const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    // Complete a função customerInfo() para que seu retorno seja similar a 
    // "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
    // Note que o parâmetro da função já está sendo passado na chamada da função.
    // console.log(`Olá ${order.order.delivery.deliveryPerson}`); 
    const customerInfo = (order) => {
      const address = 'address';
      const deliveryPerson = order.order.delivery.deliveryPerson;
      const customerName = order['name'];
      const customerPhone = order['phoneNumber'];
      const street = order[address].street;
      const number = order[address].number;
      const apartment = order[address].apartment;
    
      console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
    }
    
    customerInfo(order);

  
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
  
  }
  
  orderModifier(order);