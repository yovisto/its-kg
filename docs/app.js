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
} LIMIT 15
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

    yasgui2.getTab().yasqe.setValue(`select distinct * where {
{   
    ?doc a <https://schema.org/CreativeWork> .
    ?doc <https://schema.org/name> ?title .
    filter regex(?title, "bismarck", "i")
    optional {?doc <https://schema.org/description> ?description .}
}union{
    ?doc a <https://schema.org/CreativeWork> .
    ?doc <https://schema.org/name> ?description .
    filter regex(?description, "bismarck", "i")
    optional {?doc <https://schema.org/description> ?title .}       
}
} LIMIT 15
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

    yasgui3.getTab().yasqe.setValue(`select distinct * where {
    ?doc a <https://schema.org/CreativeWork> .
    ?doc <https://schema.org/about> ?list .
    ?list <https://schema.org/identifier> <http://w3id.org/openeduhub/vocabs/discipline/380> .
} LIMIT 10
     `);



    const yasgui4 = new Yasgui(document.getElementById("yasgui4"), {
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

    yasgui4.getTab().yasqe.setValue(`PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
select distinct ?fach ?label where {
        ?doc a <https://schema.org/CreativeWork> .
        ?doc <https://schema.org/about> ?item .
        ?item <https://schema.org/identifier> ?fach .
        optional {?item <https://schema.org/name>  ?label}}
} order by ?label
     `);


    const yasgui5 = new Yasgui(document.getElementById("yasgui5"), {
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

    yasgui5.getTab().yasqe.setValue(`select count(*) where {
    select distinct * where {
        ?doc a <https://schema.org/CreativeWork> .
        ?doc <https://schema.org/about>/<https://schema.org/identifier> <http://w3id.org/openeduhub/vocabs/discipline/380> .
    } 
}
     `);

     
});