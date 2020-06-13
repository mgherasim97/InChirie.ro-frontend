// un program care manageuieste procesele, putem avea mai multe procese
// dar vrem un singur proces sa fie cel care manage-uieste

function Process(state){
    // informatiile despre procesul nostru
    // exemplu: running, stopped etc
   this.state = state; 


}

// asta e o functie care se cheama pe ea

const Singleton = (function(){

    // constructorul
    function ProcessManager(){
        this.numProcess = 0;
    }
    // referinta singurei instate va sta aici
    let pManager;

    // asta creeaza instanta
    // si o returneaza
    // asta nu trb chemata din afara
    function createProcessManager(){
        pManager = new ProcessManager();
        return pManager;
    }

    // aici avem grija daca s-a creeat deja instanta, daca da
    // atunci creem una noua
    return {
        getProcessmanager:() => {
            if(!pManager)
                pManager = createProcessManager();
            return pManager;
        }
    }
})()

// creem procesele
const processManager = Singleton.getProcessmanager();
const processmanager2 = Singleton.getProcessmanager();

// verificaam daca e unul si acelasi
console.log(processManager === processmanager2)