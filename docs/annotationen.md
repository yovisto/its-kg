# Semantische Analyse in Knowledge Graphs
Die semantische Analyse innerhalb von Wissensgraphen, die auf RDF (Resource Description Framework) basieren, bezieht sich auf den Prozess der Interpretation und Verarbeitung von Daten, um deren Bedeutung und Beziehungen zu verstehen. Durch die Verwendung von Ontologien und Vokabularen ermöglicht die semantische Analyse, dass Informationen nicht nur als einfache Datenpunkte, sondern als bedeutungsvolle Entitäten und deren Verknüpfungen betrachtet werden. Dies fördert die Fähigkeit, komplexe Abfragen zu stellen, inferenzielle Schlussfolgerungen zu ziehen und neue Erkenntnisse aus den verknüpften Daten zu gewinnen. In Wissensgraphen wird die semantische Analyse genutzt, um die Interoperabilität zwischen verschiedenen Datenquellen zu verbessern und eine tiefere Einsicht in die zugrunde liegenden Informationen zu ermöglichen. Zu diesem Zweck werden Annotationen verwendet, und wir betrachten dies in den folgenden Abschnitten näher.

## Annotationen 
Wie bereits erwähnt, können RDF Daten in Form von Tripeln dargestellt werden, die aus einem Subjekt, einem Prädikat und einem Objekt bestehen. Das Objekt kann entweder ein Literal oder eine Ressource (IRI) sein. Ein Literal ist ein konkreter Wert, wie zum Beispiel ein Text oder eine Zahl, der direkt in den Tripel eingefügt wird, wie "42" oder "Hallo Welt". Eine Ressource hingegen verweist auf ein Konzept oder eine Entität, die durch eine IRI identifiziert wird, wie zum Beispiel eine Person oder einen Ort. 

[NIF](https://nif.readthedocs.io/en/latest/), das für NLP Interchange Format steht, ist eine Architektur und Methodologie zur Annotation von Literalen oder Texten innerhalb eines Wissensgraphen. Es ermöglicht die standardisierte Darstellung von Textannotationen in RDF (Resource Description Framework), wodurch die Integration von natürlichen Sprachverarbeitungswerkzeugen und -ressourcen erleichtert wird. Mit NIF können verschiedene Entitäten, Konzepte und Beziehungen innerhalb von Texten annotiert werden, was die Interoperabilität zwischen unterschiedlichen NLP-Systemen fördert. Diese Flexibilität und die Möglichkeit, kontextuelle Informationen einzubeziehen, machen NIF zu einem wertvollen Instrument für die Anreicherung von Wissensgraphen mit reichhaltigen, annotierten Textdaten.

Schauen wir uns noch einmal unser Triple an, das den Titel der "Satz des Pythagoras" Ressource darstellt:


	<https://edu.yovisto.com/wlo/resource/a44c7b05-2a37-455f-a743-312ff064102e> <https://schema.org/name> "Satz des Pythagoras" . 

Wenn wir nun mit einem weiteren Triple angeben möchten, dass wir den Text "Satz des Pythagoras" (in anderen Worten das Objektliteral) in diesem Triple annotieren wollen, würde es wie folgt aussehen:


	<https://edu.yovisto.com/wlo/resource/a44c7b05-2a37-455f-a743-312ff064102e> <https://w3id.org/curriculum/hasAnnotationTarget> <https://edu.yovisto.com/wlo/resource/a44c7b05-2a37-455f-a743-312ff064102e_nif=context_p=name_char=0,19> . 

Der letzte Teil der Objekt-URI im Triple (nif=context_p=name_char=0,19) dient als Kontextbeschreibung dessen, was wir annotieren. In diesem Fall annotieren wir die Eigenschaft <i>name</i> (https://schema.org/name), und <i>char=0,19</i> zeigt an, dass wir alle Zeichen im Text als unseren Kontext spezifizieren.

Nachdem wir den Annotation-Kontext definiert haben, wenden wir uns nun dem eigentlichen Annotierungsprozess zu. Der Annotierungsprozess analysiert die Wörter innerhalb des festgelegten Annotation-Kontexts. Dies geschieht durch den sogenannten 'Annotator'. Es können mehrere Annotatoren auf den Text angewendet werden, und je nach Annotator sind wir in der Lage, weitere Informationen aus dem Text zu extrahieren und diese wiederum mit anderen externen Wissensgraphen zu verknüpfen. In unserem Fall verwenden wir zwei Annotatoren, nämlich [DBpedia Spotlight](https://www.dbpedia-spotlight.org/) und [spaCy](https://spacy.io/). DBpedia Spotlight ist ein Tool zur automatischen Annotation von Texten, das es ermöglicht, Entitäten aus der DBpedia-Wissensgraph in unstrukturierten Texten zu identifizieren und zu verlinken. DBpedia-Entitäten können auch problemlos mit Wikidata-Entitäten verknüpft werden, einem weiteren wichtigen externen Wissensgraphen, der strukturierte Daten über Personen, Orte und Dinge bereitstellt. Wenn wir unser Beispiel nun weiter ausbauen, sind wir in der Lage, mit zwei neuen Tripeln, DBpedia-Entitäten auf folgende Weise mit dem bereits definierten Kontext zu verknüpfen:


	<https://edu.yovisto.com/wlo/resource/a44c7b05-2a37-455f-a743-312ff064102e_a=dbpedia-spotlight_p=name_char=9,19> <https://w3id.org/curriculum/hasAnnotationTarget> <https://edu.yovisto.com/wlo/resource/a44c7b05-2a37-455f-a743-312ff064102e_nif=context_p=name_char=0,19> . 

    <https://edu.yovisto.com/wlo/resource/a44c7b05-2a37-455f-a743-312ff064102e_a=dbpedia-spotlight_p=name_char=9,19> <http://www.w3.org/2005/11/its/rdf#taIdentRef> <http://de.dbpedia.org/resource/Pythagoras> .

Im letzten Teil des Subjekts des ersten Tripels sehen wir, dass der Annotator als DBpedia Spotlight angegeben ist und der Teil des Textes, der annotiert wurde, in diesem Fall von Zeichen 9 bis 19 reicht. Mit dem Prädikat <i>hasAnnotation</i> ist es mit dem oben angegebenen Kontext verknüpft. Das zweite Triple verknüpft den annotierten Text mit der spezifischen DBpedia-Entität über das Prädikat <i>taIndentRef</i>.

SpaCy ist ein Annotator, der linguistische Informationen in Texten identifiziert, wie z.B. die Wortart, Named Entity Recognition und morphologische Merkmale. Die aus spaCy resultierenden annotierten Texte sind mit externen linguistischen Wissensgraphen verknüpft, wie z.B. WordNet. Die spaCy-Annotationen folgen ähnlichen Mustern wie die von DBpedia Spotlight und sehen wie folgt aus:


	<https://edu.yovisto.com/wlo/resource/a44c7b05-2a37-455f-a743-312ff064102e_a=spacy_p=name_char=9,19> <https://w3id.org/curriculum/hasAnnotationTarget> <https://edu.yovisto.com/wlo/resource/a44c7b05-2a37-455f-a743-312ff064102e_nif=context_p=name_char=0,19> . 

    <https://edu.yovisto.com/wlo/resource/a44c7b05-2a37-455f-a743-312ff064102e_a=spacy_p=name_char=9,19> <http://www.w3.org/2005/11/its/rdf#taIdentRef> <http://globalwordnet.org/ili/i96649> .

Das Subjekt im ersten Triple gibt den Namen des Annotators als spaCy an, während das zweite Triple den annotierten Text mit der spezifischen WordNet-Entität (auch als Synset bezeichnet) verknüpft.

Auf ähnliche Weise wird dieser Prozess auch für andere Objektliterale, die mit der Subjektressource verknüpft sind, wie <i>description</i> (https://schema.org/description) und <i>keywords</i> (https://schema.org/keywords), durchgeführt. Im nächsten Abschnitt werden wir die Anwendungsbereiche untersuchen, die uns durch diese Annotationen eröffnet werden.
