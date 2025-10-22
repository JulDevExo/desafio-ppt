const e=new class{constructor(){this.routes=[],this.rootElement=null,window.addEventListener("popstate",()=>{this.render()})}setRootElement(e){this.rootElement=e}addRoute(e,t){this.routes.push({path:e,component:t})}navigate(e){window.history.pushState({},"",e),this.render()}render(){if(!this.rootElement)return;let e=window.location.pathname,t=this.routes.find(t=>t.path===e)||this.routes[0];if(t){this.rootElement.innerHTML="";let e=t.component();this.rootElement.appendChild(e)}}init(){"/"===window.location.pathname?this.navigate("/welcome"):this.render()}};var t={};const s=new URL(t=import.meta.resolve("5duda")).href,a=new URL(import.meta.resolve("9flAv")).href;var i={};const o=new URL(i=import.meta.resolve("iUMzC")).href;var r={};const n=new URL(r=import.meta.resolve("jmcSx")).href;var l={};const c=new URL(l=import.meta.resolve("6lVGu")).href;function d(){let t=document.createElement("div");return t.className="page welcome-page",t.innerHTML=`
    <img
      src="${s}"
      alt="Piedra Papel Tijera"
      class="title-image"
    />

    <button class="start-button">
      <img src="${a}" alt="Empezar" />
    </button>

    <div class="hands-container">
      <img src="${o}" alt="Tijera" class="hand-icon" />
      <img src="${n}" alt="Piedra" class="hand-icon" />
      <img src="${c}" alt="Papel" class="hand-icon" />
    </div>
  `,t.querySelector(".start-button").addEventListener("click",()=>{e.navigate("/game")}),t}const m=new class{constructor(){this.listeners=[];let e=localStorage.getItem("wins"),t=localStorage.getItem("losses");this.state={playerChoice:null,computerChoice:null,result:null,wins:e?parseInt(e):0,losses:t?parseInt(t):0}}getState(){return{...this.state}}setState(e){this.state={...this.state,...e},void 0!==e.wins&&localStorage.setItem("wins",this.state.wins.toString()),void 0!==e.losses&&localStorage.setItem("losses",this.state.losses.toString()),this.notifyListeners()}subscribe(e){this.listeners.push(e)}notifyListeners(){this.listeners.forEach(e=>e())}playGame(e){let t,s=["piedra","papel","tijera"][Math.floor(3*Math.random())];e===s?t="tie":"piedra"===e&&"tijera"===s||"papel"===e&&"piedra"===s||"tijera"===e&&"papel"===s?(t="win",this.setState({wins:this.state.wins+1})):(t="lose",this.setState({losses:this.state.losses+1})),this.setState({playerChoice:e,computerChoice:s,result:t})}resetGame(){this.setState({playerChoice:null,computerChoice:null,result:null})}resetScore(){this.setState({wins:0,losses:0}),localStorage.removeItem("wins"),localStorage.removeItem("losses")}},u=new URL(t).href,h=new URL(r).href,v=new URL(l).href,p=new URL(i).href,g=new URL(import.meta.resolve("qNWfo")).href;function b(){let t=document.createElement("div");t.className="page game-page",t.innerHTML=`
    <div class="game-header">
      <img
        src="${u}"
        alt="T\xedtulo"
        class="title-small"
      />
    </div>

    <div class="game-content">
      <div class="player-section">
        <h2 class="player-label">T\xfa</h2>
        <div class="choice-buttons">
          <button class="choice-btn" data-choice="piedra">
            <img src="${h}" alt="Piedra" />
          </button>
          <button class="choice-btn" data-choice="papel">
            <img src="${v}" alt="Papel" />
          </button>
          <button class="choice-btn" data-choice="tijera">
            <img src="${p}" alt="Tijera" />
          </button>
        </div>
      </div>

      <div class="vs-divider">
        <h2>VS</h2>
      </div>

      <div class="computer-section">
        <h2 class="player-label">Computadora</h2>
        <div class="computer-choice">
          <img src="${g}" alt="Robot" class="robot-img" />
        </div>
      </div>
    </div>
  `;let s=t.querySelectorAll(".choice-btn");return s.forEach(a=>{a.addEventListener("click",()=>{let i=a.getAttribute("data-choice");s.forEach(e=>e.disabled=!0),a.classList.add("selected"),m.playGame(i);let o=document.createElement("div");o.className="countdown-overlay";let r=document.createElement("div");r.className="countdown-number countdown-animate",r.textContent="3",o.appendChild(r),t.appendChild(o);let n=3,l=setInterval(()=>{--n>0?(r.textContent=n.toString(),r.style.animation="none",r.offsetWidth,r.style.animation=""):(clearInterval(l),e.navigate("/result"))},1e3)})}),t}const w=new URL(import.meta.resolve("bquyp")).href,f=new URL(import.meta.resolve("idnrC")).href,L=new URL(r).href,E=new URL(l).href,S=new URL(i).href,y=new URL(import.meta.resolve("5uzWc")).href;function R(){let t=document.createElement("div");t.className="page result-page";let{playerChoice:s,computerChoice:a,result:i}=m.getState(),o="win"===i?w:"lose"===i?f:"",r={piedra:L,papel:E,tijera:S};t.innerHTML=`
    <div class="result-content">
      ${o?`<img src="${o}" alt="Resultado" class="result-image" />`:`<h1 class="tie-text">${"tie"===i?"¡Empate!":""}</h1>`}
      
      <div class="choices-display">
        <div class="choice-item">
          <h3>T\xfa</h3>
          <img src="${r[s||"piedra"]}" alt="${s}" class="choice-img" />
        </div>
        
        <div class="choice-item">
          <h3>Computadora</h3>
          <img src="${r[a||"piedra"]}" alt="${a}" class="choice-img" />
        </div>
      </div>

      <div class="result-buttons">
        <button class="play-again-btn">
          <img src="${y}" alt="Volver a jugar" />
        </button>
        <button class="score-btn">Ver puntuaci\xf3n</button>
      </div>
    </div>
  `;let n=t.querySelector(".play-again-btn"),l=t.querySelector(".score-btn");return n.addEventListener("click",()=>{m.resetGame(),e.navigate("/game")}),l.addEventListener("click",()=>{e.navigate("/score")}),t}function $(){let t=document.createElement("div");t.className="page score-page";let s=m.getState();t.innerHTML=`
    <div class="score-content">
      
      <div class="score-display">
        <div class="score-item">
          <h2>Ganadas</h2>
          <div class="score-number">${s.wins}</div>
        </div>
        
        <div class="score-divider"></div>
        
        <div class="score-item">
          <h2>Perdidas</h2>
          <div class="score-number">${s.losses}</div>
        </div>
      </div>

      <div class="score-buttons">
        <button class="back-btn">Volver al juego</button>
        <button class="reset-btn">Reiniciar puntuaci\xf3n</button>
      </div>
    </div>
  `;let a=t.querySelector(".back-btn"),i=t.querySelector(".reset-btn");return a.addEventListener("click",()=>{e.navigate("/game")}),i.addEventListener("click",()=>{confirm("¿Estás seguro de que quieres reiniciar la puntuación?")&&(m.resetScore(),e.navigate("/score"))}),t}new URL(import.meta.resolve("i3rNi")).href,document.addEventListener("DOMContentLoaded",()=>{let t=document.getElementById("root");if(!t)return void console.error("Elemento #root no encontrado");e.setRootElement(t),e.addRoute("/welcome",d),e.addRoute("/game",b),e.addRoute("/result",R),e.addRoute("/score",$),e.init(),console.log("Aplicación Piedra, Papel o Tijera cargada")});
//# sourceMappingURL=desafio-ppt.7a30504f.js.map
