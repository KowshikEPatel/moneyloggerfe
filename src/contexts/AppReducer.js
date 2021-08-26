// eslint-disable-next-line
export default (state,action)=>{
switch(action.type){
    case 'DELETE_TRANSACTION':
    return {...state,
    transactions: state.transactions.filter(transac=>transac.id!==action.payload)}

    case 'ADD_TRANSACTION':
        return {...state,
        transactions:[action.payload,...state.transactions]}

    case 'ADD_MULTIPLE_TRASNACTIONS':
        return {
            ...state,
            transactions:[...action.payload,...state.transactions]
        }
   
    default: return state
}
}