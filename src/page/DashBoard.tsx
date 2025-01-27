
import { useEffect, useState } from 'react'

import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { CreateControlModel } from '../components/CreateControlModel'
import { PlusIcon } from '../Icons/PlusIcon'
import { ShareIcon } from '../Icons/ShareIcon'
import { SideBar } from '../components/SideBar'
import { useContent } from '../components/useContent'
import { shareBrain } from '../components/shareBrain_fetch'

export enum contentType{
  Home="home",
  Youtube="youtube",
  Twitter="twitter"
}

export function DashBoard(){
    const [modalOpen ,setModalOpen]=useState(false); //modal=open or close

    const [state ,setState]=useState(true);//content delete or not

    const [types ,setTypes]=useState(contentType.Home)

    const home=useContent("/content");
    const yotube=useContent("/content/youtube");
    const twitter=useContent("/content/twitter");


    


    useEffect(()=>{
      
      if(types==contentType.Youtube){
        yotube.refresh();
      }
      else if(types==contentType.Twitter){
        twitter.refresh();
      }
      
      home.refresh()

      
    },[modalOpen,state])

    

    return <div className='flex'>
  
        <SideBar typess={types} whichtype={setTypes}></SideBar>
  
        <div className='w-full bg-slate-100  border-2'>
            <CreateControlModel open={modalOpen} onClose={()=>{
              setModalOpen(false);
            }}></CreateControlModel>
  
            <div className='flex justify-end gap-4 pr-3 pt-3' >
              <Button varient='primary' size="sm" text="Add Content" startIcon={<PlusIcon size="sm" />} onClick={()=>{setModalOpen(true)}} ></Button>
              <Button varient='secondary' size="sm" text="Share Brain"  startIcon={<ShareIcon size="sm" />} onClick={shareBrain}></Button>
            </div>
            
            <div className='pl-3 flex gap-4 mt-3 flex-wrap'>

              {types==contentType.Home && home.contents.map(({link,type,title,date,time,_id})=><Card onDelete={()=>{setState(!state)}} title={title} type={type} link={link} date={date} time={time} id={_id}></Card>)}
              {types==contentType.Youtube && yotube.contents.map(({link,type,title,date,time,_id})=><Card onDelete={()=>{setState(!state)}} title={title} type={type} link={link} date={date} time={time} id={_id}></Card>)}
              {types==contentType.Twitter && twitter.contents.map(({link,type,title,date,time,_id})=><Card onDelete={()=>{setState(!state)}} title={title} type={type} link={link} date={date} time={time} id={_id}></Card>)}

            </div>

            
        </div>
          
          
     </div>
}