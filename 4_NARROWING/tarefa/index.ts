//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*              | tarefa |
//* criar uma função que recebe views dos usuários, precisamos utilizar
//* o narrowing para receber o dado
//* as possibilidades são boolean e number
//* serão enviado números de 1 a 5 (estrelas), prever uma mensagem para
//* cada uma destas notas
//* ou false que é quando o usuário não deixa uma review, prever um
//* retorno para este caso também
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const review = (score: number  | boolean) => {

  if (score) {
    switch (score) {
      case 1:
        console.log('Muito ruim')
        break
      case 2:
        console.log('Ruim')
        break
      case 3:
        console.log('Regular')
        break
      case 4:
        console.log('Bom')
        break
      case 5:
        console.log('Muito bom')
        break

      default:
        break
    }
  } else {
    console.log('O usuário não fez uma avaliação')
  }
}

review(3)
