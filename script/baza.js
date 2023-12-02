
const products = [
    {
        name: 'Coca cola',
        amounts: [0, 0, 0, 0],
        prices: [6000, 9000, 13000, 16000],
        bulks: ['0.5', '1', '1.5', '2'],
        check: '',
        get Summ() {
            return this.prices[this.check] * this.amounts[this.check]
        },
        get HighSumm() {
            let sum = 0
            this.amounts.forEach((amount, i) => {
                sum += amount * this.prices[i]
            })
            return sum + sum * 0.15
        }
      
    },

    {
        name: 'Pepsi',
        amounts: [0, 0, 0, 0],
        prices: [6000, 9000, 13000, 16000],
        bulks: ['0.5', '1', '1.5', '2'],
        check: '',
        get Summ() {
            return this.prices[this.check] * this.amounts[this.check]
        },get HighSumm() {
            let sum = 0
            this.amounts.forEach((amount, i) => {
                sum += amount * this.prices[i]
            })
            return sum + sum * 0.15
        }
    },
    {
        name: 'Fanta',
        amounts: [0, 0, 0, 0],
        prices: [6000, 9000, 13000, 16000],
        bulks: ['0.5', '1', '1.5', '2'],
        check: '',
        get Summ() {
            return this.prices[this.check] * this.amounts[this.check]
        },get HighSumm() {
            let sum = 0
            this.amounts.forEach((amount, i) => {
                sum += amount * this.prices[i]
            })
            return sum + sum * 0.15
        }
    },
    {
        name: 'Sprite',
        amounts: [0, 0, 0, 0],
        prices: [6000, 9000, 13000, 16000],
        bulks: ['0.5', '1', '1.5', '2'],
        check: '',
        get Summ() {
            return this.prices[this.check] * this.amounts[this.check]
        },
        get HighSumm() {
            let sum = 0
            this.amounts.forEach((amount, i) => {
                sum += amount * this.prices[i]
            })
            return sum + sum * 0.15
        }
    },
    {
        name: '7UP',
        amounts: [0, 0, 0, 0],
        prices: [6000, 9000, 13000, 16000],
        bulks: ['0.5', '1', '1.5', '2'],
        check: '',
        get Summ() {
            return this.prices[this.check] * this.amounts[this.check]
        },
        get HighSumm() {
            let sum = 0
            this.amounts.forEach((amount, i) => {
                sum += amount * this.prices[i]
            })
            return sum + sum * 0.15
        }
    },
    {
        name: 'Red Bull',
        amounts: [0, 0],
        prices: [18000, 26000],
        bulks: ['0.3', '0.5'],
        check: '',
        get Summ() {
            return this.prices[this.check] * this.amounts[this.check]
        },
        get HighSumm() {
            let sum = 0
            this.amounts.forEach((amount, i) => {
                sum += amount * this.prices[i]
            
            })
            return sum + sum * 0.15
        }
    }
]

// console.log(HighSumm);
