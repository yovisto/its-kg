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

## Anwendungsbereiche von Annotationen
Als grundlegenden ersten Schritt wäre es nützlich, eine einfache Textabgleichsuche in unserem Wissensgraphen durchzuführen, um Bildungsressourcen zu finden. Dazu könnten wir nach Wörtern in Objektliteralen suchen, die über die Prädikate <i>description</i> und <i>name</i> mit den Bildungsressourcen verknüpft sind. Probieren Sie die SPARQL-Abfrage unten aus, um nach "Pythagoras" in unserem Wissensgraphen zu suchen.

**Zeigen Sie alle Dokumente an, die das Wort "Pythagoras" enthalten.**
<div id="yasgui6"></div>

### Wikidata
Wie bereits erwähnt, ermöglicht uns der DBPedia Spotlight Annotator, Wikidata-Entitäten in unseren Bildungsressourcen zu identifizieren. Wir können nun die Wikidata-Entitäten nutzen, um weitere Informationen aus dem Wikidata-Wissensgraphen zu extrahieren. Jede Wikidata-Entität ist mit einer Liste von Kategorien verknüpft. Zum Beispiel hat der Satz des Pythagoras die Wikidata-IRI [https://www.wikidata.org/wiki/Q11518](https://www.wikidata.org/wiki/Q11518), und die Kategorien <i>Griechische Philosophie</i> und <i>Dreiecksgeometrie</i> sind mit ihm verknüpft. Das bedeutet, dass wir in der Lage sind, eine Liste von Wikidata-Kategorien mit jedem unserer Bildungsressourcendokumente zu verknüpfen. Dies gibt uns wiederum die Möglichkeit, Dokumente miteinander zu vergleichen und Empfehlungen basierend auf den gemeinsamen Kategorien, die diese Dokumente miteinander teilen, auszusprechen. Sehen wir uns ein Beispiel an. Wenn wir unsere Suchanfrage, wie oben erklärt, verwenden, um nach Dokumenten über den Satz des Pythagoras zu suchen, dann ist eines der Suchergebnisse "Geometrie: Videos zu Längen, Flächen und Winkeln" mit einer Wissensgraph-IRI von [https://edu.yovisto.com/wlo/resource/74e54517-a997-40b4-8e58-1864a57b419e](https://edu.yovisto.com/wlo/resource/74e54517-a997-40b4-8e58-1864a57b419e). Jetzt können wir diese Wissensgraph-IRI verwenden, um andere Dokumente basierend auf der Anzahl der gemeinsamen Kategorien, die sie haben, zu empfehlen.

**Zeigen Sie Dokumente an, die verwant sind an "[https://edu.yovisto.com/wlo/resource/74e54517-a997-40b4-8e58-1864a57b419e](https://edu.yovisto.com/wlo/resource/74e54517-a997-40b4-8e58-1864a57b419e)"**
<div id="yasgui7"></div>

Ein weiterer Vorteil eines Wissensgraph-Ansatzes in einem Empfehlungssystem ist, dass wir nicht nur Empfehlungen aussprechen können, sondern auch erklären können, warum diese Empfehlungen gegeben wurden. In der vorherigen Abfrage konnten wir eine Liste empfohlener Dokumente basierend auf der Anzahl der überlappenden Kategorien erhalten. Jetzt können wir in einer Folgeabfrage jedes der empfohlenen Dokumente mit dem ursprünglichen Dokument vergleichen, um eine genaue Liste der überlappenden Kategorien für das spezifische empfohlene Dokument und das ursprüngliche Dokument zu erhalten. Im oben genannten Beispiel "Geometrie: Videos zu Längen, Flächen und Winkeln" war die erste Empfehlung "ABSCHLUSSPRÜFUNG Realschule Mathe – Geometrie" mit einer Wissensgraph-IRI von [https://edu.yovisto.com/wlo/resource/43be9071-ad66-44a6-8d35-23b6cc94fc04](https://edu.yovisto.com/wlo/resource/43be9071-ad66-44a6-8d35-23b6cc94fc04). Da wir auch die IRI des ursprünglichen Dokuments haben, können wir jetzt einen Vergleich anstellen, um genau zu verstehen, warum diese beiden Dokumente miteinander verbunden sind.

**Die Abfrage sieht wie folgt aus:**
<div id="yasgui8"></div>



Schließlich ist es auch erwähnenswert, dass Wikidata [out-of-the-box Visualisierungen](https://www.wikidata.org/wiki/Wikidata:SPARQL_query_service/Wikidata_Query_Help/Result_Views) bietet, die leicht in eine Website eingebettet werden können. Da wir die entsprechenden Wikidata-Entitäten, die mit unserem Wissensgraphen verknüpft sind, haben, können wir ebenfalls von diesen Visualisierungen profitieren. Unten sind einige Beispiele:
<table>
<tr>
<td>
<img src="/kg-images/Pythagoras1.png" style="border: 1px solid black; padding: 5px; max-width: 100%; height: auto;">
</td>
<td>
<img src="/kg-images/Pythagoras2.png" style="border: 1px solid black; padding: 5px; max-width: 100%; height: auto;">
</td>
</tr>
</table>

### WordNet
Einer der großen Vorteile der Verknüpfung mit dem WordNet-Wissensgraphen ist, dass wir detailliertere Informationen über die Konzepte erhalten, die wir in unserem Text identifizieren. Wenn unser Annotator beispielsweise das Substantiv "Kohlenstoffdioxid" im Text identifiziert hat, sind wir in der Lage, eine Visualisierung aus dem WordNet-Wissensgraphen zu generieren, die wie folgt aussieht:

<div style="text-align: center;">
	<img src="/kg-images/wordnet_de.png" style="border: 1px solid black; padding: 5px; max-width: 100%; height: auto;">
</div>

<br/>
Ein weiterer Vorteil von WordNet ist der sogenannte Interlinguale Indikator (ILI), der ein Identifikator ist, der ähnliche Konzepte in verschiedenen Sprachen miteinander verknüpft. Dies ermöglicht es uns beispielsweise, unsere Visualisierung zu erweitern, um ein besseres kontextuelles Verständnis eines Konzepts in verschiedenen Sprachen zu erhalten. Unten ist eine Visualisierung des Substantiv "Kohlenstoffdioxid" mit dem Deutschen und dem Englischen nebeneinander:

<div style="text-align: center;">
	<img src="/kg-images/wordnet_de_en.png" style="border: 1px solid black; padding: 5px; max-width: 100%; height: auto;">
</div>

## Qualitätssicherung
