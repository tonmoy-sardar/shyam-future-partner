"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var created_app_service_1 = require("../../../core/services/created-app.service");
var nativescript_camera_1 = require("nativescript-camera");
var imagepicker = require("nativescript-imagepicker");
var ManageAppComponent = /** @class */ (function () {
    function ManageAppComponent(route, CreatedAppService) {
        this.route = route;
        this.CreatedAppService = CreatedAppService;
        this.app_data = {
            logo: '',
            business_name: ''
        };
        this.imageAssets = [];
        this.isSingleMode = true;
        this.thumbSize = 80;
        this.previewSize = 300;
    }
    ManageAppComponent.prototype.ngOnInit = function () {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
        this.getAppDetails(this.app_id);
    };
    ManageAppComponent.prototype.getAppDetails = function (id) {
        var _this = this;
        this.CreatedAppService.getCreatedAppDetails(id).subscribe(function (res) {
            _this.app_details = res;
            _this.app_data.logo = _this.app_details.logo;
            _this.app_data.business_name = _this.app_details.business_name;
            _this.visible_key = true;
            console.log(res);
        }, function (error) {
            console.log(error);
        });
    };
    ManageAppComponent.prototype.onTakePictureTap = function (args) {
        var _this = this;
        nativescript_camera_1.requestPermissions().then(function () {
            nativescript_camera_1.takePicture({ width: 200, height: 200, keepAspectRatio: true, saveToGallery: true })
                .then(function (imageAsset) {
                _this.cameraImage = imageAsset;
                imageAsset.getImageAsync(function (nativeImage) {
                    var scale = 1;
                    var height = 0;
                    var width = 0;
                    if (imageAsset.android) {
                        scale = nativeImage.getDensity();
                        height = imageAsset.options.height;
                        width = imageAsset.options.width;
                    }
                    else {
                        scale = nativeImage.scale;
                        width = nativeImage.size.width * scale;
                        height = nativeImage.size.height * scale;
                    }
                    console.log("Displayed Size: " + width + "x" + height + " with scale " + scale);
                    console.log("Image Size: " + width / scale + "x" + height / scale);
                });
            }, function (error) {
                console.log("Error: " + error);
            });
        }, function () { return alert('permissions rejected'); });
    };
    ManageAppComponent.prototype.onSelectMultipleTap = function () {
        this.isSingleMode = false;
        var context = imagepicker.create({
            mode: "multiple"
        });
        this.startSelection(context);
    };
    ManageAppComponent.prototype.onSelectSingleTap = function () {
        this.isSingleMode = true;
        var context = imagepicker.create({
            mode: "single"
        });
        this.startSelection(context);
    };
    ManageAppComponent.prototype.startSelection = function (context) {
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
        }).catch(function (e) {
            console.log(e);
        });
    };
    ManageAppComponent = __decorate([
        core_1.Component({
            selector: 'manage-app',
            moduleId: module.id,
            templateUrl: "manage-app.component.html",
            styleUrls: ["manage-app.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            created_app_service_1.CreatedAppService])
    ], ManageAppComponent);
    return ManageAppComponent;
}());
exports.ManageAppComponent = ManageAppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYW5hZ2UtYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFDakQsa0ZBQStFO0FBQy9FLDJEQUFzRTtBQUV0RSxzREFBd0Q7QUFReEQ7SUFhRSw0QkFDVSxLQUFxQixFQUNyQixpQkFBb0M7UUFEcEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVo5QyxhQUFRLEdBQUc7WUFDVCxJQUFJLEVBQUUsRUFBRTtZQUNSLGFBQWEsRUFBRSxFQUFFO1NBQ2xCLENBQUE7UUFHRCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVcsR0FBRyxDQUFDO0lBSXRCLENBQUM7SUFFTCxxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsMENBQWEsR0FBYixVQUFjLEVBQUU7UUFBaEIsaUJBY0M7UUFiQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUN2RCxVQUFBLEdBQUc7WUFDRCxLQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztZQUN2QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUMzQyxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztZQUM3RCxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRWxCLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3BCLENBQUMsQ0FDRixDQUFBO0lBQ0gsQ0FBQztJQUVELDZDQUFnQixHQUFoQixVQUFpQixJQUFJO1FBQXJCLGlCQTRCQztRQTNCQyx3Q0FBa0IsRUFBRSxDQUFDLElBQUksQ0FDdkI7WUFDRSxpQ0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDO2lCQUNqRixJQUFJLENBQUMsVUFBQyxVQUFlO2dCQUNwQixLQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztnQkFDOUIsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLFdBQVc7b0JBQzVDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDZCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQ2YsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUNkLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUN2QixLQUFLLEdBQUcsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUNqQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7d0JBQ25DLEtBQUssR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDbkMsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQzt3QkFDMUIsS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzt3QkFDdkMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDM0MsQ0FBQztvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFtQixLQUFLLFNBQUksTUFBTSxvQkFBZSxLQUFPLENBQUMsQ0FBQztvQkFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBZSxLQUFLLEdBQUcsS0FBSyxTQUFJLE1BQU0sR0FBRyxLQUFPLENBQUMsQ0FBQztnQkFDaEUsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUUsVUFBQyxLQUFLO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQUNELGNBQU0sT0FBQSxLQUFLLENBQUMsc0JBQXNCLENBQUMsRUFBN0IsQ0FBNkIsQ0FDcEMsQ0FBQztJQUNKLENBQUM7SUFFRCxnREFBbUIsR0FBbkI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUUxQixJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQy9CLElBQUksRUFBRSxVQUFVO1NBQ2pCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELDhDQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXpCLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDL0IsSUFBSSxFQUFFLFFBQVE7U0FDZixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCwyQ0FBYyxHQUFkLFVBQWUsT0FBTztRQUNwQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsT0FBTzthQUNKLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQztZQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUMsU0FBUztZQUNkLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxPQUFPO2dCQUNqQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUM5RSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUMvRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUExR1Usa0JBQWtCO1FBUDlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN4QyxDQUFDO3lDQWdCaUIsdUJBQWM7WUFDRix1Q0FBaUI7T0FmbkMsa0JBQWtCLENBNkc5QjtJQUFELHlCQUFDO0NBQUEsQUE3R0QsSUE2R0M7QUE3R1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENyZWF0ZWRBcHBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvc2VydmljZXMvY3JlYXRlZC1hcHAuc2VydmljZVwiO1xyXG5pbXBvcnQgeyB0YWtlUGljdHVyZSwgcmVxdWVzdFBlcm1pc3Npb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNhbWVyYSc7XHJcbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ltYWdlLWFzc2V0JztcclxuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hbmFnZS1hcHAnLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IGBtYW5hZ2UtYXBwLmNvbXBvbmVudC5odG1sYCxcclxuICBzdHlsZVVybHM6IFtgbWFuYWdlLWFwcC5jb21wb25lbnQuY3NzYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYW5hZ2VBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGFwcF9pZDogc3RyaW5nO1xyXG4gIGFwcF9kZXRhaWxzOiBhbnk7XHJcbiAgYXBwX2RhdGEgPSB7XHJcbiAgICBsb2dvOiAnJyxcclxuICAgIGJ1c2luZXNzX25hbWU6ICcnXHJcbiAgfVxyXG4gIHZpc2libGVfa2V5OiBib29sZWFuO1xyXG4gIGNhbWVyYUltYWdlOiBJbWFnZUFzc2V0O1xyXG4gIGltYWdlQXNzZXRzID0gW107XHJcbiAgaXNTaW5nbGVNb2RlOiBib29sZWFuID0gdHJ1ZTtcclxuICB0aHVtYlNpemU6IG51bWJlciA9IDgwO1xyXG4gIHByZXZpZXdTaXplOiBudW1iZXIgPSAzMDA7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgQ3JlYXRlZEFwcFNlcnZpY2U6IENyZWF0ZWRBcHBTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFwcF9pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdKTtcclxuICAgIHRoaXMuZ2V0QXBwRGV0YWlscyh0aGlzLmFwcF9pZCk7XHJcbiAgfVxyXG5cclxuICBnZXRBcHBEZXRhaWxzKGlkKSB7XHJcbiAgICB0aGlzLkNyZWF0ZWRBcHBTZXJ2aWNlLmdldENyZWF0ZWRBcHBEZXRhaWxzKGlkKS5zdWJzY3JpYmUoXHJcbiAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5hcHBfZGV0YWlscyA9IHJlcztcclxuICAgICAgICB0aGlzLmFwcF9kYXRhLmxvZ28gPSB0aGlzLmFwcF9kZXRhaWxzLmxvZ287XHJcbiAgICAgICAgdGhpcy5hcHBfZGF0YS5idXNpbmVzc19uYW1lID0gdGhpcy5hcHBfZGV0YWlscy5idXNpbmVzc19uYW1lO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZV9rZXkgPSB0cnVlXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG5cclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBvblRha2VQaWN0dXJlVGFwKGFyZ3MpIHtcclxuICAgIHJlcXVlc3RQZXJtaXNzaW9ucygpLnRoZW4oXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICB0YWtlUGljdHVyZSh7IHdpZHRoOiAyMDAsIGhlaWdodDogMjAwLCBrZWVwQXNwZWN0UmF0aW86IHRydWUsIHNhdmVUb0dhbGxlcnk6IHRydWUgfSlcclxuICAgICAgICAgIC50aGVuKChpbWFnZUFzc2V0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmFJbWFnZSA9IGltYWdlQXNzZXQ7XHJcbiAgICAgICAgICAgIGltYWdlQXNzZXQuZ2V0SW1hZ2VBc3luYyhmdW5jdGlvbiAobmF0aXZlSW1hZ2UpIHtcclxuICAgICAgICAgICAgICBsZXQgc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgIGxldCBoZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICAgIGxldCB3aWR0aCA9IDA7XHJcbiAgICAgICAgICAgICAgaWYgKGltYWdlQXNzZXQuYW5kcm9pZCkge1xyXG4gICAgICAgICAgICAgICAgc2NhbGUgPSBuYXRpdmVJbWFnZS5nZXREZW5zaXR5KCk7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBpbWFnZUFzc2V0Lm9wdGlvbnMuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgd2lkdGggPSBpbWFnZUFzc2V0Lm9wdGlvbnMud2lkdGg7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNjYWxlID0gbmF0aXZlSW1hZ2Uuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IG5hdGl2ZUltYWdlLnNpemUud2lkdGggKiBzY2FsZTtcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IG5hdGl2ZUltYWdlLnNpemUuaGVpZ2h0ICogc2NhbGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEaXNwbGF5ZWQgU2l6ZTogJHt3aWR0aH14JHtoZWlnaHR9IHdpdGggc2NhbGUgJHtzY2FsZX1gKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgSW1hZ2UgU2l6ZTogJHt3aWR0aCAvIHNjYWxlfXgke2hlaWdodCAvIHNjYWxlfWApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiBhbGVydCgncGVybWlzc2lvbnMgcmVqZWN0ZWQnKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0TXVsdGlwbGVUYXAoKSB7XHJcbiAgICB0aGlzLmlzU2luZ2xlTW9kZSA9IGZhbHNlO1xyXG5cclxuICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcclxuICAgICAgbW9kZTogXCJtdWx0aXBsZVwiXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhcnRTZWxlY3Rpb24oY29udGV4dCk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdFNpbmdsZVRhcCgpIHtcclxuICAgIHRoaXMuaXNTaW5nbGVNb2RlID0gdHJ1ZTtcclxuXHJcbiAgICBsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XHJcbiAgICAgIG1vZGU6IFwic2luZ2xlXCJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGFydFNlbGVjdGlvbihjb250ZXh0KTtcclxuICB9XHJcblxyXG4gIHN0YXJ0U2VsZWN0aW9uKGNvbnRleHQpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICBjb250ZXh0XHJcbiAgICAgIC5hdXRob3JpemUoKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhhdC5pbWFnZUFzc2V0cyA9IFtdO1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHNlbGVjdGlvbikgPT4ge1xyXG4gICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICBlbGVtZW50Lm9wdGlvbnMud2lkdGggPSB0aGF0LmlzU2luZ2xlTW9kZSA/IHRoYXQucHJldmlld1NpemUgOiB0aGF0LnRodW1iU2l6ZTtcclxuICAgICAgICAgIGVsZW1lbnQub3B0aW9ucy5oZWlnaHQgPSB0aGF0LmlzU2luZ2xlTW9kZSA/IHRoYXQucHJldmlld1NpemUgOiB0aGF0LnRodW1iU2l6ZTtcclxuICAgICAgICAgIHRoYXQuaW1hZ2VBc3NldHMucHVzaChlbGVtZW50KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG5cclxufSJdfQ==