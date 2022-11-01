const speakBtn = document.getElementById("speak-btn");
speakBtn.addEventListener('click',speackNow);

//speechRecognition
const speechRecognition =  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();


recognition.onstart = function(){
  console.log("started...")
  
}
recognition.onresult = function(e){
  const resultIndex = e.resultIndex;
  const {transcript} = e.results[resultIndex][0];
  document.getElementById("content").innerHTML = transcript
  Work(transcript);
}


function speackNow(){
  recognition.start()
}


function Work(message){
    let whatToWork = message.toLowerCase();
    if(whatToWork.includes("create")){
      test = whatToWork.split(" ");     
        const para = document.createElement(test[1]);
        const node = document.createTextNode(test.slice(2).join(" "));
        para.appendChild(node);
        const element = document.getElementById("div");
        element.appendChild(para);     
    }
    else if(whatToWork.includes("style")){
      if(whatToWork.includes("background colour")){
        varstyle = whatToWork.split(" ");
        document.querySelector(varstyle[1]).style.backgroundColor = varstyle[varstyle.length -1]
      }
      else if(whatToWork.includes("colour")){
        varstyle = whatToWork.split(" ");
        document.querySelector(varstyle[1]).style.color = varstyle[varstyle.length -1]
      }
      else if(whatToWork.includes("text align")){
        varstyle = whatToWork.split(" ");
        document.querySelector(varstyle[1]).style.textAlign = "center"
      }
      else if(whatToWork.includes("background image")){
        varstyle = whatToWork.split(" ");
        document.querySelector(varstyle[1]).style.backgroundImage = 'url('+ varstyle[varstyle.length -1]+'.gif)'
      }
      else if(whatToWork.includes("background repeat")){
        varstyle = whatToWork.split(" ");
        document.querySelector(varstyle[1]).style.backgroundRepeat = 'no-repeat'
      }
      else if(whatToWork.includes("uppercase")){
        varstyle = whatToWork.split(" ");
        document.querySelector(varstyle[1]).style.textTransform = 'uppercase'
      }
    }
}
