var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_POTENCIALESPRODUCTIVOSLAPAZ_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'POTENCIALES PRODUCTIVOS LA PAZ<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_0.png" /> AGROPECUARIO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_1.png" /> AGROPECUARIO LIMITADO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_2.png" /> ANDINISMO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_3.png" /> APROVECHAMIENTO FORRAJERO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_4.png" /> CULTIVOS AGRICOLAS<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_5.png" /> CULTIVOS AGRICOLAS MERCADO LOCAL<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_6.png" /> CULTIVOS DE HORTALIZAS<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_7.png" /> CULTIVOS DE HORTALIZAS Y FRUTAS<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_8.png" /> CULTIVOS INDUSTRIALES Y DE CONSUMO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_9.png" /> EXPLOTACION DE YACIMIENTOS MINEROS<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_10.png" /> FORESTAL LIMITADO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_11.png" /> FORESTAL MADERABLE<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_12.png" /> FORESTAL MADERABLE Y NO MADERABLE<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_13.png" /> FORESTAL MADERABLE Y NO MADERABLE LIMITADO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_14.png" /> GANADERIA<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_15.png" /> GANADERIA BOVINA<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_16.png" /> GANADERIA BOVINA USO LIMITADO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_17.png" /> PASTOREO EXTENSIVO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_18.png" /> PASTOREO LIMITADO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_19.png" /> PISCICOLA Y CAPTACION DE AGUA<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_20.png" /> PROTECCION Y VIDA SILVESTRE<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_21.png" /> RAMAJE PARA COMBUSTIBLE<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_22.png" /> TURISTICO ESCENICO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_23.png" /> VIDA SILVESTRE<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSLAPAZ_1_24.png" /> ZONA  URBANA<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/POTENCIALESPRODUCTIVOSLAPAZ_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7784530.756036, -2624326.938884, -6378100.508078, -1071371.544357]
        })
    });
var format_MUNICIPIOSPOTENCIALESPRODUCTIVOSLAPAZ_2 = new ol.format.GeoJSON();
var features_MUNICIPIOSPOTENCIALESPRODUCTIVOSLAPAZ_2 = format_MUNICIPIOSPOTENCIALESPRODUCTIVOSLAPAZ_2.readFeatures(json_MUNICIPIOSPOTENCIALESPRODUCTIVOSLAPAZ_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIOSPOTENCIALESPRODUCTIVOSLAPAZ_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOSPOTENCIALESPRODUCTIVOSLAPAZ_2.addFeatures(features_MUNICIPIOSPOTENCIALESPRODUCTIVOSLAPAZ_2);
var lyr_MUNICIPIOSPOTENCIALESPRODUCTIVOSLAPAZ_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUNICIPIOSPOTENCIALESPRODUCTIVOSLAPAZ_2, 
                style: style_MUNICIPIOSPOTENCIALESPRODUCTIVOSLAPAZ_2,
                popuplayertitle: 'MUNICIPIOS POTENCIALES PRODUCTIVOS LA PAZ',
                interactive: true,
                title: '<img src="styles/legend/MUNICIPIOSPOTENCIALESPRODUCTIVOSLAPAZ_2.png" /> MUNICIPIOS POTENCIALES PRODUCTIVOS LA PAZ'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_POTENCIALESPRODUCTIVOSLAPAZ_1.setVisible(true);lyr_MUNICIPIOSPOTENCIALESPRODUCTIVOSLAPAZ_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_POTENCIALESPRODUCTIVOSLAPAZ_1,lyr_MUNICIPIOSPOTENCIALESPRODUCTIVOSLAPAZ_2];
lyr_MUNICIPIOSPOTENCIALESPRODUCTIVOSLAPAZ_2.set('fieldAliases', {'DEPTO': 'DEPTO', 'PROV': 'PROV', 'MUNICIPIO': 'MUNICIPIO', 'ZONA': 'ZONA', 'POT PROD': 'POT PROD', 'REGION': 'REGION', });
lyr_MUNICIPIOSPOTENCIALESPRODUCTIVOSLAPAZ_2.set('fieldImages', {'DEPTO': 'TextEdit', 'PROV': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ZONA': 'TextEdit', 'POT PROD': 'TextEdit', 'REGION': 'TextEdit', });
lyr_MUNICIPIOSPOTENCIALESPRODUCTIVOSLAPAZ_2.set('fieldLabels', {'DEPTO': 'inline label - always visible', 'PROV': 'inline label - always visible', 'MUNICIPIO': 'inline label - always visible', 'ZONA': 'inline label - always visible', 'POT PROD': 'inline label - always visible', 'REGION': 'inline label - always visible', });
lyr_MUNICIPIOSPOTENCIALESPRODUCTIVOSLAPAZ_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});