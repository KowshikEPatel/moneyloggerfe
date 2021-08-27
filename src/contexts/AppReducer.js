// eslint-disable-next-line
export default (state,action)=>{
switch(action.type){
    case 'DELETE_TRANSACTION':
    return {...state,
    transactions: state.transactions.filter(transac=>transac._id!==action.payload)}

    case 'ADD_TRANSACTION':
        return {...state,
        transactions:[action.payload,...state.transactions]}

    case 'ADD_MULTIPLE_TRASNACTIONS':
        return {
            ...state,
            transactions:[...action.payload,...state.transactions]
        }

    case 'DELETE_ALL_TRANSACTION':
        return {
            ...state,
            transactions:[]
        }
   
    default: return state
}
}