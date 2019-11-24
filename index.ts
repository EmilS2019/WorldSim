/// <reference path="./secand.ts" />
/// <reference path="./display.ts" />
/// <reference path="./data.ts" />

namespace WorldSimulator {
    export class worldSimulator {
        public static Main(): void {
            const graph = new Display.Graph();
            graph.addNode(graph.canvas.height)
            graph.Render()
            // graph.addButton("Click Me")


            const graph2 = new Display.Graph()
            graph2.addNode(0)
            graph2.Render()
            // graph2.addButton("Clickz")

            const populationData: Data.IData = new Data.Data(graph.canvas.height - 10)
            let coefficient = 0.95

            const button = document.getElementById("ntButton")!
            button.addEventListener("click", () => {
                graph.addNode(populationData.dataAmount)
                graph.Render()
                populationData.dataAmount = populationData.dataAmount * coefficient
                coefficient *= 1.15
                console.log(populationData.dataAmount)
            })





        }
    }
}

/*const hello = (fixed) => (dynamic) => fixed + dynamic;
const howdy = hello("hiiii");
console.log(howdy("I am a bbgummy bear"));*/

WorldSimulator.worldSimulator.Main();