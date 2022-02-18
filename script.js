var imagens = [
    "https://st.depositphotos.com/1001026/1690/i/600/depositphotos_16902629-stock-photo-sunrise-and-hills.jpg",
    "https://th.bing.com/th/id/OIP.MA-lItImxJjML62o0-2uFgHaGf?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/R.41f6efd0432a1fa12c6afe137b31da44?rik=S1JI%2fPYHXdKuvw&riu=http%3a%2f%2fst.gde-fon.com%2fwallpapers_original%2f76625_pejzazh_oboi_vid_vecher_1920x1200_www.Gde-Fon.com.jpg&ehk=kh0YOf1TOxZfZW4oTSFOHF48ysgux8DH32%2bNUNG1wEk%3d&risl=&pid=ImgRaw&r=0"
] 

function atualiza(){
    var data = new Date()
    var hora = Number.parseInt(data.getHours())
    var minutos = Number.parseInt(data.getMinutes())
    var imgHTML = window.document.querySelector('img.imagem')
    var horaHTML = window.document.querySelector('span.hora')
    var saudacao = window.document.querySelector('span.saudacao')

    

    if(hora > 4 && hora <= 12){
        if(hora >= 0 && hora < 10){
            imgHTML.src = imagens[0]
            horaHTML.innerHTML = `São Exatamente 0${hora}:${minutos}`
            saudacao.innerHTML = 'Bom Dia'
            var sc = document.querySelector("section")
            sc.style.background = 'linear-gradient(0deg, #99AA40 20%, #126EC5 80%)'
        }else{
            imgHTML.src = imagens[0]
            horaHTML.innerHTML = `São Exatamente ${hora}:${minutos}`
            saudacao.innerHTML = 'Bom Dia'
            var sc = document.querySelector("section")
            sc.style.background = 'linear-gradient(0deg, #99AA40 20%, #126EC5 80%)'   
        }
    }else if(hora > 12 && hora <= 18){

        imgHTML.src = imagens[1]
        horaHTML.innerHTML = `São Exatamente ${hora}:${minutos}`
        saudacao.innerHTML = 'Boa Tarde'
        var sc = document.querySelector("section")
        sc.style.background = 'linear-gradient(0deg, #FFBE29 20%, #3F7C85 80%)'

    }else{
        if(hora >= 0 && hora < 10){
            imgHTML.src = imagens[2]
            horaHTML.innerHTML = `São Exatamente 0${hora}:${minutos}`
            saudacao.innerHTML = 'Boa Noite'        
            var sc = document.querySelector("section")
            sc.style.background = 'linear-gradient(0deg, #010304 20%, #3E517C 80%)'      
        }else{
            imgHTML.src = imagens[2]
            horaHTML.innerHTML = `São Exatamente ${hora}:${minutos}`
            saudacao.innerHTML = 'Boa Noite'        
            var sc = document.querySelector("section")
            sc.style.background = 'linear-gradient(0deg, #010304 20%, #3E517C 80%)'   
        }  
    }
}