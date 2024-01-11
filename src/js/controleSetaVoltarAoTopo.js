const sections = document.querySelector('.ativar-seta-topo');

const setaTopo = document.getElementsByClassName("seta-top")


console.log(setaTopo);
const myObserver = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting){       
        setaTopo[0].classList.remove("opacidade")        
    }else{
        setaTopo[0].classList.add("opacidade")
    }

})

myObserver.observe(sections)

