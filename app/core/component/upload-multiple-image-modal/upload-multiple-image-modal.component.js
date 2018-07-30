"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var nativescript_camera_1 = require("nativescript-camera");
var imagepicker = require("nativescript-imagepicker");
var UploadMultipleImageModalComponent = /** @class */ (function () {
    function UploadMultipleImageModalComponent(params) {
        this.params = params;
        this.processing = false;
        this.imageAssets = [];
        this.isSingleMode = true;
        this.thumbSize = 80;
        this.previewSize = 300;
    }
    UploadMultipleImageModalComponent.prototype.ngOnInit = function () {
    };
    UploadMultipleImageModalComponent.prototype.cancel = function () {
        this.params.closeCallback({ "close": true });
    };
    UploadMultipleImageModalComponent.prototype.onTakePictureTap = function (args) {
        var _this = this;
        nativescript_camera_1.requestPermissions().then(function () {
            nativescript_camera_1.takePicture({ width: 200, height: 200, keepAspectRatio: true, saveToGallery: true })
                .then(function (imageAsset) {
                _this.cameraImage = imageAsset;
                // imageAsset.getImageAsync(nativeImage => {
                //     let scale = 1;
                //     let height = 0;
                //     let width = 0;
                //     if (imageAsset.android) {
                //         scale = nativeImage.getDensity();
                //         height = imageAsset.options.height;
                //         width = imageAsset.options.width;
                //     } else {
                //         scale = nativeImage.scale;
                //         width = nativeImage.size.width * scale;
                //         height = nativeImage.size.height * scale;
                //     }
                //     console.log(`Displayed Size: ${width}x${height} with scale ${scale}`);
                //     console.log(`Image Size: ${width / scale}x${height / scale}`);
                // });
                _this.params.closeCallback({ camera: true, image: _this.cameraImage });
            }, function (error) {
                console.log("Error: " + error);
            });
        }, function () { return alert('permissions rejected'); });
    };
    UploadMultipleImageModalComponent.prototype.onSelectMultipleTap = function () {
        this.isSingleMode = false;
        var context = imagepicker.create({
            mode: "multiple"
        });
        this.startSelection(context);
    };
    UploadMultipleImageModalComponent.prototype.onSelectSingleTap = function () {
        this.isSingleMode = true;
        var context = imagepicker.create({
            mode: "single"
        });
        this.startSelection(context);
    };
    UploadMultipleImageModalComponent.prototype.startSelection = function (context) {
        var _this = this;
        var that = this;
        context
            .authorize()
            .then(function () {
            that.imageAssets = [];
            return context.present();
        })
            .then(function (selection) {
            selection.forEach(function (element) {
                element.options.width = that.isSingleMode ? that.previewSize : that.thumbSize;
                element.options.height = that.isSingleMode ? that.previewSize : that.thumbSize;
                that.imageAssets.push(element);
            });
            _this.params.closeCallback({ gallery: true, image: that.imageAssets });
        }).catch(function (e) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLW11bHRpcGxlLWltYWdlLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVwbG9hZC1tdWx0aXBsZS1pbWFnZS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsbUVBQTRFO0FBQzVFLDJEQUFzRTtBQUV0RSxzREFBd0Q7QUFTeEQ7SUFPSSwyQ0FDWSxNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQVByQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7SUFJMUIsQ0FBQztJQUVELG9EQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsa0RBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELDREQUFnQixHQUFoQixVQUFpQixJQUFJO1FBQXJCLGlCQTZCQztRQTVCRyx3Q0FBa0IsRUFBRSxDQUFDLElBQUksQ0FDckI7WUFDSSxpQ0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDO2lCQUMvRSxJQUFJLENBQUMsVUFBQyxVQUFlO2dCQUNsQixLQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztnQkFDOUIsNENBQTRDO2dCQUM1QyxxQkFBcUI7Z0JBQ3JCLHNCQUFzQjtnQkFDdEIscUJBQXFCO2dCQUNyQixnQ0FBZ0M7Z0JBQ2hDLDRDQUE0QztnQkFDNUMsOENBQThDO2dCQUM5Qyw0Q0FBNEM7Z0JBQzVDLGVBQWU7Z0JB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bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IHRha2VQaWN0dXJlLCByZXF1ZXN0UGVybWlzc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtY2FtZXJhJztcclxuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2UtYXNzZXQnO1xyXG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInVwbG9hZC1tdWx0aXBsZS1pbWFnZS1tb2RhbFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcInVwbG9hZC1tdWx0aXBsZS1pbWFnZS1tb2RhbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ1cGxvYWQtbXVsdGlwbGUtaW1hZ2UtbW9kYWwuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwbG9hZE11bHRpcGxlSW1hZ2VNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICBjYW1lcmFJbWFnZTogSW1hZ2VBc3NldDtcclxuICAgIGltYWdlQXNzZXRzID0gW107XHJcbiAgICBpc1NpbmdsZU1vZGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgdGh1bWJTaXplOiBudW1iZXIgPSA4MDtcclxuICAgIHByZXZpZXdTaXplOiBudW1iZXIgPSAzMDA7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soeyBcImNsb3NlXCI6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25UYWtlUGljdHVyZVRhcChhcmdzKSB7XHJcbiAgICAgICAgcmVxdWVzdFBlcm1pc3Npb25zKCkudGhlbihcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFrZVBpY3R1cmUoeyB3aWR0aDogMjAwLCBoZWlnaHQ6IDIwMCwga2VlcEFzcGVjdFJhdGlvOiB0cnVlLCBzYXZlVG9HYWxsZXJ5OiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGltYWdlQXNzZXQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYUltYWdlID0gaW1hZ2VBc3NldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VBc3NldC5nZXRJbWFnZUFzeW5jKG5hdGl2ZUltYWdlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCBzY2FsZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgaGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCB3aWR0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoaW1hZ2VBc3NldC5hbmRyb2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgc2NhbGUgPSBuYXRpdmVJbWFnZS5nZXREZW5zaXR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaGVpZ2h0ID0gaW1hZ2VBc3NldC5vcHRpb25zLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB3aWR0aCA9IGltYWdlQXNzZXQub3B0aW9ucy53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgc2NhbGUgPSBuYXRpdmVJbWFnZS5zY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB3aWR0aCA9IG5hdGl2ZUltYWdlLnNpemUud2lkdGggKiBzY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBoZWlnaHQgPSBuYXRpdmVJbWFnZS5zaXplLmhlaWdodCAqIHNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coYERpc3BsYXllZCBTaXplOiAke3dpZHRofXgke2hlaWdodH0gd2l0aCBzY2FsZSAke3NjYWxlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coYEltYWdlIFNpemU6ICR7d2lkdGggLyBzY2FsZX14JHtoZWlnaHQgLyBzY2FsZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soeyBjYW1lcmE6IHRydWUsIGltYWdlOiB0aGlzLmNhbWVyYUltYWdlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4gYWxlcnQoJ3Blcm1pc3Npb25zIHJlamVjdGVkJylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0TXVsdGlwbGVUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5pc1NpbmdsZU1vZGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICBtb2RlOiBcIm11bHRpcGxlXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXJ0U2VsZWN0aW9uKGNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0U2luZ2xlVGFwKCkge1xyXG4gICAgICAgIHRoaXMuaXNTaW5nbGVNb2RlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICBtb2RlOiBcInNpbmdsZVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGFydFNlbGVjdGlvbihjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFNlbGVjdGlvbihjb250ZXh0KSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb250ZXh0XHJcbiAgICAgICAgICAgIC5hdXRob3JpemUoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmltYWdlQXNzZXRzID0gW107XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChzZWxlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub3B0aW9ucy53aWR0aCA9IHRoYXQuaXNTaW5nbGVNb2RlID8gdGhhdC5wcmV2aWV3U2l6ZSA6IHRoYXQudGh1bWJTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub3B0aW9ucy5oZWlnaHQgPSB0aGF0LmlzU2luZ2xlTW9kZSA/IHRoYXQucHJldmlld1NpemUgOiB0aGF0LnRodW1iU2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmltYWdlQXNzZXRzLnB1c2goZWxlbWVudClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh7IGdhbGxlcnk6IHRydWUsIGltYWdlOiB0aGF0LmltYWdlQXNzZXRzIH0pO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iXX0=