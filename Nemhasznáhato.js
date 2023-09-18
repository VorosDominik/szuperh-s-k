export class nemhasz{
#list=[]
constructor(szuloelem,list){
this.szuloelem=szuloelem
this.#list=list
this.tablaelem=$("<table>").appendTo(szuloelem);
this.megjelenités();



}
megjelenités(){
    let txt =""
for (let index = 0; index < this.#list.length; index++) {
    txt += '<tr>';
    txt+=txt += `<td>${this.#list[index]}</td>`;
    txt += '</tr>';

}
this.tablaelem.append(txt);


}



}