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
    const params = {
        radius: 300,    // search places not farther than this value (in meters)
        clientId: 'ILAXZHLG1YGODF5TOET4ICFT3I1CFJN5ZR1CRJQHDDS1IDI2',
        clientSecret: 'CU54JRCCZPWDQRRLC1BNT3FJSEJGDV1LOYCOHVOEWEK53FOG',
        version: '20300101',    // foursquare versioning, required but unuseful for this demo
    };

    // CORS Proxy to avoid CORS problems
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';

    // Foursquare API (limit param: number of maximum places to fetch)
    const endpoint = `https://api.foursquare.com/v2/venues/search?intent=checkin
        &ll=${position.latitude},${position.longitude}
        &radius=${params.radius}
        &client_id=${params.clientId}
        &client_secret=${params.clientSecret}
        &limit=30
        &v=${params.version}`;
    return fetch(endpoint)
        .then((res) => {
            return res.json()
                .then((resp) => {
                    return resp.response.venues;
                })
        })
        .catch((err) => {
            console.error('Error with places API', err);
            return mockPlace;
        })
};


window.onload = () => {

    const scene = document.querySelector('a-scene');

    return navigator.geolocation.getCurrentPosition(function (position) {

        // than use it to load from remote APIs some places nearby
        loadPlaces(position.coords)
            .then((places) => {
                places.forEach((place) => {
                    const latitude = place.location.lat;
                    const longitude = place.location.lng;
                    
                    // add place name

                    const icon = document.createElement('a-image');
                    icon.setAttribute('gps-new-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
                    icon.setAttribute('name', place.name);
                    icon.setAttribute('mLocaltion', (place.location && place.location.address) ? place.location.address : "LuJiaZui Road, PuDong District, Shanghai City, P.R. China");
                    icon.setAttribute('mCategory', place.categories[0] ? place.categories[0].name : "Others");
                    icon.setAttribute('src', 'assets/map-marker.png');
                    icon.setAttribute('look-at', '[gps-new-camera]');
                    icon.setAttribute('scale', '100, 100');

                    icon.addEventListener('loaded', () =>{
                        window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))

                    });
                    // const placeText = document.createElement('a-link');
                    // placeText.setAttribute('gps-new-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
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
                        const mLocaltion = ev.target.getAttribute('mLocaltion');
                        const mCategory = ev.target.getAttribute('mCategory');
                        const el = ev.detail.intersection && ev.detail.intersection.object.el;

                        if (el && el === ev.target) {
                            
                            const container = document.createElement('div');
                            container.setAttribute('id', 'place-label');
                            container.setAttribute('class', 'card');
                            const merchantName = document.createElement('strong');
                            merchantName.innerText = name;
                            const merchantLocation = document.createElement('p');
                            merchantLocation.innerText = "Address: " + mLocaltion;
                            const merchantCategory = document.createElement('p');
                            merchantCategory.innerText = "Category: " + mCategory;
                            const cardLogo = document.createElement('img');
                            cardLogo.src = './assets/Citi_Blue-RedArc_RGB.png';
                            container.appendChild(merchantName);
                            container.appendChild(merchantLocation);
                            container.appendChild(merchantCategory);
                            container.appendChild(cardLogo);
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
