import {MetaType} from "../datatypes/index";

const getMeta = () => {
let metas = document.getElementsByTagName("meta");
    let meta: MetaType = {
        url: "",
        title: "",
        description: "",
        image: ""
    };
    for (let  i=0; i<metas.length; i++) { 
        if (metas[i].getAttribute("property") == "og:url") { 
            meta.url = metas[i].getAttribute("content"); 
        } 
        if (metas[i].getAttribute("property") == "og:title") { 
            meta.title = metas[i].getAttribute("content"); 
        }
        if (metas[i].getAttribute("property") == "og:image") { 
            meta.image = metas[i].getAttribute("content"); 
        } 
        if (metas[i].getAttribute("property") == "og:description") { 
            meta.description = metas[i].getAttribute("content"); 
        } 
    } 
    return meta;
}

export  {getMeta};