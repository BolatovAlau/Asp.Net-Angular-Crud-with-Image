app.service("crudAJService", function ($http) {

    //get All Workers
    this.getWorkers = function () {
        return $http.get("Home/GetAllWorkers");
    };

    // get Worker by workerId
    this.getWorker = function (workerId) {
        var response = $http({
            method: "post",
            url: "Home/GetWorkerById",
            params: {
                id: JSON.stringify(workerId)
            }
        });
        return response;
    }

    // Update Worker 
    this.updateWorker = function (worker) {
        var response = $http({
            method: "post",
            url: "Home/UpdateWorker",
            data: JSON.stringify(worker),
            dataType: "json"
        });
        return response;
    }

    // Add Worker
    this.AddWorker = function (worker) {
        var response = $http({
            method: "post",
            url: "Home/AddWorker",
            data: JSON.stringify(worker),
            dataType: "json"
        });
        return response;
    }

    //Delete Worker
    this.DeleteWorker = function (workerId) {
        var response = $http({
            method: "post",
            url: "Home/DeleteWorker",
            params: {
                workerId: JSON.stringify(workerId)
            }
        });
        return response;
    }

    this.DeletePhotoByWorkerId = function (workerId) {
        var response = $http({
            method: "post",
            url: "Home/DeletePhotoByWorkerId",
            params: {
                workerId: JSON.stringify(workerId)
            }
        });
        return response;
    }
});