<template>
    <div class="main-activities">
        <b-container fluid>
            <b-row>
                <b-col>
                    <h2>Actividades Abiertas Fuera de Cuarentena</h2>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                <b-container class="card">
                    <h5>Estas son las actividades que se han abierto, pero sólo se pueden realizar en la semana cuando no hay cuarentena y toque de queda</h5>
                    <h6>Usa el buscador para encontrar la actividad que buscas 🔍</h6>
                    <b-form-input v-model="openActivitiesText" size="sm" placeholder="Actividad Abierta" id="open_activity_input"></b-form-input>
                    <p>
                        <span v-for="open_activity in filterOpenActivities" :key="open_activity">● {{ open_activity }} </span>
                    </p>
                </b-container>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

export default {
  name: 'OpenActivities',
  data() {
        return {
            actividades_abiertas: [
                'Restaurantes y fondas',
                'Industria de construcción, actividades relacionadas y cadena de suministro.',
                'Servicios Administrativos Generales: Alquiler de automóviles y otro equipo de transporte',
                'Servicios Administrativos Generales: Alquiler y centros de alquiler de bienes muebles',
                'Servicios Administrativos Generales: Servicios de apoyo a los negocios',
                'Servicios Administrativos Generales: Agencias de Viaje y servicios de reservaciones',
                'Servicios Administrativos Generales: Promotores, agentes y representantes de espectáculos artísticos, deportivos, académicos y similares',
                'Servicios Administrativos Generales: Investigación científica y desarrollo',
                'Servicios Administrativos Generales: Marketing y publicidad',
                'Servicios Administrativos Generales: Consultorías',
                'Servicios Administrativos Generales: Servicios de copiado, de archivo y custodia de documentos',
                'Servicios Administrativos Generales: Organizaciones No Gubernamentales',
                'Servicios profesionales con idoneidad',
                'Servicios Técnicos: Talleres de mecánica, chapistería, electromecánica, refrigeración',
                'Servicios Técnicos: Plomería',
                'Servicios Técnicos: Electricidad',
                'Servicios Técnicos: Sistemas de refrigeración y aire acondicionado',
                'Servicios Técnicos: Ascensores',
                'Servicios Técnicos: Limpieza de piscinas',
                'Servicios prestados a domicilio: Limpieza y jardinería',
                'Servicios prestados a domicilio: Lavanderías',
                'Servicios prestados a domicilio: Terapias médicas',
                'Lugares de culto, con aforo de 25%',
                'Deportes al aire libre sin contacto físico',
                'Comercio al por mayor con entrega exclusiva a establecimientos comerciales permitidos',
                'Comercio al por menor de forma presencial',
                'Salas de belleza y barberías',
                'Centros de Atención Integral a la Primera Infancia (CAIPIS). Con autorización del MIDES.',
                'Carreras, apuestas, y actividades realizadas en el Hipódromo Presidente Remón',
                'Venta de chances y billetes por la Lotería Nacional',
                'Lava autos',
                'Sastrerías',
                'Zapaterías',
                'Industrias Creativas y Culturales, con excepción de cines.',
                'Industrias en general'],
            clean_activity_data: [],
            openActivitiesText: '',
        }
  },
  methods: {
      cleanData() {
          this.actividades_abiertas.forEach(act => {
              const clean_activity = act.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
              this.clean_activity_data.push(clean_activity)
          })
      },
  },
  computed: {
      filterOpenActivities() {
          return this.actividades_abiertas.filter(
                activity => 
                    activity.toLowerCase().includes(this.openActivitiesText.toLowerCase())
            ) 
        },
    },
    mounted() {
       this.cleanData() 
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main-activities {
        padding-top: 40px;
    }
    #open_activity_input {
        width: 150px;
        display: inline;
    }
    h2 {
        color: #F79E01;
    }
    span {
        font-size: 12px;
    }
    h6 {
        color: #0074E0;
    }
    .card {
          overflow: hidden;
          background: white;
          box-shadow: 0 0 15px rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          width: 90%;
          margin: 0 auto;
          margin-bottom: 16px;
          padding: 16px;
          border-radius: 10px;
    }
</style>
