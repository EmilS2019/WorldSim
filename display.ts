namespace WorldSimulator.Display {
    export class Graph implements IGraph {
        public Nodes = [90, 80, 250, 330]

        public addNode(node: number): void {
            this.Nodes.push(node)
        }

        public Render(): void {
            const ctx = window.ctx

            ctx.beginPath()
            ctx.moveTo(1, this.Nodes[0])

            let point = 1
            for (const node in this.Nodes) {

                ctx.lineTo(point * 15, this.Nodes[node])
                point++

            }

            ctx.stroke()
        }
    }

    export interface IGraph {
        Nodes: object
        addNode(node: number): void
        Render(): void
    }
}