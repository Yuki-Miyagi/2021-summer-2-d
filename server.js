import {Server} from "https://js.sabae.cc/Server.js";
import {jsonfs} from "https://js.sabae.cc/jsonfs.js";

const bichifn="data/bichi.json";
const riverfn="data/river.json";

let bichi=jsonfs.read(bichifn)|[];
let river=jsonfs.read(riverfn)|[];

class MyServer extends Server{
    api(path,req){
        
    }
}