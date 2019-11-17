"use strict";
var WorldSimulator;
(function (WorldSimulator) {
    var Display;
    (function (Display) {
        class Graph {
            constructor() {
                this.Nodes = [90, 80, 250, 330];
            }
            addNode(node) {
                this.Nodes.push(node);
            }
            Render() {
                const ctx = window.ctx;
                ctx.beginPath();
                ctx.moveTo(1, this.Nodes[0]);
                let point = 1;
                for (const node in this.Nodes) {
                    ctx.lineTo(point * 15, this.Nodes[node]);
                    point++;
                }
                ctx.stroke();
            }
        }
        Display.Graph = Graph;
    })(Display = WorldSimulator.Display || (WorldSimulator.Display = {}));
})(WorldSimulator || (WorldSimulator = {}));
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
/// <reference path="./display.ts" />
var WorldSimulator;
(function (WorldSimulator) {
    class worldSimulator {
        static Main() {
            const graph = new WorldSimulator.Display.Graph();
            graph.addNode(50);
            graph.addNode(60);
            graph.addNode(110);
            graph.Render();
        }
    }
    WorldSimulator.worldSimulator = worldSimulator;
    class Data {
    }
})(WorldSimulator || (WorldSimulator = {}));
WorldSimulator.worldSimulator.Main();
// secand.sayhi();
