import './style.css'
import * as cryptoJS from 'crypto-js'
import * as stringifyOrdered from 'json-stable-stringify'

var btn = document.getElementById("btnCalcHash");
  btn?.addEventListener("click", function(){
    var jsonDocumentation: string = (document.getElementById('txtInput') as HTMLInputElement).value;
    var ignoraCaps: boolean = (document.getElementById('checkIgnoraCaps') as HTMLInputElement).checked;
    (document.getElementById('txtOutput') as HTMLInputElement).innerHTML = calcHash(jsonDocumentation, ignoraCaps);
  });


function calcHash(jsonDocumentation: string, ignoraCaps: boolean) : string{
  try {
    var documentationUnordered = JSON.parse(jsonDocumentation);

    var toHash: string = stringifyOrdered(documentationUnordered);

    if(ignoraCaps) 
      toHash = toHash.toLocaleLowerCase();

    return cryptoJS.SHA256(toHash).toString();
 
  } catch (error: any) {
    return error.toString();
  }
}