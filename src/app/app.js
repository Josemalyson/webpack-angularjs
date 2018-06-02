import angular from "angular";
import ngAnimate from "angular-animate";
import ngTouch from "angular-touch";
import uiBootstrap from "angular-ui-bootstrap";

import "bootstrap";
import "../style/app.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
  .module([MODULE_NAME], [ngAnimate, ngTouch, uiBootstrap])
  .directive("app", app)
  .controller("AppCtrl", AppCtrl);

export default MODULE_NAME;
