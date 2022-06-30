const Pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Almeida',
    endereco: {
      rua: 'Rua exemplo',
      numero: 123,
    }
  }
  
  const { 
    nome, 
    sobrenome, 
    endereco: { 
      numero 
    }
  } = Pessoa;
  
  console.log(nome) // 'Leonardo'
  console.log(sobrenome) // 'Almeida'
  console.log(numero) // 123