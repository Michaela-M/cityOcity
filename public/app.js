let MOCK_ACTIVITIES = {
    "activityListing": [
        {
            "id": "00001",
            "name": "Denver Museum of Nature and Science",
            "type": "Museum",
            "address": "2001 Colorado Blvd, Denver, CO 80205",
            "phone": "303-370-6000",
            "website": "www.dmns.org",
            "description": "Natural history exhibitions, IMAX and planetarium shows, activities, and lectures that explore the wonders of science, Colorado, Earth, and the universe.",
            "tags": "kid-friendly, educational",
            "photoLink": "null"
        },
        {
            "id": "00002",
            "name": "Colorado Railroad Museum",
            "type": "Museum",
            "address": "17155 W 44th Ave, Golden, CO 80403",
            "phone": "303-279-4591",
            "website": "www.coloradorailroadmuseum.org",
            "description": "There's something amazing about trains. The familiar whistle has always promised adventure. The gentle rock of the rails has set the rhythm of our lives.",
            "tags": "kid-friendly, educational",
            "photoLink": "null"
        }
    ]
};

function getActivities(callbackFn) {
    setTimeout(function(){ callbackFn(MOCK_ACTIVITIES)}, 100);
}

function displayActivities(data) {
    for (index in data.activityListing) {
        $('body').append(
            '<p>' + data.activityListing[index].name + '</p>');
    }
}

function getAndDisplayActivities() {
    getActivities(displayActivities);
}

$(document).ready($(getAndDisplayActivities()));