import angular from "angular";

let dashbord = () => {
  return {
    template: require("./dashbord.html"),
    controller: "DashbordCtrl",
    controllerAs: "dashbord"
  };
};

class DashbordCtrl {
  constructor($scope) {
    this.url = "https://github.com/preboot/angular-webpack";
  }
}

const DASHBORD = "dashbord-module";

angular
  .module([DASHBORD], [])
  .directive("dashbord", dashbord)
  .controller("DashbordCtrl", DashbordCtrl);

export default DASHBORD;
