$(document).ready(function(){
    const url = window.location.href.endsWith('/') ? window.location.href.slice(0, -1) : window.location.href;
    const yasgui = new Yasgui(document.getElementById("yasgui1"), {
        requestConfig: { endpoint: "https://edu.yovisto.com/sparql2" },
        ensdpointCatalogueOptions: {
            getData: function () {
                return [
                    { endpoint: "https://edu.yovisto.com/sparql2" },
                ];
            },
            keys: [],
        }
    });
    yasgui.getTab().yasqe.setValue(`PREFIX schema: <https://schema.org/>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    SELECT ?doc ?label WHERE {
    ?doc a <https://schema.org/CreativeWork> .
    ?doc schema:name ?label .
    } LIMIT 50
     `);
    
    const yasgui2 = new Yasgui(document.getElementById("yasgui2"), {
        requestConfig: { endpoint: "https://edu.yovisto.com/sparql2" },
        ensdpointCatalogueOptions: {
            getData: function () {
                return [
                    { endpoint: "https://edu.yovisto.com/sparql2" },
                ];
            },
            keys: [],
        }
    });
    yasgui2.getTab().yasqe.setValue(`
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
select distinct * where 
{
    ?Curriculum a <https://w3id.org/lehrplan/ontology/LP_00000438> . 
    ?Curriculum <https://w3id.org/lehrplan/ontology/LP_00000029><https://w3id.org/lehrplan/ontology/LP_30000048> . 
    ?Curriculum rdfs:label ?Beschreibung 
}
     `);
     
    const yasgui3 = new Yasgui(document.getElementById("yasgui3"), {
        requestConfig: { endpoint: "https://edu.yovisto.com/sparql2" },
        ensdpointCatalogueOptions: {
            getData: function () {
                return [
                    { endpoint: "https://edu.yovisto.com/sparql2" },
                ];
            },
            keys: [],
        }
    });
    yasgui3.getTab().yasqe.setValue(`
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
select distinct ?Curriculum ?Beschreibung ?Bundesland where 
{
    ?Curriculum a <https://w3id.org/lehrplan/ontology/LP_00000438> . 
    ?Curriculum <https://w3id.org/lehrplan/ontology/LP_00000029> ?bl . 
    ?Curriculum rdfs:label ?Beschreibung . 
    ?bl rdfs:label ?Bundesland . 
    FILTER(CONTAINS(LCASE(?Beschreibung), "latein"))
}
     `); 

    $('.tab-kg, .tab-content-kg').removeClass('active');

    $('.tab-kg').click(function(){
        // Remove 'active' class from all tabs and contents
        $('.tab-kg, .tab-content-kg').removeClass('active');
        
        // Add 'active' class to the clicked tab and corresponding content
        $(this).addClass('active');
        $($(this).data('target')).addClass('active');
    });   
    

});