function Message(){
    alert("YOUR MESSAGE HAS BEEN SENT")
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.home');
hiddenElements.forEach((el) => observer.observe(el));

const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show2');
        }
        else{
            entry.target.classList.remove('show2');
        }
    });
});

const aboutElements = document.querySelectorAll('.about');
aboutElements.forEach((el) => aboutObserver.observe(el));

const ProjectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show4');
        }
        else{
            entry.target.classList.remove('show4');
        }
    });
});

const prjElements = document.querySelectorAll('.project');
prjElements.forEach((el) => ProjectObserver.observe(el));

const testObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show5');
        }
        else{
            entry.target.classList.remove('show5');
        }
    });
});

const testElements = document.querySelectorAll('.testimonials');
testElements.forEach((el) => testObserver.observe(el));

const ctObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show6');
        }
        else{
            entry.target.classList.remove('show6');
        }
    });
});

const ctElements = document.querySelectorAll('.contact');
ctElements.forEach((el) => ctObserver.observe(el));

function inspect(){
    window.location.href = "/inspect";
}