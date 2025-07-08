ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([605136.180123, 5884379.112143, 756847.054472, 5966650.892688]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ConceMetrop_UTM_1 = new ol.format.GeoJSON();
var features_ConceMetrop_UTM_1 = format_ConceMetrop_UTM_1.readFeatures(json_ConceMetrop_UTM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_ConceMetrop_UTM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConceMetrop_UTM_1.addFeatures(features_ConceMetrop_UTM_1);
var lyr_ConceMetrop_UTM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConceMetrop_UTM_1, 
                style: style_ConceMetrop_UTM_1,
                popuplayertitle: 'ConceMetrop_UTM',
                interactive: true,
                title: '<img src="styles/legend/ConceMetrop_UTM_1.png" /> ConceMetrop_UTM'
            });
var format_Barrios_Selec_2 = new ol.format.GeoJSON();
var features_Barrios_Selec_2 = format_Barrios_Selec_2.readFeatures(json_Barrios_Selec_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Barrios_Selec_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barrios_Selec_2.addFeatures(features_Barrios_Selec_2);
var lyr_Barrios_Selec_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barrios_Selec_2, 
                style: style_Barrios_Selec_2,
                popuplayertitle: 'Barrios_Selec',
                interactive: true,
    title: 'Barrios_Selec<br />\
    <img src="styles/legend/Barrios_Selec_2_0.png" /> Aguita de la Perdiz<br />\
    <img src="styles/legend/Barrios_Selec_2_1.png" /> Barrio Pedro de Valdivia Bajo<br />\
    <img src="styles/legend/Barrios_Selec_2_2.png" /> Bellavista<br />\
    <img src="styles/legend/Barrios_Selec_2_3.png" /> Boca Sur<br />\
    <img src="styles/legend/Barrios_Selec_2_4.png" /> Cerro La Virgen<br />\
    <img src="styles/legend/Barrios_Selec_2_5.png" /> Chiguayante centro<br />\
    <img src="styles/legend/Barrios_Selec_2_6.png" /> Hualpencillo<br />\
    <img src="styles/legend/Barrios_Selec_2_7.png" /> Huertos Familares 63<br />\
    <img src="styles/legend/Barrios_Selec_2_8.png" /> Lorenzo Arenas<br />\
    <img src="styles/legend/Barrios_Selec_2_9.png" /> Lota Bajo<br />\
    <img src="styles/legend/Barrios_Selec_2_10.png" /> Nuevo Amanecer<br />\
    <img src="styles/legend/Barrios_Selec_2_11.png" /> San Marcos<br />\
    <img src="styles/legend/Barrios_Selec_2_12.png" /> Talcahuano Centro<br />\
    <img src="styles/legend/Barrios_Selec_2_13.png" /> Tucapel bajo<br />\
    <img src="styles/legend/Barrios_Selec_2_14.png" /> Villa  Nonguén<br />\
    <img src="styles/legend/Barrios_Selec_2_15.png" /> Villa Acero<br />\
    <img src="styles/legend/Barrios_Selec_2_16.png" /> Villa Alegre<br />\
    <img src="styles/legend/Barrios_Selec_2_17.png" /> Villa CAP<br />\
    <img src="styles/legend/Barrios_Selec_2_18.png" /> Villa San Carlos<br />\
    <img src="styles/legend/Barrios_Selec_2_19.png" /> Villa San Francisco<br />\
    <img src="styles/legend/Barrios_Selec_2_20.png" /> <br />' });
var format_FinaEstampaChiguayante_3 = new ol.format.GeoJSON();
var features_FinaEstampaChiguayante_3 = format_FinaEstampaChiguayante_3.readFeatures(json_FinaEstampaChiguayante_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_FinaEstampaChiguayante_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FinaEstampaChiguayante_3.addFeatures(features_FinaEstampaChiguayante_3);
cluster_FinaEstampaChiguayante_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_FinaEstampaChiguayante_3
});
var lyr_FinaEstampaChiguayante_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_FinaEstampaChiguayante_3, 
                style: style_FinaEstampaChiguayante_3,
                popuplayertitle: 'Fina Estampa Chiguayante',
                interactive: true,
                title: '<img src="styles/legend/FinaEstampaChiguayante_3.png" /> Fina Estampa Chiguayante'
            });
var format_BarrioCervecero_4 = new ol.format.GeoJSON();
var features_BarrioCervecero_4 = format_BarrioCervecero_4.readFeatures(json_BarrioCervecero_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_BarrioCervecero_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarrioCervecero_4.addFeatures(features_BarrioCervecero_4);
cluster_BarrioCervecero_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_BarrioCervecero_4
});
var lyr_BarrioCervecero_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_BarrioCervecero_4, 
                style: style_BarrioCervecero_4,
                popuplayertitle: 'Barrio Cervecero',
                interactive: true,
                title: '<img src="styles/legend/BarrioCervecero_4.png" /> Barrio Cervecero'
            });
var format_BlissSpa_5 = new ol.format.GeoJSON();
var features_BlissSpa_5 = format_BlissSpa_5.readFeatures(json_BlissSpa_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_BlissSpa_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlissSpa_5.addFeatures(features_BlissSpa_5);
cluster_BlissSpa_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_BlissSpa_5
});
var lyr_BlissSpa_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_BlissSpa_5, 
                style: style_BlissSpa_5,
                popuplayertitle: 'Bliss Spa',
                interactive: true,
                title: '<img src="styles/legend/BlissSpa_5.png" /> Bliss Spa'
            });
var format_CinemarkAraucoCoronel_6 = new ol.format.GeoJSON();
var features_CinemarkAraucoCoronel_6 = format_CinemarkAraucoCoronel_6.readFeatures(json_CinemarkAraucoCoronel_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_CinemarkAraucoCoronel_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CinemarkAraucoCoronel_6.addFeatures(features_CinemarkAraucoCoronel_6);
cluster_CinemarkAraucoCoronel_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CinemarkAraucoCoronel_6
});
var lyr_CinemarkAraucoCoronel_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CinemarkAraucoCoronel_6, 
                style: style_CinemarkAraucoCoronel_6,
                popuplayertitle: 'Cinemark Arauco Coronel',
                interactive: true,
                title: '<img src="styles/legend/CinemarkAraucoCoronel_6.png" /> Cinemark Arauco Coronel'
            });
var format_CanchaLostilos_7 = new ol.format.GeoJSON();
var features_CanchaLostilos_7 = format_CanchaLostilos_7.readFeatures(json_CanchaLostilos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_CanchaLostilos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanchaLostilos_7.addFeatures(features_CanchaLostilos_7);
cluster_CanchaLostilos_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CanchaLostilos_7
});
var lyr_CanchaLostilos_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CanchaLostilos_7, 
                style: style_CanchaLostilos_7,
                popuplayertitle: 'Cancha Los tilos',
                interactive: true,
                title: '<img src="styles/legend/CanchaLostilos_7.png" /> Cancha Los tilos'
            });
var format_CerroAmarillo_8 = new ol.format.GeoJSON();
var features_CerroAmarillo_8 = format_CerroAmarillo_8.readFeatures(json_CerroAmarillo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_CerroAmarillo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CerroAmarillo_8.addFeatures(features_CerroAmarillo_8);
cluster_CerroAmarillo_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CerroAmarillo_8
});
var lyr_CerroAmarillo_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CerroAmarillo_8, 
                style: style_CerroAmarillo_8,
                popuplayertitle: 'Cerro Amarillo',
                interactive: true,
                title: '<img src="styles/legend/CerroAmarillo_8.png" /> Cerro Amarillo'
            });
var format_LomoAlemn_9 = new ol.format.GeoJSON();
var features_LomoAlemn_9 = format_LomoAlemn_9.readFeatures(json_LomoAlemn_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_LomoAlemn_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LomoAlemn_9.addFeatures(features_LomoAlemn_9);
cluster_LomoAlemn_9 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_LomoAlemn_9
});
var lyr_LomoAlemn_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_LomoAlemn_9, 
                style: style_LomoAlemn_9,
                popuplayertitle: 'Lomo Alemán',
                interactive: true,
                title: '<img src="styles/legend/LomoAlemn_9.png" /> Lomo Alemán'
            });
var format_MarbellaTalcahuano_10 = new ol.format.GeoJSON();
var features_MarbellaTalcahuano_10 = format_MarbellaTalcahuano_10.readFeatures(json_MarbellaTalcahuano_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_MarbellaTalcahuano_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarbellaTalcahuano_10.addFeatures(features_MarbellaTalcahuano_10);
cluster_MarbellaTalcahuano_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_MarbellaTalcahuano_10
});
var lyr_MarbellaTalcahuano_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_MarbellaTalcahuano_10, 
                style: style_MarbellaTalcahuano_10,
                popuplayertitle: 'Marbella Talcahuano',
                interactive: true,
                title: '<img src="styles/legend/MarbellaTalcahuano_10.png" /> Marbella Talcahuano'
            });
var format_LiapizPizza_11 = new ol.format.GeoJSON();
var features_LiapizPizza_11 = format_LiapizPizza_11.readFeatures(json_LiapizPizza_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_LiapizPizza_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LiapizPizza_11.addFeatures(features_LiapizPizza_11);
cluster_LiapizPizza_11 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_LiapizPizza_11
});
var lyr_LiapizPizza_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_LiapizPizza_11, 
                style: style_LiapizPizza_11,
                popuplayertitle: 'Liapiz Pizza',
                interactive: true,
                title: '<img src="styles/legend/LiapizPizza_11.png" /> Liapiz Pizza'
            });
var format_PlazadeArmasdeLota_12 = new ol.format.GeoJSON();
var features_PlazadeArmasdeLota_12 = format_PlazadeArmasdeLota_12.readFeatures(json_PlazadeArmasdeLota_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_PlazadeArmasdeLota_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlazadeArmasdeLota_12.addFeatures(features_PlazadeArmasdeLota_12);
cluster_PlazadeArmasdeLota_12 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PlazadeArmasdeLota_12
});
var lyr_PlazadeArmasdeLota_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PlazadeArmasdeLota_12, 
                style: style_PlazadeArmasdeLota_12,
                popuplayertitle: 'Plaza de Armas de Lota',
                interactive: true,
                title: '<img src="styles/legend/PlazadeArmasdeLota_12.png" /> Plaza de Armas de Lota'
            });
var format_GimnasioLirquen_13 = new ol.format.GeoJSON();
var features_GimnasioLirquen_13 = format_GimnasioLirquen_13.readFeatures(json_GimnasioLirquen_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_GimnasioLirquen_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GimnasioLirquen_13.addFeatures(features_GimnasioLirquen_13);
cluster_GimnasioLirquen_13 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_GimnasioLirquen_13
});
var lyr_GimnasioLirquen_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_GimnasioLirquen_13, 
                style: style_GimnasioLirquen_13,
                popuplayertitle: 'Gimnasio Lirquen',
                interactive: true,
                title: '<img src="styles/legend/GimnasioLirquen_13.png" /> Gimnasio Lirquen'
            });
var format_MiradorHumedalBocaMaule_14 = new ol.format.GeoJSON();
var features_MiradorHumedalBocaMaule_14 = format_MiradorHumedalBocaMaule_14.readFeatures(json_MiradorHumedalBocaMaule_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_MiradorHumedalBocaMaule_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiradorHumedalBocaMaule_14.addFeatures(features_MiradorHumedalBocaMaule_14);
cluster_MiradorHumedalBocaMaule_14 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_MiradorHumedalBocaMaule_14
});
var lyr_MiradorHumedalBocaMaule_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_MiradorHumedalBocaMaule_14, 
                style: style_MiradorHumedalBocaMaule_14,
                popuplayertitle: 'Mirador Humedal Boca Maule',
                interactive: true,
                title: '<img src="styles/legend/MiradorHumedalBocaMaule_14.png" /> Mirador Humedal Boca Maule'
            });
var format_LaIglesiadeJesucristodelosSantosdelosltimosDas_15 = new ol.format.GeoJSON();
var features_LaIglesiadeJesucristodelosSantosdelosltimosDas_15 = format_LaIglesiadeJesucristodelosSantosdelosltimosDas_15.readFeatures(json_LaIglesiadeJesucristodelosSantosdelosltimosDas_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_LaIglesiadeJesucristodelosSantosdelosltimosDas_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaIglesiadeJesucristodelosSantosdelosltimosDas_15.addFeatures(features_LaIglesiadeJesucristodelosSantosdelosltimosDas_15);
cluster_LaIglesiadeJesucristodelosSantosdelosltimosDas_15 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_LaIglesiadeJesucristodelosSantosdelosltimosDas_15
});
var lyr_LaIglesiadeJesucristodelosSantosdelosltimosDas_15 = new ol.layer.Vector({
                declutter: false,
                source:cluster_LaIglesiadeJesucristodelosSantosdelosltimosDas_15, 
                style: style_LaIglesiadeJesucristodelosSantosdelosltimosDas_15,
                popuplayertitle: 'La Iglesia de Jesucristo de los Santos de los Últimos Días',
                interactive: true,
                title: '<img src="styles/legend/LaIglesiadeJesucristodelosSantosdelosltimosDas_15.png" /> La Iglesia de Jesucristo de los Santos de los Últimos Días'
            });
var format_LagunaRedonda_16 = new ol.format.GeoJSON();
var features_LagunaRedonda_16 = format_LagunaRedonda_16.readFeatures(json_LagunaRedonda_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_LagunaRedonda_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LagunaRedonda_16.addFeatures(features_LagunaRedonda_16);
cluster_LagunaRedonda_16 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_LagunaRedonda_16
});
var lyr_LagunaRedonda_16 = new ol.layer.Vector({
                declutter: false,
                source:cluster_LagunaRedonda_16, 
                style: style_LagunaRedonda_16,
                popuplayertitle: 'Laguna Redonda',
                interactive: true,
                title: '<img src="styles/legend/LagunaRedonda_16.png" /> Laguna Redonda'
            });
var format_HumedalPaicavi_17 = new ol.format.GeoJSON();
var features_HumedalPaicavi_17 = format_HumedalPaicavi_17.readFeatures(json_HumedalPaicavi_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_HumedalPaicavi_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HumedalPaicavi_17.addFeatures(features_HumedalPaicavi_17);
cluster_HumedalPaicavi_17 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_HumedalPaicavi_17
});
var lyr_HumedalPaicavi_17 = new ol.layer.Vector({
                declutter: false,
                source:cluster_HumedalPaicavi_17, 
                style: style_HumedalPaicavi_17,
                popuplayertitle: 'Humedal Paicavi',
                interactive: true,
                title: '<img src="styles/legend/HumedalPaicavi_17.png" /> Humedal Paicavi'
            });
var format_ParqueZoolgicoConcepcin_18 = new ol.format.GeoJSON();
var features_ParqueZoolgicoConcepcin_18 = format_ParqueZoolgicoConcepcin_18.readFeatures(json_ParqueZoolgicoConcepcin_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_ParqueZoolgicoConcepcin_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueZoolgicoConcepcin_18.addFeatures(features_ParqueZoolgicoConcepcin_18);
cluster_ParqueZoolgicoConcepcin_18 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ParqueZoolgicoConcepcin_18
});
var lyr_ParqueZoolgicoConcepcin_18 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ParqueZoolgicoConcepcin_18, 
                style: style_ParqueZoolgicoConcepcin_18,
                popuplayertitle: 'Parque Zoológico Concepción',
                interactive: true,
                title: '<img src="styles/legend/ParqueZoolgicoConcepcin_18.png" /> Parque Zoológico Concepción'
            });
var format_BibliotecaComunitariaSanFrancisco_19 = new ol.format.GeoJSON();
var features_BibliotecaComunitariaSanFrancisco_19 = format_BibliotecaComunitariaSanFrancisco_19.readFeatures(json_BibliotecaComunitariaSanFrancisco_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_BibliotecaComunitariaSanFrancisco_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BibliotecaComunitariaSanFrancisco_19.addFeatures(features_BibliotecaComunitariaSanFrancisco_19);
cluster_BibliotecaComunitariaSanFrancisco_19 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_BibliotecaComunitariaSanFrancisco_19
});
var lyr_BibliotecaComunitariaSanFrancisco_19 = new ol.layer.Vector({
                declutter: false,
                source:cluster_BibliotecaComunitariaSanFrancisco_19, 
                style: style_BibliotecaComunitariaSanFrancisco_19,
                popuplayertitle: 'Biblioteca Comunitaria San Francisco',
                interactive: true,
                title: '<img src="styles/legend/BibliotecaComunitariaSanFrancisco_19.png" /> Biblioteca Comunitaria San Francisco'
            });
var format_CanchasBonilla_20 = new ol.format.GeoJSON();
var features_CanchasBonilla_20 = format_CanchasBonilla_20.readFeatures(json_CanchasBonilla_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_CanchasBonilla_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanchasBonilla_20.addFeatures(features_CanchasBonilla_20);
cluster_CanchasBonilla_20 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CanchasBonilla_20
});
var lyr_CanchasBonilla_20 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CanchasBonilla_20, 
                style: style_CanchasBonilla_20,
                popuplayertitle: 'Canchas Bonilla',
                interactive: true,
                title: '<img src="styles/legend/CanchasBonilla_20.png" /> Canchas Bonilla'
            });
var format_LaPicadadeMary_21 = new ol.format.GeoJSON();
var features_LaPicadadeMary_21 = format_LaPicadadeMary_21.readFeatures(json_LaPicadadeMary_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_LaPicadadeMary_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaPicadadeMary_21.addFeatures(features_LaPicadadeMary_21);
cluster_LaPicadadeMary_21 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_LaPicadadeMary_21
});
var lyr_LaPicadadeMary_21 = new ol.layer.Vector({
                declutter: false,
                source:cluster_LaPicadadeMary_21, 
                style: style_LaPicadadeMary_21,
                popuplayertitle: 'La Picada de Mary',
                interactive: true,
                title: '<img src="styles/legend/LaPicadadeMary_21.png" /> La Picada de Mary'
            });
var format_Giardinocaf_22 = new ol.format.GeoJSON();
var features_Giardinocaf_22 = format_Giardinocaf_22.readFeatures(json_Giardinocaf_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Giardinocaf_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Giardinocaf_22.addFeatures(features_Giardinocaf_22);
cluster_Giardinocaf_22 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Giardinocaf_22
});
var lyr_Giardinocaf_22 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Giardinocaf_22, 
                style: style_Giardinocaf_22,
                popuplayertitle: 'Giardino café',
                interactive: true,
                title: '<img src="styles/legend/Giardinocaf_22.png" /> Giardino café'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ConceMetrop_UTM_1.setVisible(true);lyr_Barrios_Selec_2.setVisible(true);lyr_FinaEstampaChiguayante_3.setVisible(true);lyr_BarrioCervecero_4.setVisible(true);lyr_BlissSpa_5.setVisible(true);lyr_CinemarkAraucoCoronel_6.setVisible(true);lyr_CanchaLostilos_7.setVisible(true);lyr_CerroAmarillo_8.setVisible(true);lyr_LomoAlemn_9.setVisible(true);lyr_MarbellaTalcahuano_10.setVisible(true);lyr_LiapizPizza_11.setVisible(true);lyr_PlazadeArmasdeLota_12.setVisible(true);lyr_GimnasioLirquen_13.setVisible(true);lyr_MiradorHumedalBocaMaule_14.setVisible(true);lyr_LaIglesiadeJesucristodelosSantosdelosltimosDas_15.setVisible(true);lyr_LagunaRedonda_16.setVisible(true);lyr_HumedalPaicavi_17.setVisible(true);lyr_ParqueZoolgicoConcepcin_18.setVisible(true);lyr_BibliotecaComunitariaSanFrancisco_19.setVisible(true);lyr_CanchasBonilla_20.setVisible(true);lyr_LaPicadadeMary_21.setVisible(true);lyr_Giardinocaf_22.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ConceMetrop_UTM_1,lyr_Barrios_Selec_2,lyr_FinaEstampaChiguayante_3,lyr_BarrioCervecero_4,lyr_BlissSpa_5,lyr_CinemarkAraucoCoronel_6,lyr_CanchaLostilos_7,lyr_CerroAmarillo_8,lyr_LomoAlemn_9,lyr_MarbellaTalcahuano_10,lyr_LiapizPizza_11,lyr_PlazadeArmasdeLota_12,lyr_GimnasioLirquen_13,lyr_MiradorHumedalBocaMaule_14,lyr_LaIglesiadeJesucristodelosSantosdelosltimosDas_15,lyr_LagunaRedonda_16,lyr_HumedalPaicavi_17,lyr_ParqueZoolgicoConcepcin_18,lyr_BibliotecaComunitariaSanFrancisco_19,lyr_CanchasBonilla_20,lyr_LaPicadadeMary_21,lyr_Giardinocaf_22];
lyr_ConceMetrop_UTM_1.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_Barrios_Selec_2.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_FinaEstampaChiguayante_3.set('fieldAliases', {'Name': 'Name', 'Tipo atrac': 'Tipo atrac', 'Horario': 'Horario', 'Acceso': 'Acceso', 'Reseñas': 'Reseñas', });
lyr_BarrioCervecero_4.set('fieldAliases', {'Name': 'Name', 'Tipo atrac': 'Tipo atrac', 'Horario': 'Horario', 'Acceso': 'Acceso', 'Reseñas': 'Reseñas', });
lyr_BlissSpa_5.set('fieldAliases', {'Name': 'Name', 'Tipo atrac': 'Tipo atrac', 'Horario': 'Horario', 'Acceso': 'Acceso', 'Reseñas': 'Reseñas', });
lyr_CinemarkAraucoCoronel_6.set('fieldAliases', {'Name': 'Name', 'Tipo atrac': 'Tipo atrac', 'Acceso': 'Acceso', 'Reseñas': 'Reseñas', 'Sitio web': 'Sitio web', });
lyr_CanchaLostilos_7.set('fieldAliases', {'Name': 'Name', 'Tipo atrac': 'Tipo atrac', 'Acceso': 'Acceso', 'Reseñas': 'Reseñas', 'Caract': 'Caract', });
lyr_CerroAmarillo_8.set('fieldAliases', {'Name': 'Name', 'Tipo atrac': 'Tipo atrac', 'Horario': 'Horario', 'Acceso': 'Acceso', 'Reseñas': 'Reseñas', });
lyr_LomoAlemn_9.set('fieldAliases', {'Name': 'Name', 'Tipo atrac': 'Tipo atrac', 'Acceso': 'Acceso', 'Reseñas': 'Reseñas', 'Caract': 'Caract', });
lyr_MarbellaTalcahuano_10.set('fieldAliases', {'Name': 'Name', 'Tipo atrac': 'Tipo atrac', 'Horario': 'Horario', 'Acceso': 'Acceso', 'Reseñas': 'Reseñas', });
lyr_LiapizPizza_11.set('fieldAliases', {'Name': 'Name', 'Tipo atrac': 'Tipo atrac', 'Horario': 'Horario', 'Acceso': 'Acceso', 'Reseñas': 'Reseñas', });
lyr_PlazadeArmasdeLota_12.set('fieldAliases', {'Name': 'Name', 'Tipo atrac': 'Tipo atrac', 'Horario': 'Horario', 'Acceso': 'Acceso', 'Reseñas': 'Reseñas', });
lyr_GimnasioLirquen_13.set('fieldAliases', {'Name': 'Name', 'Tipo atrac': 'Tipo atrac', 'Acceso': 'Acceso', 'Reseñas': 'Reseñas', 'Caract': 'Caract', });
lyr_MiradorHumedalBocaMaule_14.set('fieldAliases', {'Name': 'Name', 'Tipo atrac': 'Tipo atrac', 'Acceso': 'Acceso', 'Reseñas': 'Reseñas', 'Caract': 'Caract', });
lyr_LaIglesiadeJesucristodelosSantosdelosltimosDas_15.set('fieldAliases', {'Name': 'Name', 'Tipo atrac': 'Tipo atrac', 'Horario': 'Horario', 'Acceso': 'Acceso', 'Reseñas': 'Reseñas', });
lyr_LagunaRedonda_16.set('fieldAliases', {'Name': 'Name', 'Tipo atrac': 'Tipo atrac', 'Hora Punta': 'Hora Punta', 'Reseñas': 'Reseñas', 'Acceso': 'Acceso', });
lyr_HumedalPaicavi_17.set('fieldAliases', {'Name': 'Name', 'Tipo atrac': 'Tipo atrac', 'Acceso': 'Acceso', 'Reseñas': 'Reseñas', 'Precaucion': 'Precaucion', });
lyr_ParqueZoolgicoConcepcin_18.set('fieldAliases', {'Name': 'Name', 'Tipo atrac': 'Tipo atrac', 'Horario': 'Horario', 'Acceso': 'Acceso', 'Video': 'Video', });
lyr_BibliotecaComunitariaSanFrancisco_19.set('fieldAliases', {'Name': 'Name', 'Tipo atrac': 'Tipo atrac', 'Horario': 'Horario', 'Acceso': 'Acceso', 'Sitio web': 'Sitio web', });
lyr_CanchasBonilla_20.set('fieldAliases', {'Name': 'Name', 'Tipo atrac': 'Tipo atrac', 'Acceso': 'Acceso', 'Reseñas': 'Reseñas', 'Movi reduc': 'Movi reduc', });
lyr_LaPicadadeMary_21.set('fieldAliases', {'Name': 'Name', 'tipo atrac': 'tipo atrac', 'Horario': 'Horario', 'acceso': 'acceso', 'Reseñas': 'Reseñas', });
lyr_Giardinocaf_22.set('fieldAliases', {'Name': 'Name', 'Tipo atrac': 'Tipo atrac', 'Horario': 'Horario', 'Acceso': 'Acceso', 'Reseñas': 'Reseñas', });
lyr_ConceMetrop_UTM_1.set('fieldImages', {'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_Barrios_Selec_2.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_FinaEstampaChiguayante_3.set('fieldImages', {'Name': '', 'Tipo atrac': '', 'Horario': '', 'Acceso': '', 'Reseñas': '', });
lyr_BarrioCervecero_4.set('fieldImages', {'Name': '', 'Tipo atrac': '', 'Horario': '', 'Acceso': '', 'Reseñas': '', });
lyr_BlissSpa_5.set('fieldImages', {'Name': '', 'Tipo atrac': '', 'Horario': '', 'Acceso': '', 'Reseñas': '', });
lyr_CinemarkAraucoCoronel_6.set('fieldImages', {'Name': '', 'Tipo atrac': '', 'Acceso': '', 'Reseñas': '', 'Sitio web': '', });
lyr_CanchaLostilos_7.set('fieldImages', {'Name': '', 'Tipo atrac': '', 'Acceso': '', 'Reseñas': '', 'Caract': '', });
lyr_CerroAmarillo_8.set('fieldImages', {'Name': '', 'Tipo atrac': '', 'Horario': '', 'Acceso': '', 'Reseñas': '', });
lyr_LomoAlemn_9.set('fieldImages', {'Name': '', 'Tipo atrac': '', 'Acceso': '', 'Reseñas': '', 'Caract': '', });
lyr_MarbellaTalcahuano_10.set('fieldImages', {'Name': '', 'Tipo atrac': '', 'Horario': '', 'Acceso': '', 'Reseñas': '', });
lyr_LiapizPizza_11.set('fieldImages', {'Name': '', 'Tipo atrac': '', 'Horario': '', 'Acceso': '', 'Reseñas': '', });
lyr_PlazadeArmasdeLota_12.set('fieldImages', {'Name': '', 'Tipo atrac': '', 'Horario': '', 'Acceso': '', 'Reseñas': '', });
lyr_GimnasioLirquen_13.set('fieldImages', {'Name': '', 'Tipo atrac': '', 'Acceso': '', 'Reseñas': '', 'Caract': '', });
lyr_MiradorHumedalBocaMaule_14.set('fieldImages', {'Name': '', 'Tipo atrac': '', 'Acceso': '', 'Reseñas': '', 'Caract': '', });
lyr_LaIglesiadeJesucristodelosSantosdelosltimosDas_15.set('fieldImages', {'Name': '', 'Tipo atrac': '', 'Horario': '', 'Acceso': '', 'Reseñas': '', });
lyr_LagunaRedonda_16.set('fieldImages', {'Name': '', 'Tipo atrac': '', 'Hora Punta': '', 'Reseñas': '', 'Acceso': '', });
lyr_HumedalPaicavi_17.set('fieldImages', {'Name': '', 'Tipo atrac': '', 'Acceso': '', 'Reseñas': '', 'Precaucion': '', });
lyr_ParqueZoolgicoConcepcin_18.set('fieldImages', {'Name': 'TextEdit', 'Tipo atrac': 'TextEdit', 'Horario': 'TextEdit', 'Acceso': 'TextEdit', 'Video': 'TextEdit', });
lyr_BibliotecaComunitariaSanFrancisco_19.set('fieldImages', {'Name': '', 'Tipo atrac': '', 'Horario': '', 'Acceso': '', 'Sitio web': '', });
lyr_CanchasBonilla_20.set('fieldImages', {'Name': '', 'Tipo atrac': '', 'Acceso': '', 'Reseñas': '', 'Movi reduc': '', });
lyr_LaPicadadeMary_21.set('fieldImages', {'Name': '', 'tipo atrac': '', 'Horario': '', 'acceso': '', 'Reseñas': '', });
lyr_Giardinocaf_22.set('fieldImages', {'Name': '', 'Tipo atrac': '', 'Horario': '', 'Acceso': '', 'Reseñas': '', });
lyr_ConceMetrop_UTM_1.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_Barrios_Selec_2.set('fieldLabels', {'Id': 'no label', 'Nombre': 'no label', 'Area': 'no label', 'hab_m2': 'no label', 'Sum_Poblac': 'no label', 'av_hab': 'no label', 'Long_tLic': 'no label', 'Long_tNLic': 'no label', 'Suma_Trans': 'no label', 'porc_cober': 'no label', 'Distance': 'no label', 'LongcicloK': 'no label', 'Long_rvial': 'no label', });
lyr_FinaEstampaChiguayante_3.set('fieldLabels', {'Name': 'inline label - always visible', 'Tipo atrac': 'inline label - always visible', 'Horario': 'inline label - always visible', 'Acceso': 'inline label - always visible', 'Reseñas': 'inline label - always visible', });
lyr_BarrioCervecero_4.set('fieldLabels', {'Name': 'inline label - always visible', 'Tipo atrac': 'inline label - always visible', 'Horario': 'inline label - always visible', 'Acceso': 'inline label - always visible', 'Reseñas': 'inline label - always visible', });
lyr_BlissSpa_5.set('fieldLabels', {'Name': 'inline label - always visible', 'Tipo atrac': 'inline label - always visible', 'Horario': 'inline label - always visible', 'Acceso': 'inline label - always visible', 'Reseñas': 'inline label - always visible', });
lyr_CinemarkAraucoCoronel_6.set('fieldLabels', {'Name': 'inline label - always visible', 'Tipo atrac': 'inline label - always visible', 'Acceso': 'inline label - always visible', 'Reseñas': 'inline label - always visible', 'Sitio web': 'inline label - always visible', });
lyr_CanchaLostilos_7.set('fieldLabels', {'Name': 'inline label - always visible', 'Tipo atrac': 'inline label - always visible', 'Acceso': 'inline label - always visible', 'Reseñas': 'inline label - always visible', 'Caract': 'inline label - always visible', });
lyr_CerroAmarillo_8.set('fieldLabels', {'Name': 'inline label - always visible', 'Tipo atrac': 'inline label - always visible', 'Horario': 'inline label - always visible', 'Acceso': 'inline label - always visible', 'Reseñas': 'inline label - always visible', });
lyr_LomoAlemn_9.set('fieldLabels', {'Name': 'inline label - always visible', 'Tipo atrac': 'inline label - always visible', 'Acceso': 'inline label - always visible', 'Reseñas': 'inline label - always visible', 'Caract': 'inline label - always visible', });
lyr_MarbellaTalcahuano_10.set('fieldLabels', {'Name': 'inline label - always visible', 'Tipo atrac': 'inline label - always visible', 'Horario': 'inline label - always visible', 'Acceso': 'inline label - always visible', 'Reseñas': 'inline label - always visible', });
lyr_LiapizPizza_11.set('fieldLabels', {'Name': 'inline label - always visible', 'Tipo atrac': 'inline label - always visible', 'Horario': 'inline label - always visible', 'Acceso': 'inline label - always visible', 'Reseñas': 'inline label - always visible', });
lyr_PlazadeArmasdeLota_12.set('fieldLabels', {'Name': 'inline label - always visible', 'Tipo atrac': 'inline label - always visible', 'Horario': 'inline label - always visible', 'Acceso': 'inline label - always visible', 'Reseñas': 'inline label - always visible', });
lyr_GimnasioLirquen_13.set('fieldLabels', {'Name': 'inline label - always visible', 'Tipo atrac': 'inline label - always visible', 'Acceso': 'inline label - always visible', 'Reseñas': 'inline label - always visible', 'Caract': 'inline label - always visible', });
lyr_MiradorHumedalBocaMaule_14.set('fieldLabels', {'Name': 'inline label - always visible', 'Tipo atrac': 'inline label - always visible', 'Acceso': 'inline label - always visible', 'Reseñas': 'inline label - always visible', 'Caract': 'inline label - always visible', });
lyr_LaIglesiadeJesucristodelosSantosdelosltimosDas_15.set('fieldLabels', {'Name': 'inline label - always visible', 'Tipo atrac': 'inline label - always visible', 'Horario': 'inline label - always visible', 'Acceso': 'inline label - always visible', 'Reseñas': 'inline label - always visible', });
lyr_LagunaRedonda_16.set('fieldLabels', {'Name': 'inline label - always visible', 'Tipo atrac': 'inline label - always visible', 'Hora Punta': 'inline label - always visible', 'Reseñas': 'inline label - always visible', 'Acceso': 'inline label - always visible', });
lyr_HumedalPaicavi_17.set('fieldLabels', {'Name': 'inline label - always visible', 'Tipo atrac': 'inline label - always visible', 'Acceso': 'inline label - always visible', 'Reseñas': 'inline label - always visible', 'Precaucion': 'inline label - always visible', });
lyr_ParqueZoolgicoConcepcin_18.set('fieldLabels', {'Name': 'inline label - always visible', 'Tipo atrac': 'inline label - always visible', 'Horario': 'inline label - always visible', 'Acceso': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_BibliotecaComunitariaSanFrancisco_19.set('fieldLabels', {'Name': 'inline label - always visible', 'Tipo atrac': 'inline label - always visible', 'Horario': 'inline label - always visible', 'Acceso': 'inline label - always visible', 'Sitio web': 'inline label - always visible', });
lyr_CanchasBonilla_20.set('fieldLabels', {'Name': 'inline label - always visible', 'Tipo atrac': 'inline label - always visible', 'Acceso': 'inline label - always visible', 'Reseñas': 'inline label - always visible', 'Movi reduc': 'inline label - always visible', });
lyr_LaPicadadeMary_21.set('fieldLabels', {'Name': 'inline label - always visible', 'tipo atrac': 'inline label - always visible', 'Horario': 'inline label - always visible', 'acceso': 'inline label - always visible', 'Reseñas': 'inline label - always visible', });
lyr_Giardinocaf_22.set('fieldLabels', {'Name': 'inline label - always visible', 'Tipo atrac': 'inline label - always visible', 'Horario': 'inline label - always visible', 'Acceso': 'inline label - always visible', 'Reseñas': 'inline label - always visible', });
lyr_Giardinocaf_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});