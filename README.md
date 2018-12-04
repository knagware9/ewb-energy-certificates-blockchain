# EWB-Origin -> Prototype by 4eyes GmbH

## Supported platforms

These instructions are only for MacOSX and Linux (Debian or Ubuntu).

## Prerequisites 
- git -> https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
- Docker & Docker Compose -> https://docs.docker.com/compose/install/
- nodejs (8lts version) & npm -> https://nodejs.org/en/download/package-manager/

## Quick start

### Clone the Repository
- $ git clone https://stash.4eyes.ch/scm/eyes/ewb-origin.git
- $ cd ewb-origin

### Run the application
- $ ./build.sh

### Down the application
- $ ./destroy.sh


- API:
    - user
        - create:                     (post):         localhost:8000/user/create
        - getSingle:                  (get):          localhost:8000/user/<USERNAME>
        - update:                     (put):          localhost:8000/user/<USERNAME>/update
        - update selling price:       (put):          localhost:8000/user/<USERNAME>/selling-price/update
    - uni pi
        - create:                     (post):         localhost:8000/unipi/create
        - getSingle:                  (get):          localhost:8000/unipi/<id>
        - update:                     (put):          localhost:8000/unipi/<id>/update
    - demand
        - create:                     (post):         localhost:8000/demand/create
        - getSingle:                  (get):          localhost:8000/demand/<id>
        - update:                     (put):          localhost:8000/demand/<id>/update
    - certificate
        - create:                     (post):         localhost:8000/certificate/create
        - getSingle:                  (get):          localhost:8000/certificate/<id>
        - update:                     (put):          localhost:8000/certificate/<id>/update
- API (Request params):                
    - user
        - create
            - username
            - name
            - street
            - postalCode
            - sellingPrice
        - getSingle
            - id (get param)
        - update
            - id (get param)
            - name
            - street
            - postalCode
            - sellingPrice 
        - update selling price
            - id (get param)
            - sellingPrice
    - uni pi
        - create
            - username
        - getSingle
            - id (get param) 
        - update
            - id (get param)
            - username
    - demand
        - create
            - username
            - kwh
            - price
        - getSingle
            - id (get param) 
        - update
            - id (get param) 
            - hasCertificate (boolean)
    - certificate
        - create
            - unipi
            - minimalPrice
        - getSingle
            - id (get param) 
        - update
            - id (get param)
            - demand
            - sellingPrice