

import RequestService from "./RequestService";

class Service {

    // abstrai o uso de serviço de comunicação com o 'banco de dados'
    
    async get(resource) {
        return RequestService.get(resource);
    }
}

export default Service;
