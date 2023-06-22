let openTopic = document.querySelectorAll(".js-open-topic");


for (var i = 0; i < openTopic.length ; i++ )  {
    openTopic[i].addEventListener ("click", (e)=> {
        let openTopic_parent = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
        console.log(openTopic_parent)
        openTopic_parent.classList.toggle("grammer-drop-open");
    })
}


let openTopic_2 = document.querySelectorAll(".js-open-topic-test")



for(var i = 0; i<openTopic_2.length; i++ ) {
    openTopic_2[i].addEventListener ("click", (e) => {
        let openTopic_parent2 = e.target.parentElement
        console.log(openTopic_parent2)
        openTopic_parent2.classList.toggle("grammer-drop-open");

    } )
}

let openTopic_3 = document.querySelectorAll(".js-open-topic-3")
for(var i = 0; i<openTopic_3.length; i++ ) {
    openTopic_3[i].addEventListener ("click", (e) => {
        let openTopic_parent3 = e.target.parentElement.parentElement.parentElement.parentElement
        console.log(openTopic_parent3)
        openTopic_parent3.classList.toggle("grammer-drop-open");
    
    })
}


let openTopic_4 = document.querySelectorAll(".js-open-topic-part")
for(var i = 0; i<openTopic_4.length; i++ ) {
    openTopic_4[i].addEventListener ("click", (e) => {
        let openTopic_parent4 = e.target.parentElement.parentElement
        console.log(openTopic_parent4)
        openTopic_parent4.classList.toggle("grammer-drop-open");
    
    })
}

