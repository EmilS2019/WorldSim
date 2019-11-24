namespace WorldSimulator.Data {

    export interface IData {
        dataAmount: number
    }

    export class Data implements IData {

        public dataAmount: number

        constructor(startAmount?: number) {
            if (startAmount)
                this.dataAmount = startAmount
            else
                this.dataAmount = 0
        }
    }
}
