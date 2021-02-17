<template>
    <div>
        <div class="main-banner">
            <div class="b-container">
                <h1>Restricciones de movilidad vigentes en Panamá</h1>
                <p>Nos parecía increible que NO existiese, después de tanto tiempo, un lugar donde encontrar información actualizada sobres las restricciones de movilidad por COVID</p>
                <p>Así que lo hicimos <router-link to="/nosotros">nosotros</router-link>  mismos</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Banner',
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
            exentas: [
                'Floristerías: Entregas a domicilio, sin entrada al público',
                'Fuerza Pública',
                'Servidores públicos dedicados a atender emergencias',
                'Personal de salud; personal médico, administrativo y operativo de hospitales, emergencias móviles, centros de atención médica, clínicas y personal de laboratorios médicos, públicos o privados',
                'Abogados idóneos para el ejercicio de personas detenidas por incidentes dentro del periodo de restricción de movilidad, que realicen gestiones ante el OJ, MP, Justicia Administrativa. Mostrar idoneidad.',
                'Clínicas y servicios veterinarios.',
                'Metro de Panamá y MiBus, personal administrativo y operativo, y contratistas.',
                'Transporte público, colectivo y selectivo. Y transporte contratado para movilizar personal de empresas incluidas en excepciones.',
                'Personal de la ACP y contratistas críticos.',
                'Personal de ENA y Madden-Colón, sus proveedores y subcontratistas.',
                'Personal del Aeropuerto Int de Tocumen y Aeropuerto Int Marcos A. Gelabert, proveedores y subcontratistas y actividades relacionadas con las operaciones aéreas.',
                'Personal de aerolíneas y actividades relacionadas',
                'Pasajeros que ingresen al territorio nacional o deban salir del mismo, presentando boleto de avión y pasaporte.',
                'Pasajeros que deban trasladarse dentro del territorio nacional, presentando boleto de avión y pasaporte.',
                'Industria farmacéutica, farmacias, droguerías, y cualesquiera otros artículos de insumos de salud pública, incluyendo manufacturas, suplidores y mantenimiento de los mismos.',
                'Empresas de limpieza y producción de desinfectantes y productos de higiene y aseo personal, y personas naturales o jurídicas que presten servicios de administración y limpieza para regímenes de propiedad horizontal.',
                'Restaurantes con autoservicio, servicio únicamente por ventanilla',
                'Cocinas de restaurantes que tengan servicio a domicilio y empresas que se dediquen al servicio a domicilio',
                'Supermercados, hipermercados, minisúper, mercaditos y abarrotes.',
                'Hoteles, hostales y pensiones para alojamiento y alimentación a la habitación de sus huéspedes',
                'Industria agropecuaria; de insumos y maquinarias agropecuarias; que realicen labores agrícolas de recolección; fincas ganaderas, avícolas, porcinas y acuícolas; Servicio de movilización de animales, productos e insumos agropecuarios.',
                'Industria agroalimentaria, incluyendo centrales de distribución de alimentos, bebidas, agua embotellada y cisternas para distribución de agua potable.',
                'Plantas procesadoras, empacadoras, distribuidoras de alimentos y bebidas, y empresas de empaques y envases.',
                'Empresas de seguridad y transporte de valores',
                'Industria de generación, transmisión, distribución y operación de energía',
                'Gasolineras y empresas de distribución, suministro y transporte de combustibles líquidos y gaseosos',
                'Transporte marítimo y de logística, incluyendo reparación a naves, puertos; transporte de carga para importación y exportación, talleres de mantenimiento de equipo de transporte de carga.',
                'Personal operativo requerido para preservar la industria del transporte aéreo, carga y pasajero, mantenimiento de aeronaves, equipos de soporte y simuladores, seguridad de aeronaves e instalaciones y soporte técnico de infraestructura tecnológica',
                'Personal operativo de arrendadores de autos que brinden servicio a entidades gubernamentales y empresas incluidas en excepciones',
                'Empresas dedicadas a la industria de carga aérea, de pasajeros, marítima y terrestre de importación, exportación, suministros y puertos;',
                'Empresas de telecomunicaciones, proveedoras de internet y telefonía (fija y móvil), así como empresas de tecnología que sean proveedoras de equipo, suministro y mantenimiento de instituciones del Estado y empresas en excepciones',
                'Medios de comunicación, incluyendo radio, televisión, cable operadoras, diarios y sus distribuidores',
                'Empresas de prestación de servicio de seguridad privada',
                'Bancos, financieras, casas de empeño, cooperativas, seguros, proveedores de procesamiento electrónico de transacciones, cheques e imágenes a instituciones financieras y demás servicios financieros',
                'Call centers',
                'Funerarias, salas de cremación, cementerios',
                'Servicio de impresión de etiquetas para alimentos, medicamentos, insumos médicos, productos de higiene y limpieza, impresión de tarjetas de telecomunicación',
                'Lavanderías que brinden servicio a instalaciones médico-sanitarias', 
                'Servicio de recolección, tratamiento y disposición de desechos sólidos y hospitalarios y sus subcontratistas.',
                'Entrega a domicilio de víveres, medicamentos, alimentos preparados por cocinas de restaurantes que brindan servicio a domicilio, y aquellos que brinden servicio a entidades públicas',
                'Empresas de tecnología que provean al Estado a través de Convenio Marco y sus mayoristas',
                'Venta y distribución de equipos médicos-hospitalarios, medicamentos, vacunas y cualesquiera otros artículos e insumos de salud pública, incluyendo manufactureras, suplidoras y de mantenimiento de los mismos',
                'Actividades laborales que se desarrollen por medios virtuales o en modalidad de teletrabajo',
                'Ferreterías y empresas que les abastezcan',
                'Servicios de entrega a domicilio utilizados para expendio de alimentos y medicamentos podrán operar hasta las 10pm.',
                'Controladoras de plagas domésticas, industriales y/o marítimas (fumigadoras)',
                'Mantenimiento y reparación de elevadores, tanques de agua, plantas eléctricas e instalaciones de gas']
        }
  },
  components: {
  },
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main-banner {
        height: 400px;
        background-size: cover;
        background-position: center;
        padding: 100px 0;
    }
</style>
