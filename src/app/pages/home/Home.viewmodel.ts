
export class HomeViewModel {
    private gcashFund: number = 0;
    private bpiFund: number = 0;
    private bdoFund: number = 0;
    private metrobankFund: number = 0;
    private purchaseTotal: number = 0;

    public dataSource: any;
    public purchaseMoney: string;
    public totalFundMoney: string;
    public displayedColumns: string[] = ['name', 'value'];

    constructor(transactionList) {
        this.segregateData(transactionList);
        this.computeTotalFund();
        this.convertToMonetaryFormat();
    }

    private segregateData(transactionList) {
        transactionList.forEach(transaction => {
            switch (transaction.BankID) {
                case 'GCash':
                    this.gcashFund = this.gcashFund + transaction.Value;
                    break;
                case 'BPI':
                    this.bpiFund = this.bpiFund + transaction.Value;
                    break;
                case 'BDO':
                    this.bdoFund = this.bdoFund + transaction.Value;
                    break;
                case 'Metrobank':
                    this.metrobankFund = this.metrobankFund + transaction.Value;
                    break;
                case 'Purchase':
                    this.purchaseTotal = this.purchaseTotal + transaction.Value;
                    break;
            }
        });
    }

    private computeTotalFund() {
        this.totalFundMoney =
            (this.gcashFund +
            this.bpiFund +
            this.bdoFund +
            this.metrobankFund +
            - this.purchaseTotal).toLocaleString('en');
    }

    private convertToMonetaryFormat() {
        this.dataSource = [
            { name: 'GCash', value: this.gcashFund.toLocaleString('en') },
            { name: 'BPI', value: this.bpiFund.toLocaleString('en') },
            { name: 'BDO', value: this.bdoFund.toLocaleString('en') },
            { name: 'Metrobank', value: this.purchaseTotal.toLocaleString('en')},
        ]

        this.purchaseMoney = this.purchaseTotal.toLocaleString('en');
    }
}