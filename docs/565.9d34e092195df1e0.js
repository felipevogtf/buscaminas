"use strict";(self.webpackChunkbuscaminas=self.webpackChunkbuscaminas||[]).push([[565],{565:(y,m,l)=>{l.r(m),l.d(m,{BuscaminasModule:()=>d});var b=l(895),s=(()=>{return(a=s||(s={}))[a.Visible=0]="Visible",a[a.Oculta=1]="Oculta",a[a.Marcada=2]="Marcada",a[a.Reventada=3]="Reventada",s;var a})(),r=(()=>{return(a=r||(r={}))[a.Ganado=0]="Ganado",a[a.Perdido=1]="Perdido",a[a.Progreso=2]="Progreso",r;var a})(),h=l(579);class u{constructor(n,t){this.estado=s.Oculta,this.esMina=!1,this.minasAdyacentes=0,this.posicionX=n,this.posicionY=t}colocarMina(){this.esMina=!0}revelar(){this.estado==s.Oculta&&(this.estado=s.Visible)}marcar(){this.estado==s.Oculta&&(this.estado=s.Marcada)}}class g{constructor(n,t,o){this.filas=n,this.columnas=t,this.cantidadMinas=o,this.matriz=[],this.minas=[],this.celdasReveladas=0,this.estadoTablero=new h.x,this.construirTablero(),this.distribuirMinas(),this.calcularMinasAdyacentes()}construirTablero(){for(let n=0;n<this.filas;n++){let t=[];for(let o=0;o<this.columnas;o++)t.push(new u(n,o));this.matriz.push(t)}}distribuirMinas(){let n=[];for(;n.length<this.cantidadMinas;){const t=Math.floor(Math.random()*this.filas),o=Math.floor(Math.random()*this.columnas);n.some(i=>i[0]===t&&i[1]===o)||n.push([t,o])}for(const t of n){const o=t[0],i=t[1];this.matriz[o][i].colocarMina(),this.minas.push(this.matriz[o][i])}}calcularMinasAdyacentes(){for(let n=0;n<this.matriz.length;n++)for(let t=0;t<this.matriz[n].length;t++)if(this.matriz[n][t].esMina){const o=this.obtenerCeldasAdyacentes(this.matriz[n][t]);for(const i of o)i.minasAdyacentes++}}obtenerCeldasAdyacentes(n){let t=[];for(let o=0;o<8;o++){let i=n.posicionX,c=n.posicionY;switch(o){case 0:i--;break;case 1:i--,c++;break;case 2:c++;break;case 3:i++,c++;break;case 4:i++;break;case 5:i++,c--;break;case 6:c--;break;case 7:i--,c--}i>=0&&i<this.filas&&c>=0&&c<this.columnas&&t.push(this.matriz[i][c])}return t}revelarCelda(n){if(n.estado==s.Oculta&&this.celdasReveladas++,n.revelar(),n.esMina&&(n.estado=s.Reventada,this.revelarMinas(),this.estadoTablero.next(r.Perdido)),0==n.minasAdyacentes&&!n.esMina){const t=this.obtenerCeldasAdyacentes(n);for(const o of t)o.estado===s.Oculta&&(o.revelar(),this.celdasReveladas++,this.revelarCelda(o))}this.celdasReveladas==this.filas*this.columnas-this.cantidadMinas&&this.estadoTablero.next(r.Ganado)}revelarMinas(){for(const n of this.minas)n.revelar()}}var e=l(256);function p(a,n){if(1&a&&(e.TgZ(0,"span",15),e._uU(1),e.qZA()),2&a){const t=e.oxw().$implicit;e.uIk("cantidad",t.minasAdyacentes),e.xp6(1),e.hij(" ",t.minasAdyacentes," ")}}function _(a,n){if(1&a&&(e.TgZ(0,"span",16),e._UZ(1,"i",5),e.qZA()),2&a){const t=e.oxw().$implicit,o=e.oxw(3);e.xp6(1),e.Q6J("ngClass",t.estado===o.EstadoCelda.Reventada?"fa-burst":"fa-bomb")}}function M(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"div",11),e.NdJ("click",function(){const c=e.CHM(t).$implicit,x=e.oxw(3);return e.KtG(x.revelarCelda(c))}),e.TgZ(1,"div",12),e.YNc(2,p,2,2,"span",13),e.YNc(3,_,2,1,"span",14),e.qZA()()}if(2&a){const t=n.$implicit,o=e.oxw(3);e.Q6J("ngClass",o.obtenerClaseCelda(t)),e.xp6(1),e.Q6J("hidden",t.estado===o.EstadoCelda.Oculta),e.xp6(1),e.Q6J("ngIf",!t.esMina&&t.minasAdyacentes>0),e.xp6(1),e.Q6J("ngIf",t.esMina)}}function C(a,n){if(1&a&&(e.TgZ(0,"div",9),e.YNc(1,M,4,4,"div",10),e.qZA()),2&a){const t=n.$implicit;e.xp6(1),e.Q6J("ngForOf",t)}}function v(a,n){if(1&a&&(e.TgZ(0,"div",7),e.YNc(1,C,2,1,"div",8),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.tablero.matriz)}}class f{constructor(){this.title="buscaminas",this.EstadoCelda=s,this.crearTablero(),this.iniciarSFX()}ngOnInit(){this.observarEstadoTablero()}crearTablero(){this.tablero=new g(10,10,10),this.tableroEstado=r.Progreso,this.partidaFinalizada=!1,this.observarEstadoTablero()}iniciarSFX(){this.bubbleSFX=new Audio,this.bubbleSFX.src="/assets/sfx/bubble.mp3",this.bubbleSFX.load(),this.explosionSFX=new Audio,this.explosionSFX.src="/assets/sfx/explosion.mp3",this.explosionSFX.load(),this.winSFX=new Audio,this.winSFX.src="/assets/sfx/win.mp3",this.winSFX.load()}observarEstadoTablero(){this.tablero.estadoTablero.subscribe(n=>{n==r.Ganado&&this.winSFX.play(),this.partidaFinalizada=!0,this.tableroEstado=n})}reiniciar(){this.crearTablero()}revelarCelda(n){this.partidaFinalizada||(n.estado===s.Oculta&&(n.esMina?this.explosionSFX.play():this.bubbleSound()),this.tablero.revelarCelda(n))}obtenerClaseCelda(n){let t="celda-normal";return n.estado===s.Visible&&(t="celda-visible"),n.esMina&&n.estado!=s.Oculta&&(t=n.estado==s.Reventada?"celda-reventada":"celda-mina"),t}obtenerEmote(){let n="";switch(this.tableroEstado){case r.Ganado:n="fa-face-grin-stars";break;case r.Perdido:n="fa-face-dizzy";break;default:n="fa-face-smile"}return n}bubbleSound(){this.bubbleSFX.cloneNode().play()}}f.\u0275fac=function(n){return new(n||f)},f.\u0275cmp=e.Xpm({type:f,selectors:[["app-tablero"]],decls:9,vars:3,consts:[[1,"full-screen"],[1,"tablero-header"],[1,"contador-minas"],[1,"fa-solid","fa-bomb"],[1,"boton-emote",3,"click"],[1,"fa-solid",3,"ngClass"],["class","tablero",4,"ngIf"],[1,"tablero"],["class","fila",4,"ngFor","ngForOf"],[1,"fila"],["class","celda",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"celda",3,"ngClass","click"],[3,"hidden"],["class","minas-adyacentes",4,"ngIf"],["class","mina",4,"ngIf"],[1,"minas-adyacentes"],[1,"mina"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"i",3),e.TgZ(4,"span"),e._uU(5),e.qZA()(),e.TgZ(6,"div",4),e.NdJ("click",function(){return t.reiniciar()}),e._UZ(7,"i",5),e.qZA()(),e.YNc(8,v,2,1,"div",6),e.qZA()),2&n&&(e.xp6(5),e.hij(" ",t.tablero.cantidadMinas,""),e.xp6(2),e.Q6J("ngClass",t.obtenerEmote()),e.xp6(1),e.Q6J("ngIf",t.tablero))},dependencies:[b.mk,b.sg,b.O5],styles:['.full-screen[_ngcontent-%COMP%]{height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#f8f8f8}.tablero-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;margin-bottom:10px}.tablero-header[_ngcontent-%COMP%]   .contador-minas[_ngcontent-%COMP%]{font-weight:700;font-size:30px;color:#2e2f31}.tablero-header[_ngcontent-%COMP%]   .boton-emote[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border-radius:50%;font-size:30px;color:#fdc43f;margin-left:10px}.tablero-header[_ngcontent-%COMP%]   .boton-emote[_ngcontent-%COMP%]:hover{cursor:pointer;animation:_ngcontent-%COMP%_pulse-yellow 2s infinite}.tablero[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.tablero[_ngcontent-%COMP%]   .fila[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:1rem}.tablero[_ngcontent-%COMP%]   .celda[_ngcontent-%COMP%]{height:3vw;width:3vw;display:flex;flex-direction:row;justify-content:center;align-items:center;border-radius:.5vw;transition:background-color .5s}.tablero[_ngcontent-%COMP%]   .celda[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700;font-size:30px}.tablero[_ngcontent-%COMP%]   .minas-adyacentes[cantidad][_ngcontent-%COMP%]{color:#000}.tablero[_ngcontent-%COMP%]   .minas-adyacentes[cantidad="1"][_ngcontent-%COMP%]{color:#0f80aa}.tablero[_ngcontent-%COMP%]   .minas-adyacentes[cantidad="2"][_ngcontent-%COMP%]{color:#538d22}.tablero[_ngcontent-%COMP%]   .minas-adyacentes[cantidad="3"][_ngcontent-%COMP%]{color:#ff5a5f}.tablero[_ngcontent-%COMP%]   .minas-adyacentes[cantidad="4"][_ngcontent-%COMP%]{color:#1d4e89}.tablero[_ngcontent-%COMP%]   .minas-adyacentes[cantidad="5"][_ngcontent-%COMP%]{color:#ad2e24}.tablero[_ngcontent-%COMP%]   .minas-adyacentes[cantidad="6"][_ngcontent-%COMP%]{color:#339989}.tablero[_ngcontent-%COMP%]   .minas-adyacentes[cantidad="7"][_ngcontent-%COMP%]{color:#46494c}.tablero[_ngcontent-%COMP%]   .minas-adyacentes[cantidad="8"][_ngcontent-%COMP%]{color:#7d7d88}.celda-mina[_ngcontent-%COMP%]{background-color:#f25c54b6;animation:_ngcontent-%COMP%_pop .3s linear 1}.celda-mina[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#2e2f31d5}.celda-reventada[_ngcontent-%COMP%]{background-color:#f25c54;animation:_ngcontent-%COMP%_pulse 1s ease-in infinite}.celda-reventada[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#2e2f31}.celda-normal[_ngcontent-%COMP%]{background-color:#dcdcdc}.celda-normal[_ngcontent-%COMP%]:hover{background-color:#d3d3d3;transform:scale(1.1)}.celda-visible[_ngcontent-%COMP%]{background-color:#ffd99b;animation:_ngcontent-%COMP%_pop .3s linear 1}@keyframes _ngcontent-%COMP%_pop{50%{transform:scale(1.2)}}@keyframes _ngcontent-%COMP%_pulse{25%{transform:scale(.9)}75%{transform:scale(1.1)}}@keyframes _ngcontent-%COMP%_pulse-yellow{0%{box-shadow:0 0 #ffb142b3}70%{box-shadow:0 0 0 10px #ffb14200}to{box-shadow:0 0 #ffb14200}}']});var O=l(322);const P=[{path:"",component:f}];class d{}d.\u0275fac=function(n){return new(n||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[b.ez,O.Bz.forChild(P)]})}}]);