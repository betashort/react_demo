# 設計

## API

### リクエスト

```url
https://weather.tsukumijima.net/api/forecast?city={citycode}
```

### レスポンス

```json
{
    "publicTime": "2024-09-28T11:00:00+09:00",
    "publicTimeFormatted": "2024/09/28 11:00:00",
    "publishingOffice": "宇都宮地方気象台",
    "title": "栃木県 宇都宮 の天気",
    "link": "https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=090000",
    "description": {
        "publicTime": "2024-09-28T10:34:00+09:00",
        "publicTimeFormatted": "2024/09/28 10:34:00",
        "headlineText": "",
        "bodyText": "　前線が、南西諸島から伊豆諸島付近を通り、日本のはるか東へのびています。\n\n　栃木県は、曇りとなっています。\n\n　２８日は、前線上の低気圧が日本の南を北東へ進むため、曇りで昼過ぎから雨の降る所があるでしょう。\n\n　２９日は、前線や湿った空気の影響を受けるため、曇りで雨の降る所がある見込みです。",
        "text": "　前線が、南西諸島から伊豆諸島付近を通り、日本のはるか東へのびています。\n\n　栃木県は、曇りとなっています。\n\n　２８日は、前線上の低気圧が日本の南を北東へ進むため、曇りで昼過ぎから雨の降る所があるでしょう。\n\n　２９日は、前線や湿った空気の影響を受けるため、曇りで雨の降る所がある見込みです。"
    },
    "forecasts": [
        {
            "date": "2024-09-28",
            "dateLabel": "今日",
            "telop": "曇り",
            "detail": {
                "weather": "くもり　所により　昼過ぎ　から　雨",
                "wind": "南東の風",
                "wave": null
            },
            "temperature": {
                "min": {
                    "celsius": null,
                    "fahrenheit": null
                },
                "max": {
                    "celsius": "29",
                    "fahrenheit": "84.2"
                }
            },
            "chanceOfRain": {
                "T00_06": "--%",
                "T06_12": "--%",
                "T12_18": "30%",
                "T18_24": "30%"
            },
            "image": {
                "title": "曇り",
                "url": "https://www.jma.go.jp/bosai/forecast/img/200.svg",
                "width": 80,
                "height": 60
            }
        },
        {
            "date": "2024-09-29",
            "dateLabel": "明日",
            "telop": "曇り",
            "detail": {
                "weather": "くもり　所により　雨",
                "wind": "北の風　後　東の風",
                "wave": null
            },
            "temperature": {
                "min": {
                    "celsius": "20",
                    "fahrenheit": "68"
                },
                "max": {
                    "celsius": "26",
                    "fahrenheit": "78.8"
                }
            },
            "chanceOfRain": {
                "T00_06": "20%",
                "T06_12": "20%",
                "T12_18": "20%",
                "T18_24": "20%"
            },
            "image": {
                "title": "曇り",
                "url": "https://www.jma.go.jp/bosai/forecast/img/200.svg",
                "width": 80,
                "height": 60
            }
        },
        {
            "date": "2024-09-30",
            "dateLabel": "明後日",
            "telop": "曇り",
            "detail": {
                "weather": "くもり",
                "wind": "北の風",
                "wave": null
            },
            "temperature": {
                "min": {
                    "celsius": "19",
                    "fahrenheit": "66.2"
                },
                "max": {
                    "celsius": "26",
                    "fahrenheit": "78.8"
                }
            },
            "chanceOfRain": {
                "T00_06": "40%",
                "T06_12": "40%",
                "T12_18": "40%",
                "T18_24": "40%"
            },
            "image": {
                "title": "曇り",
                "url": "https://www.jma.go.jp/bosai/forecast/img/200.svg",
                "width": 80,
                "height": 60
            }
        }
    ],
    "location": {
        "area": "関東",
        "prefecture": "栃木県",
        "district": "南部",
        "city": "宇都宮"
    },
    "copyright": {
        "title": "(C) 天気予報 API（livedoor 天気互換）",
        "link": "https://weather.tsukumijima.net/",
        "image": {
            "title": "天気予報 API（livedoor 天気互換）",
            "link": "https://weather.tsukumijima.net/",
            "url": "https://weather.tsukumijima.net/logo.png",
            "width": 120,
            "height": 120
        },
        "provider": [
            {
                "link": "https://www.jma.go.jp/jma/",
                "name": "気象庁 Japan Meteorological Agency",
                "note": "気象庁 HP にて配信されている天気予報を JSON データへ編集しています。"
            }
        ]
    }
}
```

### 必要な情報

```json
{
    "publicTime": "2024-09-28T11:00:00+09:00",
    "publicTimeFormatted": "2024/09/28 11:00:00",
    "publishingOffice": "宇都宮地方気象台",
    "title": "栃木県 宇都宮 の天気",
    "link": "https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=090000",
    "description": {
        "publicTime": "2024-09-28T10:34:00+09:00",
        "publicTimeFormatted": "2024/09/28 10:34:00",
        "headlineText": "",
        "bodyText": "　前線が、南西諸島から伊豆諸島付近を通り、日本のはるか東へのびています。\n\n　栃木県は、曇りとなっています。\n\n　２８日は、前線上の低気圧が日本の南を北東へ進むため、曇りで昼過ぎから雨の降る所があるでしょう。\n\n　２９日は、前線や湿った空気の影響を受けるため、曇りで雨の降る所がある見込みです。",
        "text": "　前線が、南西諸島から伊豆諸島付近を通り、日本のはるか東へのびています。\n\n　栃木県は、曇りとなっています。\n\n　２８日は、前線上の低気圧が日本の南を北東へ進むため、曇りで昼過ぎから雨の降る所があるでしょう。\n\n　２９日は、前線や湿った空気の影響を受けるため、曇りで雨の降る所がある見込みです。"
    },
    "forecasts": [
        {
            "date": "2024-09-28",
            "dateLabel": "今日",
            "telop": "曇り",
            "detail": {
                "weather": "くもり　所により　昼過ぎ　から　雨",
                "wind": "南東の風",
                "wave": null
            },
            "temperature": {
                "min": {
                    "celsius": null,
                    "fahrenheit": null
                },
                "max": {
                    "celsius": "29",
                    "fahrenheit": "84.2"
                }
            },
            "chanceOfRain": {
                "T00_06": "--%",
                "T06_12": "--%",
                "T12_18": "30%",
                "T18_24": "30%"
            },
            "image": {
                "title": "曇り",
                "url": "https://www.jma.go.jp/bosai/forecast/img/200.svg",
                "width": 80,
                "height": 60
            }
        },
        {
            "date": "2024-09-29",
            "dateLabel": "明日",
            "telop": "曇り",
            "detail": {
                "weather": "くもり　所により　雨",
                "wind": "北の風　後　東の風",
                "wave": null
            },
            "temperature": {
                "min": {
                    "celsius": "20",
                    "fahrenheit": "68"
                },
                "max": {
                    "celsius": "26",
                    "fahrenheit": "78.8"
                }
            },
            "chanceOfRain": {
                "T00_06": "20%",
                "T06_12": "20%",
                "T12_18": "20%",
                "T18_24": "20%"
            },
            "image": {
                "title": "曇り",
                "url": "https://www.jma.go.jp/bosai/forecast/img/200.svg",
                "width": 80,
                "height": 60
            }
        },
        {
            "date": "2024-09-30",
            "dateLabel": "明後日",
            "telop": "曇り",
            "detail": {
                "weather": "くもり",
                "wind": "北の風",
                "wave": null
            },
            "temperature": {
                "min": {
                    "celsius": "19",
                    "fahrenheit": "66.2"
                },
                "max": {
                    "celsius": "26",
                    "fahrenheit": "78.8"
                }
            },
            "chanceOfRain": {
                "T00_06": "40%",
                "T06_12": "40%",
                "T12_18": "40%",
                "T18_24": "40%"
            },
            "image": {
                "title": "曇り",
                "url": "https://www.jma.go.jp/bosai/forecast/img/200.svg",
                "width": 80,
                "height": 60
            }
        }
    ],
    "location": {
        "area": "関東",
        "prefecture": "栃木県",
        "district": "南部",
        "city": "宇都宮"
    },
}
```