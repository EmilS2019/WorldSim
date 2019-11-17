"use strict";
var secand;
(function (secand) {
    function sayhi() {
        console.log("hi");
    }
    secand.sayhi = sayhi;
})(secand || (secand = {}));
/*const hello = (fixed) => (dynamic) => fixed + dynamic;
const howdy = hello("hiiii");
console.log(howdy("I am a bbgummy bear"));*/
/// <reference path="./secand.ts" />
var WorldSimulator;
(function (WorldSimulator) {
    class worldSimulator {
        static Main() {
            const Canvas = document.getElementById("canvas");
            const c = Canvas.getContext("2d");
            const graph = new Graph();
            graph.Render(c);
        }
    }
    WorldSimulator.worldSimulator = worldSimulator;
    class Graph {
        constructor() {
            this.Nodes = { n1: 90, n2: 50, n3: 200, n4: 230 };
        }
        Render(ctx) {
            ctx.beginPath();
            ctx.moveTo(1, this.Nodes.n1);
            let point = 1;
            for (const node in this.Nodes) {
                ctx.lineTo(point * 15, this.Nodes[node]);
                point++;
            }
            ctx.stroke();
        }
    }
})(WorldSimulator || (WorldSimulator = {}));
WorldSimulator.worldSimulator.Main();
secand.sayhi();
