// getting places from APIs
function loadPlaces(position) {
    const mockPlace = [
        {
            "id": "643b85b586963049657776b2",
            "name": "Starbucks Coffee",
            "location": {
                "address": "沪南路3449弄1层",
                "lat": 31.12063,
                "lng": 121.543332,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 31.12063,
                        "lng": 121.543332
                    }
                ],
                "distance": 1714,
                "cc": "CN",
                "city": "上海市",
                "state": "上海市",
                "country": "中国",
                "formattedAddress": [
                    "沪南路3449弄1层",
                    "上海市",
                    "上海市",
                    "中国"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d1e0931735",
                    "name": "Starbucks Coffee",
                    "pluralName": "Starbucks Coffee",
                    "shortName": "Starbucks Coffee",
                    "icon": {
                        "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
                        "suffix": ".png"
                    },
                    "primary": true
                }
            ],
            "createdAt": 1681622453,
            "referralId": "v-1687447168",
            "hasPerk": false
        },
        {
            "id": "60b6267b5e15bc2501c927a8",
            "name": "Xintian 360 Plaza (新田360广场)",
            "location": {
                "address": "668 Xiupu Rd. | 秀浦路668号",
                "crossStreet": "Hunan Hwy. | 沪南公路",
                "lat": 31.12022,
                "lng": 121.541617,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 31.12022,
                        "lng": 121.541617
                    }
                ],
                "distance": 1575,
                "cc": "CN",
                "city": "上海市",
                "state": "上海市",
                "country": "中国",
                "formattedAddress": [
                    "668 Xiupu Rd. | 秀浦路668号 (Hunan Hwy. | 沪南公路)",
                    "上海市",
                    "上海市",
                    "中国"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d1fd941735",
                    "name": "Shopping Mall",
                    "pluralName": "Shopping Malls",
                    "shortName": "Mall",
                    "icon": {
                        "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/mall_",
                        "suffix": ".png"
                    },
                    "primary": true
                }
            ],
            "createdAt": 1622550012,
            "referralId": "v-1687447168",
            "hasPerk": false
        },
        {
            "id": "646066abded414161b1edac2",
            "name": "Hey Tea",
            "location": {
                "address": "上南路6717号1层",
                "lat": 31.120962,
                "lng": 121.544895,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 31.120962,
                        "lng": 121.544895
                    }
                ],
                "distance": 927,
                "cc": "CN",
                "city": "上海市",
                "state": "上海市",
                "country": "中国",
                "formattedAddress": [
                    "上南路6717号1层",
                    "上海市",
                    "上海市",
                    "中国"
                ]
            },
            "categories": [
                {
                    "id": "52e81612bcbc57f1066b7a0c",
                    "name": "Bubble Tea Shop",
                    "pluralName": "Bubble Tea Shops",
                    "shortName": "Bubble Tea",
                    "icon": {
                        "prefix": "https://ss3.4sqi.net/img/categories_v2/food/bubble_",
                        "suffix": ".png"
                    },
                    "primary": true
                }
            ],
            "createdAt": 1684039339,
            "referralId": "v-1687447168",
            "hasPerk": false
        },
        {
            "id": "4f9fa912e4b01f28cba7862e",
            "name": "UNIQLO",
            "location": {
                "address": "浦东新区沪南路3219弄 (梓康路)",
                "lat": 31.120483,
                "lng": 121.54671,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 31.120483,
                        "lng": 121.54671
                    }
                ],
                "distance": 1757,
                "cc": "CN",
                "country": "中国",
                "formattedAddress": [
                    "浦东新区沪南路3219弄 (梓康路)",
                    "中国"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d1d6941735",
                    "name": "Strip Club",
                    "pluralName": "Strip Clubs",
                    "shortName": "Strip Club",
                    "icon": {
                        "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/stripclub_",
                        "suffix": ".png"
                    },
                    "primary": true
                }
            ],
            "createdAt": 1335863570,
            "referralId": "v-1687447168",
            "hasPerk": false
        },
        {
            "id": "521ec0a6498e5eebf7e03182",
            "name": "PuFa Apartment",
            "location": {
                "address": "PuFa Apartment",
                "lat": 31.119463,
                "lng": 121.544356,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 31.119463,
                        "lng": 121.544356
                    }
                ],
                "distance": 906,
                "cc": "CN",
                "city": "浦东",
                "state": "上海市",
                "country": "中国",
                "formattedAddress": [
                    "秀沿路 | Xiuyan Rd",
                    "浦东",
                    "上海市",
                    "中国"
                ]
            },
            "categories": [
                {
                    "id": "5032891291d4c4b30a586d68",
                    "name": "Assisted Living",
                    "pluralName": "Assisted Living",
                    "shortName": "Assisted Living",
                    "icon": {
                        "prefix": "https://ss3.4sqi.net/img/categories_v2/building/apartment_",
                        "suffix": ".png"
                    },
                    "primary": true
                }
            ],
            "createdAt": 1377747110,
            "referralId": "v-1687447168",
            "hasPerk": false
        }
    ];
    return mockPlace;
};


window.onload = () => {
    const scene = document.querySelector('a-scene');

    // first get current user location
    return navigator.geolocation.getCurrentPosition(function (position) {
        
        // than use it to load from remote APIs some places nearby
        loadPlaces(position.coords)
            .then(() => {
                alert("position latitude=" + position.latitude + "&&&longitude=" + position.longitude);
            })
            .then((places) => {
                places.forEach((place) => {
                    const latitude = place.location.lat;
                    const longitude = place.location.lng;
                    
                    // add place name

                    const icon = document.createElement('a-image');
                    icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
                    icon.setAttribute('name', place.name);
                    icon.setAttribute('src', 'assets/map-marker.png');

                    icon.setAttribute('scale', '100, 100');

                    icon.addEventListener('loaded', () =>{
                        window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))

                    });
                    // const placeText = document.createElement('a-link');
                    // placeText.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
                    // placeText.setAttribute('title', place.name);
                    // placeText.setAttribute('scale', '15 15 15');
                    //
                    // placeText.addEventListener('loaded', () => {
                    //     window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
                    // });
                    const clickListener = function (ev) {
                        ev.stopPropagation();
                        ev.preventDefault();

                        const name = ev.target.getAttribute('name');
                        const el = ev.detail.intersection && ev.detail.intersection.object.el;

                        if (el && el === ev.target) {
                            
                            const label = document.createElement('span');
                            const container = document.createElement('div');
                            container.setAttribute('id', 'place-label');
                            label.innerText = name;
                            container.appendChild(label);
                            document.body.appendChild(container);

                            setTimeout(() => {
                                container.parentElement.removeChild(container);
                            }, 5000);
                         }
                     };
                     icon.addEventListener('click', clickListener);

                    scene.appendChild(icon);
                });
            })
    },
        (err) => console.error('Error in retrieving position', err),
        {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 27000,
        }
    );
};
