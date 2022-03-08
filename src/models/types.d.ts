declare namespace Components {
    namespace Schemas {
        export interface AlbumAuto {
            id: number;
            title?: string | null;
            favorited?: boolean;
            timestamp: string; // date-time
            created_on: string; // date-time
            gps_lat?: number | null; // float
            people: string;
            gps_lon?: number | null; // float
            photos: PhotoSimple[];
        }
        export interface AlbumAutoList {
            id: number;
            title?: string | null;
            timestamp: string; // date-time
            photos: string;
            photo_count: string;
            favorited?: boolean;
        }
        export interface AlbumPersonList {
            name: string;
            photo_count: string;
            cover_photo_url: string;
            id: number;
        }
        export interface AlbumPlace {
            id: number;
            title: string;
            photos: PhotoSuperSimple[];
        }
        export interface AlbumPlaceList {
            id: number;
            geolocation_level?: number | null;
            cover_photos: PhotoHashList[];
            title: string;
            photo_count: string;
        }
        export interface AlbumThing {
            id: number;
            title: string;
            photos: PhotoSuperSimple[];
        }
        export interface AlbumThingList {
            id: number;
            cover_photos: PhotoHashList[];
            title: string;
            photo_count: string;
        }
        export interface AlbumUserEdit {
            id: number;
            title: string;
            photos: string[];
            created_on: string; // date-time
            favorited?: boolean;
            removedPhotos?: string[];
        }
        export interface AlbumUserList {
            id: number;
            cover_photos: PhotoHashList[];
            created_on: string; // date-time
            favorited?: boolean;
            title: string;
            shared_to: SimpleUser[];
            owner: {
                id: number;
                /**
                 * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
                 */
                username: string; // ^[\w.@+-]+$
                first_name?: string;
                last_name?: string;
            };
            photo_count: string;
        }
        export type DefaultTimezoneEnum = "Africa_Abidjan" | "Africa_Accra" | "Africa_Addis_Ababa" | "Africa_Algiers" | "Africa_Asmara" | "Africa_Asmera" | "Africa_Bamako" | "Africa_Bangui" | "Africa_Banjul" | "Africa_Bissau" | "Africa_Blantyre" | "Africa_Brazzaville" | "Africa_Bujumbura" | "Africa_Cairo" | "Africa_Casablanca" | "Africa_Ceuta" | "Africa_Conakry" | "Africa_Dakar" | "Africa_Dar_es_Salaam" | "Africa_Djibouti" | "Africa_Douala" | "Africa_El_Aaiun" | "Africa_Freetown" | "Africa_Gaborone" | "Africa_Harare" | "Africa_Johannesburg" | "Africa_Juba" | "Africa_Kampala" | "Africa_Khartoum" | "Africa_Kigali" | "Africa_Kinshasa" | "Africa_Lagos" | "Africa_Libreville" | "Africa_Lome" | "Africa_Luanda" | "Africa_Lubumbashi" | "Africa_Lusaka" | "Africa_Malabo" | "Africa_Maputo" | "Africa_Maseru" | "Africa_Mbabane" | "Africa_Mogadishu" | "Africa_Monrovia" | "Africa_Nairobi" | "Africa_Ndjamena" | "Africa_Niamey" | "Africa_Nouakchott" | "Africa_Ouagadougou" | "Africa_Porto-Novo" | "Africa_Sao_Tome" | "Africa_Timbuktu" | "Africa_Tripoli" | "Africa_Tunis" | "Africa_Windhoek" | "America_Adak" | "America_Anchorage" | "America_Anguilla" | "America_Antigua" | "America_Araguaina" | "America_Argentina_Buenos_Aires" | "America_Argentina_Catamarca" | "America_Argentina_ComodRivadavia" | "America_Argentina_Cordoba" | "America_Argentina_Jujuy" | "America_Argentina_La_Rioja" | "America_Argentina_Mendoza" | "America_Argentina_Rio_Gallegos" | "America_Argentina_Salta" | "America_Argentina_San_Juan" | "America_Argentina_San_Luis" | "America_Argentina_Tucuman" | "America_Argentina_Ushuaia" | "America_Aruba" | "America_Asuncion" | "America_Atikokan" | "America_Atka" | "America_Bahia" | "America_Bahia_Banderas" | "America_Barbados" | "America_Belem" | "America_Belize" | "America_Blanc-Sablon" | "America_Boa_Vista" | "America_Bogota" | "America_Boise" | "America_Buenos_Aires" | "America_Cambridge_Bay" | "America_Campo_Grande" | "America_Cancun" | "America_Caracas" | "America_Catamarca" | "America_Cayenne" | "America_Cayman" | "America_Chicago" | "America_Chihuahua" | "America_Coral_Harbour" | "America_Cordoba" | "America_Costa_Rica" | "America_Creston" | "America_Cuiaba" | "America_Curacao" | "America_Danmarkshavn" | "America_Dawson" | "America_Dawson_Creek" | "America_Denver" | "America_Detroit" | "America_Dominica" | "America_Edmonton" | "America_Eirunepe" | "America_El_Salvador" | "America_Ensenada" | "America_Fort_Nelson" | "America_Fort_Wayne" | "America_Fortaleza" | "America_Glace_Bay" | "America_Godthab" | "America_Goose_Bay" | "America_Grand_Turk" | "America_Grenada" | "America_Guadeloupe" | "America_Guatemala" | "America_Guayaquil" | "America_Guyana" | "America_Halifax" | "America_Havana" | "America_Hermosillo" | "America_Indiana_Indianapolis" | "America_Indiana_Knox" | "America_Indiana_Marengo" | "America_Indiana_Petersburg" | "America_Indiana_Tell_City" | "America_Indiana_Vevay" | "America_Indiana_Vincennes" | "America_Indiana_Winamac" | "America_Indianapolis" | "America_Inuvik" | "America_Iqaluit" | "America_Jamaica" | "America_Jujuy" | "America_Juneau" | "America_Kentucky_Louisville" | "America_Kentucky_Monticello" | "America_Knox_IN" | "America_Kralendijk" | "America_La_Paz" | "America_Lima" | "America_Los_Angeles" | "America_Louisville" | "America_Lower_Princes" | "America_Maceio" | "America_Managua" | "America_Manaus" | "America_Marigot" | "America_Martinique" | "America_Matamoros" | "America_Mazatlan" | "America_Mendoza" | "America_Menominee" | "America_Merida" | "America_Metlakatla" | "America_Mexico_City" | "America_Miquelon" | "America_Moncton" | "America_Monterrey" | "America_Montevideo" | "America_Montreal" | "America_Montserrat" | "America_Nassau" | "America_New_York" | "America_Nipigon" | "America_Nome" | "America_Noronha" | "America_North_Dakota_Beulah" | "America_North_Dakota_Center" | "America_North_Dakota_New_Salem" | "America_Nuuk" | "America_Ojinaga" | "America_Panama" | "America_Pangnirtung" | "America_Paramaribo" | "America_Phoenix" | "America_Port-au-Prince" | "America_Port_of_Spain" | "America_Porto_Acre" | "America_Porto_Velho" | "America_Puerto_Rico" | "America_Punta_Arenas" | "America_Rainy_River" | "America_Rankin_Inlet" | "America_Recife" | "America_Regina" | "America_Resolute" | "America_Rio_Branco" | "America_Rosario" | "America_Santa_Isabel" | "America_Santarem" | "America_Santiago" | "America_Santo_Domingo" | "America_Sao_Paulo" | "America_Scoresbysund" | "America_Shiprock" | "America_Sitka" | "America_St_Barthelemy" | "America_St_Johns" | "America_St_Kitts" | "America_St_Lucia" | "America_St_Thomas" | "America_St_Vincent" | "America_Swift_Current" | "America_Tegucigalpa" | "America_Thule" | "America_Thunder_Bay" | "America_Tijuana" | "America_Toronto" | "America_Tortola" | "America_Vancouver" | "America_Virgin" | "America_Whitehorse" | "America_Winnipeg" | "America_Yakutat" | "America_Yellowknife" | "Antarctica_Casey" | "Antarctica_Davis" | "Antarctica_DumontDUrville" | "Antarctica_Macquarie" | "Antarctica_Mawson" | "Antarctica_McMurdo" | "Antarctica_Palmer" | "Antarctica_Rothera" | "Antarctica_South_Pole" | "Antarctica_Syowa" | "Antarctica_Troll" | "Antarctica_Vostok" | "Arctic_Longyearbyen" | "Asia_Aden" | "Asia_Almaty" | "Asia_Amman" | "Asia_Anadyr" | "Asia_Aqtau" | "Asia_Aqtobe" | "Asia_Ashgabat" | "Asia_Ashkhabad" | "Asia_Atyrau" | "Asia_Baghdad" | "Asia_Bahrain" | "Asia_Baku" | "Asia_Bangkok" | "Asia_Barnaul" | "Asia_Beirut" | "Asia_Bishkek" | "Asia_Brunei" | "Asia_Calcutta" | "Asia_Chita" | "Asia_Choibalsan" | "Asia_Chongqing" | "Asia_Chungking" | "Asia_Colombo" | "Asia_Dacca" | "Asia_Damascus" | "Asia_Dhaka" | "Asia_Dili" | "Asia_Dubai" | "Asia_Dushanbe" | "Asia_Famagusta" | "Asia_Gaza" | "Asia_Harbin" | "Asia_Hebron" | "Asia_Ho_Chi_Minh" | "Asia_Hong_Kong" | "Asia_Hovd" | "Asia_Irkutsk" | "Asia_Istanbul" | "Asia_Jakarta" | "Asia_Jayapura" | "Asia_Jerusalem" | "Asia_Kabul" | "Asia_Kamchatka" | "Asia_Karachi" | "Asia_Kashgar" | "Asia_Kathmandu" | "Asia_Katmandu" | "Asia_Khandyga" | "Asia_Kolkata" | "Asia_Krasnoyarsk" | "Asia_Kuala_Lumpur" | "Asia_Kuching" | "Asia_Kuwait" | "Asia_Macao" | "Asia_Macau" | "Asia_Magadan" | "Asia_Makassar" | "Asia_Manila" | "Asia_Muscat" | "Asia_Nicosia" | "Asia_Novokuznetsk" | "Asia_Novosibirsk" | "Asia_Omsk" | "Asia_Oral" | "Asia_Phnom_Penh" | "Asia_Pontianak" | "Asia_Pyongyang" | "Asia_Qatar" | "Asia_Qostanay" | "Asia_Qyzylorda" | "Asia_Rangoon" | "Asia_Riyadh" | "Asia_Saigon" | "Asia_Sakhalin" | "Asia_Samarkand" | "Asia_Seoul" | "Asia_Shanghai" | "Asia_Singapore" | "Asia_Srednekolymsk" | "Asia_Taipei" | "Asia_Tashkent" | "Asia_Tbilisi" | "Asia_Tehran" | "Asia_Tel_Aviv" | "Asia_Thimbu" | "Asia_Thimphu" | "Asia_Tokyo" | "Asia_Tomsk" | "Asia_Ujung_Pandang" | "Asia_Ulaanbaatar" | "Asia_Ulan_Bator" | "Asia_Urumqi" | "Asia_Ust-Nera" | "Asia_Vientiane" | "Asia_Vladivostok" | "Asia_Yakutsk" | "Asia_Yangon" | "Asia_Yekaterinburg" | "Asia_Yerevan" | "Atlantic_Azores" | "Atlantic_Bermuda" | "Atlantic_Canary" | "Atlantic_Cape_Verde" | "Atlantic_Faeroe" | "Atlantic_Faroe" | "Atlantic_Jan_Mayen" | "Atlantic_Madeira" | "Atlantic_Reykjavik" | "Atlantic_South_Georgia" | "Atlantic_St_Helena" | "Atlantic_Stanley" | "Australia_ACT" | "Australia_Adelaide" | "Australia_Brisbane" | "Australia_Broken_Hill" | "Australia_Canberra" | "Australia_Currie" | "Australia_Darwin" | "Australia_Eucla" | "Australia_Hobart" | "Australia_LHI" | "Australia_Lindeman" | "Australia_Lord_Howe" | "Australia_Melbourne" | "Australia_NSW" | "Australia_North" | "Australia_Perth" | "Australia_Queensland" | "Australia_South" | "Australia_Sydney" | "Australia_Tasmania" | "Australia_Victoria" | "Australia_West" | "Australia_Yancowinna" | "Brazil_Acre" | "Brazil_DeNoronha" | "Brazil_East" | "Brazil_West" | "CET" | "CST6CDT" | "Canada_Atlantic" | "Canada_Central" | "Canada_Eastern" | "Canada_Mountain" | "Canada_Newfoundland" | "Canada_Pacific" | "Canada_Saskatchewan" | "Canada_Yukon" | "Chile_Continental" | "Chile_EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc_GMT" | "Etc_GMT_plus_0" | "Etc_GMT_plus_1" | "Etc_GMT_plus_10" | "Etc_GMT_plus_11" | "Etc_GMT_plus_12" | "Etc_GMT_plus_2" | "Etc_GMT_plus_3" | "Etc_GMT_plus_4" | "Etc_GMT_plus_5" | "Etc_GMT_plus_6" | "Etc_GMT_plus_7" | "Etc_GMT_plus_8" | "Etc_GMT_plus_9" | "Etc_GMT_minus_0" | "Etc_GMT_minus_1" | "Etc_GMT_minus_10" | "Etc_GMT_minus_11" | "Etc_GMT_minus_12" | "Etc_GMT_minus_13" | "Etc_GMT_minus_14" | "Etc_GMT_minus_2" | "Etc_GMT_minus_3" | "Etc_GMT_minus_4" | "Etc_GMT_minus_5" | "Etc_GMT_minus_6" | "Etc_GMT_minus_7" | "Etc_GMT_minus_8" | "Etc_GMT_minus_9" | "Etc_GMT0" | "Etc_Greenwich" | "Etc_UCT" | "Etc_UTC" | "Etc_Universal" | "Etc_Zulu" | "Europe_Amsterdam" | "Europe_Andorra" | "Europe_Astrakhan" | "Europe_Athens" | "Europe_Belfast" | "Europe_Belgrade" | "Europe_Berlin" | "Europe_Bratislava" | "Europe_Brussels" | "Europe_Bucharest" | "Europe_Budapest" | "Europe_Busingen" | "Europe_Chisinau" | "Europe_Copenhagen" | "Europe_Dublin" | "Europe_Gibraltar" | "Europe_Guernsey" | "Europe_Helsinki" | "Europe_Isle_of_Man" | "Europe_Istanbul" | "Europe_Jersey" | "Europe_Kaliningrad" | "Europe_Kiev" | "Europe_Kirov" | "Europe_Lisbon" | "Europe_Ljubljana" | "Europe_London" | "Europe_Luxembourg" | "Europe_Madrid" | "Europe_Malta" | "Europe_Mariehamn" | "Europe_Minsk" | "Europe_Monaco" | "Europe_Moscow" | "Europe_Nicosia" | "Europe_Oslo" | "Europe_Paris" | "Europe_Podgorica" | "Europe_Prague" | "Europe_Riga" | "Europe_Rome" | "Europe_Samara" | "Europe_San_Marino" | "Europe_Sarajevo" | "Europe_Saratov" | "Europe_Simferopol" | "Europe_Skopje" | "Europe_Sofia" | "Europe_Stockholm" | "Europe_Tallinn" | "Europe_Tirane" | "Europe_Tiraspol" | "Europe_Ulyanovsk" | "Europe_Uzhgorod" | "Europe_Vaduz" | "Europe_Vatican" | "Europe_Vienna" | "Europe_Vilnius" | "Europe_Volgograd" | "Europe_Warsaw" | "Europe_Zagreb" | "Europe_Zaporozhye" | "Europe_Zurich" | "GB" | "GB-Eire" | "GMT" | "GMT_plus_0" | "GMT_minus_0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian_Antananarivo" | "Indian_Chagos" | "Indian_Christmas" | "Indian_Cocos" | "Indian_Comoro" | "Indian_Kerguelen" | "Indian_Mahe" | "Indian_Maldives" | "Indian_Mauritius" | "Indian_Mayotte" | "Indian_Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico_BajaNorte" | "Mexico_BajaSur" | "Mexico_General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific_Apia" | "Pacific_Auckland" | "Pacific_Bougainville" | "Pacific_Chatham" | "Pacific_Chuuk" | "Pacific_Easter" | "Pacific_Efate" | "Pacific_Enderbury" | "Pacific_Fakaofo" | "Pacific_Fiji" | "Pacific_Funafuti" | "Pacific_Galapagos" | "Pacific_Gambier" | "Pacific_Guadalcanal" | "Pacific_Guam" | "Pacific_Honolulu" | "Pacific_Johnston" | "Pacific_Kiritimati" | "Pacific_Kosrae" | "Pacific_Kwajalein" | "Pacific_Majuro" | "Pacific_Marquesas" | "Pacific_Midway" | "Pacific_Nauru" | "Pacific_Niue" | "Pacific_Norfolk" | "Pacific_Noumea" | "Pacific_Pago_Pago" | "Pacific_Palau" | "Pacific_Pitcairn" | "Pacific_Pohnpei" | "Pacific_Ponape" | "Pacific_Port_Moresby" | "Pacific_Rarotonga" | "Pacific_Saipan" | "Pacific_Samoa" | "Pacific_Tahiti" | "Pacific_Tarawa" | "Pacific_Tongatapu" | "Pacific_Truk" | "Pacific_Wake" | "Pacific_Wallis" | "Pacific_Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US_Alaska" | "US_Aleutian" | "US_Arizona" | "US_Central" | "US_East-Indiana" | "US_Eastern" | "US_Hawaii" | "US_Indiana-Starke" | "US_Michigan" | "US_Mountain" | "US_Pacific" | "US_Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu";
        export interface Face {
            id: number;
            face_url: string;
            photo_id: string | null;
            person: Person;
            person_id: number;
            person_label_is_inferred?: boolean | null;
        }
        export interface FaceList {
            id: number;
            image?: string | null; // uri
            photo?: string | null;
            person: number;
            person_label_probability?: number; // float
            person_name: string;
        }
        export type JobTypeEnum = 1 | 2 | 3 | 4 | 5 | 7 | 6;
        export interface LongRunningJob {
            job_id: string;
            queued_at?: string; // date-time
            finished?: boolean;
            finished_at?: string | null; // date-time
            started_at?: string | null; // date-time
            failed?: boolean;
            job_type_str: string;
            job_type: 1 | 2 | 3 | 4 | 5 | 7 | 6;
            started_by: {
                id: number;
                /**
                 * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
                 */
                username: string; // ^[\w.@+-]+$
                first_name?: string;
                last_name?: string;
            };
            result?: {
                [name: string]: any;
            };
            id: number;
        }
        export interface ManageUser {
            /**
             * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
             */
            username: string; // ^[\w.@+-]+$
            scan_directory: string;
            confidence?: number; // float
            semantic_search_topk?: number;
            last_login?: string | null; // date-time
            date_joined?: string; // date-time
            photo_count: string;
            id: number;
            favorite_min_rating?: number;
            image_scale?: number; // float
            save_metadata_to_disk?: SaveMetadataToDiskEnum;
        }
        export interface PaginatedAlbumAutoList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results?: AlbumAuto[];
        }
        export interface PaginatedAlbumAutoListList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results?: AlbumAutoList[];
        }
        export interface PaginatedAlbumPersonListList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results?: AlbumPersonList[];
        }
        export interface PaginatedAlbumPlaceList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results?: AlbumPlace[];
        }
        export interface PaginatedAlbumPlaceListList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results?: AlbumPlaceList[];
        }
        export interface PaginatedAlbumThingList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results?: AlbumThing[];
        }
        export interface PaginatedAlbumThingListList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results?: AlbumThingList[];
        }
        export interface PaginatedAlbumUserEditList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results?: AlbumUserEdit[];
        }
        export interface PaginatedAlbumUserListList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results?: AlbumUserList[];
        }
        export interface PaginatedFaceList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results?: Face[];
        }
        export interface PaginatedFaceListList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results?: FaceList[];
        }
        export interface PaginatedLongRunningJobList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results?: LongRunningJob[];
        }
        export interface PaginatedManageUserList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?offset=400&limit=100
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?offset=200&limit=100
             */
            previous?: string | null; // uri
            results?: ManageUser[];
        }
        export interface PaginatedPersonList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results?: Person[];
        }
        export interface PaginatedPhotoEditList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results?: PhotoEdit[];
        }
        export interface PaginatedPhotoList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results?: Photo[];
        }
        export interface PaginatedPhotoSimpleList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results?: PhotoSimple[];
        }
        export interface PaginatedSharedFromMePhotoThroughList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results?: SharedFromMePhotoThrough[];
        }
        export interface PaginatedUserList {
            /**
             * example:
             * 123
             */
            count?: number;
            /**
             * example:
             * http://api.example.org/accounts/?offset=400&limit=100
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?offset=200&limit=100
             */
            previous?: string | null; // uri
            results?: User[];
        }
        export interface PatchedAlbumAuto {
            id?: number;
            title?: string | null;
            favorited?: boolean;
            timestamp?: string; // date-time
            created_on?: string; // date-time
            gps_lat?: number | null; // float
            people?: string;
            gps_lon?: number | null; // float
            photos?: PhotoSimple[];
        }
        export interface PatchedAlbumAutoList {
            id?: number;
            title?: string | null;
            timestamp?: string; // date-time
            photos?: string;
            photo_count?: string;
            favorited?: boolean;
        }
        export interface PatchedAlbumPersonList {
            name?: string;
            photo_count?: string;
            cover_photo_url?: string;
            id?: number;
        }
        export interface PatchedAlbumPlace {
            id?: number;
            title?: string;
            photos?: PhotoSuperSimple[];
        }
        export interface PatchedAlbumPlaceList {
            id?: number;
            geolocation_level?: number | null;
            cover_photos?: PhotoHashList[];
            title?: string;
            photo_count?: string;
        }
        export interface PatchedAlbumThing {
            id?: number;
            title?: string;
            photos?: PhotoSuperSimple[];
        }
        export interface PatchedAlbumThingList {
            id?: number;
            cover_photos?: PhotoHashList[];
            title?: string;
            photo_count?: string;
        }
        export interface PatchedAlbumUserEdit {
            id?: number;
            title?: string;
            photos?: string[];
            created_on?: string; // date-time
            favorited?: boolean;
            removedPhotos?: string[];
        }
        export interface PatchedAlbumUserList {
            id?: number;
            cover_photos?: PhotoHashList[];
            created_on?: string; // date-time
            favorited?: boolean;
            title?: string;
            shared_to?: SimpleUser[];
            owner?: {
                id: number;
                /**
                 * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
                 */
                username: string; // ^[\w.@+-]+$
                first_name?: string;
                last_name?: string;
            };
            photo_count?: string;
        }
        export interface PatchedFace {
            id?: number;
            face_url?: string;
            photo_id?: string | null;
            person?: Person;
            person_id?: number;
            person_label_is_inferred?: boolean | null;
        }
        export interface PatchedFaceList {
            id?: number;
            image?: string | null; // uri
            photo?: string | null;
            person?: number;
            person_label_probability?: number; // float
            person_name?: string;
        }
        export interface PatchedLongRunningJob {
            job_id?: string;
            queued_at?: string; // date-time
            finished?: boolean;
            finished_at?: string | null; // date-time
            started_at?: string | null; // date-time
            failed?: boolean;
            job_type_str?: string;
            job_type?: 1 | 2 | 3 | 4 | 5 | 7 | 6;
            started_by?: {
                id: number;
                /**
                 * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
                 */
                username: string; // ^[\w.@+-]+$
                first_name?: string;
                last_name?: string;
            };
            result?: {
                [name: string]: any;
            };
            id?: number;
        }
        export interface PatchedManageUser {
            /**
             * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
             */
            username?: string; // ^[\w.@+-]+$
            scan_directory?: string;
            confidence?: number; // float
            semantic_search_topk?: number;
            last_login?: string | null; // date-time
            date_joined?: string; // date-time
            photo_count?: string;
            id?: number;
            favorite_min_rating?: number;
            image_scale?: number; // float
            save_metadata_to_disk?: SaveMetadataToDiskEnum;
        }
        export interface PatchedPerson {
            name?: string;
            face_url?: string;
            face_count?: string;
            face_photo_url?: string;
            video?: string;
            id?: number;
            newPersonName?: string;
            cover_photo?: string;
        }
        export interface PatchedPhoto {
            exif_gps_lat?: number | null; // float
            exif_gps_lon?: number | null; // float
            exif_timestamp?: string | null; // date-time
            search_captions?: string | null;
            search_location?: string | null;
            captions_json?: string;
            thumbnail_url?: string;
            thumbnail_height?: string;
            thumbnail_width?: string;
            small_thumbnail_url?: string;
            big_thumbnail_url?: string;
            square_thumbnail_url?: string;
            big_square_thumbnail_url?: string;
            small_square_thumbnail_url?: string;
            tiny_square_thumbnail_url?: string;
            geolocation_json?: {
                [name: string]: any;
            } | null;
            exif_json?: {
                [name: string]: any;
            } | null;
            people?: string;
            image_url?: string;
            image_hash?: string;
            image_path?: string;
            rating?: number;
            hidden?: boolean;
            public?: boolean;
            shared_to?: number[];
            similar_photos?: string;
            video?: boolean;
        }
        export interface PatchedPhotoEdit {
            image_hash?: string;
            hidden?: boolean;
            rating?: number;
            deleted?: boolean;
            video?: boolean;
        }
        export interface PatchedPhotoSimple {
            square_thumbnail?: string; // uri
            image_hash?: string;
            exif_timestamp?: string | null; // date-time
            exif_gps_lat?: number | null; // float
            exif_gps_lon?: number | null; // float
            rating?: number;
            geolocation_json?: {
                [name: string]: any;
            } | null;
            public?: boolean;
            video?: boolean;
        }
        export interface PatchedSharedFromMePhotoThrough {
            user_id?: number;
            user?: {
                id: number;
                /**
                 * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
                 */
                username: string; // ^[\w.@+-]+$
                first_name?: string;
                last_name?: string;
            };
            photo?: string;
        }
        export interface PatchedUser {
            id?: number;
            /**
             * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
             */
            username?: string; // ^[\w.@+-]+$
            /**
             * Email address
             */
            email?: string; // email
            scan_directory?: string;
            confidence?: number; // float
            transcode_videos?: boolean;
            semantic_search_topk?: number;
            first_name?: string;
            public_photo_samples?: string;
            last_name?: string;
            public_photo_count?: string;
            date_joined?: string; // date-time
            password?: string;
            avatar?: string | null; // uri
            photo_count?: string;
            nextcloud_server_address?: string | null;
            nextcloud_username?: string | null;
            nextcloud_app_password?: string | null;
            nextcloud_scan_directory?: string | null;
            avatar_url?: string;
            favorite_min_rating?: number;
            image_scale?: number; // float
            save_metadata_to_disk?: SaveMetadataToDiskEnum;
            datetime_rules?: {
                [name: string]: any;
            };
            default_timezone?: DefaultTimezoneEnum;
        }
        export interface Person {
            name: string;
            face_url: string;
            face_count: string;
            face_photo_url: string;
            video: string;
            id: number;
            newPersonName?: string;
            cover_photo?: string;
        }
        export interface Photo {
            exif_gps_lat?: number | null; // float
            exif_gps_lon?: number | null; // float
            exif_timestamp?: string | null; // date-time
            search_captions?: string | null;
            search_location?: string | null;
            captions_json: string;
            thumbnail_url: string;
            thumbnail_height: string;
            thumbnail_width: string;
            small_thumbnail_url: string;
            big_thumbnail_url: string;
            square_thumbnail_url: string;
            big_square_thumbnail_url: string;
            small_square_thumbnail_url: string;
            tiny_square_thumbnail_url: string;
            geolocation_json?: {
                [name: string]: any;
            } | null;
            exif_json?: {
                [name: string]: any;
            } | null;
            people: string;
            image_url: string;
            image_hash: string;
            image_path: string;
            rating?: number;
            hidden?: boolean;
            public?: boolean;
            shared_to: number[];
            similar_photos: string;
            video?: boolean;
        }
        export interface PhotoEdit {
            image_hash: string;
            hidden?: boolean;
            rating?: number;
            deleted?: boolean;
            video?: boolean;
        }
        export interface PhotoHashList {
            image_hash: string;
            video?: boolean;
        }
        export interface PhotoSimple {
            square_thumbnail: string; // uri
            image_hash: string;
            exif_timestamp?: string | null; // date-time
            exif_gps_lat?: number | null; // float
            exif_gps_lon?: number | null; // float
            rating?: number;
            geolocation_json?: {
                [name: string]: any;
            } | null;
            public?: boolean;
            video?: boolean;
        }
        export interface PhotoSuperSimple {
            image_hash: string;
            rating?: number;
            hidden?: boolean;
            exif_timestamp?: string | null; // date-time
            public?: boolean;
            video?: boolean;
        }
        export type SaveMetadataToDiskEnum = "OFF" | "MEDIA_FILE" | "SIDECAR_FILE";
        export interface SharedFromMePhotoThrough {
            user_id: number;
            user: {
                id: number;
                /**
                 * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
                 */
                username: string; // ^[\w.@+-]+$
                first_name?: string;
                last_name?: string;
            };
            photo: string;
        }
        export interface SimpleUser {
            id: number;
            /**
             * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
             */
            username: string; // ^[\w.@+-]+$
            first_name?: string;
            last_name?: string;
        }
        export interface TokenObtainPair {
            username: string;
            password: string;
        }
        export interface TokenRefresh {
            access: string;
            refresh: string;
        }
        export interface User {
            id: number;
            /**
             * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
             */
            username: string; // ^[\w.@+-]+$
            /**
             * Email address
             */
            email?: string; // email
            scan_directory?: string;
            confidence?: number; // float
            transcode_videos?: boolean;
            semantic_search_topk?: number;
            first_name?: string;
            public_photo_samples: string;
            last_name?: string;
            public_photo_count: string;
            date_joined?: string; // date-time
            password: string;
            avatar?: string | null; // uri
            photo_count: string;
            nextcloud_server_address?: string | null;
            nextcloud_username?: string | null;
            nextcloud_app_password?: string | null;
            nextcloud_scan_directory?: string | null;
            avatar_url: string;
            favorite_min_rating?: number;
            image_scale?: number; // float
            save_metadata_to_disk?: SaveMetadataToDiskEnum;
            datetime_rules?: {
                [name: string]: any;
            };
            default_timezone?: DefaultTimezoneEnum;
        }
    }
}
declare namespace Paths {
    namespace ApiAlbumsAutoCreate {
        export type RequestBody = Components.Schemas.AlbumAuto;
        namespace Responses {
            export type $201 = Components.Schemas.AlbumAuto;
        }
    }
    namespace ApiAlbumsAutoDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiAlbumsAutoList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedAlbumAutoList;
        }
    }
    namespace ApiAlbumsAutoListCreate {
        export type RequestBody = Components.Schemas.AlbumAutoList;
        namespace Responses {
            export type $201 = Components.Schemas.AlbumAutoList;
        }
    }
    namespace ApiAlbumsAutoListDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiAlbumsAutoListList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
            export type Search = string;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
            search?: Parameters.Search;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedAlbumAutoListList;
        }
    }
    namespace ApiAlbumsAutoListPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedAlbumAutoList;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumAutoList;
        }
    }
    namespace ApiAlbumsAutoListRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.AlbumAutoList;
        }
    }
    namespace ApiAlbumsAutoListUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.AlbumAutoList;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumAutoList;
        }
    }
    namespace ApiAlbumsAutoPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedAlbumAuto;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumAuto;
        }
    }
    namespace ApiAlbumsAutoRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.AlbumAuto;
        }
    }
    namespace ApiAlbumsAutoUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.AlbumAuto;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumAuto;
        }
    }
    namespace ApiAlbumsDateCreate {
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiAlbumsDateDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiAlbumsDateList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * 123
                 */
                count?: number;
                /**
                 * example:
                 * http://api.example.org/accounts/?page=4
                 */
                next?: string | null; // uri
                /**
                 * example:
                 * http://api.example.org/accounts/?page=2
                 */
                previous?: string | null; // uri
                results?: {
                    [name: string]: any;
                }[];
            }
        }
    }
    namespace ApiAlbumsDateListCreate {
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiAlbumsDateListDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiAlbumsDateListList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
            export type Search = string;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
            search?: Parameters.Search;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * 123
                 */
                count?: number;
                /**
                 * example:
                 * http://api.example.org/accounts/?page=4
                 */
                next?: string | null; // uri
                /**
                 * example:
                 * http://api.example.org/accounts/?page=2
                 */
                previous?: string | null; // uri
                results?: {
                    [name: string]: any;
                }[];
            }
        }
    }
    namespace ApiAlbumsDateListPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiAlbumsDateListRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiAlbumsDateListUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiAlbumsDatePartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiAlbumsDatePhotohashListList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
            export type Search = string;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
            search?: Parameters.Search;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * 123
                 */
                count?: number;
                /**
                 * example:
                 * http://api.example.org/accounts/?page=4
                 */
                next?: string | null; // uri
                /**
                 * example:
                 * http://api.example.org/accounts/?page=2
                 */
                previous?: string | null; // uri
                results?: {
                    [name: string]: any;
                }[];
            }
        }
    }
    namespace ApiAlbumsDatePhotohashListRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiAlbumsDateRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiAlbumsDateUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiAlbumsPersonCreate {
        namespace Responses {
            export interface $201 {
            }
        }
    }
    namespace ApiAlbumsPersonDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiAlbumsPersonListCreate {
        export type RequestBody = Components.Schemas.AlbumPersonList;
        namespace Responses {
            export type $201 = Components.Schemas.AlbumPersonList;
        }
    }
    namespace ApiAlbumsPersonListDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiAlbumsPersonListList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedAlbumPersonListList;
        }
    }
    namespace ApiAlbumsPersonListPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedAlbumPersonList;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumPersonList;
        }
    }
    namespace ApiAlbumsPersonListRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.AlbumPersonList;
        }
    }
    namespace ApiAlbumsPersonListUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.AlbumPersonList;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumPersonList;
        }
    }
    namespace ApiAlbumsPersonPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiAlbumsPersonRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiAlbumsPersonRetrieve2 {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiAlbumsPersonUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiAlbumsPlaceCreate {
        export type RequestBody = Components.Schemas.AlbumPlace;
        namespace Responses {
            export type $201 = Components.Schemas.AlbumPlace;
        }
    }
    namespace ApiAlbumsPlaceDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiAlbumsPlaceList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedAlbumPlaceList;
        }
    }
    namespace ApiAlbumsPlaceListCreate {
        export type RequestBody = Components.Schemas.AlbumPlaceList;
        namespace Responses {
            export type $201 = Components.Schemas.AlbumPlaceList;
        }
    }
    namespace ApiAlbumsPlaceListDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiAlbumsPlaceListList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
            export type Search = string;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
            search?: Parameters.Search;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedAlbumPlaceListList;
        }
    }
    namespace ApiAlbumsPlaceListPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedAlbumPlaceList;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumPlaceList;
        }
    }
    namespace ApiAlbumsPlaceListRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.AlbumPlaceList;
        }
    }
    namespace ApiAlbumsPlaceListUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.AlbumPlaceList;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumPlaceList;
        }
    }
    namespace ApiAlbumsPlacePartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedAlbumPlace;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumPlace;
        }
    }
    namespace ApiAlbumsPlaceRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.AlbumPlace;
        }
    }
    namespace ApiAlbumsPlaceUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.AlbumPlace;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumPlace;
        }
    }
    namespace ApiAlbumsThingCreate {
        export type RequestBody = Components.Schemas.AlbumThing;
        namespace Responses {
            export type $201 = Components.Schemas.AlbumThing;
        }
    }
    namespace ApiAlbumsThingDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiAlbumsThingList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedAlbumThingList;
        }
    }
    namespace ApiAlbumsThingListCreate {
        export type RequestBody = Components.Schemas.AlbumThingList;
        namespace Responses {
            export type $201 = Components.Schemas.AlbumThingList;
        }
    }
    namespace ApiAlbumsThingListDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiAlbumsThingListList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
            export type Search = string;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
            search?: Parameters.Search;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedAlbumThingListList;
        }
    }
    namespace ApiAlbumsThingListPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedAlbumThingList;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumThingList;
        }
    }
    namespace ApiAlbumsThingListRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.AlbumThingList;
        }
    }
    namespace ApiAlbumsThingListUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.AlbumThingList;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumThingList;
        }
    }
    namespace ApiAlbumsThingPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedAlbumThing;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumThing;
        }
    }
    namespace ApiAlbumsThingRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.AlbumThing;
        }
    }
    namespace ApiAlbumsThingUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.AlbumThing;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumThing;
        }
    }
    namespace ApiAlbumsUserCreate {
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiAlbumsUserDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiAlbumsUserEditCreate {
        export type RequestBody = Components.Schemas.AlbumUserEdit;
        namespace Responses {
            export type $201 = Components.Schemas.AlbumUserEdit;
        }
    }
    namespace ApiAlbumsUserEditDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiAlbumsUserEditList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedAlbumUserEditList;
        }
    }
    namespace ApiAlbumsUserEditPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedAlbumUserEdit;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumUserEdit;
        }
    }
    namespace ApiAlbumsUserEditRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.AlbumUserEdit;
        }
    }
    namespace ApiAlbumsUserEditUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.AlbumUserEdit;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumUserEdit;
        }
    }
    namespace ApiAlbumsUserList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * 123
                 */
                count?: number;
                /**
                 * example:
                 * http://api.example.org/accounts/?page=4
                 */
                next?: string | null; // uri
                /**
                 * example:
                 * http://api.example.org/accounts/?page=2
                 */
                previous?: string | null; // uri
                results?: {
                    [name: string]: any;
                }[];
            }
        }
    }
    namespace ApiAlbumsUserListCreate {
        export type RequestBody = Components.Schemas.AlbumUserList;
        namespace Responses {
            export type $201 = Components.Schemas.AlbumUserList;
        }
    }
    namespace ApiAlbumsUserListDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiAlbumsUserListList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
            export type Search = string;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
            search?: Parameters.Search;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedAlbumUserListList;
        }
    }
    namespace ApiAlbumsUserListPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedAlbumUserList;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumUserList;
        }
    }
    namespace ApiAlbumsUserListRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.AlbumUserList;
        }
    }
    namespace ApiAlbumsUserListUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.AlbumUserList;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumUserList;
        }
    }
    namespace ApiAlbumsUserPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiAlbumsUserRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiAlbumsUserSharedFrommeCreate {
        export type RequestBody = Components.Schemas.AlbumUserList;
        namespace Responses {
            export type $201 = Components.Schemas.AlbumUserList;
        }
    }
    namespace ApiAlbumsUserSharedFrommeDestroy {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiAlbumsUserSharedFrommeList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedAlbumUserListList;
        }
    }
    namespace ApiAlbumsUserSharedFrommePartialUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedAlbumUserList;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumUserList;
        }
    }
    namespace ApiAlbumsUserSharedFrommeRetrieve {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.AlbumUserList;
        }
    }
    namespace ApiAlbumsUserSharedFrommeUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.AlbumUserList;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumUserList;
        }
    }
    namespace ApiAlbumsUserSharedTomeCreate {
        export type RequestBody = Components.Schemas.AlbumUserList;
        namespace Responses {
            export type $201 = Components.Schemas.AlbumUserList;
        }
    }
    namespace ApiAlbumsUserSharedTomeDestroy {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiAlbumsUserSharedTomeList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedAlbumUserListList;
        }
    }
    namespace ApiAlbumsUserSharedTomePartialUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedAlbumUserList;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumUserList;
        }
    }
    namespace ApiAlbumsUserSharedTomeRetrieve {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.AlbumUserList;
        }
    }
    namespace ApiAlbumsUserSharedTomeUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.AlbumUserList;
        namespace Responses {
            export type $200 = Components.Schemas.AlbumUserList;
        }
    }
    namespace ApiAlbumsUserUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiAllowuploadRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiAuthTokenObtainCreate {
        export type RequestBody = Components.Schemas.TokenObtainPair;
        namespace Responses {
            export type $200 = Components.Schemas.TokenObtainPair;
        }
    }
    namespace ApiAuthTokenRefreshCreate {
        export type RequestBody = Components.Schemas.TokenRefresh;
        namespace Responses {
            export type $200 = Components.Schemas.TokenRefresh;
        }
    }
    namespace ApiAutoalbumgenRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiAutoalbumtitlegenRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiClusterfacesRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiDefaultrulesRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiDeletefacesCreate {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiDeletemissingphotosRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiDirtreeRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiExistsRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiFacesCreate {
        export type RequestBody = Components.Schemas.Face;
        namespace Responses {
            export type $201 = Components.Schemas.Face;
        }
    }
    namespace ApiFacesDestroy {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiFacesInferredCreate {
        export type RequestBody = Components.Schemas.Face;
        namespace Responses {
            export type $201 = Components.Schemas.Face;
        }
    }
    namespace ApiFacesInferredDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiFacesInferredList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedFaceList;
        }
    }
    namespace ApiFacesInferredListCreate {
        export type RequestBody = Components.Schemas.FaceList;
        namespace Responses {
            export type $201 = Components.Schemas.FaceList;
        }
    }
    namespace ApiFacesInferredListDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiFacesInferredListList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedFaceListList;
        }
    }
    namespace ApiFacesInferredListPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedFaceList;
        namespace Responses {
            export type $200 = Components.Schemas.FaceList;
        }
    }
    namespace ApiFacesInferredListRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.FaceList;
        }
    }
    namespace ApiFacesInferredListUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.FaceList;
        namespace Responses {
            export type $200 = Components.Schemas.FaceList;
        }
    }
    namespace ApiFacesInferredPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedFace;
        namespace Responses {
            export type $200 = Components.Schemas.Face;
        }
    }
    namespace ApiFacesInferredRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Face;
        }
    }
    namespace ApiFacesInferredUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.Face;
        namespace Responses {
            export type $200 = Components.Schemas.Face;
        }
    }
    namespace ApiFacesLabeledCreate {
        export type RequestBody = Components.Schemas.Face;
        namespace Responses {
            export type $201 = Components.Schemas.Face;
        }
    }
    namespace ApiFacesLabeledDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiFacesLabeledList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedFaceList;
        }
    }
    namespace ApiFacesLabeledListCreate {
        export type RequestBody = Components.Schemas.FaceList;
        namespace Responses {
            export type $201 = Components.Schemas.FaceList;
        }
    }
    namespace ApiFacesLabeledListDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiFacesLabeledListList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedFaceListList;
        }
    }
    namespace ApiFacesLabeledListPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedFaceList;
        namespace Responses {
            export type $200 = Components.Schemas.FaceList;
        }
    }
    namespace ApiFacesLabeledListRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.FaceList;
        }
    }
    namespace ApiFacesLabeledListUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.FaceList;
        namespace Responses {
            export type $200 = Components.Schemas.FaceList;
        }
    }
    namespace ApiFacesLabeledPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedFace;
        namespace Responses {
            export type $200 = Components.Schemas.Face;
        }
    }
    namespace ApiFacesLabeledRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Face;
        }
    }
    namespace ApiFacesLabeledUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.Face;
        namespace Responses {
            export type $200 = Components.Schemas.Face;
        }
    }
    namespace ApiFacesList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedFaceList;
        }
    }
    namespace ApiFacesListCreate {
        export type RequestBody = Components.Schemas.FaceList;
        namespace Responses {
            export type $201 = Components.Schemas.FaceList;
        }
    }
    namespace ApiFacesListDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiFacesListList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedFaceListList;
        }
    }
    namespace ApiFacesListPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedFaceList;
        namespace Responses {
            export type $200 = Components.Schemas.FaceList;
        }
    }
    namespace ApiFacesListRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.FaceList;
        }
    }
    namespace ApiFacesListUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.FaceList;
        namespace Responses {
            export type $200 = Components.Schemas.FaceList;
        }
    }
    namespace ApiFacesPartialUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedFace;
        namespace Responses {
            export type $200 = Components.Schemas.Face;
        }
    }
    namespace ApiFacesRetrieve {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Face;
        }
    }
    namespace ApiFacesUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.Face;
        namespace Responses {
            export type $200 = Components.Schemas.Face;
        }
    }
    namespace ApiFullscanphotosRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiJobsCreate {
        export type RequestBody = Components.Schemas.LongRunningJob;
        namespace Responses {
            export type $201 = Components.Schemas.LongRunningJob;
        }
    }
    namespace ApiJobsDestroy {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiJobsList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedLongRunningJobList;
        }
    }
    namespace ApiJobsPartialUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedLongRunningJob;
        namespace Responses {
            export type $200 = Components.Schemas.LongRunningJob;
        }
    }
    namespace ApiJobsRetrieve {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.LongRunningJob;
        }
    }
    namespace ApiJobsUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.LongRunningJob;
        namespace Responses {
            export type $200 = Components.Schemas.LongRunningJob;
        }
    }
    namespace ApiLabelfacesCreate {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiLocationsunburstRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiLocationtimelineRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiLocclustRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiManageUserCreate {
        export type RequestBody = Components.Schemas.ManageUser;
        namespace Responses {
            export type $201 = Components.Schemas.ManageUser;
        }
    }
    namespace ApiManageUserDestroy {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiManageUserList {
        namespace Parameters {
            export type Limit = number;
            export type Offset = number;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit;
            offset?: Parameters.Offset;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedManageUserList;
        }
    }
    namespace ApiManageUserPartialUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedManageUser;
        namespace Responses {
            export type $200 = Components.Schemas.ManageUser;
        }
    }
    namespace ApiManageUserRetrieve {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.ManageUser;
        }
    }
    namespace ApiManageUserUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.ManageUser;
        namespace Responses {
            export type $200 = Components.Schemas.ManageUser;
        }
    }
    namespace ApiNextcloudListdirRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiNextcloudScanphotosRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiPersonsCreate {
        export type RequestBody = Components.Schemas.Person;
        namespace Responses {
            export type $201 = Components.Schemas.Person;
        }
    }
    namespace ApiPersonsDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiPersonsList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
            export type Search = string;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
            search?: Parameters.Search;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedPersonList;
        }
    }
    namespace ApiPersonsPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedPerson;
        namespace Responses {
            export type $200 = Components.Schemas.Person;
        }
    }
    namespace ApiPersonsRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Person;
        }
    }
    namespace ApiPersonsUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.Person;
        namespace Responses {
            export type $200 = Components.Schemas.Person;
        }
    }
    namespace ApiPhotomonthcountsRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiPhotosCreate {
        export type RequestBody = Components.Schemas.Photo;
        namespace Responses {
            export type $201 = Components.Schemas.Photo;
        }
    }
    namespace ApiPhotosDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiPhotosDownloadCreate {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiPhotosEditCreate {
        export type RequestBody = Components.Schemas.PhotoEdit;
        namespace Responses {
            export type $201 = Components.Schemas.PhotoEdit;
        }
    }
    namespace ApiPhotosEditDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiPhotosEditList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedPhotoEditList;
        }
    }
    namespace ApiPhotosEditPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedPhotoEdit;
        namespace Responses {
            export type $200 = Components.Schemas.PhotoEdit;
        }
    }
    namespace ApiPhotosEditRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PhotoEdit;
        }
    }
    namespace ApiPhotosEditUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PhotoEdit;
        namespace Responses {
            export type $200 = Components.Schemas.PhotoEdit;
        }
    }
    namespace ApiPhotosFavoritesCreate {
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosFavoritesDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosFavoritesList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * 123
                 */
                count?: number;
                /**
                 * example:
                 * http://api.example.org/accounts/?page=4
                 */
                next?: string | null; // uri
                /**
                 * example:
                 * http://api.example.org/accounts/?page=2
                 */
                previous?: string | null; // uri
                results?: {
                    [name: string]: any;
                }[];
            }
        }
    }
    namespace ApiPhotosFavoritesPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosFavoritesRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosFavoritesUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosHiddenCreate {
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosHiddenDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosHiddenList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * 123
                 */
                count?: number;
                /**
                 * example:
                 * http://api.example.org/accounts/?page=4
                 */
                next?: string | null; // uri
                /**
                 * example:
                 * http://api.example.org/accounts/?page=2
                 */
                previous?: string | null; // uri
                results?: {
                    [name: string]: any;
                }[];
            }
        }
    }
    namespace ApiPhotosHiddenPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosHiddenRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosHiddenUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
            export type Search = string;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
            search?: Parameters.Search;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedPhotoList;
        }
    }
    namespace ApiPhotosListCreate {
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosListDestroy {
        namespace Parameters {
            export type ImageHash = string;
        }
        export interface PathParameters {
            image_hash: Parameters.ImageHash;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosListList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
            export type Search = string;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
            search?: Parameters.Search;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * 123
                 */
                count?: number;
                /**
                 * example:
                 * http://api.example.org/accounts/?page=4
                 */
                next?: string | null; // uri
                /**
                 * example:
                 * http://api.example.org/accounts/?page=2
                 */
                previous?: string | null; // uri
                results?: {
                    [name: string]: any;
                }[];
            }
        }
    }
    namespace ApiPhotosListPartialUpdate {
        namespace Parameters {
            export type ImageHash = string;
        }
        export interface PathParameters {
            image_hash: Parameters.ImageHash;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosListRetrieve {
        namespace Parameters {
            export type ImageHash = string;
        }
        export interface PathParameters {
            image_hash: Parameters.ImageHash;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosListUpdate {
        namespace Parameters {
            export type ImageHash = string;
        }
        export interface PathParameters {
            image_hash: Parameters.ImageHash;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosNotimestampCreate {
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosNotimestampDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosNotimestampList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
            export type Search = string;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
            search?: Parameters.Search;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * 123
                 */
                count?: number;
                /**
                 * example:
                 * http://api.example.org/accounts/?page=4
                 */
                next?: string | null; // uri
                /**
                 * example:
                 * http://api.example.org/accounts/?page=2
                 */
                previous?: string | null; // uri
                results?: {
                    [name: string]: any;
                }[];
            }
        }
    }
    namespace ApiPhotosNotimestampListCreate {
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosNotimestampListDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosNotimestampListList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
            export type Search = string;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
            search?: Parameters.Search;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * 123
                 */
                count?: number;
                /**
                 * example:
                 * http://api.example.org/accounts/?page=4
                 */
                next?: string | null; // uri
                /**
                 * example:
                 * http://api.example.org/accounts/?page=2
                 */
                previous?: string | null; // uri
                results?: {
                    [name: string]: any;
                }[];
            }
        }
    }
    namespace ApiPhotosNotimestampListPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosNotimestampListRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosNotimestampListUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosNotimestampPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosNotimestampRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosNotimestampUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedPhoto;
        namespace Responses {
            export type $200 = Components.Schemas.Photo;
        }
    }
    namespace ApiPhotosPublicCreate {
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosPublicDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosPublicList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * 123
                 */
                count?: number;
                /**
                 * example:
                 * http://api.example.org/accounts/?page=4
                 */
                next?: string | null; // uri
                /**
                 * example:
                 * http://api.example.org/accounts/?page=2
                 */
                previous?: string | null; // uri
                results?: {
                    [name: string]: any;
                }[];
            }
        }
    }
    namespace ApiPhotosPublicPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosPublicRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosPublicUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosRecentlyaddedCreate {
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosRecentlyaddedDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosRecentlyaddedList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * 123
                 */
                count?: number;
                /**
                 * example:
                 * http://api.example.org/accounts/?page=4
                 */
                next?: string | null; // uri
                /**
                 * example:
                 * http://api.example.org/accounts/?page=2
                 */
                previous?: string | null; // uri
                results?: {
                    [name: string]: any;
                }[];
            }
        }
    }
    namespace ApiPhotosRecentlyaddedPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosRecentlyaddedRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosRecentlyaddedUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Photo;
        }
    }
    namespace ApiPhotosSearchlistCreate {
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosSearchlistDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosSearchlistList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
            export type Search = string;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
            search?: Parameters.Search;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * 123
                 */
                count?: number;
                /**
                 * example:
                 * http://api.example.org/accounts/?page=4
                 */
                next?: string | null; // uri
                /**
                 * example:
                 * http://api.example.org/accounts/?page=2
                 */
                previous?: string | null; // uri
                results?: {
                    [name: string]: any;
                }[];
            }
        }
    }
    namespace ApiPhotosSearchlistPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosSearchlistRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosSearchlistUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosSharedFrommeCreate {
        export type RequestBody = Components.Schemas.SharedFromMePhotoThrough;
        namespace Responses {
            export type $201 = Components.Schemas.SharedFromMePhotoThrough;
        }
    }
    namespace ApiPhotosSharedFrommeDestroy {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiPhotosSharedFrommeList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedSharedFromMePhotoThroughList;
        }
    }
    namespace ApiPhotosSharedFrommePartialUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedSharedFromMePhotoThrough;
        namespace Responses {
            export type $200 = Components.Schemas.SharedFromMePhotoThrough;
        }
    }
    namespace ApiPhotosSharedFrommeRetrieve {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.SharedFromMePhotoThrough;
        }
    }
    namespace ApiPhotosSharedFrommeUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.SharedFromMePhotoThrough;
        namespace Responses {
            export type $200 = Components.Schemas.SharedFromMePhotoThrough;
        }
    }
    namespace ApiPhotosSharedTomeCreate {
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosSharedTomeDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosSharedTomeList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * 123
                 */
                count?: number;
                /**
                 * example:
                 * http://api.example.org/accounts/?page=4
                 */
                next?: string | null; // uri
                /**
                 * example:
                 * http://api.example.org/accounts/?page=2
                 */
                previous?: string | null; // uri
                results?: {
                    [name: string]: any;
                }[];
            }
        }
    }
    namespace ApiPhotosSharedTomePartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosSharedTomeRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosSharedTomeUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        /**
         * Unspecified request body
         */
        export interface RequestBody {
            [name: string]: any;
        }
        namespace Responses {
            /**
             * Unspecified response body
             */
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiPhotosSimplelistCreate {
        export type RequestBody = Components.Schemas.PhotoSimple;
        namespace Responses {
            export type $201 = Components.Schemas.PhotoSimple;
        }
    }
    namespace ApiPhotosSimplelistDestroy {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiPhotosSimplelistList {
        namespace Parameters {
            export type Page = number;
            export type PageSize = number;
            export type Search = string;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            page_size?: Parameters.PageSize;
            search?: Parameters.Search;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedPhotoSimpleList;
        }
    }
    namespace ApiPhotosSimplelistPartialUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedPhotoSimple;
        namespace Responses {
            export type $200 = Components.Schemas.PhotoSimple;
        }
    }
    namespace ApiPhotosSimplelistRetrieve {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PhotoSimple;
        }
    }
    namespace ApiPhotosSimplelistUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PhotoSimple;
        namespace Responses {
            export type $200 = Components.Schemas.PhotoSimple;
        }
    }
    namespace ApiPhotosUpdate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.Photo;
        namespace Responses {
            export type $200 = Components.Schemas.Photo;
        }
    }
    namespace ApiPhotoseditDeleteDestroy {
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiPhotoseditFavoriteCreate {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiPhotoseditGenerateim2txtCreate {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiPhotoseditHideCreate {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiPhotoseditMakepublicCreate {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiPhotoseditSetdeletedCreate {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiPhotoseditShareCreate {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiPredefinedrulesRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiRqavailableRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiRqjoblistRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiRqjobstatRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiScanfacesRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiScanphotosRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiSchemaRetrieve {
        namespace Parameters {
            export type Format = "json" | "yaml";
            export type Lang = "af" | "ar" | "ar-dz" | "ast" | "az" | "be" | "bg" | "bn" | "br" | "bs" | "ca" | "cs" | "cy" | "da" | "de" | "dsb" | "el" | "en" | "en-au" | "en-gb" | "eo" | "es" | "es-ar" | "es-co" | "es-mx" | "es-ni" | "es-ve" | "et" | "eu" | "fa" | "fi" | "fr" | "fy" | "ga" | "gd" | "gl" | "he" | "hi" | "hr" | "hsb" | "hu" | "hy" | "ia" | "id" | "ig" | "io" | "is" | "it" | "ja" | "ka" | "kab" | "kk" | "km" | "kn" | "ko" | "ky" | "lb" | "lt" | "lv" | "mk" | "ml" | "mn" | "mr" | "my" | "nb" | "ne" | "nl" | "nn" | "os" | "pa" | "pl" | "pt" | "pt-br" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sr-latn" | "sv" | "sw" | "ta" | "te" | "tg" | "th" | "tk" | "tr" | "tt" | "udm" | "uk" | "ur" | "uz" | "vi" | "zh-hans" | "zh-hant";
        }
        export interface QueryParameters {
            format?: Parameters.Format;
            lang?: Parameters.Lang;
        }
        namespace Responses {
            export interface $200 {
                [name: string]: any;
            }
        }
    }
    namespace ApiSearchtermexamplesRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiSitesettingsCreate {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiSitesettingsRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiSocialgraphRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiStatsRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiTrainfacesRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiUserCreate {
        export type RequestBody = Components.Schemas.User;
        namespace Responses {
            export type $201 = Components.Schemas.User;
        }
    }
    namespace ApiUserDestroy {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ApiUserList {
        namespace Parameters {
            export type Limit = number;
            export type Offset = number;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit;
            offset?: Parameters.Offset;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedUserList;
        }
    }
    namespace ApiUserPartialUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.PatchedUser;
        namespace Responses {
            export type $200 = Components.Schemas.User;
        }
    }
    namespace ApiUserRetrieve {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = Components.Schemas.User;
        }
    }
    namespace ApiUserUpdate {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.User;
        namespace Responses {
            export type $200 = Components.Schemas.User;
        }
    }
    namespace ApiUseralbumShareCreate {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ApiWordcloudRetrieve {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace MediaRetrieve {
        namespace Parameters {
            export type Fname = string; // ^.*$
            export type Path = string; // ^.*$
        }
        export interface PathParameters {
            fname: Parameters.Fname /* ^.*$ */;
            path: Parameters.Path /* ^.*$ */;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
}
