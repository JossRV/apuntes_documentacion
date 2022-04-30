$(document).ready(function(){
    setInterval(()=>{
        let horas = document.getElementById('horas');
        let minutos = document.getElementById('minutos');
        let segundos = document.getElementById('segundos');
        let ampm = document.getElementById('ampm');

        let hh = document.getElementById('hh');
        let mm = document.getElementById('mm');
        let ss = document.getElementById('ss');

        let hr_punto = document.getElementById('hr_punto');
        let m_punto = document.getElementById('m_punto');
        let s_punto = document.getElementById('s_punto');

        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        let apm = h >= 12 ? "PM" : "AM";

        // convertir a formato de 12 hrs
        if(h > 12){
            h = h - 12;
        }

        // agregar ceros
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        
        horas.innerHTML = h + "<br><span>horas</span>";
        minutos.innerHTML = m + "<br><span>minutos</span>";
        segundos.innerHTML = s + "<br><span>segundos</span>";
        ampm.innerHTML = apm;

        hh.style.strokeDashoffset = 440 - (440 * h) / 12;
        // reloj de 12 hrs de 24 seria entre 24
        mm.style.strokeDashoffset = 440 - (440 * m) / 60;
        // 60 minutos
        ss.style.strokeDashoffset = 440 - (440 * s) / 60;
        // 60 segundos

        hr_punto.style.transform = `rotate(${h * 30}deg)`;
        // 360 / 12 = 30
        m_punto.style.transform = `rotate(${m * 6}deg)`;
        // 360 / 60 = 6
        s_punto.style.transform = `rotate(${s * 6}deg)`;
        // 360 / 60 = 6
    });
});