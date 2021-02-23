<template>
  <div class="about">
    <h1>Esta es la normativa que utilizamos</h1>
    <p>Actualizado al 23 de febrero de 2021</p>
    
    <b-container>
        <b-row>
            <b-col v-for="decreto in decretos" :key="decreto">
                <div class="card">
                    <p id="name">{{ decreto.nombre }} del {{ decreto.institucion }}</p>
                    <p id="title">{{ decreto.titulo }}</p>
                    <p id="publicado">Gaceta {{ decreto.gaceta }} el {{ decreto.fecha }}</p>
                    <p>Pueden encontrarlo en:</p>
                    <div style="display: inline-block;">
                        <b-button :href="decreto.link" target="_blank" id="link" size="md">Gaceta</b-button>
                        <b-button :href="decreto.infojuridica" target="_blank" id="link" size="md">Infojuridica</b-button>
                    </div>
                    <p id="mod">Modificaciones:</p>
                    <p v-for="modificacion in decreto.modificaciones" :key="modificacion" id="mods">{{ modificacion }}</p>
                </div>

            </b-col>
        </b-row>
    </b-container>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
            decretos: [{
                nombre: 'Decreto Ejecutivo 100 de 21 de febrero de 2021',
                institucion: 'Ministerio de Salud',
                titulo: 'QUE ORDENA LA REACTIVACIÓN DE ALGUNAS ACTIVIDADES EN LAS PROVINCIAS DE PANAMÁ Y PANAMÁ OESTE, A PARTIR DEL 22 DE FEBRERO DE 2021.',
                gaceta: '29223',
                fecha: '21 de febrero de 2021',
                infojuridica: 'http://infojuridica.procuraduria-admon.gob.pa/norma_screen?numsec=55967',
                link: 'http://gacetas.procuraduria-admon.gob.pa/29223_55967.pdf',
                modificaciones: ['No ha sufrido modificaciones'],
            },
            {
                nombre: 'Decreto Ejecutivo 74 de 12 de febrero de 2021',
                institucion: 'Ministerio de Salud',
                titulo: 'QUE ESTABLECE UNA EXTENSIÓN AL HORARIO DEL TOQUE DE QUEDA A NIVEL NACIONAL, A PARTIR DEL 15 DE FEBRERO DE 2021, SE DISPONEN OTRAS MEDIDAS SANITARIAS PARA LAS PROVINCIAS DE PANAMÁ, PANAMÁ OESTE, COCLÉ, HERRERA, LOS SANTOS Y VERAGUAS, Y SE DICTAN OTRAS DISPOSICIONES.',
                gaceta: '29218-A',
                fecha: '12 de febrero de 2021',
                infojuridica: 'http://infojuridica.procuraduria-admon.gob.pa/norma_screen?numsec=55937',
                link: 'http://gacetas.procuraduria-admon.gob.pa/29218-A_55937.pdf',
                modificaciones: ['No ha sufrido modificaciones'],
            },
            {
                nombre: 'Decreto Ejecutivo 71 de 5 de febrero de 2021',
                institucion: 'Ministerio de Salud',
                titulo: 'QUE ESTABLECE NUEVAS MEDIDAS SANITARIAS EN LAS PROVINCIAS DE PANAMÁ, PANAMÁ OESTE Y HERRERA, A PARTIR DEL 8 DE FEBRERO DE 2021 Y SE DICTAN OTRAS DISPOSICIONES.',
                gaceta: '29213-B',
                fecha: '5 de febrero de 2021',
                infojuridica: 'http://infojuridica.procuraduria-admon.gob.pa/norma_screen?numsec=55908',
                link: 'https://www.gacetaoficial.gob.pa/pdfTemp/29213_B/83374.pdf',
                modificaciones: ['Deja sin efecto el artículo 1 del Decreto Ejecutivo N° 65 de 28 de enero de 2021.', 'Deja sin efecto los artículos 1 y 5 del Decreto Ejecutivo N° 66 de 28 de enero de 2021.'],
            },
            {
                nombre: 'Decreto Ejecutivo 65 de 28 de enero de 2021',
                institucion: 'Ministerio de Salud',
                titulo: 'QUE MANTIENE LAS RESTRICCIONES DISPUESTAS EN LA PROVINCIA DE HERRERA, EMITIDAS EN EL DECRETO EJECUTIVO NO. 62 DE 13 DE ENERO DE 2021.',
                gaceta: '29207-A',
                fecha: '28 de enero de 2021',
                infojuridica: 'http://infojuridica.procuraduria-admon.gob.pa/norma_screen?numsec=55857',
                link: 'http://gacetas.procuraduria-admon.gob.pa/29207-A_55857.pdf',
                modificaciones: ['El Decreto Ejecutivo 71 de 2021 deja sin efecto el Artículo 1 del presente Decreto'],
            },
            {
                nombre: 'Decreto Ejecutivo 66 de 28 de enero de 2021',
                institucion: 'Ministerio de Salud',
                titulo: 'QUE MANTIENE LAS MEDIDAS SANITARIAS DISPUESTAS PARA LAS PROVINCIAS DE PANAMÁ Y PANAMÁ OESTE, EMITIDAS EN EL DECRETO EJECUTIVO NO. 62 DE 13 DE ENERO DE 2021 Y SE AUTORIZA LA OPERACIÓN DE ACTIVIDADES EN ESTAS PROVINCIAS A PARTIR DEL 1° DE FEBRERO DE 2021',
                gaceta: '29207-A',
                fecha: '28 de enero de 2021',
                infojuridica: 'http://infojuridica.procuraduria-admon.gob.pa/norma_screen?numsec=55858',
                link: 'http://gacetas.procuraduria-admon.gob.pa/29207-A_55858.pdf',
                modificaciones: ['El Decreto Ejecutivo 71 de 2021 deja sin efecto los artículos 1 y 5 del presente Decreto'],
            },
            {
                nombre: 'Decreto Ejecutivo 62 de 13 de enero de 2021',
                institucion: 'Ministerio de Salud',
                titulo: 'QUE ESTABLECE UN HORARIO DE TOQUE DE QUEDA A NIVEL NACIONAL Y DISPONE MEDIDAS SANITARIAS EN LAS PROVINCIAS DE PANAMÁ, PANAMÁ OESTE, COCLÉ, HERRERA, LOS SANTOS Y VERAGUAS, A PARTIR DEL 14 DE ENERO DE 2021, DEBIDO AL ALTO ÍNDICE DE CONTAGIO DE LA COVID-19 Y DICTA OTRAS DISPOSICIONES',
                gaceta: '29196-B',
                fecha: '13 de enero de 2021',
                infojuridica: 'http://infojuridica.procuraduria-admon.gob.pa/norma_screen?numsec=55759',
                link: 'https://www.gacetaoficial.gob.pa/pdfTemp/29196_B/82849.pdf',
                modificaciones: ['Deroga el Decreto Ejecutivo N° 1686 de 28 de diciembre de 2020', 'Deroga la Resolución N° 1386 de 11 de diciembre de 2020.'],
            },
            {
                nombre: 'Decreto Ejecutivo 61 de 8 de enero de 2021',
                institucion: 'Ministerio de Salud',
                titulo: 'QUE ESTABLECE LAS MEDIDAS SANITARIAS PARA LAS PERSONAS NACIONALES, RESIDENTES O EXTRANJEROS, QUE INGRESEN A LA REPÚBLICA DE PANAMÁ MIENTRAS SE MANTENGA EL ESTADO DE EMERGENCIA NACIONAL, Y DICTA OTRAS DISPOSICIONES.',
                gaceta: '29193-C',
                fecha: '8 de enero de 2021',
                infojuridica: 'http://infojuridica.procuraduria-admon.gob.pa/norma_screen?numsec=55732',
                link: 'http://gacetas.procuraduria-admon.gob.pa/29193-C_55732.pdf',
                modificaciones: ['Deroga el Decreto Ejecutivo N° 1089 de 23 de septiembre de 2020', 'Modifica el artículo 2 del Decreto Ejecutivo N° 961 de 18 de agosto de 2020.'],
            },
            {
                nombre: 'Resolución 074 de 2021',
                institucion: 'Ministerio de Salud',
                titulo: 'QUE ORDENA LA REAPERTURA Y OPERACIÓN DE ALGUNAS ACTIVIDADES A PARTIR DEL 9 DE FEBRERO DE 2021.',
                gaceta: '29214-B',
                fecha: '8 de febrero de 2021',
                infojuridica: 'http://infojuridica.procuraduria-admon.gob.pa/norma_screen?numsec=55916',
                link: 'http://gacetas.procuraduria-admon.gob.pa/29214-B_55916.pdf',
                modificaciones: ['No ha sufrido modificaciones'],
            },
            ],
        }
    },
}
</script>

<style scoped>
    h1 {
        color: #F79E01;
    }
    .card {
          overflow: hidden;
          background: white;
          box-shadow: 0 0 15px rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          margin: 0 auto;
          margin-bottom: 16px;
          padding: 16px;
          border-radius: 10px;
    }
    #name {
        margin-top: 8px;
    }
    #title {
        color: black;
        font-size: 12px;
        color: #3294FF;
    }
    #link {
        display: inline;
        margin: 8px;
        background-color: #F79E01;
        border: 1px solid white;
    }
    #mod {
        margin-top: 16px;
    }
    #mods {
        font-size: 12px;
        color: #3294FF;
    }
</style>