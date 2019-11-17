/// <reference path="./secand.ts" />
/// <reference path="./display.ts" />

namespace WorldSimulator
{
    export class worldSimulator
    {
        public static Main():void
        {
            const graph = new Display.Graph();
            graph.addNode(50)
            graph.addNode(60)
            graph.addNode(110)
            graph.Render()

        }
    }

    class Data
    {
        
    }
}


WorldSimulator.worldSimulator.Main();
// secand.sayhi();