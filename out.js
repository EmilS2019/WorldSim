"use strict";
var WorldSimulator;
(function (WorldSimulator) {
    var Display;
    (function (Display) {
        class Graph {
            constructor() {
                this.Nodes = [];
                this.canvas = document.createElement("canvas");
                this.canvas.width = 800;
                this.canvas.height = 500;
                document.body.appendChild(this.canvas);
                this.ctx = this.canvas.getContext("2d");
            }
            addNode(node) {
                this.Nodes.push(node);
            }
            Render() {
                this.ctx.beginPath();
                this.ctx.moveTo(1, this.Nodes[0]);
                let point = 1;
                for (const node in this.Nodes) {
                    this.ctx.lineTo(point * 15, this.Nodes[node]);
                    point++;
                }
                this.ctx.stroke();
            }
            Clear() {
                this.canvas.width = this.canvas.width;
            }
            addButton(text) {
                const button = document.createElement("button");
                button.addEventListener("click", () => {
                    this.addNode(Math.random() * 400);
                    this.Clear();
                    this.Render();
                });
                button.innerText = text || "Button";
                document.body.appendChild(button);
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
/// <reference path="./secand.ts" />
/// <reference path="./display.ts" />
var WorldSimulator;
(function (WorldSimulator) {
    class worldSimulator {
        static Main() {
            const graph = new WorldSimulator.Display.Graph();
            graph.addNode(0);
            graph.Render();
            graph.addButton("Click Me");
            const graph2 = new WorldSimulator.Display.Graph();
            graph2.addNode(0);
            graph2.Render();
            graph2.addButton("Clickz");
            const populationData = new Data();
        }
    }
    WorldSimulator.worldSimulator = worldSimulator;
    class Data {
    }
})(WorldSimulator || (WorldSimulator = {}));
/*const hello = (fixed) => (dynamic) => fixed + dynamic;
const howdy = hello("hiiii");
console.log(howdy("I am a bbgummy bear"));*/
WorldSimulator.worldSimulator.Main();
