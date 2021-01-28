// const DashboardService = () => {
// }

import { DataService } from "../shared/sevices/DataService/DataService";

// export default DashboardService;
export class DashboardService extends DataService {

    constructor() {
        super();
    }

    getTotalVisitor(): Promise<any> {
        return this.axios.get(`${this._baseUrl}/some thing you can add`);
    }
} 