# Anwendungsbereiche
Als grundlegenden ersten Schritt wäre es nützlich, eine einfache Textabgleichsuche in unserem Wissensgraphen durchzuführen, um Bildungsressourcen zu finden. Dazu könnten wir nach Wörtern in Objektliteralen suchen, die über die Prädikate <i>description</i> und <i>name</i> mit den Bildungsressourcen verknüpft sind. Probieren Sie die SPARQL-Abfrage unten aus, um nach "Pythagoras" in unserem Wissensgraphen zu suchen.

**Zeigen Sie alle Dokumente an, die das Wort "Pythagoras" enthalten.**

<div id="yasgui6"></div>

## Recommender
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

<img src="../kg-images/kg-images - page 4.svg" style="border: 1px solid black; padding: 5px; max-width: 100%; height: auto;">

</td>
<td>
<img src="../kg-images/kg-images - page 5.svg" style="border: 1px solid black; padding: 5px; max-width: 100%; height: auto;">
</td>
</tr>
</table>

## WordNet
Einer der großen Vorteile der Verknüpfung mit dem WordNet-Wissensgraphen ist, dass wir detailliertere Informationen über die Konzepte erhalten, die wir in unserem Text identifizieren. Wenn unser Annotator beispielsweise das Substantiv "Kohlenstoffdioxid" im Text identifiziert hat, sind wir in der Lage, eine Visualisierung aus dem WordNet-Wissensgraphen zu generieren, die wie folgt aussieht:

<div style="text-align: center;">
	<img src="../kg-images/kg-images - page 6.svg" style="border: 1px solid black; padding: 5px; max-width: 100%; height: auto;">
</div>

<br/>
Ein weiterer Vorteil von WordNet ist der sogenannte Interlinguale Indikator (ILI), der ein Identifikator ist, der ähnliche Konzepte in verschiedenen Sprachen miteinander verknüpft. Dies ermöglicht es uns beispielsweise, unsere Visualisierung zu erweitern, um ein besseres kontextuelles Verständnis eines Konzepts in verschiedenen Sprachen zu erhalten. Unten ist eine Visualisierung des Substantiv "Kohlenstoffdioxid" mit dem Deutschen und dem Englischen nebeneinander:

<div style="text-align: center;">
	<img src="../kg-images/kg-images - page 7.svg" style="border: 1px solid black; padding: 5px; max-width: 100%; height: auto;">
</div>