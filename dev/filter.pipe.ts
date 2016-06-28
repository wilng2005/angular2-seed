import {Pipe} from "@angular/core";
import {PipeTransform} from "@angular/core";
import {ListItem} from "./list-item";

@Pipe({
    name:'myFilter'
})
export class FilterPipe implements PipeTransform{
    transform(value:ListItem[],args:string[]):any{
        if(!args[0]||args[0].length===0){
            return value;
        }else{
            let resultArray=[];
            for(let item of value){
                if(item.name.match('^.*'+args[0]+'.*$')){
                    resultArray.push(item);
                }
            }
            return resultArray;
        }
    }
}