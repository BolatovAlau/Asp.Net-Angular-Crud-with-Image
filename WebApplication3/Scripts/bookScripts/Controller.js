app.controller("mvcCRUDCtrl", ['$scope', 'crudAJService', 'FileUploader', function ($scope, crudAJService, FileUploader) {

    var uploader = $scope.uploader = new FileUploader({
        url: 'Home/FileUpload',
        queueLimit: 1,
        resetAfterUpload: true
    });

    uploader.onSuccessItem = function (event, xhr, item, response) {
        uploader.queue[0].remove();
        NewTest(xhr);
    };

    $scope.divWorker = false;
    GetAllWorkers();

    function GetAllWorkers() {
        var getWorkerData = crudAJService.getWorkers();
        getWorkerData.then(function (worker) {
            $scope.workers = worker.data;
        }, function () {
            alert('Error in getting worker records');
        });
    }

    $scope.DeletePhoto = function (workerId) {
        var p = crudAJService.DeletePhotoByWorkerId(workerId);
        $scope.workerPhoto = "";
    };

    $scope.editWorker = function (worker) {
        var getWorkerData = crudAJService.getWorker(worker.Id);
        getWorkerData.then(function (_worker) {
            $scope.worker = _worker.data;
            $scope.workerId = worker.Id;
            $scope.workerName = worker.Name;
            $scope.workerSurname = worker.Surname;
            $scope.workerMiddleName = worker.MiddleName;
            $scope.workerSex = worker.Sex;
            $scope.workerPhoto = worker.Photo;
            $scope.workerPosition = worker.Position;
            $scope.workerSubdivision = worker.Subdivision;
            $scope.workerCreateDep = worker.CreateDep;
            $scope.workerCloseDep = worker.CloseDep;
            $scope.workerOkDep = worker.OkDep;
            $scope.workerOkOpenDep = worker.OkOpenDep;

            $scope.Action = "Update";
            $scope.divWorker = true;
        }, function () {
            alert('Error in getting worker records');
        });
    }

    $scope.Subdivisions = ['A', 'B', 'C'];

    $scope.Positions = ['', 'Programmer', 'Accounter', 'Designer'];
    $scope.Positions2 = ['Programmer', 'Accounter', 'Designer'];

    $scope.AddUpdateWorker = function () {

        var isPhotoChanged = uploader.queue[0] != null && uploader.queue[0].file.name != null && uploader.queue[0].file.name != '';

        if (isPhotoChanged) {
            uploader.queue[0].upload();
        }
        else {
            NewTest(null);
        }
    }

    var NewTest = function (newPhotoName) {
        var Worker = {
            Name: $scope.workerName,
            Surname: $scope.workerSurname,
            MiddleName: $scope.workerMiddleName,
            Sex: $scope.workerSex,
            Photo: newPhotoName == null ? $scope.workerPhoto : newPhotoName,
            Position: $scope.workerPosition,
            Subdivision: $scope.workerSubdivision,
            CreateDep: $scope.workerCreateDep,
            CloseDep: $scope.workerCloseDep,
            OkDep: $scope.workerOkDep,
            OkOpenDep: $scope.workerOkOpenDep
        };

        var getWorkerAction = $scope.Action;

        if (getWorkerAction == "Update") {
            Worker.Id = $scope.workerId;

            var getWorkerData = crudAJService.updateWorker(Worker);

            getWorkerData.then(function (msg) {
                GetAllWorkers();
                //alert(msg.data);
                $scope.divWorker = false;
            }, function () {
                alert('Error in updating worker record');
            });
        }
        else {
            var getWorkerData = crudAJService.AddWorker(Worker);

            getWorkerData.then(function (msg) {
                GetAllWorkers();
                //alert(msg.data);
                $scope.divWorker = false;
            }, function () {
                alert('Error in adding worker record');
            });
        }
    };

    $scope.AddWorkerDiv = function () {
        ClearFields();
        $scope.Action = "Add";
        $scope.divWorker = true;
    }

    $scope.deleteWorker = function (worker) {
        var getWorkerData = crudAJService.DeleteWorker(worker.Id);
        getWorkerData.then(function (msg) {
            //alert(msg.data);
            GetAllWorkers();
        }, function () {
            alert('Error in deleting worker record');
        });
    }

    function ClearFields() {
        $scope.workerId = "";
        $scope.workerName = "";
        $scope.workerSurname = "";
        $scope.workerMiddleName = "";
        $scope.workerSex = "";
        $scope.workerPhoto = "";
        $scope.workerPosition = "";
        $scope.workerSubdivision = "";
        $scope.workerCreateDep = "";
        $scope.workerCloseDep = "";
        $scope.workerOkDep = "";
        $scope.workerOkOpenDep = "";
    }
    $scope.Cancel = function () {
        $scope.divWorker = false;
    };
}]);