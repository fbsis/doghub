import Service from "./Service";

class DogsServices extends Service {

    async getAllDogs() {
        return this.get("breeds.json")
    }

    async getDog(id) {
        return this.get(`breed/${id}.json`)
    }

}

export default new DogsServices(DogsServices);
