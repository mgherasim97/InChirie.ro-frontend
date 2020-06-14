var Object ={

    headers: {},
   

    get params(){
        return {headers:headers};
    },

    set params(param1){
        this.headers = param1;
 
    }
}

export default Object;