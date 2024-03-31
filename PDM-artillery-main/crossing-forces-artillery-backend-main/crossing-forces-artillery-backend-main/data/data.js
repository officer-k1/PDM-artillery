const soldiers = [
    {
        "airtag": {
            "airtag_id": "1e41b7ec-2072-4e5c-91e4-bb4b0d5e8f65",
            "time_sent": "2024-03-18T08:14:23.089Z",
            "time_received": "2024-03-18T08:14:24.089Z",
            "lng": 34.6,
            "lat": 32.4,
            "direction": 182.3
        },
        "soldier": {
            "soldier_id": "1e41b7ec-2072-4e5c-91e4-bb4b0d5e8f65",
            "soldier_name": "יוסי מלמד",
            "affiliation": {
                "platoon": {
                    "platoon_id": 1,
                    "platoon_name": "פלוגה ה'",
                    "commander_id": "1e41b7ec-1111-1111-91e4-bb4b0d5e8f65"
                },
                "battalion": {
                    "battalion_id": 2,
                    "battalion_name": "גדוד 5114"
                },
                "brigade": {
                    "brigade_id": 3,
                    "brigade_name": "חטיבת הנחל"
                },
                "division": {
                    "division_id": 4,
                    "division_name": "אוגדת עזה"
                },
                "branch": {
                    "branch_id": 4,
                    "branch_name": "פיקוד דרום"
                }
            }
        }
    },
    {
        "airtag": {
            "airtag_id": "1e41b7ec-2072-4e5c-91e4-bb4b0d5e8f65",
            "time_sent": "2024-03-18T08:14:23.089Z",
            "time_received": "2024-03-18T08:14:24.089Z",
            "lng": 100,
            "lat": 100,
            "direction": 182.3
        },
        "soldier": {
            "soldier_id": "4e21b7ec-1072-4e5c-91e4-bb4b0d5e8f65",
            "soldier_name": "שימי אחויה",
            "affiliation": {
                "platoon": {
                    "platoon_id": 1,
                    "platoon_name": "פלוגה א'",
                    "commander_id": "1e41b7ec-1111-1111-91e4-bb4b0d5e8f65"
                },
                "battalion": {
                    "battalion_id": 2,
                    "battalion_name": "גדוד 5114"
                },
                "brigade": {
                    "brigade_id": 3,
                    "brigade_name": "חטיבת הנחל"
                },
                "division": {
                    "division_id": 4,
                    "division_name": "אוגדת עזה"
                },
                "branch": {
                    "branch_id": 4,
                    "branch_name": "פיקוד דרום"
                }
            }
        }
    },
];

const Targets = [
    {
        "target_id": "1e41b7ec-2072-4e5c-91e4-bb4b0d5e8f65",
        "target_name": "בניין בחאן יונס",
        "target_description": "מפקדה מרכזית של החמאס בבניין בשכונה בחאן יונס",
        "time_created": "2024-03-18T08:14:23.089Z",
        "time_updated": "2024-03-18T08:14:23.089Z",
        "lng": 200,
        "lat": 200,
        "assignments": [
            {
                "affiliation": {
                    "platoon": {
                        "platoon_id": 1,
                        "platoon_name": "פלוגה ה'"
                    },
                    "battalion": {
                        "battalion_id": 2,
                        "battalion_name": "גדוד 5114"
                    },
                    "brigade": {
                        "brigade_id": 3,
                        "brigade_name": "חטיבת הנחל"
                    },
                    "division": {
                        "division_id": 4,
                        "division_name": "אוגדת עזה"
                    },
                    "branch": {
                        "branch_id": 4,
                        "branch_name": "פיקוד דרום"
                    }
                },
                "weapon": {
                    "weapon_id": 3,
                    "weapon_type": "Armor-Piercing Fin-Stabilized Discarding Sabot (APFSDS)",
                    "radius": 21,
                    "branch": "חיל היבשה"
                }
            }
        ],
        "affiliation": {
            "platoon": {
                "platoon_id": 1,
                "platoon_name": "פלוגה ה'"
            },
            "battalion": {
                "battalion_id": 2,
                "battalion_name": "גדוד 5114"
            },
            "brigade": {
                "brigade_id": 3,
                "brigade_name": "חטיבת הנחל"
            },
            "division": {
                "division_id": 4,
                "division_name": "אוגדת עזה"
            },
            "branch": {
                "branch_id": 4,
                "branch_name": "פיקוד דרום"
            }
        },
        "status": {
            "status_id": 2,
            "status_type": "מאושר"
        },
        "additional_info": ""
    },
    {
        "target_id": "111111-2072-4e5c-91e4-bb4b0d5e8f65",
        "target_name": "בניין בחאן יונס",
        "target_description": "מפקדה מרכזית של החמאס בבניין בשכונה בחאן יונס",
        "time_created": "2024-03-18T08:14:23.089Z",
        "time_updated": "2024-03-18T08:14:23.089Z",
        "lng": 34.6,
        "lat": 32.4,
        "assignments": [
            {
                "affiliation": {
                    "platoon": {
                        "platoon_id": 1,
                        "platoon_name": "פלוגה ה'"
                    },
                    "battalion": {
                        "battalion_id": 2,
                        "battalion_name": "גדוד 5114"
                    },
                    "brigade": {
                        "brigade_id": 3,
                        "brigade_name": "חטיבת הנחל"
                    },
                    "division": {
                        "division_id": 4,
                        "division_name": "אוגדת עזה"
                    },
                    "branch": {
                        "branch_id": 4,
                        "branch_name": "פיקוד דרום"
                    }
                },
                "weapon": {
                    "weapon_id": 3,
                    "weapon_type": "Armor-Piercing Fin-Stabilized Discarding Sabot (APFSDS)",
                    "radius": 21,
                    "branch": "חיל היבשה"
                }
            }
        ],
        "affiliation": {
            "platoon": {
                "platoon_id": 1,
                "platoon_name": "פלוגה ה'"
            },
            "battalion": {
                "battalion_id": 2,
                "battalion_name": "גדוד 5114"
            },
            "brigade": {
                "brigade_id": 3,
                "brigade_name": "חטיבת הנחל"
            },
            "division": {
                "division_id": 4,
                "division_name": "אוגדת עזה"
            },
            "branch": {
                "branch_id": 4,
                "branch_name": "פיקוד דרום"
            }
        },
        "status": {
            "status_id": 2,
            "status_type": "מאושר"
        },
        "additional_info": ""
    }
];

const historicalTargets =[
    {
        target_id : "2gs-42412gsd",
        target_name: "מפקדת חמאס",
        target_description: "מפקדה של מפקד",
        time_created: "2024-03-14T09:44:46.314Z",
        time_updated: "2024-03-14T09:44:46.314Z",
        lng: 36,
        lat: 36,
        assigments: [
             {
                weapon : {
                    weapon_id : "1",
                    weapon_name : "עוזי",
                    weapon_radius : 5,
                    affilation: {   platoon: {
                        platoon_id : "5",
                        platoon_name : "פלוגה ו"
                    },
                    battalion: {
                        battalion_id :"4",
                        battalion_name : "גדס'ר 1625"
                    },
                    brigade: {
                        brigade_id : "2",
                        brigade_name : "חטיבת הנחל"
                    },
                    divison : {
                        divison_id : "1",
                        divison_name : "אגודת עזה"
                    },
                    branch : {
                        branch_id : "3",
                        branch_name : "חיל היבשה"
                    }
                    }
                },
                affilation: {   platoon: {
                    platoon_id : "5",
                    platoon_name : "פלוגה ו"
                },
                battalion: {
                    battalion_id :"4",
                    battalion_name : "גדס'ר 1625"
                },
                brigade: {
                    brigade_id : "2",
                    brigade_name : "חטיבת הנחל"
                },
                divison : {
                    divison_id : "1",
                    divison_name : "אגודת עזה"
                },
                branch : {
                    branch_id : "3",
                    branch_name : "חיל היבשה"
                }},
            },
        ],
        affilation: {   platoon: {
            platoon_id : "5",
            platoon_name : "פלוגה ו"
        },
        battalion: {
            battalion_id :"4",
            battalion_name : "גדס'ר 1625"
        },
        brigade: {
            brigade_id : "2",
            brigade_name : "חטיבת הנחל"
        },
        divison : {
            divison_id : "1",
            divison_name : "אגודת עזה"
        },
        branch : {
            branch_id : "3",
            branch_name : "חיל היבשה"
        }},
        status :{
            status_id : "7",
            status : "מאושר"
        },
        additional_info: "עוד מידע",
        result : {
            result_id : "6",
            result : "הצלחה"
        },
        num_of_casualties: 51,
        damage_description: "הרבה נזק",
    },
    {
        target_id : "2gs-42412gsd",
        target_name: "2מפקדת חמאס",
        target_description: " בכיר מפקדה של מפקד",
        time_created: "2024-03-14T09:44:46.314Z",
        time_updated: "2024-03-14T09:44:46.314Z",
        lng: 36,
        lat: 36,
        assigments: [
                 {
                weapon : {
                    weapon_id : "1",
                    weapon_name : "עוזי",
                    weapon_radius : 5,
                    affilation: {   platoon: {
                        platoon_id : "5",
                        platoon_name : "פלוגה ו"
                    },
                    battalion: {
                        battalion_id :"4",
                        battalion_name : "גדס'ר 1625"
                    },
                    brigade: {
                        brigade_id : "2",
                        brigade_name : "חטיבת הנחל"
                    },
                    divison : {
                        divison_id : "1",
                        divison_name : "אגודת עזה"
                    },
                    branch : {
                        branch_id : "3",
                        branch_name : "חיל היבשה"
                    }
                    }
                },
                affilation: {   platoon: {
                    platoon_id : "5",
                    platoon_name : "פלוגה ו"
                },
                battalion: {
                    battalion_id :"4",
                    battalion_name : "גדס'ר 1625"
                },
                brigade: {
                    brigade_id : "2",
                    brigade_name : "חטיבת הנחל"
                },
                divison : {
                    divison_id : "1",
                    divison_name : "אגודת עזה"
                },
                branch : {
                    branch_id : "3",
                    branch_name : "חיל היבשה"
                }},
            },
        ],
        affilation: {   platoon: {
            platoon_id : "5",
            platoon_name : "פלוגה ט"
        },
        battalion: {
            battalion_id :"4",
            battalion_name : "גדס'ר 1625"
        },
        brigade: {
            brigade_id : "2",
            brigade_name : "חטיבת הנחל"
        },
        divison : {
            divison_id : "1",
            divison_name : "אגודת עזה"
        },
        branch : {
            branch_id : "3",
            branch_name : "חיל היבשה"
        }},
        status :{
            status_id : "7",
            status : "מאושר"
        },
        additional_info: "עוד מידע",
        result : {
            result_id : "6",
            result : "הצלחה"
        },
        num_of_casualties: 51,
        damage_description: "הרבה נזק",
    }
];

export {soldiers, Targets, historicalTargets}
