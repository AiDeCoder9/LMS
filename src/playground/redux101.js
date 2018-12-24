import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

const incrementCount = (payload={})=>({
    type:'INCREMENT',
    incrementBy: typeof payload.incrementBy==='number' ? payload.incrementBy:1
});

const decrementCount = (payload={})=>({
    type:'DECREMENT',
    decrementBy: typeof payload.decrementBy==='number' ? payload.decrementBy:1
});

const resetCount = ()=>({
    type:'RESET'
})


const store = createStore((state={count:0},action)=>{

    switch(action.type){
        case 'INCREMENT':
        const incrementValue = action.incrementBy
        return{
            count:state.count + incrementValue
        }
        case 'DECREMENT':
        const decrementValue =action.decrementBy
        return{
            count:state.count-decrementValue
        }
        case 'RESET':
        return {
            count:0
        }
        default:
        return state;

    }
}
   

);




const unsubscribe=store.subscribe(()=>{
    console.log(store.getState('count'));
    });

store.dispatch(incrementCount());

//unsubscribe(); to unsubscribe from the watch list

store.dispatch(decrementCount());
store.dispatch(incrementCount({ incrementBy :5 } ));
store.dispatch(resetCount());


const Header =()=>(
    <div>
    <h1>hello world</h1>
    </div>
);


const app =document.getElementById('app');
ReactDOM.render(<Header/>,app);