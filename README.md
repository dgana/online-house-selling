# online-house-selling

Online house selling with Gmaps feature!

| Routes          | Method  | Description                             
| -------------   |---------| -------------------------------------
| api/houses/seed | POST    | Seed a house    
| api/houses      | GET     | Get Houses and location                                
| api/houses      | POST    | Post a house                           
| api/houses/:id  | DELETE  | Delete a house by id                       
| api/houses/:id  | PUT     | Update house by ID                      

## Add House
![Alt text](/screenshot/add.png?raw=true "Intro")
## House list
![Alt text](/screenshot/houses.png?raw=true "Battle Ground")

```
cd server -> npm install, npm start
cd client -> live-server
```

### gmaps source
https://hpneo.github.io/gmaps/examples/interacting.html
https://hpneo.github.io/gmaps/examples/geofences.html
