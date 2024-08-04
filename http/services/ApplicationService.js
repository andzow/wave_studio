import $api from "..";

export default class ApplicationService {
    static async createApplication(FormObject) {
        return $api.post('/application', FormObject)
    }

    static async findApplication(query) {
        return $api.get('/application', {
            params: query
        })
    }

    static async updateApplication(dataObject) {
        return $api.put('/application/update', dataObject)
    }

    static async deleteApplication(id) {
        return $api.delete('/application/delete', { data: { id } })
    }

    static async deleteAllApplication() {
        return $api.delete('/application/deleteAll')
    }
}