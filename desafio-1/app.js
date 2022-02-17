const readline = require('readline');
const { stdin: input, stdout: output } = require('process');


const rl = readline.createInterface({ input, output });


rl.question('Quantos níveis deseja para a escada? \n', (answer) => {    
    if(answer>0){
        var line = "", level = answer, point = "*";
        for(i=1;i<=answer;i++){
            line = " ".repeat(level - i) + point.repeat(i);
            console.log(line);
        }
    } else {
        console.log("Digite um valor maior que zero");
    }
    rl.close();
});

 

