/// <reference path="./secand.ts" />

namespace WorldSimulator
{
    export class worldSimulator
    {
        public static Main():void
        {
            const Canvas:HTMLElement|null = document.getElementById("canvas")
            const c = Canvas.getContext("2d")

            const graph = new Graph();
            graph.Render(c)

        }
    }

    class Graph
    {
        public Nodes = {n1:90, n2:50, n3:200, n4:230}

        public Render(ctx:any): void
        {
            ctx.beginPath()
            ctx.moveTo(1,this.Nodes.n1)

            let point = 1
            for (const node in this.Nodes) {
                ctx.lineTo(point*15, this.Nodes[node])
                point++
            }
            ctx.stroke()           
        }
    }
}



WorldSimulator.worldSimulator.Main();
secand.sayhi();