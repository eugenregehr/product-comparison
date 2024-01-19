<script setup lang="ts">
import Card from 'primevue/card';
</script>


<template>
    <div class="h-screen mt-10">
        <Card class="max-w-2xl mx-auto">
            <template #title> Informationen & Hinweise zum Tool </template>
            <template #content>
                <div class="prose relative">
                    <ul>
                        <li>Seit Oktober 2023 wird die Liste ständig erweitert.</li>
                        <li>Bitte beachte, dass alle Angaben ohne Gewähr sind und sich mit der Zeit ändern können.</li>
                        <li>In diesem Vergleich liegt der Fokus auf den wichtigsten Werten, die dir bei deiner
                            Kaufentscheidung
                            helfen
                            sollen.</li>
                        <li>Die Preise sind von Amazon.de, und die Aminowerte entweder direkt von Amazon oder von der
                            jeweiligen
                            Markenseite.</li>
                        <li>Ich habe nur Proteinprodukte mit einem ausgewiesenen Aminosäurenprofil für den Vergleich
                            ausgewählt.
                        </li>
                        <li>Wenn du Fehler entdeckst oder neue Produkte zum Vergleich vorschlagen möchtest, schreib mir
                            einfach
                            unter <a href="mailto:deine-email@example.com">deine-email@example.com</a>.</li>
                        <li>Einige der Links sind Affiliate-Links. Diese helfen bei der Finanzierung meiner Recherche und
                            motivieren
                            mich,
                            weiterhin die besten Informationen für dich bereitzustellen.</li>
                        <li>Danke für deine Unterstützung!</li>
                    </ul>
                </div>
            </template>
        </Card>
    </div>
</template>


<!-- 
Wie funktioniert die Produktbewertung?

Unser intelligentes Filtersystem hilft Ihnen dabei, das perfekte Produkt basierend auf Ihren persönlichen Präferenzen zu finden. Jedes Produkt erhält einen Gesamtscore, der bestimmt, wie gut es Ihren ausgewählten Kriterien entspricht. Hier ist, wie es funktioniert:

1. Auswahl der Kriterien:
Sie wählen aus einer Liste von Merkmalen diejenigen aus, die für Sie am wichtigsten sind. Zum Beispiel könnten das "wenig Fett", "viel Eiweiß" oder "niedriger Preis" sein.

2. Berechnung des Scores:
Für jedes ausgewählte Kriterium erhält jedes Produkt einen Score.
Wenn Sie "viel" von einem Merkmal wollen (z.B. "viel Eiweiß"), bekommen Produkte mit höheren Werten in diesem Bereich einen höheren Score.
Wenn Sie "wenig" von einem Merkmal wollen (z.B. "wenig Fett"), bekommen Produkte mit niedrigeren Werten in diesem Bereich einen höheren Score.
Die Scores aus allen ausgewählten Kriterien werden zusammengezählt, um den Gesamtscore für jedes Produkt zu ermitteln.
3. Sortierung der Produkte:
Die Produkte werden anhand ihres Gesamtscores sortiert, sodass die Produkte, die am besten zu Ihren Präferenzen passen, ganz oben in der Liste erscheinen. -->