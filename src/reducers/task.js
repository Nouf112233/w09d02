const instialState ={
    name:[]
   
};
const tasks=(state=instialState,action)=>{
    const { type,payload}=action;
    switch (type){
        case "ADD":
            const {name}=payload;
            return name;
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

