import express, { json } from "express" 

const app = express();
const PORT = 3003;

app.use(json ());

app.get("/quote", (request, response) => {

    response.send("Gloria ao Sol");

})

app.post("/bhaskara", (request, response) => {

    const {a} = request.body
    const {b} = request.body
    const {c} = request.body
    
    if(a == 0){
        response.send('Impossível calcular')
    }
    
    let delta = (b * b) - (4 * a * c);
    
    if(delta < 0){
        response.send('Não existe raiz real.')
    }else{
        const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        response.send(`${raiz1}, ${raiz2}`);
        }

})

app.delete("/triangulo_us/:ladoA/:ladoB/:ladoC", (request, response) => {

    const ladoA = request.params.ladoA
    const ladoB = request.params.ladoB
    const ladoC = request.params.ladoC
  

      if ((ladoA == ladoB) && (ladoA == ladoC)){
          response.send('Os dados informados formam um triângulo equilátero.')
      }else if ((ladoA == ladoB) || (ladoA == ladoC) || (ladoC == ladoB)){
          response.send('Os dados informados formam um triângulo isóceles')
      }else{
          response.send('Os dados informados formam um triângulo escaleno.')
      }
  })





app.listen(PORT, () => {

    console.log("Rodando backend na porta " + PORT);

  });