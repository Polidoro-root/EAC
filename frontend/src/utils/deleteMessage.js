const deleteMessage = function(){
    if(document.querySelector('span.action')){
        document.querySelector('span.action').remove();
    }
}

export default deleteMessage;