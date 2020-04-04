import { AppService } from 'src/app/service/app.service';
import { MatTableDataSource } from '@angular/material/table';
import { BankDataSource } from 'src/app/shared/interface/BankDataSource.interface';
import { PurchaseDataSource } from 'src/app/shared/interface/PurchaseDataSource.interface';


export class FundingViewModel {

    private gcashData: BankDataSource[] = []
    private bpiData: BankDataSource[] = []
    private bdoData: BankDataSource[] = []
    private metrobankData: BankDataSource[] = []
    private purchaseData: PurchaseDataSource[] = []

    public gcashDataSource: MatTableDataSource<BankDataSource>;
    public bpiDataSource: MatTableDataSource<BankDataSource>;
    public bdoDataSource: MatTableDataSource<BankDataSource>;
    public metrobankDataSource: MatTableDataSource<BankDataSource>;
    public purchaseDataSource: MatTableDataSource<PurchaseDataSource>;

    public bankColumns = ['Value', 'InsertDate'];
    public purchaseColumns = ['Description', 'Value', 'InsertDate'];

    constructor(transactionList) {
        this.segregateData(transactionList);
        this.initialiseData();
    }

    private segregateData(transactionList) {
        transactionList.forEach(transaction => {
            transaction.InsertDate = AppService.timestampToDisplayDate(transaction.InsertDate);
            switch (transaction.BankID) {
                case 'GCash':
                    this.gcashData.push(transaction);
                    break;
                case 'BPI':
                    this.bpiData.push(transaction);
                    break;
                case 'BDO':
                    this.bdoData.push(transaction);
                    break;
                case 'Metrobank':
                    this.metrobankData.push(transaction);
                    break;
                case 'Purchase':
                    this.purchaseData.push(transaction);
                    break;
            }
        });
    }

    private initialiseData(){
        this.gcashDataSource = new MatTableDataSource(this.gcashData);
        this.bpiDataSource = new MatTableDataSource(this.bpiData);
        this.bdoDataSource = new MatTableDataSource(this.bdoData);
        this.metrobankDataSource = new MatTableDataSource(this.metrobankData);
        this.purchaseDataSource = new MatTableDataSource(this.purchaseData);
    }

    public initialisePaginators(paginators) {
        this.gcashDataSource.paginator = paginators.gcashPaginator;
        this.bpiDataSource.paginator = paginators.bpiPaginator;
        this.bdoDataSource.paginator = paginators.bdoPaginator;
        this.metrobankDataSource.paginator = paginators.metrobankPaginator;
        this.purchaseDataSource.paginator = paginators.purchasePaginator;
    }
}