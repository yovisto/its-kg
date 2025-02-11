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


   
     const yasgui6 = new Yasgui(document.getElementById("yasgui6"), {
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

    yasgui6.getTab().yasqe.setValue(`select distinct * where {
{
?s <https://schema.org/description> ?lab .
filter regex(?lab, "Pythagoras", "i")
optional {?s <https://schema.org/name> ?title .}
optional {?s <http://purl.org/dc/terms/title> ?title .}
}
union
{
?s <https://schema.org/description> ?lab .
optional {?s <https://schema.org/name> ?title .}
optional {?s <http://purl.org/dc/terms/title> ?title .}
filter regex(?title, "Pythagoras", "i")
}

} LIMIT 10
     `);

     const yasgui7 = new Yasgui(document.getElementById("yasgui7"), {
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

    yasgui7.getTab().yasqe.setValue(`select distinct  ?doc  ?e ?cat count(distinct ?cat) as ?cnt ?finalTitle where {
<https://edu.yovisto.com/wlo/resource/74e54517-a997-40b4-8e58-1864a57b419e> <https://w3id.org/curriculum/hasAnnotationTarget> ?ctx .
?target <http://persistence.uni-leipzig.org/nlp2rdf/ontologies/nif-core#referenceContext> ?ctx .
?target <http://persistence.uni-leipzig.org/nlp2rdf/ontologies/nif-core#referenceContext> ?ctx .
?target <http://www.w3.org/2005/11/its/rdf#taAnnotatorsRef> <http://www.dbpedia-spotlight.org> .
?target <http://www.w3.org/2005/11/its/rdf#taIdentRef> ?e .
?e <http://purl.org/dc/terms/subject> ?cat .
?e2 <http://purl.org/dc/terms/subject> ?cat .
?target2 <http://www.w3.org/2005/11/its/rdf#taIdentRef> ?e2 .
?target2 <http://persistence.uni-leipzig.org/nlp2rdf/ontologies/nif-core#referenceContext> ?ctx2 .
?doc <https://w3id.org/curriculum/hasAnnotationTarget> ?ctx2 .
optional{?doc <http://purl.org/dc/terms/title> ?title2 .}
optional{?doc <http://www.w3.org/2004/02/skos/core#altLabel> ?title3 .}
optional{?doc <https://schema.org/name> ?title4 .}
bind( coalesce(coalesce(?title2,?title3), ?title4 ) as ?finalTitle)

} group by  ?doc ?e ?cat ?finalTitle order by desc(?cnt ) limit 10
     `);
     
     const yasgui8 = new Yasgui(document.getElementById("yasgui8"), {
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

    yasgui8.getTab().yasqe.setValue(`select distinct ?e as ?doc ?cat ?e2 as ?recommendation where {
<https://edu.yovisto.com/wlo/resource/74e54517-a997-40b4-8e58-1864a57b419e> <http://edu.yovisto.com/ontology/1.0/annotationLevel2> ?e .
?e <http://purl.org/dc/terms/subject> ?cat .
?e2 <http://purl.org/dc/terms/subject> ?cat .
<https://edu.yovisto.com/wlo/resource/43be9071-ad66-44a6-8d35-23b6cc94fc04> <http://edu.yovisto.com/ontology/1.0/annotationLevel2> ?e2 .
}
     `);


});