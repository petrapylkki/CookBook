import http from "../http-common"

//methods that use axios to make HTTP requests to the API
class DataService {
    getAll() {
        return http.get("/recipes")
    }
    get(id) {
        return http.get(`/recipes/${id}`)
    }
    create(data) {
        return http.post("/recipes", data)
    }
    update(id, data) {
        return http.put(`/recipes/${id}`, data)
    }
    delete(id) {
        return http.delete(`/recipes/${id}`)
    }
    findByTitle(title) {
        return http.get(`/recipes?title=${title}`)
    }
}
export default new DataService()