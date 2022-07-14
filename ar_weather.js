var coordinates = {}

$(document).ready(function(){
    get_coordiantes();
})
function get_coordinates(){
    var searchParams = new URLSearchParams(window.location.search)
    console.log(searchParams)
    if(searchParams.has("source") && searchParams.has("destination")){
        alert("cordinates are selected")
        var source = searchParams.get("source")
        var destination = searchParams.get("destination")
        console.log(source)
        coordinates.source_lat= source.split(";")[0]
        coordinates.source_lng = source.split(";")[1]

        coordinates.destination_lat=destination.split(";")[0]
        coordinates.destination_lng=destination.split(";")[1]
    
    }   
    else{
        
        window.history.back()
        alert("coordinates are not selected")
        
    }
}