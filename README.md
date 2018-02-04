# Babble
This is a real time language translator built with React, node, Socket.io, and Microsoft Cognitive Services. 

Team Members include.

* Megan Flood
* Gavin Thomas

### This project was built over the course of only 9 hours for Ratio/Globant's Hack The Now AI Hackathon hosted on Feb 4, 2018. 


### To use this app you must have your own microsoft speach translator api keys..
 * Git clone this repository

    $ ```npm install ```

    $ ``` cd ../src && node server.js ```

    $ ``` npm run watch ```

 * Create a .dev.env file within the ../src folder

    ``` AZURE_CLIENT_SECRET = 'YOURSPEACHTRANSLATORAPIKEYHERE' ```

     ``` NODE_ENV= 'NOTPRODUCTION' ```

 * Navigate to localhost:8080 and profit!

## Available languages
Afrikaans
 - API code: af
 - No voices available

Arabic
 - API code: ar
 - Available voices:
     + Hoda (Gender: female, Region: Egypt, API Code: ar-EG-Hoda)
     + Naayf (Gender: male, Region: Saudi Arabia, API Code: ar-SA-Naayf)
 
Bangla
 - API code: bn
 - No voices available
 
Bosnian
 - API code: bs
 - No voices available
 
Bulgarian
 - API code: bg
 - No voices available
 
Cantonese (Traditional)
 - API code: yue
 - Available voices:
     + Danny (Gender: male, Region: Hong Kong S.A.R., API Code: zh-HK-Danny)
     + Tracy (Gender: female, Region: Hong Kong S.A.R., API Code: zh-HK-Tracy)
    
Catalan
 - API code: ca
 - Available voices:
     + Herena (Gender: female, Region: Spain, API Code: ca-ES-Herena)
    
Chinese Simplified
 - API code: zh-Hans
 - Available voices:
     + Kangkang (Gender: male, Region: People's Republic of China, API Code: zh-CN-Kangkang)
     + Yaoyao (Gender: female, Region: People's Republic of China, API Code: zh-CN-Yaoyao)
    
Chinese Traditional
 - API code: zh-Hant
 - Available voices:
     + Yating (Gender: female, Region: Taiwan, API Code: zh-TW-Yating)
     + Zhiwei (Gender: male, Region: Taiwan, API Code: zh-TW-Zhiwei)
    
Croatian
 - API code: hr
 - No voices available
 
Czech
 - API code: cs
 - Available voices:
     + Vit (Gender: male, Region: Czech Republic, API Code: cs-CZ-Vit)
    
Danish
 - API code: da
 - Available voices:
     + Helle (Gender: female, Region: Denmark, API Code: da-DK-Helle)
    
Dutch
 - API code: nl
 - Available voices:
     + Frank (Gender: male, Region: Netherlands, API Code: nl-NL-Frank)
     + Marijke (Gender: female, Region: Netherlands, API Code: nl-NL-Marijke)
    
English
 - API code: en
 - Available voices:
     + BenjaminRUS (Gender: male, Region: United States, API Code: en-US-BenjaminRUS)
     + Catherine (Gender: female, Region: Australia, API Code: en-AU-Catherine)
     + George (Gender: male, Region: United Kingdom, API Code: en-GB-George)
     + Heera (Gender: female, Region: India, API Code: en-IN-Heera)
     + James (Gender: male, Region: Australia, API Code: en-AU-James)
     + JessaRUS (Gender: female, Region: United States, API Code: en-US-JessaRUS)
     + Linda (Gender: female, Region: Canada, API Code: en-CA-Linda)
     + Mark (Gender: male, Region: United States, API Code: en-US-Mark)
     + Ravi (Gender: male, Region: India, API Code: en-IN-Ravi)
     + Richard (Gender: male, Region: Canada, API Code: en-CA-Richard)
     + Susan (Gender: female, Region: United Kingdom, API Code: en-GB-Susan)
     + Zira (Gender: female, Region: United States, API Code: en-US-Zira)
     + ZiraRUS (Gender: female, Region: United States, API Code: en-US-ZiraRUS)
    
Estonian
 - API code: et
 - No voices available
 
Fijian
 - API code: fj
 - No voices available
 
Filipino
 - API code: fil
 - No voices available
 
Finnish
 - API code: fi
 - Available voices:
     + Heidi (Gender: female, Region: Finland, API Code: fi-FI-Heidi)
    
French
 - API code: fr
 - Available voices:
     + Caroline (Gender: female, Region: Canada, API Code: fr-CA-Caroline)
     + Claude (Gender: male, Region: Canada, API Code: fr-CA-Claude)
     + Julie (Gender: female, Region: France, API Code: fr-FR-Julie)
     + Paul (Gender: male, Region: France, API Code: fr-FR-Paul)
    
German
 - API code: de
 - Available voices:
     + Hedda (Gender: female, Region: Germany, API Code: de-DE-Hedda)
     + Karsten (Gender: male, Region: Switzerland, API Code: de-CH-Karsten)
     + Katja (Gender: female, Region: Germany, API Code: de-DE-Katja)
     + Michael (Gender: male, Region: Austria, API Code: de-AT-Michael)
     + Stefan (Gender: male, Region: Germany, API Code: de-DE-Stefan)
    
Greek
 - API code: el
 - Available voices:
     + Stefanos (Gender: male, Region: Greece, API Code: el-GR-Stefanos)
    
Haitian Creole
 - API code: ht
 - No voices available
 
Hebrew
 - API code: he
 - Available voices:
     + Asaf (Gender: male, Region: Israel, API Code: he-IL-Asaf)
    
Hindi
 - API code: hi
 - Available voices:
     + Hemant (Gender: male, Region: India, API Code: hi-IN-Hemant)
     + Kalpana (Gender: female, Region: India, API Code: hi-IN-Kalpana)
    
Hmong Daw
 - API code: mww
 - No voices available
 
Hungarian
 - API code: hu
 - Available voices:
     + Szabolcs (Gender: male, Region: Hungary, API Code: hu-HU-Szabolcs)
    
Indonesian
 - API code: id
 - Available voices:
     + Andika (Gender: male, Region: Indonesia, API Code: id-ID-Andika)
    
Italian
 - API code: it
 - Available voices:
     + Cosimo (Gender: male, Region: Italy, API Code: it-IT-Cosimo)
     + Elsa (Gender: female, Region: Italy, API Code: it-IT-Elsa)
    
Japanese
 - API code: ja
 - Available voices:
     + Ayumi (Gender: female, Region: Japan, API Code: ja-JP-Ayumi)
     + Ichiro (Gender: male, Region: Japan, API Code: ja-JP-Ichiro)
     + Watanabe (Gender: female, Region: Japan, API Code: ja-JP-Watanabe)
    
Kiswahili
 - API code: sw
 - No voices available
 
Klingon
 - API code: tlh
 - No voices available
 
Korean
 - API code: ko
 - Available voices:
     + Minjoon (Gender: male, Region: Korea, API Code: ko-KR-Minjoon)
     + Seohyun (Gender: female, Region: Korea, API Code: ko-KR-Seohyun)
    
Latvian
 - API code: lv
 - No voices available
 
Lithuanian
 - API code: lt
 - No voices available
 
Malagasy
 - API code: mg
 - No voices available
 
Malay
 - API code: ms
 - No voices available
 
Maltese
 - API code: mt
 - No voices available
 
Norwegian
 - API code: nb
 - Available voices:
     + Jon (Gender: male, Region: Norway, API Code: nb-NO-Jon)
     + Nina (Gender: female, Region: Norway, API Code: nb-NO-Nina)
    
Persian
 - API code: fa
 - No voices available
 
Polish
 - API code: pl
 - Available voices:
     + Adam (Gender: male, Region: Poland, API Code: pl-PL-Adam)
     + Paulina (Gender: female, Region: Poland, API Code: pl-PL-Paulina)
    
Portuguese
 - API code: pt
 - Available voices:
     + Daniel (Gender: male, Region: Brazil, API Code: pt-BR-Daniel)
     + Helia (Gender: female, Region: Portugal, API Code: pt-PT-Helia)
     + Maria (Gender: female, Region: Brazil, API Code: pt-BR-Maria)
    
Querétaro Otomi
 - API code: otq
 - No voices available
 
Romanian
 - API code: ro
 - Available voices:
     + Andrei (Gender: male, Region: Romania, API Code: ro-RO-Andrei)
    
Russian
 - API code: ru
 - Available voices:
     + Irina (Gender: female, Region: Russia, API Code: ru-RU-Irina)
     + Pavel (Gender: male, Region: Russia, API Code: ru-RU-Pavel)
    
Samoan
 - API code: sm
 - No voices available
 
Serbian (Cyrillic)
 - API code: sr-Cyrl
 - No voices available
 
Serbian (Latin)
 - API code: sr-Latn
 - No voices available
 
Slovak
 - API code: sk
 - Available voices:
     + Filip (Gender: male, Region: Slovakia, API Code: sk-SK-Filip)
    
Slovenian
 - API code: sl
 - No voices available
 
Spanish
 - API code: es
 - Available voices:
     + Laura (Gender: female, Region: Spain, API Code: es-ES-Laura)
     + Pablo (Gender: male, Region: Spain, API Code: es-ES-Pablo)
     + Raul (Gender: male, Region: Mexico, API Code: es-MX-Raul)
     + Sabina (Gender: female, Region: Mexico, API Code: es-MX-Sabina)
    
Swedish
 - API code: sv
 - Available voices:
     + Bengt (Gender: male, Region: Sweden, API Code: sv-SE-Bengt)
     + Karin (Gender: female, Region: Sweden, API Code: sv-SE-Karin)
    
Tahitian
 - API code: ty
 - No voices available
 
Tamil
 - API code: ta
 - No voices available
 
Thai
 - API code: th
 - Available voices:
     + Pattara (Gender: male, Region: Thailand, API Code: th-TH-Pattara)
    
Tongan
 - API code: to
 - No voices available
 
Turkish
 - API code: tr
 - Available voices:
     + Seda (Gender: female, Region: Turkey, API Code: tr-TR-Seda)
     + Tolga (Gender: male, Region: Turkey, API Code: tr-TR-Tolga)
    
Ukrainian
 - API code: uk
 - No voices available
 
Urdu
 - API code: ur
 - No voices available
 
Vietnamese
 - API code: vi
 - No voices available
 
Welsh
 - API code: cy
 - No voices available
 
Yucatec Maya
 - API code: yua
 - No voices available