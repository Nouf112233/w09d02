const instialState ={
    name:[]
   
};
const tasks=(state=instialState,action)=>{
    const { type,payload}=action;
    switch (type){
        case "ADD":
            const {name}=payload;
            return{name};
        case "DELETE":
            const {name}=payload;
            return{name};
        case "UPDATE":
            const {name}=payload;
            return{name};
        default:
            return state;
    }
}

export default tasks;


export const add=(data)=>{
    return {
        type:"ADD",
        payload:data
    };
};

export const delet=(data)=>{
    return {
        type:"DELETE",
        payload:data
    };
};

export const update=(data)=>{
    return {
        type:"UPDATE",
        payload:data
    };
};