const e=new class{constructor(e){this.routes=[],this.rootElement=e,window.addEventListener("popstate",()=>{this.render()})}addRoute(e,t){this.routes.push({path:e,component:t})}navigate(e){window.history.pushState({},"",e),this.render()}render(){let e=window.location.pathname,t=this.routes.find(t=>t.path===e)||this.routes[0];if(t){this.rootElement.innerHTML="";let e=t.component();this.rootElement.appendChild(e)}}init(){"/"===window.location.pathname?this.navigate("/welcome"):this.render()}}(document.getElementById("root")),t=new class{constructor(){this.listeners=[];let e=localStorage.getItem("wins"),t=localStorage.getItem("losses");this.state={playerChoice:null,computerChoice:null,result:null,wins:e?parseInt(e):0,losses:t?parseInt(t):0}}getState(){return{...this.state}}setState(e){this.state={...this.state,...e},void 0!==e.wins&&localStorage.setItem("wins",this.state.wins.toString()),void 0!==e.losses&&localStorage.setItem("losses",this.state.losses.toString()),this.notifyListeners()}subscribe(e){this.listeners.push(e)}notifyListeners(){this.listeners.forEach(e=>e())}playGame(e){let t,s=["piedra","papel","tijera"][Math.floor(3*Math.random())];e===s?t="tie":"piedra"===e&&"tijera"===s||"papel"===e&&"piedra"===s||"tijera"===e&&"papel"===s?(t="win",this.setState({wins:this.state.wins+1})):(t="lose",this.setState({losses:this.state.losses+1})),this.setState({playerChoice:e,computerChoice:s,result:t})}resetGame(){this.setState({playerChoice:null,computerChoice:null,result:null})}resetScore(){this.setState({wins:0,losses:0}),localStorage.removeItem("wins"),localStorage.removeItem("losses")}};e.addRoute("/welcome",function(){let t=document.createElement("div");return t.className="page welcome-page",t.innerHTML=`
    <img
      src="/images/Piedra Papel Tijera titulo.png"
      alt="Piedra Papel Tijera"
      class="title-image"
    />

    <button class="start-button">
      <img src="/images/bot\xf3n empezar.png" alt="Empezar" />
    </button>

    <div class="hands-container">
      <img src="/images/tijera.png" alt="Tijera" class="hand-icon" />
      <img src="/images/piedra.png" alt="Piedra" class="hand-icon" />
      <img src="/images/papel.png" alt="Papel" class="hand-icon" />
    </div>
  `,t.querySelector(".start-button").addEventListener("click",()=>{e.navigate("/game")}),t}),e.addRoute("/game",function(){let s=document.createElement("div");return s.className="page game-page",s.innerHTML=`
    <div class="game-header">
      <img
        src="/images/Piedra Papel Tijera titulo.png"
        alt="T\xedtulo"
        class="title-small"
      />
    </div>

    <div class="game-content">
      <div class="player-section">
        <h2 class="player-label">T\xfa</h2>
        <div class="choice-buttons">
          <button class="choice-btn" data-choice="piedra">
            <img src="/images/piedra.png" alt="Piedra" />
          </button>
          <button class="choice-btn" data-choice="papel">
            <img src="/images/papel.png" alt="Papel" />
          </button>
          <button class="choice-btn" data-choice="tijera">
            <img src="/images/tijera.png" alt="Tijera" />
          </button>
        </div>
      </div>

      <div class="vs-divider">
        <h2>VS</h2>
      </div>

      <div class="computer-section">
        <h2 class="player-label">Computadora</h2>
        <div class="computer-choice">
          <div class="waiting-text">...</div>
        </div>
      </div>
    </div>
  `,s.querySelectorAll(".choice-btn").forEach(s=>{s.addEventListener("click",()=>{let a=s.getAttribute("data-choice");t.playGame(a),setTimeout(()=>{e.navigate("/result")},500)})}),s}),e.addRoute("/result",function(){let s=document.createElement("div");s.className="page result-page";let{playerChoice:a,computerChoice:i,result:l}=t.getState(),c="win"===l?"/images/resultado ganaste.png":"lose"===l?"/images/resultado perdiste.png":"";s.innerHTML=`
    <div class="result-content">
      ${c?`<img src="${c}" alt="Resultado" class="result-image" />`:`<h1 class="tie-text">${"tie"===l?"¡Empate!":""}</h1>`}
      
      <div class="choices-display">
        <div class="choice-item">
          <h3>T\xfa</h3>
          <img src="/images/${a}.png" alt="${a}" class="choice-img" />
        </div>
        
        <div class="choice-item">
          <h3>Computadora</h3>
          <img src="/images/${i}.png" alt="${i}" class="choice-img" />
        </div>
      </div>

      <div class="result-buttons">
        <button class="play-again-btn">
          <img src="/images/bot\xf3n volver a jugar.png" alt="Volver a jugar" />
        </button>
        <button class="score-btn">Ver puntuaci\xf3n</button>
      </div>
    </div>
  `;let n=s.querySelector(".play-again-btn"),r=s.querySelector(".score-btn");return n.addEventListener("click",()=>{t.resetGame(),e.navigate("/game")}),r.addEventListener("click",()=>{e.navigate("/score")}),s}),e.addRoute("/score",function(){let s=document.createElement("div");s.className="page score-page";let a=t.getState();s.innerHTML=`
    <div class="score-content">
      <img src="/images/score.png" alt="Score" class="score-title" />
      
      <div class="score-display">
        <div class="score-item">
          <h2>Ganadas</h2>
          <div class="score-number">${a.wins}</div>
        </div>
        
        <div class="score-divider"></div>
        
        <div class="score-item">
          <h2>Perdidas</h2>
          <div class="score-number">${a.losses}</div>
        </div>
      </div>

      <div class="score-buttons">
        <button class="back-btn">Volver al juego</button>
        <button class="reset-btn">Reiniciar puntuaci\xf3n</button>
      </div>
    </div>
  `;let i=s.querySelector(".back-btn"),l=s.querySelector(".reset-btn");return i.addEventListener("click",()=>{e.navigate("/game")}),l.addEventListener("click",()=>{confirm("¿Estás seguro de que quieres reiniciar la puntuación?")&&(t.resetScore(),e.navigate("/score"))}),s}),e.init(),console.log("Aplicación Piedra, Papel o Tijera cargada");
//# sourceMappingURL=desafio-ppt.43e121fc.js.map
