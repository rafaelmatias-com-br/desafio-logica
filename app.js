// Crie uma variável para armazenar o nome
let nome = "Rafael"
//e a quantidade de experiência (XP) de um herói,
let exp = 2520
let nivel

//depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
// Se XP for menor do que 1.000 = Ferro
    if (exp <= 1000) {
    nivel ="Ferro";
    } 

    // Se XP for entre 1.001 e 2.000 = Bronze
    else if (exp >= 1001 && exp <= 2000) {
    nivel = "Bronze";
    }

    // Se XP for entre 2.001 e 5.000 = Prata
    else if (exp >= 2001 && exp <= 5000) {
    nivel = "Prata";
    }

    // Se XP for entre 5.001 e 7.000 = Ouro
    else if (exp >= 5001 && exp <= 7000) {
    nivel = "Ouro";
    }

    // Se XP for entre 7.001 e 8.000 = Platina
    else if (exp >= 7001 && exp <= 8000) {
    nivel = "Platina";
    }   

    // Se XP for entre 8.001 e 9.000 = Ascendente
    else if (exp >= 8001 && exp <= 9000) {
    nivel = "Ascendente";
    }

    // Se XP for entre 9.001 e 10.000= Imortal
    else if (exp >= 9001 && exp <= 10000) {
        nivel = "Imortal";
    }

    // Se XP for maior ou igual a 10.001 = Radiante
    else {
        nivel = "Radiante";
    }

    //Ao final deve se exibir uma mensagem:
    //"O Herói de nome **{nome}** está no nível de **{nivel}**"
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);