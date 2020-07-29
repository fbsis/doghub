import Service from "./Service";

class DogsServices extends Service {

    async getAllDogs() {
        return this.get("breeds.json")
    }

}

export default new DogsServices(DogsServices);
