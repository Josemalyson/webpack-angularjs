import angular from "angular";

let menu = () => {
  return {
    template: require("./menu.html"),
    controller: "MenuCtrl",
    controllerAs: "menu"
  };
};

class MenuCtrl {
  constructor($scope) {
    this.url = "https://github.com/preboot/angular-webpack";
  }
}

const MENU = "menu-module";

angular
  .module([MENU], [])
  .directive("menu", menu)
  .controller("MenuCtrl", MenuCtrl);

export default MENU;
