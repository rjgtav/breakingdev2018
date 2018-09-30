(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _zebra_todo_zebra_todo_list_zebra_todo_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zebra-todo/zebra-todo-list/zebra-todo-list.component */ "./src/app/zebra-todo/zebra-todo-list/zebra-todo-list.component.ts");
/* harmony import */ var _zebra_todo_zebra_todo_add_zebra_todo_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zebra-todo/zebra-todo-add/zebra-todo-add.component */ "./src/app/zebra-todo/zebra-todo-add/zebra-todo-add.component.ts");
/* harmony import */ var _zebra_todo_zebra_todo_settings_zebra_todo_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zebra-todo/zebra-todo-settings/zebra-todo-settings.component */ "./src/app/zebra-todo/zebra-todo-settings/zebra-todo-settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _zebra_todo_zebra_todo_list_zebra_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["ZebraTodoListComponent"] },
    { path: 'edit/:id', component: _zebra_todo_zebra_todo_add_zebra_todo_add_component__WEBPACK_IMPORTED_MODULE_3__["ZebraTodoAddComponent"] },
    { path: 'new', component: _zebra_todo_zebra_todo_add_zebra_todo_add_component__WEBPACK_IMPORTED_MODULE_3__["ZebraTodoAddComponent"] },
    { path: 'settings', component: _zebra_todo_zebra_todo_settings_zebra_todo_settings_component__WEBPACK_IMPORTED_MODULE_4__["ZebraTodoSettingsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".zebra-background {\n  top: 0;\n  z-index: -1;\n  overflow: hidden;\n}\n\n.zebra-background img {\n  top: -16px;\n  left: -16px;\n  min-height: 100%;\n  min-width: 100%;\n  -webkit-filter: blur(8px);\n          filter: blur(8px);\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Background -->\r\n<div class=\"position-fixed w-100 h-100 zebra-background\">\r\n  <img class=\"position-absolute\" src=\"https://www.bing.com/az/hprichbg/rb/SouthernRightFlukes_ROW13667728800_1920x1080.jpg\" />\r\n</div>\r\n\r\n<div class=\"container position-relative\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/notification.service */ "./src/app/shared/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(notificationService) {
        this.notificationService = notificationService;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _zebra_todo_zebra_todo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zebra-todo/zebra-todo.module */ "./src/app/zebra-todo/zebra-todo.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _zebra_todo_zebra_todo_module__WEBPACK_IMPORTED_MODULE_4__["ZebraTodoModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/notification.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/notification.service.ts ***!
  \************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _zebra_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zebra.service */ "./src/app/shared/zebra.service.ts");
/* harmony import */ var _time_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time.service */ "./src/app/shared/time.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MINUTES = 15;
var NotificationService = /** @class */ (function () {
    function NotificationService(zebraService) {
        var _this = this;
        this.zebraService = zebraService;
        Notification.requestPermission(function (permission) {
            if (permission === 'granted') {
                _this.interval = setInterval(function () { return _this.run(); }, 250);
                _this.subscription = _this.zebraService.loadTasks().subscribe(function (value) { return _this.onTasksChanged(value); });
            }
        });
    }
    NotificationService.prototype.onTasksChanged = function (tasks) {
        this.tasks = tasks;
        this.task = tasks
            .filter(function (value) { return value.Scheduled >= _time_service__WEBPACK_IMPORTED_MODULE_2__["TimeService"].Now(); })
            .sort(function (a, b) { return a.Scheduled.getTime() - b.Scheduled.getTime(); })[0];
    };
    NotificationService.prototype.run = function () {
        if (this.task)
            if (this.task.Scheduled.getTime() - _time_service__WEBPACK_IMPORTED_MODULE_2__["TimeService"].Now().getTime() <= MINUTES * 60 * 1000)
                if (this.taskNotified != this.task.$ID) {
                    this.taskNotified = this.task.$ID;
                    new Notification(this.task.Name);
                    this.onTasksChanged(this.tasks);
                }
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_zebra_service__WEBPACK_IMPORTED_MODULE_1__["ZebraService"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _time_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time.pipe */ "./src/app/shared/time.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            exports: [_time_pipe__WEBPACK_IMPORTED_MODULE_2__["TimePipe"]],
            declarations: [_time_pipe__WEBPACK_IMPORTED_MODULE_2__["TimePipe"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/time.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/shared/time.pipe.ts ***!
  \*************************************/
/*! exports provided: TimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePipe", function() { return TimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TIME_MINUTE = 1;
var TIME_HOUR = TIME_MINUTE * 60;
var TIME_DAY = TIME_HOUR * 24;
var TimePipe = /** @class */ (function () {
    function TimePipe() {
    }
    TimePipe.prototype.transform = function (value, args) {
        value = +value;
        var hours = Math.floor(value % TIME_DAY / TIME_HOUR);
        var minutes = Math.floor(value % TIME_HOUR);
        return (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
    };
    TimePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'time'
        })
    ], TimePipe);
    return TimePipe;
}());



/***/ }),

/***/ "./src/app/shared/time.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/time.service.ts ***!
  \****************************************/
/*! exports provided: TimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeService", function() { return TimeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimeService = /** @class */ (function () {
    function TimeService() {
    }
    TimeService_1 = TimeService;
    TimeService.Now = function () {
        var result = new Date();
        result.setMinutes(result.getMinutes() + this.delta * 60);
        return result;
    };
    TimeService.Travel = function (enable, direction) {
        clearInterval(TimeService_1.interval);
        if (enable)
            TimeService_1.interval = setInterval(function () { return TimeService_1.delta += direction; }, 500);
    };
    TimeService.delta = 0; // in minutes
    TimeService = TimeService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TimeService);
    return TimeService;
    var TimeService_1;
}());



/***/ }),

/***/ "./src/app/shared/util.ts":
/*!********************************!*\
  !*** ./src/app/shared/util.ts ***!
  \********************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UtilService = /** @class */ (function () {
    function UtilService() {
    }
    UtilService.DateToUTC = function (date, timeOnly) {
        return date
            ? timeOnly
                ? new Date(Date.UTC(1970, 0, 1, date.getHours(), date.getMinutes()))
                : new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()))
            : null;
    };
    UtilService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "./src/app/shared/zebra-task.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/zebra-task.model.ts ***!
  \********************************************/
/*! exports provided: ZebraTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZebraTask", function() { return ZebraTask; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/app/shared/util.ts");
/* harmony import */ var _time_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time.service */ "./src/app/shared/time.service.ts");


var ZebraTask = /** @class */ (function () {
    function ZebraTask() {
        this.Duration = new Date(0);
        this.Duration.setHours(0);
        this.Duration.setMinutes(0);
        this.Duration.setSeconds(0);
    }
    ZebraTask.fromJSON = function (json) {
        var task = new ZebraTask();
        task.$ID = json['id'];
        task.Deadline = json['deadline']
            ? new Date(Date.parse(json['deadline']))
            : null;
        task.Complete = json['done'];
        task.Duration = new Date(Date.parse('1970-01-01 ' + json['duration']));
        task.Name = json['name'];
        task.Notes = json['notes'];
        task.Scheduled = new Date(Date.parse(json['scheduled']));
        return task;
    };
    ZebraTask.toJSON = function (obj) {
        return {
            task_id: obj.$ID ? obj.$ID : null,
            duration: _util__WEBPACK_IMPORTED_MODULE_0__["UtilService"].DateToUTC(obj.Duration),
            deadline: _util__WEBPACK_IMPORTED_MODULE_0__["UtilService"].DateToUTC(obj.Deadline),
            name: obj.Name,
            notes: obj.Notes ? obj.Notes : '',
            schedule: _util__WEBPACK_IMPORTED_MODULE_0__["UtilService"].DateToUTC(obj.Scheduled)
        };
    };
    Object.defineProperty(ZebraTask.prototype, "DeadlineInMinutes", {
        get: function () {
            return this.Deadline
                ? this.Deadline.getHours() * 60 + this.Deadline.getMinutes()
                : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZebraTask.prototype, "DurationInMinutes", {
        get: function () {
            return this.Duration
                ? this.Duration.getHours() * 60 + this.Duration.getMinutes()
                : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZebraTask.prototype, "ScheduledInMinutes", {
        get: function () {
            return this.Scheduled
                ? this.Scheduled.getHours() * 60 + this.Scheduled.getMinutes()
                : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZebraTask.prototype, "IsToday", {
        get: function () {
            return this.Scheduled != null && this.Scheduled.toDateString() == _time_service__WEBPACK_IMPORTED_MODULE_1__["TimeService"].Now().toDateString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZebraTask.prototype, "IsScheduled", {
        get: function () {
            return this.Scheduled && !this.Complete && !this.IsToday;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZebraTask.prototype, "IsValid", {
        get: function () {
            return !!this.Duration && !!this.Name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZebraTask.prototype, "TimeStartInMinutes", {
        get: function () {
            return this.Scheduled.getHours() * 60 + this.Scheduled.getMinutes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZebraTask.prototype, "TimeEndInMinutes", {
        get: function () {
            return (this.DurationInMinutes + this.TimeStartInMinutes) % (24 * 60);
        },
        enumerable: true,
        configurable: true
    });
    return ZebraTask;
}());



/***/ }),

/***/ "./src/app/shared/zebra.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/zebra.service.ts ***!
  \*****************************************/
/*! exports provided: ZebraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZebraService", function() { return ZebraService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _zebra_task_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zebra-task.model */ "./src/app/shared/zebra-task.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./src/app/shared/util.ts");
/* harmony import */ var _time_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./time.service */ "./src/app/shared/time.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BASE_URL = 'http://127.0.0.1:8080/';
var STORAGE_LOCAL_ID = 'zebra.account.id';
var ZebraService = /** @class */ (function () {
    function ZebraService(http) {
        this.http = http;
        this.tasks = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    ZebraService.prototype.loadCalendars = function () {
        var _this = this;
        return this.requestParameters()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (params) { return _this.http
            .post(BASE_URL + 'cals/get/', params); }));
    };
    ZebraService.prototype.loadTasks = function (force) {
        var _this = this;
        if (force || this.tasks.getValue().length == 0)
            this.requestParameters()
                .subscribe(function (params) { return _this.http
                .post(BASE_URL + 'get/', params)
                .subscribe(function (value) {
                var tasks = value[0].concat(value[1]);
                _this.tasks.next(tasks.map(function (task) { return _zebra_task_model__WEBPACK_IMPORTED_MODULE_2__["ZebraTask"].fromJSON(task); }));
            }); });
        return this.tasks.asObservable();
    };
    ZebraService.prototype.accountLogin = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observable) {
            var user = localStorage.getItem(STORAGE_LOCAL_ID);
            if (user) {
                observable.next(user);
                observable.complete();
            }
            else {
                _this.http.get(BASE_URL + 'signup/').subscribe(function (value) {
                    user = value['id'];
                    observable.next(user);
                    observable.complete();
                    localStorage.setItem(STORAGE_LOCAL_ID, user);
                });
            }
        });
    };
    ZebraService.prototype.calendarAdd = function (calendar) {
        return null;
    };
    ZebraService.prototype.calendarDelete = function (calendar) {
        return null;
    };
    ZebraService.prototype.taskAdd = function (task) {
        var _this = this;
        return this.requestParameters(_zebra_task_model__WEBPACK_IMPORTED_MODULE_2__["ZebraTask"].toJSON(task))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (params) { return _this.http
            .post(BASE_URL + 'add/', params); }));
    };
    ZebraService.prototype.taskComplete = function (task) {
        var _this = this;
        var params = { task_id: task.$ID };
        var complete = !task.Complete;
        if (complete) {
            var now = _time_service__WEBPACK_IMPORTED_MODULE_6__["TimeService"].Now();
            var timeTaken = now.getTime() - task.Scheduled.getTime();
            timeTaken = timeTaken < 0 ? task.Duration.getTime() : timeTaken;
            timeTaken = Math.min(timeTaken, task.Duration.getTime() * 4);
            params['time_taken'] = _util__WEBPACK_IMPORTED_MODULE_5__["UtilService"].DateToUTC(new Date(timeTaken));
            return this.requestParameters(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (params) { return _this.http
                .post(BASE_URL + 'complete/', _this.requestParameters(params)); }));
        }
        else {
            return this.requestParameters(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (params) { return _this.http.post(BASE_URL + 'uncomplete/', params); }));
        }
    };
    ZebraService.prototype.taskDelete = function (id) {
        var _this = this;
        return this.requestParameters({ task_id: id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (params) { return _this.http.post(BASE_URL + 'delete/', params); }));
    };
    ZebraService.prototype.taskEdit = function (task) {
        var _this = this;
        return this.requestParameters(_zebra_task_model__WEBPACK_IMPORTED_MODULE_2__["ZebraTask"].toJSON(task))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (params) { return _this.http
            .post(BASE_URL + 'edit/', params); }));
    };
    ZebraService.prototype.taskGet = function (id) {
        return this.loadTasks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (tasks) { return tasks.find(function (value) { return value.$ID == id; }); }));
    };
    ZebraService.prototype.taskPostpone = function (id) {
        var _this = this;
        return this.requestParameters({ task_id: id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (params) { return _this.http
            .post(BASE_URL + 'postpone/', params); }));
    };
    ZebraService.prototype.taskReplace = function (id) {
        var _this = this;
        return this.requestParameters({ task_id: id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (params) { return _this
            .http.post(BASE_URL + 'switch/', params); }));
    };
    ZebraService.prototype.requestParameters = function (params) {
        return this.accountLogin().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            params = params || {};
            params['user'] = user;
            params['time'] = _util__WEBPACK_IMPORTED_MODULE_5__["UtilService"].DateToUTC(_time_service__WEBPACK_IMPORTED_MODULE_6__["TimeService"].Now());
            return params;
        }));
    };
    ZebraService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ZebraService);
    return ZebraService;
}());



/***/ }),

/***/ "./src/app/zebra-todo/zebra-todo-add/zebra-todo-add.component.css":
/*!************************************************************************!*\
  !*** ./src/app/zebra-todo/zebra-todo-add/zebra-todo-add.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/zebra-todo/zebra-todo-add/zebra-todo-add.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/zebra-todo/zebra-todo-add/zebra-todo-add.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<owl-date-time #DueDate [pickerMode]=\"'dialog'\"></owl-date-time>\r\n<owl-date-time #Duration [pickerMode]=\"'dialog'\" [pickerType]=\"'timer'\"></owl-date-time>\r\n<owl-date-time #Scheduled [pickerMode]=\"'dialog'\"></owl-date-time>\r\n\r\n<!-- Back -->\r\n<div class=\"col position-fixed text-white\" style=\"top: 0.5rem; width: auto;\">\r\n  <div class=\"row align-items-center\"\r\n       (click)=\"onBackClick()\">\r\n    <fa-icon class=\"mr-2\" style=\"font-size: 2rem\" [icon]=\"faChevronLeft\"></fa-icon>\r\n    <span>Back</span>\r\n  </div>\r\n</div>\r\n\r\n<!-- Header -->\r\n<div class=\"row text-white\" style=\"margin-top: 96px; margin-bottom: 1rem;\">\r\n  <div class=\"d-flex flex-row justify-content-center w-100\">\r\n    <fa-icon style=\"font-size: 2rem\" [icon]=\"isNew ? faPlus : faPencilAlt\"></fa-icon>\r\n  </div>\r\n  <div class=\"font-weight-bold text-center text-uppercase w-100\">{{ isNew ? 'New' : 'Edit'}} Task</div>\r\n</div>\r\n\r\n<div class=\"col\">\r\n  <!-- Completed & Name -->\r\n  <div class=\"row position-relative align-items-center bg-white pl-3 pr-3\" style=\"height: 3rem\">\r\n    <fa-icon class=\"mr-3\"\r\n             [icon]=\"task.Complete ? faCheckCircle : faCircle\" style=\"font-size: 120%\"\r\n             [ngClass]=\"{ 'text-success': task.Complete }\"\r\n             [style.opacity]=\"!isNew ? 1 : 0.5\"\r\n             (click)=\"onCompleteClick()\"></fa-icon>\r\n    <input class=\"flex-grow-1 border-0\" [(ngModel)]=\"task.Name\" placeholder=\"Buy milk\" type=\"text\" />\r\n  </div>\r\n\r\n  <!-- Duration -->\r\n  <div class=\"row position-relative align-items-center bg-white pl-3 pr-3 mt-2\" style=\"height: 3rem\"\r\n       [owlDateTimeTrigger]=\"Duration\">\r\n    <input [owlDateTime]=\"Duration\" [(ngModel)]=\"task.Duration\" [max]=\"DURATION_MAX\" [min]=\"DURATION_MIN\" type=\"hidden\">\r\n\r\n    <fa-icon class=\"mr-3\"\r\n             [icon]=\"faStopwatch\" style=\"font-size: 120%\"\r\n             [style.opacity]=\"task.DurationInMinutes ? 1 : 0.5\"></fa-icon>\r\n\r\n    <span *ngIf=\"!task.DurationInMinutes\" style=\"opacity: 0.5\">Duration</span>\r\n    <span *ngIf=\"task.DurationInMinutes\" style=\"line-height: 1\">{{ task.DurationInMinutes | time }}</span>\r\n\r\n    <span class=\"position-absolute border-bottom\" style=\"width: calc(100% - 2rem); bottom: 0\"></span>\r\n\r\n  </div>\r\n\r\n  <!-- Due Date -->\r\n  <div class=\"row position-relative align-items-center bg-white pl-3 pr-3\" style=\"height: 3rem\"\r\n       [owlDateTimeTrigger]=\"DueDate\">\r\n    <input [owlDateTime]=\"DueDate\" [(ngModel)]=\"task.Deadline\" type=\"hidden\">\r\n\r\n    <fa-icon class=\"mr-3\"\r\n             [icon]=\"faCalendarAlt\" style=\"font-size: 120%\"\r\n             [style.opacity]=\"task.DeadlineInMinutes ? 1 : 0.5\"></fa-icon>\r\n\r\n    <span *ngIf=\"!task.DeadlineInMinutes\" style=\"opacity: 0.5\">Due date</span>\r\n    <span *ngIf=\"task.DeadlineInMinutes\" style=\"line-height: 1\">\r\n      <span>Due {{ task.Deadline | date }}</span><br/>\r\n      <small class=\"text-muted\">{{ task.DeadlineInMinutes | time }}</small>\r\n    </span>\r\n\r\n    <span *ngIf=\"!isNew\" class=\"position-absolute border-bottom\" style=\"width: calc(100% - 2rem); bottom: 0\"></span>\r\n  </div>\r\n\r\n  <!-- Scheduled -->\r\n  <div *ngIf=\"!isNew\" class=\"row position-relative align-items-center bg-white pl-3 pr-3\" style=\"height: 3rem\"\r\n       [owlDateTimeTrigger]=\"Scheduled\">\r\n    <input [owlDateTime]=\"Scheduled\" [(ngModel)]=\"task.Scheduled\" type=\"hidden\">\r\n\r\n    <fa-icon class=\"mr-3\"\r\n             [icon]=\"faClock\" style=\"font-size: 120%\"\r\n             [style.opacity]=\"task.ScheduledInMinutes ? 1 : 0.5\"></fa-icon>\r\n\r\n    <span *ngIf=\"!task.ScheduledInMinutes\" style=\"opacity: 0.5\">Scheduled date</span>\r\n    <span *ngIf=\"task.ScheduledInMinutes\" style=\"line-height: 1\">\r\n      <span>Scheduled for {{ task.Scheduled | date }}</span><br/>\r\n      <small class=\"text-muted\">{{ task.ScheduledInMinutes | time }}</small>\r\n    </span>\r\n\r\n    <span *ngIf=\"!isNew\" class=\"position-absolute border-bottom\" style=\"width: calc(100% - 2rem); bottom: 0\"></span>\r\n  </div>\r\n\r\n  <!-- Actions -->\r\n  <div *ngIf=\"!isNew && !task.Complete\"\r\n       class=\"row position-relative align-items-center bg-white text-primary pl-3 pr-3 mt-2\" style=\"height: 3rem\">\r\n    <div *ngIf=\"task.IsToday\" class=\"col text-center\" style=\"opacity: 0.75\"\r\n         (click)=\"onPostponeClick()\">\r\n      <fa-icon class=\"mr-3\" style=\"font-size: 120%\"\r\n               [icon]=\"faCalendarTimes\"></fa-icon>\r\n      <span>Postpone</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"task.IsToday\" class=\"col text-center\" style=\"opacity: 0.75\"\r\n         (click)=\"onReplaceClick()\">\r\n      <fa-icon class=\"mr-3\" style=\"font-size: 120%\"\r\n               [icon]=\"faExchangeAlt\"></fa-icon>\r\n      <span>Replace</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"!task.IsToday\" class=\"col text-center\" style=\"opacity: 0.75\"\r\n         (click)=\"onTodayClick()\">\r\n      <fa-icon class=\"mr-3\" style=\"font-size: 120%\"\r\n               [icon]=\"faCalendarPlus\"></fa-icon>\r\n      <span>Today</span>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Notes -->\r\n  <div class=\"row position-relative bg-white p-3 mt-2\" style=\"height: 9rem; margin-bottom: 4rem\">\r\n    <textarea class=\"border-0 p-0 w-100 h-100\" placeholder=\"Add a note\" [(ngModel)]=\"task.Notes\"></textarea>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- Delete/Save button -->\r\n<div class=\"position-fixed w-100\" style=\"bottom: 1rem; left: 0;\">\r\n  <div class=\"container\">\r\n    <div class=\"col\">\r\n      <div class=\"row align-items-center bg-white\" style=\"height: 3rem\">\r\n        <div *ngIf=\"!task.Complete\" class=\"col text-center text-primary\" style=\"opacity: 0.75;\"\r\n             (click)=\"onSaveClick()\">\r\n          <fa-icon class=\"mr-3\" style=\"font-size: 120%\"\r\n                   [icon]=\"faSave\"></fa-icon>\r\n          <span>Save</span>\r\n        </div>\r\n        <div *ngIf=\"!isNew\" class=\"col text-danger text-center\"\r\n             (click)=\"onDeleteClick()\">\r\n          <fa-icon class=\"mr-3\" style=\"font-size: 120%\"\r\n                   [icon]=\"faTrashAlt\"></fa-icon>\r\n          <span>Delete</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/zebra-todo/zebra-todo-add/zebra-todo-add.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/zebra-todo/zebra-todo-add/zebra-todo-add.component.ts ***!
  \***********************************************************************/
/*! exports provided: ZebraTodoAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZebraTodoAddComponent", function() { return ZebraTodoAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _shared_zebra_task_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/zebra-task.model */ "./src/app/shared/zebra-task.model.ts");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_zebra_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/zebra.service */ "./src/app/shared/zebra.service.ts");
/* harmony import */ var _zebra_todo_list_zebra_todo_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../zebra-todo-list/zebra-todo-list.component */ "./src/app/zebra-todo/zebra-todo-list/zebra-todo-list.component.ts");
/* harmony import */ var _shared_time_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/time.service */ "./src/app/shared/time.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ZebraTodoAddComponent = /** @class */ (function () {
    function ZebraTodoAddComponent(route, router, zebraService) {
        this.route = route;
        this.router = router;
        this.zebraService = zebraService;
        this.DURATION_MIN = new Date(1970, 0, 1, 0, 0);
        this.DURATION_MAX = new Date(1970, 0, 1, 5, 30);
        this.faCalendarAlt = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarAlt"];
        this.faCalendarTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCalendarTimes"];
        this.faCalendarPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCalendarPlus"];
        this.faChevronLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronLeft"];
        this.faExchangeAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faExchangeAlt"];
        this.faCheckCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckCircle"];
        this.faCircle = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCircle"];
        this.faClock = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faClock"];
        this.faPencilAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPencilAlt"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
        this.faSave = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSave"];
        this.faStopwatch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStopwatch"];
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrashAlt"];
        this.task = new _shared_zebra_task_model__WEBPACK_IMPORTED_MODULE_2__["ZebraTask"]();
    }
    ZebraTodoAddComponent.prototype.onBackClick = function () {
        this.router.navigate(['/']);
    };
    ZebraTodoAddComponent.prototype.onCompleteClick = function () {
        var _this = this;
        this.zebraService.taskComplete(this.task).subscribe(function (value) { return _this.onBackClick(); });
    };
    ZebraTodoAddComponent.prototype.onDeleteClick = function () {
        var _this = this;
        this.zebraService.taskDelete(this.task.$ID).subscribe(function (value) { return _this.onBackClick(); });
    };
    ZebraTodoAddComponent.prototype.onPostponeClick = function () {
        var _this = this;
        this.zebraService.taskPostpone(this.task.$ID).subscribe(function (value) { return _this.onBackClick(); });
    };
    ZebraTodoAddComponent.prototype.onReplaceClick = function () {
        var _this = this;
        this.zebraService.taskReplace(this.task.$ID).subscribe(function (value) { return _this.onBackClick(); });
    };
    ZebraTodoAddComponent.prototype.onSaveClick = function () {
        var _this = this;
        if (!this.task.IsValid)
            return;
        if (this.isNew) {
            this.zebraService.taskAdd(this.task).subscribe(function (value) { return _this.onBackClick(); });
            sessionStorage.removeItem(_zebra_todo_list_zebra_todo_list_component__WEBPACK_IMPORTED_MODULE_6__["ZebraTodoListComponent"].SESSION_TAB);
        }
        else {
            this.zebraService.taskEdit(this.task).subscribe(function (value) { return _this.onBackClick(); });
        }
    };
    ZebraTodoAddComponent.prototype.onTodayClick = function () {
        this.task.Scheduled = _shared_time_service__WEBPACK_IMPORTED_MODULE_7__["TimeService"].Now();
        this.onSaveClick();
    };
    ZebraTodoAddComponent.prototype.onTaskChange = function (task) {
        if (task == null)
            return;
        this.task = task;
    };
    ZebraTodoAddComponent.prototype.onUrlChange = function (url) {
        var _this = this;
        var path = url[0].path;
        if (path == 'new') {
            this.isNew = true;
            this.task = new _shared_zebra_task_model__WEBPACK_IMPORTED_MODULE_2__["ZebraTask"]();
        }
        else {
            this.isNew = false;
            this.subscriptionTask && this.subscriptionTask.unsubscribe();
            this.subscriptionTask = this.zebraService.taskGet(parseInt(url[1].path)).subscribe(function (value) { return _this.onTaskChange(value); });
        }
    };
    ZebraTodoAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptionUrl && this.subscriptionUrl.unsubscribe();
        this.subscriptionUrl = this.route.url.subscribe(function (value) { return _this.onUrlChange(value); });
    };
    ZebraTodoAddComponent.prototype.ngOnDestroy = function () {
        this.subscriptionTask && this.subscriptionTask.unsubscribe();
        this.subscriptionUrl && this.subscriptionUrl.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_zebra_task_model__WEBPACK_IMPORTED_MODULE_2__["ZebraTask"])
    ], ZebraTodoAddComponent.prototype, "task", void 0);
    ZebraTodoAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-zebra-todo-add',
            template: __webpack_require__(/*! ./zebra-todo-add.component.html */ "./src/app/zebra-todo/zebra-todo-add/zebra-todo-add.component.html"),
            styles: [__webpack_require__(/*! ./zebra-todo-add.component.css */ "./src/app/zebra-todo/zebra-todo-add/zebra-todo-add.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_zebra_service__WEBPACK_IMPORTED_MODULE_5__["ZebraService"]])
    ], ZebraTodoAddComponent);
    return ZebraTodoAddComponent;
}());



/***/ }),

/***/ "./src/app/zebra-todo/zebra-todo-list/zebra-todo-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/zebra-todo/zebra-todo-list/zebra-todo-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/zebra-todo/zebra-todo-list/zebra-todo-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/zebra-todo/zebra-todo-list/zebra-todo-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Time Travelling -->\r\n<div class=\"col position-fixed w-100\" style=\"top: 0; left: 0\">\r\n  <div class=\"row\">\r\n    <div *ngIf=\"timeTravel\" class=\"position-absolute text-center text-white w-100\">{{ Today.toString().slice(0, 25) }}</div>\r\n    <div class=\"col pt-2 pb-2\"\r\n         (touchstart)=\"onTimeTravelClick(true, -1)\"\r\n         (touchend)=\"onTimeTravelClick(false, -1)\">&nbsp;</div>\r\n    <div class=\"col pt-2 pb-2\"\r\n         (touchstart)=\"onTimeTravelClick(true, 1)\"\r\n         (touchend)=\"onTimeTravelClick(false, -1)\">&nbsp;</div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Navigation -->\r\n<div class=\"row text-white\" style=\"margin-top: 96px;\">\r\n  <div class=\"d-flex flex-row justify-content-center w-100\">\r\n    <fa-icon class=\"mr-2 ml-2\" style=\"font-size: 2rem\"\r\n             [icon]=\"faCheck\"\r\n             [style.opacity]=\"tab == ZebraTodoListTab.COMPLETED ? 1 : 0.5\"\r\n             (click)=\"onTabClick(ZebraTodoListTab.COMPLETED)\"></fa-icon>\r\n    <fa-icon class=\"mr-2 ml-2\" style=\"font-size: 2rem\"\r\n             [icon]=\"faCalendarAlt\"\r\n             [style.opacity]=\"tab == ZebraTodoListTab.TODAY ? 1 : 0.5\"\r\n             (click)=\"onTabClick(ZebraTodoListTab.TODAY)\"></fa-icon>\r\n    <fa-icon class=\"mr-2 ml-2\" style=\"font-size: 2rem\"\r\n             [icon]=\"faClock\"\r\n             [style.opacity]=\"tab == ZebraTodoListTab.SCHEDULED ? 1 : 0.5\"\r\n             (click)=\"onTabClick(ZebraTodoListTab.SCHEDULED)\"></fa-icon>\r\n  </div>\r\n  <div class=\"font-weight-bold text-center text-uppercase w-100\">{{ tab }}</div>\r\n</div>\r\n\r\n<!-- List -->\r\n<div class=\"col\">\r\n  <div *ngFor=\"let day of daysByTab[tab]\">\r\n    <div [style.opacity]=\"day.toDateString() != Today.toDateString() ? 1 : 0\" class=\"text-center\">\r\n      <span class=\"badge badge-dark mb-2 mt-3 ml-auto mr-auto\" style=\"font-size: inherit; font-weight: inherit\">\r\n        {{ day.toDateString() }}\r\n      </span>\r\n    </div>\r\n    <div *ngFor=\"let task of tasksByTab[tab][day.toDateString()]; let i = index\"\r\n         class=\"row position-relative bg-white pl-3 pr-3 align-items-center\" style=\"height: 3rem\"\r\n         [routerLink]=\"'/edit/' + task.$ID\">\r\n      <fa-icon class=\"mr-3\"\r\n               [icon]=\"task.Complete ? faCheckCircle : faCircle\" style=\"font-size: 120%\"\r\n               [ngClass]=\"{ 'text-success': task.Complete }\"\r\n               (click)=\"onCompleteClick($event, task)\"></fa-icon>\r\n      <span style=\"line-height: 1\">\r\n        <span>{{ task.Name }}</span><br/>\r\n        <small class=\"text-muted\">{{ task.TimeStartInMinutes | time }} ~ {{ task.TimeEndInMinutes | time }}</small>\r\n      </span>\r\n      <span *ngIf=\"i < tasksByTab[tab].length - 1\"\r\n            class=\"position-absolute border-bottom\" style=\"width: calc(100% - 2rem); bottom: 0\"></span>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"!daysByTab[tab] || daysByTab[tab].length == 0\" class=\"pt-5 text-center text-white\">\r\n    {{\r\n        IsTutorial ? 'Press the + button to add a new task' :\r\n        tab == ZebraTodoListTab.COMPLETED ? 'Good luck on finishing your tasks!' :\r\n        tab == ZebraTodoListTab.TODAY ? 'Enjoy your rest today :)' :\r\n        tab == ZebraTodoListTab.SCHEDULED ? 'Press the + button to add a new task' : ''\r\n    }}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"position-fixed w-100\" style=\"bottom: 1rem; left: 0;\">\r\n  <div class=\"container position-relative\">\r\n    <div class=\"row justify-content-end\" style=\"height: 3rem;\">\r\n      <div routerLink=\"/new\" class=\"d-flex align-items-center justify-content-center bg-white shadow rounded-circle mr-3\" style=\"width: 3rem; height: 3rem;\">\r\n        <fa-icon class=\"text-info\" [icon]=\"faPlus\"></fa-icon>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/zebra-todo/zebra-todo-list/zebra-todo-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/zebra-todo/zebra-todo-list/zebra-todo-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: ZebraTodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZebraTodoListComponent", function() { return ZebraTodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _shared_zebra_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/zebra.service */ "./src/app/shared/zebra.service.ts");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _shared_time_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/time.service */ "./src/app/shared/time.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ZebraTodoListComponent = /** @class */ (function () {
    function ZebraTodoListComponent(zebraService) {
        this.zebraService = zebraService;
        this.faCalendarAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCalendarAlt"];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheck"];
        this.faCheckCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckCircle"];
        this.faCircle = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCircle"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
        this.faClock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faClock"];
        this.ZebraTodoListTab = ZebraTodoListTab;
        this.daysByTab = {};
        this.tasksByTab = {};
    }
    ZebraTodoListComponent_1 = ZebraTodoListComponent;
    Object.defineProperty(ZebraTodoListComponent.prototype, "IsTutorial", {
        get: function () {
            return Object.keys(this.daysByTab).length == 0 || (1 == 1
                && this.daysByTab[this.ZebraTodoListTab.COMPLETED].length == 0
                && this.daysByTab[this.ZebraTodoListTab.TODAY].length == 0
                && this.daysByTab[this.ZebraTodoListTab.SCHEDULED].length == 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZebraTodoListComponent.prototype, "Today", {
        get: function () {
            return _shared_time_service__WEBPACK_IMPORTED_MODULE_4__["TimeService"].Now();
        },
        enumerable: true,
        configurable: true
    });
    ZebraTodoListComponent.prototype.onCompleteClick = function (event, task) {
        var _this = this;
        event.stopPropagation();
        this.zebraService.taskComplete(task).subscribe(function (value) { return _this.ngOnInit(); });
    };
    ZebraTodoListComponent.prototype.onTabClick = function (tab) {
        this.tab = tab;
        sessionStorage.setItem(ZebraTodoListComponent_1.SESSION_TAB, this.tab);
    };
    ZebraTodoListComponent.prototype.onTasksChange = function (tasks) {
        var _this = this;
        this.daysByTab = {};
        this.daysByTab[ZebraTodoListTab.COMPLETED] = [];
        this.daysByTab[ZebraTodoListTab.TODAY] = [];
        this.daysByTab[ZebraTodoListTab.SCHEDULED] = [];
        this.tasksByTab = tasks
            .reduce(function (accumulator, value) {
            var tab;
            if (value.Complete)
                tab = ZebraTodoListTab.COMPLETED;
            else if (value.IsToday)
                tab = ZebraTodoListTab.TODAY;
            else if (value.IsScheduled)
                tab = ZebraTodoListTab.SCHEDULED;
            var day = new Date(value.Scheduled.toDateString());
            var tasksByDay = accumulator[tab] = accumulator[tab] || {};
            (tasksByDay[day.toDateString()] = tasksByDay[day.toDateString()] || []).push(value);
            var days = _this.daysByTab[tab] = _this.daysByTab[tab] || [];
            var found = false;
            for (var _i = 0, days_1 = days; _i < days_1.length; _i++) {
                var date = days_1[_i];
                if (day.getTime() == date.getTime()) {
                    found = true;
                    break;
                }
            }
            if (!found)
                days.push(day);
            return accumulator;
        }, {});
        console.log(this.tasksByTab);
    };
    ZebraTodoListComponent.prototype.onTimeTravelClick = function (enable, direction) {
        this.timeTravel = enable;
        _shared_time_service__WEBPACK_IMPORTED_MODULE_4__["TimeService"].Travel(enable, direction);
    };
    ZebraTodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tab = sessionStorage.getItem(ZebraTodoListComponent_1.SESSION_TAB) || ZebraTodoListTab.TODAY;
        this.subscriptionTasks && this.subscriptionTasks.unsubscribe();
        this.subscriptionTasks = this.zebraService.loadTasks(true).subscribe(function (value) { return _this.onTasksChange(value); });
    };
    ZebraTodoListComponent.prototype.ngOnDestroy = function () {
        this.subscriptionTasks && this.subscriptionTasks.unsubscribe();
    };
    ZebraTodoListComponent.SESSION_TAB = 'zebra.list.tab';
    ZebraTodoListComponent = ZebraTodoListComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'zebra-todo-list',
            template: __webpack_require__(/*! ./zebra-todo-list.component.html */ "./src/app/zebra-todo/zebra-todo-list/zebra-todo-list.component.html"),
            styles: [__webpack_require__(/*! ./zebra-todo-list.component.css */ "./src/app/zebra-todo/zebra-todo-list/zebra-todo-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_zebra_service__WEBPACK_IMPORTED_MODULE_2__["ZebraService"]])
    ], ZebraTodoListComponent);
    return ZebraTodoListComponent;
    var ZebraTodoListComponent_1;
}());

var ZebraTodoListTab;
(function (ZebraTodoListTab) {
    ZebraTodoListTab["COMPLETED"] = "Completed";
    ZebraTodoListTab["SCHEDULED"] = "Scheduled";
    ZebraTodoListTab["TODAY"] = "Today";
})(ZebraTodoListTab || (ZebraTodoListTab = {}));


/***/ }),

/***/ "./src/app/zebra-todo/zebra-todo-settings/zebra-todo-settings.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/zebra-todo/zebra-todo-settings/zebra-todo-settings.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/zebra-todo/zebra-todo-settings/zebra-todo-settings.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/zebra-todo/zebra-todo-settings/zebra-todo-settings.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  zebra-todo-settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/zebra-todo/zebra-todo-settings/zebra-todo-settings.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/zebra-todo/zebra-todo-settings/zebra-todo-settings.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ZebraTodoSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZebraTodoSettingsComponent", function() { return ZebraTodoSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ZebraTodoSettingsComponent = /** @class */ (function () {
    function ZebraTodoSettingsComponent() {
    }
    ZebraTodoSettingsComponent.prototype.ngOnInit = function () {
    };
    ZebraTodoSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-zebra-todo-settings',
            template: __webpack_require__(/*! ./zebra-todo-settings.component.html */ "./src/app/zebra-todo/zebra-todo-settings/zebra-todo-settings.component.html"),
            styles: [__webpack_require__(/*! ./zebra-todo-settings.component.css */ "./src/app/zebra-todo/zebra-todo-settings/zebra-todo-settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ZebraTodoSettingsComponent);
    return ZebraTodoSettingsComponent;
}());



/***/ }),

/***/ "./src/app/zebra-todo/zebra-todo.module.ts":
/*!*************************************************!*\
  !*** ./src/app/zebra-todo/zebra-todo.module.ts ***!
  \*************************************************/
/*! exports provided: ZebraTodoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZebraTodoModule", function() { return ZebraTodoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _zebra_todo_list_zebra_todo_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zebra-todo-list/zebra-todo-list.component */ "./src/app/zebra-todo/zebra-todo-list/zebra-todo-list.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _zebra_todo_add_zebra_todo_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zebra-todo-add/zebra-todo-add.component */ "./src/app/zebra-todo/zebra-todo-add/zebra-todo-add.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _zebra_todo_settings_zebra_todo_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zebra-todo-settings/zebra-todo-settings.component */ "./src/app/zebra-todo/zebra-todo-settings/zebra-todo-settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ZebraTodoModule = /** @class */ (function () {
    function ZebraTodoModule() {
    }
    ZebraTodoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["NoopAnimationsModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__["OwlNativeDateTimeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ],
            exports: [
                _zebra_todo_list_zebra_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["ZebraTodoListComponent"],
            ],
            declarations: [
                _zebra_todo_list_zebra_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["ZebraTodoListComponent"],
                _zebra_todo_add_zebra_todo_add_component__WEBPACK_IMPORTED_MODULE_5__["ZebraTodoAddComponent"],
                _zebra_todo_settings_zebra_todo_settings_component__WEBPACK_IMPORTED_MODULE_11__["ZebraTodoSettingsComponent"],
            ]
        })
    ], ZebraTodoModule);
    return ZebraTodoModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Work/breakingdev2018/zebra/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map