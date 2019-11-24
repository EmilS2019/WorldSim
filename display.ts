namespace WorldSimulator.Display {
    export class Graph implements IGraph {
        public Nodes: Array<number> = []
        public ctx: CanvasRenderingContext2D
        public canvas: HTMLCanvasElement

        constructor() {
            this.canvas = document.createElement("canvas")
            this.canvas.width = 800
            this.canvas.height = 500
            document.body.appendChild(this.canvas)
            this.ctx = this.canvas.getContext("2d")!
        }

        public addNode(node: number): void {
            this.Nodes.push(node)
        }

        public Render(): void {
            this.ctx.beginPath()
            this.ctx.moveTo(1, this.Nodes[0])

            let point = 1
            for (const node in this.Nodes) {

                this.ctx.lineTo(point * 15, this.Nodes[node])
                point++
            }
            this.ctx.stroke()
        }

        public Clear(): void {
            this.canvas.width = this.canvas.width
        }

        public addButton(text?: string): void {
            const button = document.createElement("button")

            button.addEventListener("click", () => {
                this.addNode(Math.random() * 400)
                this.Clear()
                this.Render()
            })

            button.innerText = text || "Button"
            document.body.appendChild(button)
        }
    }

    export interface IGraph {
        Nodes: object
        addNode(node: number): void
        Render(): void
    }
}