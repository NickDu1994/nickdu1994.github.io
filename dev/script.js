// getting places from APIs
function loadPlaces(position) {
    const mockPlace = [
        {
            "id": "60b6267b5e15bc2501c927a8",
            "name": "McDonald's",
            "location": {
                "address": "No. 116B, Block 1, Shanghai Pudong Software Park, 1000 Chenhui Road, Pudong New Area, Shanghai",
                "crossStreet": "No. 116B, Block 1, Shanghai Pudong Software Park, 1000 Chenhui Road, Pudong New Area, Shanghai",
                "lat": 31.203328694080337, 
                "lng": 121.5976138443816,
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
                    "No. 116B, Block 1, Shanghai Pudong Software Park, 1000 Chenhui Road, Pudong New Area, Shanghai",
                    "上海市",
                    "上海市",
                    "中国"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d1fd941735",
                    "name": "Restaurant",
                    "pluralName": "Restaurant",
                    "shortName": "Restaurant",
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
                "address": "Room 116-A, Building 1, No.1000 Chenhui Road, Pudong New Area, Shanghai",
                "lat": 31.201523983872132, 
                "lng": 121.59629005615344,
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
                    "Room 116-A, Building 1, No.1000 Chenhui Road, Pudong New Area, Shanghai",
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
            "name": "FamilyMart",
            "location": {
                "address": "117-B, Shanghai Pudong Software Park, No. 1000 Chen Hui Road, Pudong New Area, Shanghai",
                "lat": 31.20294269617594, 
                "lng": 121.59581160081306,
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
                    "117-B, Shanghai Pudong Software Park, No. 1000 Chen Hui Road, Pudong New Area, Shanghai",
                    "上海市",
                    "上海市",
                    "中国"
                ]
            },
            "categories": [
                {
                    "id": "52e81612bcbc57f1066b7a0c",
                    "name": "Store",
                    "pluralName": "Store",
                    "shortName": "Store",
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
            "id": "643b85b586963049657776b2",
            "name": "Manner Coffee",
            "location": {
                "address": "Room 105-1, Conference Hall, Ground Floor, No.22 Boxia Road, Pudong New Area, Shanghai",
                "lat": 31.203349519160316,
                "lng": 121.59817956238396,
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
                    "Room 105-1, Conference Hall, Ground Floor, No.22 Boxia Road, Pudong New Area, Shanghai",
                    "上海市",
                    "上海市",
                    "中国"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d1e0931735",
                    "name": "Coffee",
                    "pluralName": "Manner Coffee",
                    "shortName": "Manner Coffee",
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
            "id": "4f9fa912e4b01f28cba7862e",
            "name": "KFC",
            "location": {
                "address": "F1, Huizhi International Commercial Center, 3057 Jinke Road, Pudong New Area, Shanghai",
                "lat": 31.202832572838734, 
                "lng": 121.60157734511664,
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
                    "F1, Huizhi International Commercial Center, 3057 Jinke Road, Pudong New Area, Shanghai",
                    "中国"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d1d6941735",
                    "name": "Restaurant",
                    "pluralName": "Restaurant",
                    "shortName": "Restaurant",
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
                "address": "F1, Shanghai Legend Commercial Plaza, No.635 Bibo Road, Pudong New Area, Shanghai",
                "lat": 31.200573105241318,
                "lng": 121.58568140199382,
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
                    "F1, Shanghai Legend Commercial Plaza, No.635 Bibo Road, Pudong New Area, Shanghai",
                    "浦东",
                    "上海市",
                    "中国"
                ]
            },
            "categories": [
                {
                    "id": "5032891291d4c4b30a586d68",
                    "name": "Restaurant",
                    "pluralName": "Restaurant",
                    "shortName": "Restaurant",
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
                "address": "F1, Huizhi International Commercial Center, 3057 Jinke Road, Pudong New Area, Shanghai",
                "lat": 31.206255161907123,
                "lng": 121.59528723343806,
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
                    "F1, Huizhi International Commercial Center, 3057 Jinke Road, Pudong New Area, Shanghai",
                    "浦东",
                    "上海市",
                    "中国"
                ]
            },
            "categories": [
                {
                    "id": "5032891291d4c4b30a586d68",
                    "name": "Electronic Products",
                    "pluralName": "Electronic Products",
                    "shortName": "Electronic Products",
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
            "name": "Nike",
            "location": {
                "address": "F1, Huizhi International Commercial Center, 3057 Jinke Road, Pudong New Area, Shanghai",
                "lat": 31.200095899694762,
                "lng": 121.59764405407759,
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
                    "F1, Huizhi International Commercial Center, 3057 Jinke Road, Pudong New Area, Shanghai",
                    "浦东",
                    "上海市",
                    "中国"
                ]
            },
            "categories": [
                {
                    "id": "5032891291d4c4b30a586d68",
                    "name": "Clothing Store",
                    "pluralName": "Clothing Store",
                    "shortName": "Clothing Store",
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
            "name": "UNIQUE",
            "location": {
                "address": "F1 Changtai Plaza, Lane 2889 Jinke Road, Pudong New Area, Shanghai",
                "lat": 31.20709423611006,
                "lng": 121.59633669275264,
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
                    "F1 Changtai Plaza, Lane 2889 Jinke Road, Pudong New Area, Shanghai",
                    "上海市",
                    "上海市",
                    "中国"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d1e0931735",
                    "name": "Clothing Store",
                    "pluralName": "Clothing Store",
                    "shortName": "Clothing Store",
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
                "address": "F1 Changtai Plaza, Lane 2889 Jinke Road, Pudong New Area, Shanghai",
                "lat": 31.19822762973024,
                "lng": 121.59736150390823,
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
                    "F1 Changtai Plaza, Lane 2889 Jinke Road, Pudong New Area, Shanghai",
                    "上海市",
                    "上海市",
                    "中国"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d1e0931735",
                    "name": "Service",
                    "pluralName": "Service",
                    "shortName": "Service",
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
            "name": "left",
            "location": {
                "address": "3F, No.325, Lujiazui Ring Road, Pudong New Area, Shanghai",
                "lat": 31.120720215775798, 
                "lng": 121.54568509028148,
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
        },
        {
            "id": "643b85b586963049657776b2",
            "name": "toptoptop",
            "location": {
                "address": "3F, No.325, Lujiazui Ring Road, Pudong New Area, Shanghai",
                "lat": 31.121813367808546, 
                "lng": 121.54721915689751,
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
        },
        {
            "id": "643b85b586963049657776b2",
            "name": "right",
            "location": {
                "address": "3F, No.325, Lujiazui Ring Road, Pudong New Area, Shanghai",
                "lat": 31.120656886173265, 
                "lng": 121.5477813856093,
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
        },
        {
            "id": "643b85b586963049657776b2",
            "name": "bottom",
            "location": {
                "address": "3F, No.325, Lujiazui Ring Road, Pudong New Area, Shanghai",
                "lat": 31.119747734646747, 
                "lng": 121.54726600929014,
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
                    icon.setAttribute('mLocaltion', (place.location && place.location.address) ? place.location.address : "Huizhi International Commercial Center, 3057 Jinke Road, Pudong New Area, Shanghai, China");
                    icon.setAttribute('mCategory', place.categories[0] ? place.categories[0].name : "Others");
                    icon.setAttribute('src', 'assets/map-marker.png');
                    icon.setAttribute('look-at', '[gps-new-camera]');
                    icon.setAttribute('scale', '50, 50');

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

                        console.log(ev);
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
                            let nameInString = '';
                            if (typeof name !== 'string') {
                                nameInString = String(name);
                            } else {
                                nameInString = name;
                            }
                            if (nameInString.length > 12) {
                                cardLogo.src = './assets/card-cashbackp-visacard.png';
                            } else if ( 6 <= nameInString <= 12) {
                                cardLogo.src = './assets/card-rewards-visa-card.png';
                            } else {
                                cardLogo.src = './assets/card-premiermiles-visa.png';
                            }
                            const closeButton = document.createElement('span');
                            closeButton.setAttribute('class', 'closeButton');
                            closeButton.addEventListener('click', () => {
                                container.parentElement.removeChild(container);
                            })
                            const panelDiv = document.createElement('div');
                            panelDiv.setAttribute('class', 'cardPanel');
                            container.appendChild(merchantName);
                            container.appendChild(merchantLocation);
                            container.appendChild(merchantCategory);
                            panelDiv.appendChild(cardLogo);
                            panelDiv.appendChild(closeButton);
                            container.appendChild(panelDiv);
                            document.body.appendChild(container);

                            setTimeout(() => {
                                if (container && container.parentElement) {
                                    container.parentElement.removeChild(container);
                                }
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
