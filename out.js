"use strict";
var WorldSimulator;
(function (WorldSimulator) {
    var Data;
    (function (Data_1) {
        class Data {
            constructor(startAmount) {
                if (startAmount)
                    this.dataAmount = startAmount;
                else
                    this.dataAmount = 0;
            }
        }
        Data_1.Data = Data;
    })(Data = WorldSimulator.Data || (WorldSimulator.Data = {}));
})(WorldSimulator || (WorldSimulator = {}));
/// <reference path="./data.ts" />
var WorldSimulator;
(function (WorldSimulator) {
    var Display;
    (function (Display) {
        class Graph {
            constructor() {
                this.Nodes = [];
                this.data = new WorldSimulator.Data.Data();
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
                    this.addNode(this.data.dataAmount);
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
/// <reference path="./data.ts" />
var WorldSimulator;
(function (WorldSimulator) {
    class worldSimulator {
        static Main() {
            const graph = new WorldSimulator.Display.Graph();
            graph.addNode(graph.canvas.height);
            graph.Render();
            // graph.addButton("Click Me")
            const graph2 = new WorldSimulator.Display.Graph();
            graph2.addNode(0);
            graph2.Render();
            // graph2.addButton("Clickz")
            const populationData = new WorldSimulator.Data.Data(graph.canvas.height - 10);
            const button = document.getElementById("ntButton");
            button.addEventListener("click", () => {
                graph.addNode(populationData.dataAmount);
                graph.Render();
                populationData.dataAmount = populationData.dataAmount * 0.9;
            });
        }
    }
    WorldSimulator.worldSimulator = worldSimulator;
})(WorldSimulator || (WorldSimulator = {}));
/*const hello = (fixed) => (dynamic) => fixed + dynamic;
const howdy = hello("hiiii");
console.log(howdy("I am a bbgummy bear"));*/
WorldSimulator.worldSimulator.Main();
