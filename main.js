const { createApp } = Vue;

const task = {
    data : function(){
        return {
            message : "Salve, ",
            nome: "Ermenegildo",
            cognome : "Bollocks",
            image :"./img/Hondas2000.jpg"
        }
    }
};
createApp(task).mount(`#app`);