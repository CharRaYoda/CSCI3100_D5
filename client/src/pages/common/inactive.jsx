import React, { useEffect} from 'react';
import moment from 'moment'
const IdleTimeOutHandler = (props)=>{
    let timer=undefined;
    const events= ['click','scroll','load','keydown']
    const eventHandler =(eventType)=>{
        
        console.log(eventType)
        localStorage.setItem('lastInteractionTime',moment() )
        if(timer){
            props.onActive();
            startTimer();
        }
    };
    
    useEffect(()=>{
        addEvents();
        
        return (()=>{
            
            removeEvents();
        })
    },[])
    
    const startTimer=()=>{
        
        timer=setTimeout(()=>{
            
            let lastInteractionTime=localStorage.getItem('lastInteractionTime')
            const diff = moment.duration(moment().diff(moment(lastInteractionTime)));
            let timeOutInterval=props.timeOutInterval?props.timeOutInterval:30000;
            
            if(diff._milliseconds<timeOutInterval){
                startTimer();
                props.onActive();
            }else{
                props.onIdle();
            }
        },props.timeOutInterval?props.timeOutInterval:30000)
        
        
    }
    const addEvents=()=>{
        
        events.forEach(eventName=>{
            window.addEventListener(eventName,eventHandler)
        })
        
        startTimer();
    }
    
    const removeEvents=()=>{
        events.forEach(eventName=>{
            window.removeEventListener(eventName,eventHandler)
        })
    };
    
    return(
        <div></div>
        )
        
    }
    
    export default IdleTimeOutHandler;