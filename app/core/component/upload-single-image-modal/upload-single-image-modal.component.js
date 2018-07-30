"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var imagepicker = require("nativescript-imagepicker");
var nativescript_imagecropper_1 = require("nativescript-imagecropper");
var camera = require("nativescript-camera");
var permissions = require("nativescript-permissions");
var imageSource = require("tns-core-modules/image-source");
var platformModule = require("platform");
var UploadSingleImageModalComponent = /** @class */ (function () {
    function UploadSingleImageModalComponent(params) {
        this.params = params;
        this.processing = false;
    }
    UploadSingleImageModalComponent.prototype.ngOnInit = function () {
        this.imageCropper = new nativescript_imagecropper_1.ImageCropper();
        this.imageUrl = null;
    };
    UploadSingleImageModalComponent.prototype.cancel = function () {
        this.params.closeCallback({ "close": true });
    };
    UploadSingleImageModalComponent.prototype.onTakePictureTap = function (args) {
        var _this = this;
        if (camera.isAvailable()) {
            permissions.requestPermission([android.Manifest.permission.CAMERA, android.Manifest.permission.WRITE_EXTERNAL_STORAGE])
                .then(function () {
                camera.takePicture({ width: 300, height: 300, keepAspectRatio: true })
                    .then(function (imageAsset) {
                    var source = new imageSource.ImageSource();
                    source.fromAsset(imageAsset).then(function (source) {
                        _this.imageCropper.show(source).then(function (args) {
                            if (args.image !== null) {
                                _this.imageUrl = args.image;
                                var localPath = null;
                                if (platformModule.device.os === "Android") {
                                    localPath = imageAsset.android;
                                }
                                else {
                                    localPath = imageAsset.ios;
                                }
                                _this.params.closeCallback({ camera: true, image: args.image });
                            }
                        })
                            .catch(function (e) {
                            console.log(e);
                        });
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
    UploadSingleImageModalComponent.prototype.onSelectSingleTap = function () {
        var context = imagepicker.create({
            mode: "single"
        });
        this.startSelection(context);
    };
    UploadSingleImageModalComponent.prototype.startSelection = function (context) {
        var _this = this;
        context
            .authorize()
            .then(function () {
            return context.present();
        })
            .then(function (selection) {
            selection.forEach(function (selected) {
                selected.getImageAsync(function (source) {
                    var selectedImgSource = imageSource.fromNativeSource(source);
                    _this.imageCropper
                        .show(selectedImgSource)
                        .then(function (args) {
                        if (args.image !== null) {
                            _this.imageUrl = args.image;
                            var localPath = null;
                            if (platformModule.device.os === "Android") {
                                localPath = selected.android;
                            }
                            else {
                                localPath = selected.ios;
                            }
                            _this.params.closeCallback({ gallery: true, image: localPath });
                        }
                    })
                        .catch(function (e) {
                        console.log(e);
                    });
                });
            });
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    UploadSingleImageModalComponent = __decorate([
        core_1.Component({
            selector: "upload-single-image-modal",
            moduleId: module.id,
            templateUrl: "upload-single-image-modal.component.html",
            styleUrls: ["upload-single-image-modal.component.css"]
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
    ], UploadSingleImageModalComponent);
    return UploadSingleImageModalComponent;
}());
exports.UploadSingleImageModalComponent = UploadSingleImageModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLXNpbmdsZS1pbWFnZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1cGxvYWQtc2luZ2xlLWltYWdlLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxtRUFBNEU7QUFDNUUsc0RBQXdEO0FBQ3hELHVFQUF5RDtBQUN6RCw0Q0FBOEM7QUFDOUMsc0RBQXdEO0FBQ3hELDJEQUE2RDtBQUM3RCxJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFVekM7SUFLSSx5Q0FDWSxNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUxyQyxlQUFVLEdBQUcsS0FBSyxDQUFDO0lBT25CLENBQUM7SUFFRCxrREFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHdDQUFZLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUV6QixDQUFDO0lBRUQsZ0RBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELDBEQUFnQixHQUFoQixVQUFpQixJQUFJO1FBQXJCLGlCQWlDQztRQWhDRyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2lCQUNsSCxJQUFJLENBQUM7Z0JBQ0YsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUs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LENBQUMsT0FBTyxDQUFDOzRCQUNqQyxDQUFDOzRCQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNKLFNBQVMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDOzRCQUM3QixDQUFDOzRCQUNELEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQzt3QkFDbkUsQ0FBQztvQkFDTCxDQUFDLENBQUM7eUJBQ0QsS0FBSyxDQUFDLFVBQUMsQ0FBQzt3QkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuQixDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsQ0FBQztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBL0ZRLCtCQUErQjtRQVAzQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBDQUEwQztZQUN2RCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztTQUN6RCxDQUFDO3lDQVFzQiwyQkFBaUI7T0FONUIsK0JBQStCLENBaUczQztJQUFELHNDQUFDO0NBQUEsQUFqR0QsSUFpR0M7QUFqR1ksMEVBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xyXG5pbXBvcnQgeyBJbWFnZUNyb3BwZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtaW1hZ2Vjcm9wcGVyJztcclxuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XHJcbmltcG9ydCAqIGFzIHBlcm1pc3Npb25zIGZyb20gXCJuYXRpdmVzY3JpcHQtcGVybWlzc2lvbnNcIjtcclxuaW1wb3J0ICogYXMgaW1hZ2VTb3VyY2UgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2UnO1xyXG52YXIgcGxhdGZvcm1Nb2R1bGUgPSByZXF1aXJlKFwicGxhdGZvcm1cIik7XHJcbmRlY2xhcmUgdmFyIGFuZHJvaWQ6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwidXBsb2FkLXNpbmdsZS1pbWFnZS1tb2RhbFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcInVwbG9hZC1zaW5nbGUtaW1hZ2UtbW9kYWwuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1widXBsb2FkLXNpbmdsZS1pbWFnZS1tb2RhbC5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVXBsb2FkU2luZ2xlSW1hZ2VNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICBpbWFnZUNyb3BwZXI6IEltYWdlQ3JvcHBlcjtcclxuICAgIGltYWdlU291cmNlOiBpbWFnZVNvdXJjZS5JbWFnZVNvdXJjZTtcclxuICAgIGltYWdlVXJsOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmltYWdlQ3JvcHBlciA9IG5ldyBJbWFnZUNyb3BwZXIoKTtcclxuICAgICAgICB0aGlzLmltYWdlVXJsID0gbnVsbDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soeyBcImNsb3NlXCI6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25UYWtlUGljdHVyZVRhcChhcmdzKSB7XHJcbiAgICAgICAgaWYgKGNhbWVyYS5pc0F2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgICAgIHBlcm1pc3Npb25zLnJlcXVlc3RQZXJtaXNzaW9uKFthbmRyb2lkLk1hbmlmZXN0LnBlcm1pc3Npb24uQ0FNRVJBLCBhbmRyb2lkLk1hbmlmZXN0LnBlcm1pc3Npb24uV1JJVEVfRVhURVJOQUxfU1RPUkFHRV0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnRha2VQaWN0dXJlKHsgd2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDAsIGtlZXBBc3BlY3RSYXRpbzogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoaW1hZ2VBc3NldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNvdXJjZSA9IG5ldyBpbWFnZVNvdXJjZS5JbWFnZVNvdXJjZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlLmZyb21Bc3NldChpbWFnZUFzc2V0KS50aGVuKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlQ3JvcHBlci5zaG93KHNvdXJjZSkudGhlbigoYXJncykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5pbWFnZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVVybCA9IGFyZ3MuaW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYWxQYXRoID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF0Zm9ybU1vZHVsZS5kZXZpY2Uub3MgPT09IFwiQW5kcm9pZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxQYXRoID0gaW1hZ2VBc3NldC5hbmRyb2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFBhdGggPSBpbWFnZUFzc2V0LmlvcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soeyBjYW1lcmE6IHRydWUsIGltYWdlOiBhcmdzLmltYWdlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciAtPiBcIiArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHVzZXIgZGVuaWVzIHBlcm1pc3Npb25cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgZGVuaWVkIHBlcm1pc3Npb25zXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0U2luZ2xlVGFwKCkge1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgbW9kZTogXCJzaW5nbGVcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhcnRTZWxlY3Rpb24oY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRTZWxlY3Rpb24oY29udGV4dCkge1xyXG4gICAgICAgIGNvbnRleHRcclxuICAgICAgICAgICAgLmF1dGhvcml6ZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHNlbGVjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goKHNlbGVjdGVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQuZ2V0SW1hZ2VBc3luYygoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW1nU291cmNlID0gaW1hZ2VTb3VyY2UuZnJvbU5hdGl2ZVNvdXJjZShzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlQ3JvcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coc2VsZWN0ZWRJbWdTb3VyY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoYXJncykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmltYWdlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VVcmwgPSBhcmdzLmltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYWxQYXRoID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXRmb3JtTW9kdWxlLmRldmljZS5vcyA9PT0gXCJBbmRyb2lkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsUGF0aCA9IHNlbGVjdGVkLmFuZHJvaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFBhdGggPSBzZWxlY3RlZC5pb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh7IGdhbGxlcnk6IHRydWUsIGltYWdlOiBsb2NhbFBhdGggfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59Il19