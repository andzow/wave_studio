import { API_URL } from ".."
import ApplicationService from "../services/ApplicationService"

export default class ApplicationController {
    static async createApplication(FormObject) {
        try {
            const response = await ApplicationService.createApplication(FormObject)
            return response.status
        } catch (e) {
            console.log(e.response?.data?.message)
            return e.response.status
        }
    }

    static async findApplication(query) {
        try {
            const response = await ApplicationService.findApplication(query)
            return response.data
        } catch (e) {
            console.log(e.response?.data?.message)
            return e.response.status
        }
    }

    static async updateApplication(dataObject) {
        try {
            const response = await ApplicationService.updateApplication(dataObject)
            return response.status
        } catch (e) {
            console.log(e.response?.data?.message)
            return e.response.status
        }
    }

    static async deleteApplication(id) {
        try {
            const response = await ApplicationService.deleteApplication(id)
            return response.status
        } catch (e) {
            console.log(e.response?.data?.message)
            return e.response.status
        }
    }

    static async deleteAllApplication() {
        try {
            const response = await ApplicationService.deleteAllApplication()
            return response.status
        } catch (e) {
            console.log(e.response?.data?.message)
            return e.response.status
        }
    }
}