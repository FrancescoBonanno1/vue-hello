const { createApp } = Vue;

const task = {
    data : function(){
        return {
            message : "Salve, ",
            nome: "Ermenegildo",
            color : "Green"
        }
    }
};
createApp(task).mount(`#app`);