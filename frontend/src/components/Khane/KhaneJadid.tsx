import type { Component } from 'solid-js';
import app_style from "./KhaneJadid.module.css"

import { createResource } from "solid-js";


import PocketBase from 'pocketbase';
import { PB_IP } from '../../utils/pb';
const pb = new PocketBase(PB_IP);

const getCollection = async function(source:{collection:string,page:number,per_page:number}) {
  return await pb.collection(source.collection).getList(source.page,source.per_page,{
    sort: '-created',
  })
}



const KhaneJadid: Component = (props) => {

  const mosavar_source = {collection:"mosavarha",page:1,per_page:3}
  const [mosavarha] = createResource(() => ({...mosavar_source}),getCollection);

  const namavagan_source = {collection:"namavagan",page:1,per_page:3}
  const [namavagan] = createResource(() => ({...namavagan_source}),getCollection);

  const baziha_source = {collection:"baziha",page:1,per_page:3}
  const [baziha] = createResource(() => ({...baziha_source}),getCollection);

  return (
    <>
      <div class={`${app_style.khane_jadid}`}><div class={`${app_style.khane_jadid__box} box`}>

        <div>
          <h2>مصورها</h2>
          {mosavarha()?.items.map(item => (
            <div>
              <a href={`/mosavarha/id/${item.id}`}><p>{item.shekl} : {item.fa_title} | {item.en_title}</p></a>
            </div>
          ))}
        </div>

        <div>
          <h2>نواگان</h2>
          {namavagan()?.items.map(item => (
            <div>
              <a href={`/navaha/id/${item.id}`}><p>{item.shekl} : {item.fa_title} | {item.en_title}</p></a>
            </div>
          ))}
        </div>

        <div>
          <h2>بازی ها</h2>
          {baziha()?.items.map(item => (
            <div>
              <a href={`/baziha/id/${item.id}`}><p>{item.sakoo} : {item.fa_title} | {item.en_title}</p></a>
            </div>
          ))}
        </div>



      </div></div>
    </>
  );
};

export default KhaneJadid;
