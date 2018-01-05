# learn-patterns
Patterns

# Links 
- https://addyosmani.com/resources/essentialjsdesignpatterns/book


# Injeção de Dependência
- Diminui acoplamento
- Inversão de controle
- Diferente de módulos
```javascript
// BAD
function CoffeMaker(){
  const grinder = new Grinder();
  const pump = Pump.getInstance();
  const heater = app.get('Heater');
  
  this.brew = function(){
    grinder.grind();
    heater.on();
    pump.pump();
  }
}

// Good
function CoffeMaker(grinder, heater, pump){
  
  this.brew = function(){
    grinder.grind();
    heater.on();
    pump.pump();
  }
}
```

# Event Driven
- Comunicação entre modulos por mensagens
- Diminui acoplamento direto
- Ainda tem acoplamento indireto
- Canal único
  - Evitem pois não sabe quem está ouvindo, emitindo.
  - Dificil de escalar

# Mediators
- Controla relacionamento entre os módulos
- Não precisam mais conversar diretamente
- Sabe a ordem em que os eventos acontecem
- Pode ser testado de forma automatizada
```javascript
class MyMediator(){
  constructor(){
    this.model = new MyModel();
    this.view = new View(this.model);
    this.view2 = new View2();
  }
  
  start(){
    this.view1.on('my-event', () => this.view2.updateSometing())
  }
 }
```

# Component Driven
- Desacoplados
- Autocontidos(css, js, html)
- Alto reaproveitamento
- Se comunica de forma **Data Down Event Up**


# Data Down Event Up
-  Comunicação entre componentes
- Sem two way data binding
- Sem canais de eventos genericos ou globais
- **Dados são passados por valor aos componentes abaixo**
- **Eventos são disparados para cima e podem ser ouvidos por quem estiver usando.**

## Stateful e Stateless
- Padrão de organização de componentes
- Separando componentes de acordo com  a sua intenção
- Maior reaproveitamento e composição

### Stateful
- Apresentação dos dados e interação com o usuário
- Recebem todos os dados que precisam diretamente
- **Não** alteram os dados que recebem
- **Não** sabem como mudar o estado geral da aplicação
- Disparam eventos caso alguma coisa importante aconteça
- Evitam estado próprio

### Stateless
- Podem receber dados de entrada
- Sabem como obter dados
- Passam os dados para o componentes **stateful**
- **Compõe a interação entre componentes stateful**
- Sabem como atualizar o estado da aplicação.
![Stateless](https://i.imgur.com/sQtzmVP.png)

# FLUX
> [Veja aqui](https://github.com/luketevl/architecture-flux "Repositório")
# REDUX
> [Veja aqui](https://github.com/luketevl/architecture-redux "Repositório")

# Observer Pattern
> Vamos imaginar que você precisa atualizar vários elementos simultaneamente quando ocorre algum evento.
- **Subject** 
  - Elemento que **é escutado**
  - Contém a lista de **observer**, com facilidade de adicionar e remover
- **Subscribers** (Assinturas)
  - Elementos que "ouvem"
- **Observer** (Observam)
  - Reagem a uma alteração de um valor
  - Quem atualiza
