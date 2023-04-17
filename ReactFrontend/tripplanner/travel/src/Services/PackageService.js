import axios from "axios";

const PACKAGE_API_BASE_URL = "http://localhost:8080/api/v1/addPackage";

class PackageService{
    getAddedPackages(){
        return axios.get(PACKAGE_API_BASE_URL);
    }

    createpackage(pac){
        return axios.post(PACKAGE_API_BASE_URL,pac);
    }

    getPackageById(packId){
        return axios.get(PACKAGE_API_BASE_URL+'/'+packId);
    }

    updatePackage(pack,packageId){
        return axios.put(PACKAGE_API_BASE_URL + '/' + packageId, pack);
    }

    delettePackage(packId){
        return axios.delete(PACKAGE_API_BASE_URL + '/' + packId);
    }
}

export default new PackageService()