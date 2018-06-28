var app = angular.module("MediaFeed", []);

app.controller("MainCtrl", function($scope, $http){
    
    $scope.GetMediaFeedList = function(){
    	
		var SoapEnv = "<?xml version='1.0' encoding='utf-8'?>\
			<soap12:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap12='http://www.w3.org/2003/05/soap-envelope'> \
				<soap12:Body> \
					<GetListItems xmlns='http://schemas.microsoft.com/sharepoint/soap/'> \
						<listName>MediaFeed</listName> \
					</GetListItems> \
				</soap12:Body> \
			</soap12:Envelope>";
    	  
        $http({
        
            url: _spPageContextInfo.webAbsoluteUrl + "/_vti_bin/Lists.asmx",
            method: "POST",
            data: SoapEnv,
            headers: {"Content-Type": "application/soap+xml"}
            
        }).success(function(response){

			var items = [];
			var Parser = new DOMParser();
			var Doc = Parser.parseFromString(response,"text/xml");
			
			angular.forEach(Doc.getElementsByTagName("z:row"), function(i){
				items.push({
					"title": i.getAttribute("ows_Title"),
					"description": i.getAttribute("ows_Content"),
					//"date_posted": Date.parse( i.getAttribute("ows_DatePosted") ),
					"date_posted": i.getAttribute("ows_DatePosted"),
					"image": i.getAttribute("ows_ImageURL"),
					"type": i.getAttribute("ows_Media_x0020_Type"),
					"download_url": i.getAttribute("ows_Enable_x0020_Download"),
					"url": i.getAttribute("ows_Media_x0020_URL")
				});
			});
			
			$scope.MediaFeedItems = items;
			
        }).error(function(error){
            console.log(error);
        });
    }
    
    $scope.GetMediaFeedList();
    
});

app.filter("TrustAsHTML", ["$sce", function($sce) {
	return function(text) {
		return $sce.trustAsHtml(text);
	};
}]);