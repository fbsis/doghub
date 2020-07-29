
class RequestService {

    // Abstrai a conexao com o banco (no caso usado required, mas pode ser alterado para Axios)
    constructor() {
        return this;
    }

    get(resource) {

        return require(`../Data/${resource}`);
    }

    save(resource, data) {
        //TO-DO
    }

    delete(resource, data) {
        //TO-DO

    }

}

export default new RequestService(RequestService);
