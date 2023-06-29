// getting places from APIs
function loadPlaces(position) {
    const mockPlace = [
        {
            "id": "60b6267b5e15bc2501c927a8",
            "name": "SUBWAY",
            "location": {
                "address": "Room 101, 1F, No.33 Shiqiao Road, Pudong New Area, Shanghai",
                "crossStreet": "Hunan Hwy. | 沪南公路",
                "lat": 31.239356,
                "lng": 121.507018,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 31.239356,
                        "lng": 121.507018
                    }
                ],
                "distance": 1575,
                "cc": "CN",
                "city": "上海市",
                "state": "上海市",
                "country": "中国",
                "formattedAddress": [
                    "Room 101, 1F, No.33 Shiqiao Road, Pudong New Area, Shanghai",
                    "上海市",
                    "上海市",
                    "中国"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d1fd941735",
                    "name": "Restaurant",
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
            "id": "643b85b586963049657776b2",
            "name": "Starbucks Coffee",
            "location": {
                "address": "1F, Citigroup Tower, 33 Garden Shiqiao Road, Pudong District, Shanghai",
                "lat": 31.239723,
                "lng": 121.507081,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 31.239723,
                        "lng": 121.507081
                    }
                ],
                "distance": 1714,
                "cc": "CN",
                "city": "上海市",
                "state": "上海市",
                "country": "中国",
                "formattedAddress": [
                    "1F, Citigroup Tower, 33 Garden Shiqiao Road",
                    "上海市",
                    "上海市",
                    "中国"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d1e0931735",
                    "name": "Coffee",
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
            "id": "646066abded414161b1edac2",
            "name": "7-ELEVEN",
            "location": {
                "address": "No. 166, Lujiazui Ring Road, Pudong New Area, Shanghai",
                "lat": 31.240819,
                "lng": 121.506749,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 31.240819,
                        "lng": 121.506749
                    }
                ],
                "distance": 927,
                "cc": "CN",
                "city": "上海市",
                "state": "上海市",
                "country": "中国",
                "formattedAddress": [
                    "No. 166, Lujiazui Ring Road, Pudong New Area, Shanghai",
                    "上海市",
                    "上海市",
                    "中国"
                ]
            },
            "categories": [
                {
                    "id": "52e81612bcbc57f1066b7a0c",
                    "name": "Store",
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
            "name": "Shangri-La Hotel",
            "location": {
                "address": "No.33, Fucheng Road, Pudong New Area, Shanghai",
                "lat": 31.241745,
                "lng": 121.506803,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 31.241745,
                        "lng": 121.506803
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
                    "name": "Hotel",
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
            "name": "Haagen-Dazs",
            "location": {
                "address": "No.3062, Binjiang Avenue, Pudong New Area, Shangha",
                "lat": 31.239846,
                "lng":121.50497,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 31.239846,
                        "lng": 121.50497
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
                    "name": "Restaurant",
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
        },
        {
            "id": "521ec0a6498e5eebf7e03182",
            "name": "LEGO",
            "location": {
                "address": "F2, Zhengda Plaza, No.168 Lujiazui West Road, Pudong New Area, Shanghai",
                "lat": 31.242104,
                "lng":121.505015,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 31.242104,
                        "lng": 121.505015
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
                    "name": "Store",
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
        },
        {
            "id": "521ec0a6498e5eebf7e03182",
            "name": "Apple Store",
            "location": {
                "address": "Store LG2-27, Shanghai IFC Mall, 8 Century Avenue, Lujiazui, Pudong New Area, Shanghai",
                "lat": 31.241575,
                "lng":121.508141,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 31.241575,
                        "lng": 121.508141
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
                    "name": "Store",
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
        },
        {
            "id": "521ec0a6498e5eebf7e03182",
            "name": "LV Louis Vuitton",
            "location": {
                "address": "F1, Shanghai IFC Mall, No.8 Century Avenue, Lujiazui, Pudong New Area, Shanghai",
                "lat": 31.241004,
                "lng":121.509578,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 31.241004,
                        "lng": 121.509578
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
                    "name": "Store",
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
        },
        {
            "id": "643b85b586963049657776b2",
            "name": "Starbucks Coffee",
            "location": {
                "address": "Room 103, 1st Floor, No.488, Yincheng Middle Road, Pudong District, Shanghai",
                "lat": 31.23973,
                "lng": 121.508774,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 31.23973,
                        "lng": 121.508774
                    }
                ],
                "distance": 1714,
                "cc": "CN",
                "city": "上海市",
                "state": "上海市",
                "country": "中国",
                "formattedAddress": [
                    "1F, Citigroup Tower, 33 Garden Shiqiao Road",
                    "上海市",
                    "上海市",
                    "中国"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d1e0931735",
                    "name": "Coffee",
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
            "id": "643b85b586963049657776b2",
            "name": "China Telecom",
            "location": {
                "address": "3F, No.325, Lujiazui Ring Road, Pudong New Area, Shanghai",
                "lat": 31.23904,
                "lng": 121.509075,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 31.23904,
                        "lng": 121.509075
                    }
                ],
                "distance": 1714,
                "cc": "CN",
                "city": "上海市",
                "state": "上海市",
                "country": "中国",
                "formattedAddress": [
                    "1F, Citigroup Tower, 33 Garden Shiqiao Road",
                    "上海市",
                    "上海市",
                    "中国"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d1e0931735",
                    "name": "Service",
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
    console.log("latitude=" + position.latitude + "&&&&&" + "longitude=" + position.longitude);
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
                    return mockPlace;
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
