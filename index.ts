/// <reference path="./secand.ts" />
/// <reference path="./display.ts" />

namespace WorldSimulator {
    export class worldSimulator {
        public static Main(): void {
            const graph = new Display.Graph();
            graph.addNode(0)
            graph.Render()
            graph.addButton("Click Me")


            const graph2 = new Display.Graph()
            graph2.addNode(0)
            graph2.Render()
            graph2.addButton("Clickz")


            const populationData = new Data()

        }
    }

    class Data {

        


    }
}

/*const hello = (fixed) => (dynamic) => fixed + dynamic;
const howdy = hello("hiiii");
console.log(howdy("I am a bbgummy bear"));*/

WorldSimulator.worldSimulator.Main();