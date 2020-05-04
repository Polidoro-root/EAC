const createMessage = function(id, message){
    if(!document.querySelector('span.action')){
        const aElement = document.querySelector(`#${id}`);
        const spanElement = document.createElement('span');            
        const text = document.createTextNode(message);
        
        spanElement.setAttribute('class', 'action');
        spanElement.style.color = "#76b7eb";
        spanElement.style.fontWeight = "bold";
        spanElement.style.fontSize = "70%";                       
        spanElement.appendChild(text);        
        aElement.appendChild(spanElement);            
    }
};

export default createMessage;