class SzTablazat {
    #list = [];

    constructor(list, szuloelem) {
        this.#list = list;
        this.szuloelem = szuloelem;
        this.Tablaelem = $('<table class="table table-dark table-striped"></table>').appendTo(szuloelem);

        this.megjelenites();
    }

    megjelenites() {
        let txt = '<thead><tr>';
        // Táblázat fejléc létrehozása a megadott kulcsokkal
        const kulcsok = Object.keys(this.#list[0]).slice(0, 4); // Az első négy kulcs kiválasztása
        kulcsok.forEach((kulcs) => {
            txt += `<th>${kulcs}</th>`;
        });
        txt += `<th>Lehetőségek</th>`;
        txt += '</tr></thead><tbody>';

        // Szuperhősök adatainak megjelenítése
        for (let index = 0; index < this.#list.length; index++) {
            const szuperhos = this.#list[index];
            txt += '<tr>';
            kulcsok.forEach((kulcs) => {
                txt += `<td>${szuperhos[kulcs]}</td>`;
                
            }); 
               txt += `<td>
              
               <button type="button" class="btn btn-outline-secondary" class="elöléptetés_CSp">👑</button>
               <button type="button" class="btn btn-outline-secondary" class="Csapatba_sorolás">👨‍👩‍👧‍👦</button>
               <button type="button" class="btn btn-outline-secondary" class="leirás">📝</button>
               <button type="button" class="btn btn-outline-secondary" class="Pihenés">🍻</button>
               <button type="button" class="btn btn-outline-secondary" class="Kirugás">❌</button>

           
            </td>`;
  
            txt += '</tr>';
        }

        txt += '</tbody>';
        // A táblázat hozzáfűzése a HTML szülőelemhez
        this.Tablaelem.append(txt);
    }
}
export default SzTablazat;
