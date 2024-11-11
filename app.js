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
    yasgui.getTab().yasqe.setValue(`
PREFIX schema: <https://schema.org/>
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
select distinct * where {
{
    optional {?doc <https://schema.org/name> ?title .}
    optional {?doc <http://purl.org/dc/terms/title> ?title .}
    ?doc <https://schema.org/description> ?description .
    filter regex(?description, "bismarck", "i")
}
union
{
    optional {?doc <https://schema.org/name> ?title .}
    optional {?doc <http://purl.org/dc/terms/title> ?title .}
    ?doc <https://schema.org/description> ?description .
    filter regex(?title, "bismarck", "i")
}

} LIMIT 10
     `);
     

    $('.tab-kg, .tab-content-kg').removeClass('active');
    $('#container1').addClass('active');
    $($('#container1').data('target')).addClass('active');
    
    $('.tab-kg').click(function(){
        $('.tab-kg, .tab-content-kg').removeClass('active');
        $(this).addClass('active');
        $($(this).data('target')).addClass('active');
    });   
    

});