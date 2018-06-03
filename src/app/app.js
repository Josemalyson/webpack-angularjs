import angular from "angular";
import ngAnimate from "angular-animate";
import ngTouch from "angular-touch";
import menu from "./layout/menu/menu.controller";
import dashbord from "./layout/dashbord/dashbord.controller";

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/app.css";

let app = () => {
  return {
    template: require("./app.html"),
    controller: "AppCtrl",
    controllerAs: "app"
  };
};

class AppCtrl {
  constructor($scope) {
    this.url = "https://github.com/preboot/angular-webpack";
  }
}

const MODULE_NAME = "app";

angular
  .module([MODULE_NAME], [ngAnimate, ngTouch, menu, dashbord])
  .directive("app", app)
  .controller("AppCtrl", AppCtrl);

export default MODULE_NAME;
