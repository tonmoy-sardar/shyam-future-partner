"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var imagepicker = require("nativescript-imagepicker");
var camera = require("nativescript-camera");
var permissions = require("nativescript-permissions");
var imageSource = require("tns-core-modules/image-source");
var platformModule = require("platform");
var UploadMultipleImageModalComponent = /** @class */ (function () {
    function UploadMultipleImageModalComponent(params) {
        this.params = params;
        this.processing = false;
        this.imagesUrl = [];
        this.previewSize = 300;
    }
    UploadMultipleImageModalComponent.prototype.ngOnInit = function () {
        this.imagesUrl = [];
    };
    UploadMultipleImageModalComponent.prototype.cancel = function () {
        this.params.closeCallback({ "close": true });
    };
    UploadMultipleImageModalComponent.prototype.onTakePictureTap = function (args) {
        var _this = this;
        if (camera.isAvailable()) {
            permissions.requestPermission([android.Manifest.permission.CAMERA, android.Manifest.permission.WRITE_EXTERNAL_STORAGE])
                .then(function () {
                camera.takePicture({ width: 300, height: 300, keepAspectRatio: true })
                    .then(function (imageAsset) {
                    var source = new imageSource.ImageSource();
                    source.fromAsset(imageAsset).then(function (source) {
                        var base64image = source.toBase64String("png", 60);
                        _this.imagesUrl.push({
                            url: base64image
                        });
                        _this.params.closeCallback({ camera: true, images: _this.imagesUrl });
                    });
                }).catch(function (err) {
                    console.log("Error -> " + err.message);
                });
            })
                .catch(function () {
                // When user denies permission
                console.log("User denied permissions");
            });
        }
    };
    UploadMultipleImageModalComponent.prototype.onSelectMultipleTap = function () {
        var context = imagepicker.create({
            mode: "multiple"
        });
        this.startSelection(context);
    };
    UploadMultipleImageModalComponent.prototype.startSelection = function (context) {
        var _this = this;
        context
            .authorize()
            .then(function () {
            return context.present();
        })
            .then(function (selection) {
            selection.forEach(function (selected) {
                var localPath = null;
                if (platformModule.device.os === "Android") {
                    localPath = selected.android;
                }
                else {
                    localPath = selected.ios;
                }
                var base64image = localPath.toBase64String("png", 60);
                _this.imagesUrl.push({
                    url: base64image
                });
            });
            _this.params.closeCallback({ gallery: true, images: _this.imagesUrl });
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    UploadMultipleImageModalComponent = __decorate([
        core_1.Component({
            selector: "upload-multiple-image-modal",
            moduleId: module.id,
            templateUrl: "upload-multiple-image-modal.component.html",
            styleUrls: ["upload-multiple-image-modal.component.css"]
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
    ], UploadMultipleImageModalComponent);
    return UploadMultipleImageModalComponent;
}());
exports.UploadMultipleImageModalComponent = UploadMultipleImageModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLW11bHRpcGxlLWltYWdlLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVwbG9hZC1tdWx0aXBsZS1pbWFnZS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsbUVBQTRFO0FBQzVFLHNEQUF3RDtBQUN4RCw0Q0FBOEM7QUFDOUMsc0RBQXdEO0FBQ3hELDJEQUE2RDtBQUM3RCxJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFTekM7SUFLSSwyQ0FDWSxNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUxyQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsZ0JBQVcsR0FBVyxHQUFHLENBQUE7SUFJekIsQ0FBQztJQUVELG9EQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsa0RBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELDREQUFnQixHQUFoQixVQUFpQixJQUFJO1FBQXJCLGlCQXVCQztRQXRCRyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2lCQUNsSCxJQUFJLENBQUM7Z0JBQ0YsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsSUFB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QUFDO0NBQUEsQUE3RUQsSUE2RUM7QUE3RVksOEVBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xyXG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcclxuaW1wb3J0ICogYXMgcGVybWlzc2lvbnMgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wZXJtaXNzaW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBpbWFnZVNvdXJjZSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZSc7XHJcbnZhciBwbGF0Zm9ybU1vZHVsZSA9IHJlcXVpcmUoXCJwbGF0Zm9ybVwiKTtcclxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInVwbG9hZC1tdWx0aXBsZS1pbWFnZS1tb2RhbFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcInVwbG9hZC1tdWx0aXBsZS1pbWFnZS1tb2RhbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ1cGxvYWQtbXVsdGlwbGUtaW1hZ2UtbW9kYWwuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwbG9hZE11bHRpcGxlSW1hZ2VNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICBpbWFnZVNvdXJjZTogaW1hZ2VTb3VyY2UuSW1hZ2VTb3VyY2U7XHJcbiAgICBpbWFnZXNVcmw6IGFueSA9IFtdO1xyXG4gICAgcHJldmlld1NpemU6IG51bWJlciA9IDMwMFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLFxyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZXNVcmwgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh7IFwiY2xvc2VcIjogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblRha2VQaWN0dXJlVGFwKGFyZ3MpIHtcclxuICAgICAgICBpZiAoY2FtZXJhLmlzQXZhaWxhYmxlKCkpIHtcclxuICAgICAgICAgICAgcGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb24oW2FuZHJvaWQuTWFuaWZlc3QucGVybWlzc2lvbi5DQU1FUkEsIGFuZHJvaWQuTWFuaWZlc3QucGVybWlzc2lvbi5XUklURV9FWFRFUk5BTF9TVE9SQUdFXSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEudGFrZVBpY3R1cmUoeyB3aWR0aDogMzAwLCBoZWlnaHQ6IDMwMCwga2VlcEFzcGVjdFJhdGlvOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChpbWFnZUFzc2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc291cmNlID0gbmV3IGltYWdlU291cmNlLkltYWdlU291cmNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2UuZnJvbUFzc2V0KGltYWdlQXNzZXQpLnRoZW4oKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NGltYWdlID0gc291cmNlLnRvQmFzZTY0U3RyaW5nKFwicG5nXCIsIDYwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlc1VybC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBiYXNlNjRpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh7IGNhbWVyYTogdHJ1ZSwgaW1hZ2VzOiB0aGlzLmltYWdlc1VybCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIC0+IFwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdXNlciBkZW5pZXMgcGVybWlzc2lvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBkZW5pZWQgcGVybWlzc2lvbnNcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RNdWx0aXBsZVRhcCgpIHtcclxuICAgICAgICBsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIG1vZGU6IFwibXVsdGlwbGVcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhcnRTZWxlY3Rpb24oY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRTZWxlY3Rpb24oY29udGV4dCkge1xyXG4gICAgICAgIGNvbnRleHRcclxuICAgICAgICAgICAgLmF1dGhvcml6ZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHNlbGVjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goKHNlbGVjdGVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2FsUGF0aCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXRmb3JtTW9kdWxlLmRldmljZS5vcyA9PT0gXCJBbmRyb2lkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxQYXRoID0gc2VsZWN0ZWQuYW5kcm9pZDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFBhdGggPSBzZWxlY3RlZC5pb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NGltYWdlID0gbG9jYWxQYXRoLnRvQmFzZTY0U3RyaW5nKFwicG5nXCIsIDYwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlc1VybC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBiYXNlNjRpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soeyBnYWxsZXJ5OiB0cnVlLCBpbWFnZXM6IHRoaXMuaW1hZ2VzVXJsIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iXX0=