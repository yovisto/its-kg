# Qualitätssicherung
Obwohl die Annotatoren recht gut darin sind, Entitäten im Text zu identifizieren, machen sie dennoch Fehler. Dies ist besonders auffällig bei Named Entities, die mehrere Bedeutungen haben können. Zum Beispiel kann das Wort "Churchill" in einem Text entweder auf den britischen Politiker "Winston Churchill" oder auf eine kanadische Stadt namens "Churchill" verweisen. Gelegentlich ist der Annotator nicht in der Lage, die korrekte Entität aus dem Kontext abzuleiten, was zu Fehlklassifikationen führt.

Um dieses Problem anzugehen und die Qualität zu verbessern, könnten wir mehrere Annotatoren einsetzen, die Wikidata-Entitäten im gleichen Text klassifizieren. Glücklicherweise ist DBPedia Spotlight nicht der einzige Annotator, der in der Lage ist, Wikidata-Entitäten zu klassifizieren. Der [yovisto-KEA-Annotator](https://github.com/yovisto/kea-wiki-extraction) klassifiziert ebenfalls Wikidata-Entitäten. In diesem Zusammenhang ist es wichtig, dass die Annotatoren unterschiedliche Algorithmen verwenden, wenn sie die Wikidata-Entitäten klassifizieren, da sonst die Fehler wiederholt werden. Dies ermöglicht es uns nun zu schließen, dass die Genauigkeit höher ist, wenn beide Annotatoren eine bestimmte Wikidata-Entität für denselben Textabschnitt klassifiziert haben. Wenn beide Annotatoren die Wikidata-Entität für Pythagoras im Text, der mit unserer Bildungsressource verknüpft ist, klassifiziert haben, können wir dies in unserem Wissensgraphen wie folgt ausdrücken:

    <https://edu.yovisto.com/wlo/resource/a44c7b05-2a37-455f-a743-312ff064102e> <http://edu.yovisto.com/ontology/1.0/annotationLevel2>
	 <http://de.dbpedia.org/resource/Pythagoras> .

In diesem Beispiel haben wir die Bildungsressource mit der Wikidata (DBpedia)-Entität über ein sogenanntes Level-2-Prädikat verbunden. Sollte nur einer der Annotatoren eine Wikidata-Entität im Text klassifizieren, können wir dies dennoch in unserem Wissensgraphen mit einem Level-1-Prädikat wie folgt ausdrücken:	 

	<https://edu.yovisto.com/wlo/resource/a44c7b05-2a37-455f-a743-312ff064102e> <http://edu.yovisto.com/ontology/1.0/annotationLevel1>
	 <http://de.dbpedia.org/resource/Pythagoras> .

Interessanterweise sind einige Wikidata-Entitäten im Wikidata-Wissensgraphen auch über den WordNet-ILI mit WordNet-Konzepten verknüpft. Dies eröffnet weitere Möglichkeiten für Qualitätsprüfungen unserer Annotationen. Wenn beispielsweise einer unserer Wikidata-Annotatoren eine Wikidata-Entität mit einem WordNet-ILI identifiziert hat und unser spaCy-Annotator das WordNet-Konzept mit demselben WordNet-ILI identifiziert hat, das auf der Wikidata-Entität vorhanden ist, können wir es ebenfalls mit einem Level-2-Prädikat verknüpfen. Darüber hinaus, wenn beide Wikidata-Annotatoren (DBpedia Spotlight und yovisto-KEA) dieselbe Wikidata-Entität klassifiziert haben, die mit dem WordNet-Konzept verknüpft ist, könnten wir die Bildungsressource mit der Wikidata-Entität über ein Level-3-Prädikat verknüpfen. Dies wäre auch unser höchster bestätigter Qualitätsindikator und kann in unserem Wissensgraphen wie folgt ausgedrückt werden:	 

	<https://edu.yovisto.com/wlo/resource/a44c7b05-2a37-455f-a743-312ff064102e> <http://edu.yovisto.com/ontology/1.0/annotationLevel3>
	 <http://de.dbpedia.org/resource/Pythagoras> .

Derzeit haben etwa 9300 Wikidata-Entitäten Verknüpfungen zu WordNet-Konzepten über den ILI, aber dies ist ein Forschungsfeld, das kontinuierlich weiterentwickelt wird, mit der klaren Möglichkeit, dies in naher Zukunft auf etwa 30000 zu erweitern. Dies könnte auch einen erheblichen Einfluss auf die Qualität der Annotationen in unserem Wissensgraphen haben. Der folgende Graph zeigt die Anzahl der überlappenden Übereinstimmungen für jeden Annotator in Bezug auf die oben genannten Annotationslevel. Wie erwähnt, wird die Anzahl der überlappenden WordNet-Annotationen mit anderen Annotatoren voraussichtlich stark steigen, angesichts der zunehmenden Verknüpfungen zwischen Wikidata und WordNet.

<div style="text-align: center;">
 <img src="/kg-images/kg-images - page 8.svg" style="border: 1px solid black; padding: 5px; max-width: 100%; height: auto;"> 
</div>