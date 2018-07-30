"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var imagepicker = require("nativescript-imagepicker");
var nativescript_imagecropper_1 = require("nativescript-imagecropper");
var camera = require("nativescript-camera");
var permissions = require("nativescript-permissions");
var imageSource = require("tns-core-modules/image-source");
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
                                var base64image = args.image.toBase64String("png", 60);
                                _this.params.closeCallback({ camera: true, image: base64image });
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
                            var base64image = args.image.toBase64String("png", 60);
                            _this.params.closeCallback({ gallery: true, image: base64image });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLXNpbmdsZS1pbWFnZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1cGxvYWQtc2luZ2xlLWltYWdlLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxtRUFBNEU7QUFDNUUsc0RBQXdEO0FBQ3hELHVFQUF5RDtBQUN6RCw0Q0FBOEM7QUFDOUMsc0RBQXdEO0FBQ3hELDJEQUE2RDtBQVU3RDtJQUtJLHlDQUNZLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBTHJDLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFPbkIsQ0FBQztJQUVELGtEQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksd0NBQVksRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBRXpCLENBQUM7SUFFRCxnREFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsMERBQWdCLEdBQWhCLFVBQWlCLElBQUk7UUFBckIsaUJBNEJDO1FBM0JHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkIsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7aUJBQ2xILElBQUksQ0FBQztnQkFDRixNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQztxQkFDakUsSUFBSSxDQUFDLFVBQUMsVUFBVTtvQkFD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QztRQUNQLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLENBQUM7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXJGUSwrQkFBK0I7UUFQM0MsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQ0FBMEM7WUFDdkQsU0FBUyxFQUFFLENBQUMseUNBQXlDLENBQUM7U0FDekQsQ0FBQzt5Q0FRc0IsMkJBQWlCO09BTjVCLCtCQUErQixDQXVGM0M7SUFBRCxzQ0FBQztDQUFBLEFBdkZELElBdUZDO0FBdkZZLDBFQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcclxuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWltYWdlY3JvcHBlcic7XHJcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xyXG5pbXBvcnQgKiBhcyBwZXJtaXNzaW9ucyBmcm9tIFwibmF0aXZlc2NyaXB0LXBlcm1pc3Npb25zXCI7XHJcbmltcG9ydCAqIGFzIGltYWdlU291cmNlIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlJztcclxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJ1cGxvYWQtc2luZ2xlLWltYWdlLW1vZGFsXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidXBsb2FkLXNpbmdsZS1pbWFnZS1tb2RhbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ1cGxvYWQtc2luZ2xlLWltYWdlLW1vZGFsLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVcGxvYWRTaW5nbGVJbWFnZU1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgIGltYWdlQ3JvcHBlcjogSW1hZ2VDcm9wcGVyO1xyXG4gICAgaW1hZ2VTb3VyY2U6IGltYWdlU291cmNlLkltYWdlU291cmNlO1xyXG4gICAgaW1hZ2VVcmw6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcyxcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VDcm9wcGVyID0gbmV3IEltYWdlQ3JvcHBlcigpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VVcmwgPSBudWxsO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh7IFwiY2xvc2VcIjogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblRha2VQaWN0dXJlVGFwKGFyZ3MpIHtcclxuICAgICAgICBpZiAoY2FtZXJhLmlzQXZhaWxhYmxlKCkpIHtcclxuICAgICAgICAgICAgcGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb24oW2FuZHJvaWQuTWFuaWZlc3QucGVybWlzc2lvbi5DQU1FUkEsIGFuZHJvaWQuTWFuaWZlc3QucGVybWlzc2lvbi5XUklURV9FWFRFUk5BTF9TVE9SQUdFXSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEudGFrZVBpY3R1cmUoeyB3aWR0aDogMzAwLCBoZWlnaHQ6IDMwMCwga2VlcEFzcGVjdFJhdGlvOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChpbWFnZUFzc2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc291cmNlID0gbmV3IGltYWdlU291cmNlLkltYWdlU291cmNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2UuZnJvbUFzc2V0KGltYWdlQXNzZXQpLnRoZW4oKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VDcm9wcGVyLnNob3coc291cmNlKS50aGVuKChhcmdzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmltYWdlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlVXJsID0gYXJncy5pbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NGltYWdlID0gYXJncy5pbWFnZS50b0Jhc2U2NFN0cmluZyhcInBuZ1wiLCA2MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHsgY2FtZXJhOiB0cnVlLCBpbWFnZTogYmFzZTY0aW1hZ2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIC0+IFwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdXNlciBkZW5pZXMgcGVybWlzc2lvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBkZW5pZWQgcGVybWlzc2lvbnNcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RTaW5nbGVUYXAoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICBtb2RlOiBcInNpbmdsZVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGFydFNlbGVjdGlvbihjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFNlbGVjdGlvbihjb250ZXh0KSB7XHJcbiAgICAgICAgY29udGV4dFxyXG4gICAgICAgICAgICAuYXV0aG9yaXplKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucHJlc2VudCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoc2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uZm9yRWFjaCgoc2VsZWN0ZWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5nZXRJbWFnZUFzeW5jKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbWdTb3VyY2UgPSBpbWFnZVNvdXJjZS5mcm9tTmF0aXZlU291cmNlKHNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VDcm9wcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2hvdyhzZWxlY3RlZEltZ1NvdXJjZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChhcmdzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MuaW1hZ2UgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVVybCA9IGFyZ3MuaW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NGltYWdlID0gYXJncy5pbWFnZS50b0Jhc2U2NFN0cmluZyhcInBuZ1wiLCA2MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soeyBnYWxsZXJ5OiB0cnVlLCBpbWFnZTogYmFzZTY0aW1hZ2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59Il19