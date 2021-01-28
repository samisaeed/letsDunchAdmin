
export class DataService {

    protected axios = require('axios');
    protected readonly _baseUrl = `https://api.letsdunch.com/`;

    getAll(urlParameters?: any): Promise<any> {
        return this.axios.get(`${this._baseUrl}`, { params: urlParameters ? urlParameters : null });
    }
    getById(id: number): Promise<any> {
        return this.axios.get(`${this._baseUrl}/${id}`);
    }

    create(resource: any): Promise<any> {
        return this.axios.post(`${this._baseUrl}`, resource);
    }

    update(resource: any): Promise<any> {
        return this.axios.put(`${this._baseUrl}${resource.id}/`, resource);
    }

    delete(id: number): Promise<any> {
        return this.axios.delete(`${this._baseUrl}/${id}`);
    }
}

