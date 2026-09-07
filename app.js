const STUDENTS = [{"code": "3G-01", "group": "3G", "name": "AGUILAR PLACIDO MARIA FERNANDA"}, {"code": "3G-02", "group": "3G", "name": "ANGELES VALDEZ VICTORIA JULISA"}, {"code": "3G-03", "group": "3G", "name": "AVALOS CASTILLO DEREK"}, {"code": "3G-04", "group": "3G", "name": "AYALA MONDRAGON DORYAN MICHEL"}, {"code": "3G-05", "group": "3G", "name": "CAMACHO MACIAS WILLIAM URIEL"}, {"code": "3G-06", "group": "3G", "name": "CAMPOS MOSSO XIMENA ZOE"}, {"code": "3G-07", "group": "3G", "name": "CASTILLO PIMENTEL JUAN ELIAS"}, {"code": "3G-08", "group": "3G", "name": "CASTRO ZAYAS JOSE EMILIANO"}, {"code": "3G-09", "group": "3G", "name": "COLIN REYES LIZETH ABIGAIL"}, {"code": "3G-10", "group": "3G", "name": "CONTRERAS MORAN CARLOS EMILIO"}, {"code": "3G-11", "group": "3G", "name": "CRUZ CONTRERAS SANTIAGO"}, {"code": "3G-12", "group": "3G", "name": "DE LEON GARCIA SOPHIA ELIZABETH"}, {"code": "3G-13", "group": "3G", "name": "DIAZ ARCOS INGRID ITZAYETZI"}, {"code": "3G-14", "group": "3G", "name": "DIAZ CHAVEZ ARTURO"}, {"code": "3G-15", "group": "3G", "name": "FLORES TAPIA IVAN ARTURO"}, {"code": "3G-16", "group": "3G", "name": "GONZALEZ UNBE ALEJANDRO"}, {"code": "3G-17", "group": "3G", "name": "HIDALGO GONZALEZ GABRIEL"}, {"code": "3G-18", "group": "3G", "name": "JAIME GARCIA DANIELA"}, {"code": "3G-19", "group": "3G", "name": "JIMENEZ GALVAN GLORIA ITZA"}, {"code": "3G-20", "group": "3G", "name": "MARTINEZ ORTIZ LUZ CLARITA"}, {"code": "3G-21", "group": "3G", "name": "NOLASCO FERNANDEZ HAILE ALAIN"}, {"code": "3G-22", "group": "3G", "name": "OSORIO VILLICANA ANA LAURA"}, {"code": "3G-23", "group": "3G", "name": "PERALTA DIAZ NATALIA"}, {"code": "3G-24", "group": "3G", "name": "REYES CARCIA JOSE DITTER"}, {"code": "3G-25", "group": "3G", "name": "RODEA CIRA LUNA YOHUALLI"}, {"code": "3G-26", "group": "3G", "name": "RODRIGUEZ ESTRADA GAEL ALESSANDRO"}, {"code": "3G-27", "group": "3G", "name": "ROLDAN BEJARANO MELISA"}, {"code": "3G-28", "group": "3G", "name": "ROMERO MARTINEZ MARIEL AKETZALLI"}, {"code": "3G-29", "group": "3G", "name": "SANCHEZ MORALES SKIRLA SKARLETH"}, {"code": "3G-30", "group": "3G", "name": "VALDES ROMERO XIMENA"}, {"code": "3G-31", "group": "3G", "name": "VALDEZ BERMUDEZ HECTOR DANIEL"}, {"code": "3G-32", "group": "3G", "name": "VALENCIA DE LA CRUZ JOSEPH ALEXANDER"}, {"code": "3G-33", "group": "3G", "name": "VALTIERRA CHAVEZ MAXIMILIANO"}, {"code": "3G-34", "group": "3G", "name": "VARGAS SANCHEZ SHARON VALERIA"}, {"code": "3G-35", "group": "3G", "name": "VAZQUEZ PARRA MEREDITH"}, {"code": "3H-01", "group": "3H", "name": "DE LEON MORALES LUIS LEONEL"}, {"code": "3H-02", "group": "3H", "name": "ALCALA LEON ROSA IVONNE"}, {"code": "3H-03", "group": "3H", "name": "ANTONIO GABRIEL NAYIBET ZURISADAY"}, {"code": "3H-04", "group": "3H", "name": "ARCE VARGAS STEPHANIA"}, {"code": "3H-05", "group": "3H", "name": "ARELLANO CONTRERAS FATIMA AILYN"}, {"code": "3H-06", "group": "3H", "name": "DIAZ GARDUNO ARLETTE JANETH"}, {"code": "3H-07", "group": "3H", "name": "GARCIA LOPEZ EDUARDO SANTIAGO"}, {"code": "3H-08", "group": "3H", "name": "GARCIA MADERA XIMENA RUBY"}, {"code": "3H-09", "group": "3H", "name": "GARRIDO BERNAL SOFIA"}, {"code": "3H-10", "group": "3H", "name": "GONZALEZ LEE XIMENA GUADALUPE"}, {"code": "3H-11", "group": "3H", "name": "GONZALEZ VALLE YESENIA DENISSE"}, {"code": "3H-12", "group": "3H", "name": "GRANADOS DE LA CRUZ IKER EZEQUIEL"}, {"code": "3H-13", "group": "3H", "name": "HERNANDEZ ALVAREZ ABRIL"}, {"code": "3H-14", "group": "3H", "name": "ISIDRO BERMUDEZ ABRIL NAYARA"}, {"code": "3H-15", "group": "3H", "name": "JIMENEZ VELEZ DANTE"}, {"code": "3H-16", "group": "3H", "name": "JUAN SEGUNDO MARIA DE LOS ANGELES"}, {"code": "3H-17", "group": "3H", "name": "MARTINEZ LOPEZ DULCE CAMILA"}, {"code": "3H-18", "group": "3H", "name": "MENDOZA CRUZ JONATHAN MICHELLE"}, {"code": "3H-19", "group": "3H", "name": "MORALES GARCIA SOFIA FERNANDA"}, {"code": "3H-20", "group": "3H", "name": "MUNOZ GARCIA IKER RAFAEL"}, {"code": "3H-21", "group": "3H", "name": "ORTA TRUJILLO COLE JEFF"}, {"code": "3H-22", "group": "3H", "name": "ORTIZ GUADARRAMA RODRIGO"}, {"code": "3H-23", "group": "3H", "name": "PALMA HERNANDEZ ALIKA EVOLET"}, {"code": "3H-24", "group": "3H", "name": "PENA TORRES BRYAN MATEO"}, {"code": "3H-25", "group": "3H", "name": "REYES BANDA ARATH ITZAE"}, {"code": "3H-26", "group": "3H", "name": "RIVERA AGUIRRE IAN MATTEO"}, {"code": "3H-27", "group": "3H", "name": "ROMERO LAGUNAS GABRIEL ALEJANDRO"}, {"code": "3H-28", "group": "3H", "name": "RUIZ VILLAFANA XIMENA"}, {"code": "3H-29", "group": "3H", "name": "SALAZAR MORENO SANTIAGO"}, {"code": "3H-30", "group": "3H", "name": "TAPIA VAZQUEZ FERNANDO AGUSTIN"}, {"code": "3H-31", "group": "3H", "name": "URIBE GARCIA LUIS JESUS"}, {"code": "3H-32", "group": "3H", "name": "VI-CHIS FLORENCIO JOCELYN STEPHANIA"}, {"code": "3H-33", "group": "3H", "name": "ZARZA SANTILLAN MICHEL EMILIANO"}, {"code": "3H-34", "group": "3H", "name": "GOMORA MARTINEZ MARIA JOSE"}, {"code": "3H-35", "group": "3H", "name": "ESQUIVEL CERA FATIMA SELENE"}];
let currentStudent=null,selectedScore=null,stream=null,scanTimer=null;
const $=id=>document.getElementById(id);
$('date').value=new Date().toISOString().slice(0,10);

const STORAGE_KEY='historia_records_v3';
const OLD_STORAGE_KEY='historia_records_v2';
function migrateRecords(){
  if(localStorage.getItem(STORAGE_KEY)) return;
  try{
    const old=JSON.parse(localStorage.getItem(OLD_STORAGE_KEY)||'[]');
    localStorage.setItem(STORAGE_KEY,JSON.stringify(old.map(r=>({...r,sync_state:r.sync_state||'pending'}))));
  }catch{
    localStorage.setItem(STORAGE_KEY,'[]');
  }
}
function loadRecords(){migrateRecords();try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]')}catch{return[]}}
function saveRecords(r){localStorage.setItem(STORAGE_KEY,JSON.stringify(r))}
function renderScores(){
 const vals=[1,.9,.8,.7,.6,.5,.4,.3,.2,.1,0];
 $('scoreGrid').innerHTML='';
 vals.forEach(v=>{const b=document.createElement('button');b.className='score '+(v>=.8?'green':v>=.6?'yellow':v>=.3?'orange':'red');b.textContent=v.toFixed(1);
 b.onclick=()=>{selectedScore=v;document.querySelectorAll('.score').forEach(x=>x.classList.remove('sel'));b.classList.add('sel')};$('scoreGrid').appendChild(b)})
}
function populateStudents(){
 const group=$('group').value; const opts=STUDENTS.filter(s=>s.group===group);
 $('studentSelect').innerHTML=opts.map(s=>`<option value="${s.code}">${s.code} · ${s.name}</option>`).join('');
}
$('group').onchange=populateStudents; populateStudents();
function status(m){$('scanStatus').textContent=m;$('scanStatus').classList.remove('hidden')}
function hideStatus(){$('scanStatus').classList.add('hidden')}
function setStudent(code){
 const s=STUDENTS.find(x=>x.code.toUpperCase()===String(code).trim().toUpperCase());
 if(!s){status('Código no encontrado.');return}
 currentStudent=s;$('studentName').textContent=s.name;$('studentMeta').textContent=`${s.group} · ${s.code}`;
 $('group').value=s.group;populateStudents();$('studentSelect').value=s.code;
 $('studentBox').classList.remove('hidden');$('evaluationCard').classList.remove('hidden');
 selectedScore=null;document.querySelectorAll('.score').forEach(x=>x.classList.remove('sel'));
 $('workStatus').value='Realizado';$('participation').value='';$('conduct').value='';$('notes').value='';hideStatus()
}
$('manualBtn').onclick=()=>$('manualWrap').classList.toggle('hidden');
$('loadStudentBtn').onclick=()=>setStudent($('studentSelect').value);

async function startScanner(){
 if(!('BarcodeDetector' in window)){status('Tu navegador no ofrece lector QR nativo. Usa Código / lista.');$('manualWrap').classList.remove('hidden');return}
 try{
  const detector=new BarcodeDetector({formats:['qr_code']});
  stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}});
  $('video').srcObject=stream;await $('video').play();$('scannerWrap').classList.remove('hidden');
  scanTimer=setInterval(async()=>{try{const codes=await detector.detect($('video'));if(codes.length){const raw=codes[0].rawValue;stopScanner();setStudent(raw)}}catch{}},400)
 }catch(e){status('No pude abrir la cámara. Usa Código / lista.');$('manualWrap').classList.remove('hidden')}
}
function stopScanner(){if(scanTimer)clearInterval(scanTimer);scanTimer=null;if(stream)stream.getTracks().forEach(t=>t.stop());stream=null;$('scannerWrap').classList.add('hidden')}
$('scanBtn').onclick=startScanner;$('stopScanBtn').onclick=stopScanner;

$('saveBtn').onclick=()=>{
 const activity=$('activity').value.trim();if(!activity){alert('Escribe primero la actividad.');return}
 if(!currentStudent){alert('Selecciona un alumno.');return}
 const st=$('workStatus').value;if(st!=='Ausente'&&selectedScore===null){alert('Selecciona una calificación.');return}
 const r=loadRecords(),now=new Date();
 r.push({id:(crypto.randomUUID?crypto.randomUUID():String(Date.now())+Math.random()),timestamp:now.toISOString(),fecha:$('date').value,
 grupo:currentStudent.group,codigo:currentStudent.code,alumno:currentStudent.name,actividad:activity,valor:st==='Ausente'?'':selectedScore.toFixed(1),
 estado:st,participacion:$('participation').value,conducta:$('conduct').value,observaciones:$('notes').value.trim(),sync_state:'pending'});
 saveRecords(r);renderRecords();
 currentStudent=null;$('studentBox').classList.add('hidden');$('evaluationCard').classList.add('hidden');
 setTimeout(()=>{ if('vibrate' in navigator) navigator.vibrate(50); },20);
};
function esc(v){const s=String(v??'');return `"${s.replaceAll('"','""')}"`}
function dl(n,c,t){const blob=new Blob([c],{type:t}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=n;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
$('exportBtn').onclick=()=>{const r=loadRecords();if(!r.length){alert('No hay registros.');return}const hs=['timestamp','fecha','grupo','codigo','alumno','actividad','valor','estado','participacion','conducta','observaciones'];
 const csv='\ufeff'+hs.join(',')+'\n'+r.map(x=>hs.map(h=>esc(x[h])).join(',')).join('\n');dl(`historia_registros_${new Date().toISOString().slice(0,10)}.csv`,csv,'text/csv;charset=utf-8')};
$('backupBtn').onclick=()=>dl(`historia_respaldo_${new Date().toISOString().slice(0,10)}.json`,JSON.stringify(loadRecords(),null,2),'application/json');
$('clearBtn').onclick=()=>{if(confirm('¿Borrar TODOS los registros guardados en este dispositivo?')){localStorage.removeItem(STORAGE_KEY);renderRecords();renderSyncCounts()}};
function renderRecords(){
  const r=loadRecords();
  $('recordCount').textContent=r.length;
  $('recentRows').innerHTML=r.slice(-10).reverse().map(x=>`<tr><td>${x.fecha}</td><td>${x.alumno}</td><td>${x.actividad}</td><td>${x.valor||'A'}</td></tr>`).join('');
  renderSyncCounts();
}

// ---- Sincronización Google Sheets ----
const SYNC_URL_KEY='historia_sync_url_v1';
const SYNC_TOKEN_KEY='historia_sync_token_v1';

function loadSyncConfig(){
  $('syncUrl').value=localStorage.getItem(SYNC_URL_KEY)||'';
  $('syncToken').value=localStorage.getItem(SYNC_TOKEN_KEY)||'';
}
function saveSyncConfig(){
  const url=$('syncUrl').value.trim();
  const token=$('syncToken').value.trim();
  if(!url || !token){alert('Escribe la URL y la clave de sincronización.');return}
  localStorage.setItem(SYNC_URL_KEY,url);
  localStorage.setItem(SYNC_TOKEN_KEY,token);
  showSyncStatus('Configuración guardada en este teléfono.');
}
function showSyncStatus(msg){
  $('syncStatus').textContent=msg;
  $('syncStatus').classList.remove('hidden');
}
function renderSyncCounts(){
  const r=loadRecords();
  const pending=r.filter(x=>(x.sync_state||'pending')!=='sent').length;
  const sent=r.filter(x=>x.sync_state==='sent').length;
  if($('pendingCount')) $('pendingCount').textContent=pending;
  if($('sentCount')) $('sentCount').textContent=sent;
}
async function sendBatch(records,force=false){
  const url=localStorage.getItem(SYNC_URL_KEY)||'';
  const token=localStorage.getItem(SYNC_TOKEN_KEY)||'';
  if(!url || !token){showSyncStatus('Primero guarda la URL y la clave.');return false}
  if(!navigator.onLine){showSyncStatus('No hay conexión. Los registros siguen guardados en el teléfono.');return false}

  const toSend=force?records:records.filter(r=>(r.sync_state||'pending')!=='sent');
  if(!toSend.length){showSyncStatus('No hay registros pendientes.');return true}

  $('syncBtn').disabled=true;
  $('syncBtn').textContent='Enviando…';
  try{
    await fetch(url,{
      method:'POST',
      mode:'no-cors',
      headers:{'Content-Type':'text/plain;charset=utf-8'},
      body:JSON.stringify({
        token,
        app:'historia-qr-v3',
        sent_at:new Date().toISOString(),
        records:toSend
      })
    });
    const ids=new Set(toSend.map(x=>x.id));
    const when=new Date().toISOString();
    saveRecords(records.map(r=>ids.has(r.id)?{...r,sync_state:'sent',sync_sent_at:when}:r));
    renderRecords();
    showSyncStatus(`Envío realizado: ${toSend.length} registro(s).`);
    return true;
  }catch(e){
    showSyncStatus('No se pudo enviar. Los registros siguen guardados para intentar después.');
    return false;
  }finally{
    $('syncBtn').disabled=false;
    $('syncBtn').textContent='☁️ Sincronizar ahora';
  }
}
$('saveSyncConfigBtn').onclick=saveSyncConfig;
$('syncBtn').onclick=()=>sendBatch(loadRecords(),false);
$('resendBtn').onclick=()=>{if(confirm('¿Reenviar todos los registros? El servidor ignora duplicados por ID.'))sendBatch(loadRecords(),true)};
loadSyncConfig();

renderScores();renderRecords();
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
