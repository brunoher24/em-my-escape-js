class Storage {
    constructor(){
        // nom de l'objet storé pour cette application
        this.storageName = 'brunoher24_em_escape_js';
        let storedData = window.localStorage[this.storageName];
        // si localStorage inéxistant (instancié pour la première fois sur le navigateur)
        if(!storedData) {
            // on initialise l'objet de storage et les propriétés qu'on aura besoin
            // de récupérer et/ou de mofifier
            window.localStorage[this.storageName] = JSON.stringify({
                currentLevel: 1, // niveau actuel
                levelsCompleted: 0 // nombre de niveaux complétés
            });
        } 
    }

    get() {
        return JSON.parse(window.localStorage[this.storageName]);
    }

    getItem(prop) {
        return this.get()[prop];
    }

    set(key, value) {
        const data = this.get();
        data[key] = value;
        window.localStorage[this.storageName] = JSON.stringify(data);
    }
}
